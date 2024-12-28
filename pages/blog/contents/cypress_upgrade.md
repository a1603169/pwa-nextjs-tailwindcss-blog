---
title: 'Cypress 8 to Latest (8.6.0 -> 13.6.3)'
subtitle: 'Cypress version upgrade'
date: '2024-02-03'
tags: [Cypress, Git]
---

### 관련 링크

<span class='blogLink'>[Cypress테스트와 Git Actions - 비동기적 실행 (For free) - 1](split_cypress_tests_1)</span>

<span class='blogLink'>[Cypress테스트와 Git Actions - 비동기적 실행 (For free) - 2](split_cypress_tests_2)</span>

최근에 회사에서 개발하고 있는 서비스의 CI 코드를 업그레이드를 해야하여, 너무 정신이 없이 바빴었다. 

시간도 오래 걸렸었고 별도로 스크립트를 짜서 물리적으로 테스트를 나누어준다라는 생각을 오랫동안 접근하지 못하였다.

어찌되었든 결과는 성공적이였고, E2E 테스트 시간도 획기적으로 줄어들었다. (이젠 당분간은 다시 볼 일이 없을거라 생각했었다..)

### 문제점 (Overall)

의존성을 모두 업데이트를 하라는 테스크를 이런식으로 접근하였다.

```bash
# 최신버전과 비교
npm outdated 

# 결과 예시
@next/font            13.1.5    13.1.5    14.1.0  node_modules/@next/font          seunghun_web
@types/node         18.11.18  18.11.18  20.11.16  node_modules/@types/node         seunghun_web
@types/react         18.0.27   18.0.27   18.2.52  node_modules/@types/react        seunghun_web
@types/react-dom     18.0.10   18.0.10   18.2.18  node_modules/@types/react-dom    seunghun_web

# 의존성 개별 업데이트
npm install [package-name]@latest
```

혹은 

```bash
# 라이브러리 사용
npm install -g npm-check-updates

# 일괄 업데이트
ncu -u 
```

이런 식의 접근 방법을 생각하였고 실행하고 PR을 하고 결과를 보니 CI과정에서 문제가 있다는걸 확인하였다.

내가 업데이트한 라이브러리 중

`Cypress`가 **`8버전`** 에서 **`13버전`** 까지 업데이트 하면서 CI 과정 중 이런 에러를 만들어 내었다.

<img class='blogImage' src='/blog/cypress_version_error.png'>

`cypress.json`에서 `cypress.config.js`로만 업데이트하면 되는 건가? 생각을 하였지만 문제는 거기서 끝나지 않았다...


```javascript
// cypress.config.js 예시
const { defineConfig } = require('cypress');
const pgp = require("pg-promise")();
const postgressConfig = require(path.resolve("cypress.config.js"));

// PostgreSQL DB connection
function dbConnection(query, userDefineConnection) {
  let connection = postgressConfig.db;
  if (userDefineConnection != undefined) {
    connection = userDefineConnection;
  }
  const db = pgp(connection);
  return db.any(query)
  // Keep the connection open for the next query or task
    // .finally(db.$pool.end); 
}

module.exports = defineConfig({
  e2e: {
    browser: 'chrome',
    baseUrl: "http://localhost:3000",
    viewportWidth: 1024,
    viewportHeight: 768,
    fixturesFolder: "cypress/fixtures",
    specPattern: "cypress/integration/**/*.*",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    supportFile: "cypress/support/index.ts",
    testIsolation: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      on("task", {
      //  Node.js 환경에 접근할 수 있는 코드들 
      //  예 myTask() {}
      //  -> cy.task('myTask')로 호출 가능함.
      });

      return config;
    },
  },
});
```

--------

### 문제점 1 (db 연결상태에 대한 에러)

처음엔 `db 연결 후, 필요 없을때, db 연결을 종료`에 대한 코드를 

```javascript
return db.any(query).finally(db.$pool.end)
```
를 사용하였지만 `UPDATE` 쿼리를 통한 테스트를 할 때, 다운타임동안 db가 업데이트가 안되는 에러가 있어서 코맨트로 남겨놓았다.

---------

### 문제점 2 (Syntax Error)


#### `within()`

```javascript
cy.get('tr').within(() => {
  // hello 클래스 안에서의 행동
})
```

`within()` 함수는 Cypress에서 제공하는 함수로, 특정 DOM 요소 내부에서 명령을 실행하도록 `범위를 제한하는 데 사용`된다. 이 함수는 선택한 요소 내부에서만 검색을 수행하므로, 특정 요소 내부에서만 작업을 수행하려는 경우 유용하다는 특징을 갖고있다.

하지만 **`12버전`** 부터 이 메서드의 방식이 바뀌었다.


이제 `within()` 함수는 여러 개의 요소들을 받지 못한다. 
과거에 일관성 없는 결과를 가져왔었다. 내부에 있는 `모든 요소들을 불러와 테스트`를 통과해야할 때도 있는 `반면`, 오직 첫번째만 사용하고 `나머지 테스트는 무시`하는 경우가 있었다고 한다.

정확하게 이러한 방식 때문에 내부 요소들이 하나 밖에 없었던 코드들에게 

`first()`를 적용하여 첫번째 요소에 제한을 두든 
```javascript
cy.get('tr')
+  .first() // Limit the subject to a single element before calling .within()
  .within(() => {
    cy.contains('Edit').click()
  })
```


`as()` 로 별칭을 만들어 그룹으로서 인식을 하고 외부에서 

```javascript
cy.get('tr')
-  .within(() => {
-    cy.get('td').should('have.class', 'foo')
-    cy.get('td').should('have.class', 'bar')
-  })
+  .as('rows') // Store multiple elements as an alias

+cy.get('@rows').find('td').should('have.class', 'foo')
+cy.get('@rows').find('td').should('have.class', 'bar')
```

혹은 모든 컬렉션을 모든 요소에 커맨드를 실행시키고 싶다면 `each()`를 `within()`가 함께 사용하면 된다.

```javascript
cy.get('tr')
-  .within(() => {
-    cy.contains('Edit').should('have.attr', 'disabled')
-  })
+  .each($tr => {
+    cy.wrap($tr).within(() => {
+      cy.contains('Edit').should('have.attr', 'disabled')
+    })
+  })
```

이런 식의 변화가 있었기 때문에, 하나밖에 요소를 묶지않았던 `within()`에서 굉장히 에러가 많이 나왔었다.

예를 들어

```html
<tr class="trtr">
  <td>
    <div>test1</div>
  </td>
  <td>
    <div>test2</div>
  </td>
  <td>
    <div>test3</div>
  </td>
  <td>
    <div>test4</div>
  </td>
</tr>
```
이런식으로 `<tr>`요소 하나만 

```javascript
cy.get('.trtr').within(() => {
  // TESTS
})
```

찾아서 내부 요소를 뒤적하려고할때 문제가 많이 생겼었다. 만약 나와 비슷한 문제가 생긴다면 `first()` 를 사용해보는것도 좋은 해결 방법이 될 것 같다.

--------

### 문제점 3 (modal open `wait()`)

애초에 `wait()` 커맨드를 좋아하지 않았다. 

<span class='blogLink'>[스택오버플로우 - wait를 사용하는 것을 피하는 방법](https://stackoverflow.com/questions/58564171/avoiding-wait-in-cypress-for-loading-all-elements)</span>

이라는 글도 있을 정도로 나 말고 똑같은 의견을 가진 사람들이 많았다. 

다른 사람들도 wait() 보다는 should('be.visible') 이라는 메서드를 사용하여서 확실하게 넘어가라는 방식을 권장하였었다.

`API호출`을 위한 `intercept()` 와 함께하는 코드 외에는 필요가 없어 보이는 기능이라 생각하였었다.

```javascript
// Code From stackoverflow showing this example
cy.intercept('http://example.com/settings').as('getSettings')

// once a request to get settings responds, 'cy.wait' will resolve
cy.wait('@getSettings')
```

**하지만!**

`모달 같은 기능` 및 `애니메이션이 들어가는 기능`에서는 필요하다는 것을 깨달았다.

```javascript
// Example of modal close btn
    cy.get('@modal').find('something').contains('a', 'save').click();
    cy.wait(500);
    // Waiting for saving etc...
    cy.get('@modal').should('not.be.visible'); // Error when there was no cy.wait(500);
```

이런식으로 modal 내부의 저장기능을 가진 버튼을 클릭을 할때 `0.2~3초에 다운타임이 발생`한다 (애니메이션에 따라 다르겠지만) 확실하게 Modal이 닫히는 것을 확인하는 코드를 실행할 때, `에러가 발생`했었기 때문에 이러한 애니메이션 및 다운타임이 생기는 것을 피할 수 없을 때는 `wait()`가 꼭 필요하다고 생각이 든다.

<span class='blogLink'>[Waiting in Cypress and how to avoid it](https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it)</span> 라는 참고링크도 있으니 읽어보기를 추천한다.

[Cypress ver 12.0.0 기준]

### 느낀점

지금까지 작성되있던 프론트쪽의 E2E 코드를 다 고치는데 시간이 들었지만, 이러한 부분을 몸으로 깨닫게 되었으니 앞으로는 비슷한 문제가 생겼을 때 해결하기 좋을 것 같다. 

특히 **`공식문서는 너무나도 중요`** 하다고 느꼈다. 시간을 들여 차분히 읽고 문제를 해결할 수 있는 개발자는 공식문서와 친해져야한다는 말이 너무나 가슴으로 와닿았던 경험이였다.