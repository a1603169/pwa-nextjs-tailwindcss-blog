---
title: 'Cypress테스트와 Git Actions - 비동기적 실행 (For free) - 2'
subtitle: 'Cypress 테스트들을 나누어 보자 (feat. Git Actions)'
date: '2024-01-15'
tags: ['Cypress', 'Git']
---


<span class='blogLink'>[Cypress테스트와 Git Actions - 비동기적 실행 (For free) - 1](blog/split_cypress_tests_1)</span>

### 문제점 (예시)

```yaml
name: CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v3
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

이런 방식으로 `아티팩트에 빌드된 결과물을 저장`하고 그 다음 종속된 프로세스에서 `분리된 테스트`들을 하려했다.

<span class='blogLink'>[참고자료](https://docs.github.com/ko/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts)</span>


<img class='blogImage' src='/blog/split_ci_2.png'>

프로젝트의 규모가 작다면 모르겠지만, 

이 프로젝트는 너무나도 `방대한 양인 노드 모듈 및 db환경 세팅까지 아티팩트에 업로드가 필요`하였다. 

그 부분을 다 artifact에 넣다보니 `테스트를 나누는 의미가 없다`고 느껴졌다. 환경세팅만 따로 한다고 하더라도 결국엔 필요한 dependencies를 `전부 받으려면 시간이 걸리는걸 확인`했다.

(이전에 테스트 완료까지 24분 / 이때는 아티팩트 업로드만 완료도 안되었는데 아직 23분...)

그래서 아티팩트에 대한 해결방안은 ***`실패`*** 라 생각하고 다른 방법을 찾아보기 시작했다.


----

### 해결방법 Custom Github Actions (with Matrix)

Matrix를 사용 -> Index를 지정해놓고,

```yaml
name: CI fe

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        ci_index: [1, 2, 3] # Adjust this to the number of groups
    services:
    ...
```

커스텀한 nodejs 환경용 코드를 짜놓고, 디렉토리 내의 파일 중, 확장자 명을 통해 파일을 가져오고, 분배하여 출력하는 기능을 만들었다.

#### **`split-cypress-tests.js`**

```javascript
const fs = require('fs');
const path = require('path');
const process = require('process');

function findFiles(dir, ext) {
    let result = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            result = result.concat(findFiles(filePath, ext));
        } else if (stat.isFile() && path.extname(file) === ext) {
            result.push(filePath);
        }
    });
    return result;
}
const MAX_PROCESSES = parseInt(process.argv[2]);
const PROCESS = parseInt(process.argv[3]) - 1;

const files = findFiles('cypress/integration', '.ts');
const filesPerProcess = Math.floor(files.length / MAX_PROCESSES);
const min = filesPerProcess * PROCESS;
const max = filesPerProcess - 1 == PROCESS ? files.length : filesPerProcess * (PROCESS + 1);

for(let i = min; i < max; i++) {
    console.log(files[i]);
}
```

#### **`package.json`**

```javascript

  "name": "fe",
  "version": "0.0.0",
  "scripts": {
    "ng": ...,
    "start": ...,
    "json":...,
    "build": ...,
    "test": ...,
    "lint": ...,
    "e2e": ...,
    "split_integration_test": "node bin/split-cypress-tests.js > tmp/integrations.txt"
  },
```

명령을 작성해 놓고

```yaml
      - name: Prepare tmp directory
        run: |
          mkdir -p tmp
          chmod 777 tmp

      - name: Split integration tests
        run: npm run split_integration_test -- 3 ${{ matrix.ci_index }}

      - name: Extract test file list
        id: tests
        run: |
          echo "files=$(paste -sd, - < tmp/integrations.txt)" >> $GITHUB_ENV
```

생성된 디렉토리에 권한을 주고 인덱스 별로 3개의 파일 기준으로 나누어서 테스트 리스트를 출력하였다.

그에 맞춰 spec을 업데이트 해주었다.

```yaml
      - name: Cypress run
        uses: cypress-io/github-action@v4
        env:
          CYPRESS_DB: '{"user": "postgres","host": "postgres","database": "DBDB","password": "passpass","port":5432}'
          EXPOSED_LOG_LEVEL: INFO
        with:
          start: ...
          config: video=false
          spec: ${{ env.files }}
```

----


### 결과

<img class='blogImage' src='/blog/split_ci_4.png'>

**빌드시간 + 테스트 시간**: 이전 `24분` / 현재 `14분`

----

### 느낀점

`package.json`과 함께 이런식으로 전개하는 방법을 알아서 뜻 깊은 시간이였고, 
그냥 이런저런 Git Actions에 대해서 알게된 좋은 계기라고 생각하고 있다.