---
title: 'Cypress테스트와 Git Actions - 비동기적 실행 (For free) - 1'
date: '2023-12-31'
tags: ['Cypress', 'Git']
---


### 문제점
최근에 Ci_fe Ci_be로 테스트 환경을 구축한 곳에서 be는 단위테스트로 구성되어 있기 떄문에 6~7분밖에 걸리진 않지만, fe는 24분이 걸렸었다. 
대쉬보드를 사용하면 좋겠지만, 비용이 발생하기 때문에 흥미가 안생기는 해결방법이다.

그래서 아티팩트로 빌드 output 저장해서 한 번 시도하려고 해본다.

### 아티팩트란 ?

Cypress는 브라우저에서 실행되는 자동화된 테스트를 위한 JavaScript 기반의 엔드-투-엔드 테스트 프레임워크입니다. Cypress 테스트를 실행할 때 "아티팩트(artifacts)"를 생성하게 됩니다. 이러한 아티팩트는 테스트 실행 과정에서 생성된 데이터와 파일을 말합니다. Cypress에서 생성될 수 있는 아티팩트에는 다음과 같은 것들이 포함됩니다:

1. **스크린샷**: 테스트 실패 시점의 브라우저 상태를 캡처한 이미지 파일입니다. 이를 통해 테스트가 실패한 원인을 시각적으로 파악할 수 있습니다.
    
2. **비디오 레코딩**: 전체 테스트 실행 과정을 녹화한 비디오 파일입니다. Cypress는 테스트를 실행하는 동안 브라우저의 활동을 기록하므로, 나중에 이를 복기하여 테스트의 흐름을 이해하거나 문제를 진단할 수 있습니다.
    
3. **로그 파일**: 테스트 실행에 대한 상세한 정보를 포함하는 로그 데이터입니다. 이는 디버깅에 유용하게 사용됩니다.

GitHub Actions 워크플로우 내에서 Cypress 테스트를 실행하면, 이러한 아티팩트를 생성하고 저장할 수 있습니다. 이후, 이 아티팩트를 `actions/upload-artifact`를 사용하여 워크플로우 아티팩트로 업로드하면, GitHub Actions 워크플로우가 완료된 후에도 이러한 파일들에 접근하여 분석할 수 있습니다.

예를 들어, Cypress 테스트가 실패했을 경우, 관련 스크린샷과 비디오를 아티팩트로 업로드하여, 개발자가 워크플로우 실행 후에도 이 파일들을 다운로드하고 문제를 진단할 수 있도록 도와줍니다.

뿐만아니라, GitHub Actions에서 "아티팩트"는 워크플로우 실행 중에 생성된 파일이나 데이터를 저장하는 데 사용됩니다. 
\이 아티팩트 기능을 사용하여 **빌드 결과물**, 로그 파일, 테스트 결과, 스크린샷 등 워크플로우 중에 생성된 중요한 파일들을 보관하고, 워크플로우가 완료된 후에도 해당 파일들에 접근할 수 있습니다.

### 예시 코드

```yml
name: CI fe

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    outputs: 
      # Save the Artifact for Cypress run
      artifact-path: build/libs/cypress_build
....중략

  cypress-run-group1:
    needs: [build]
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
  
    - name: Download build artifacts
      uses: actions/download-artifact@v2
      with:
        name: build-artifacts
        path: build/libs/cypress_build
....중략

  cypress-run-group2:
    needs: [build]
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
  
    - name: Download build artifacts
      uses: actions/download-artifact@v2
      with:
        name: build-artifacts
        path: build/libs/cypress_build
....중략

  cypress-run-group3:
	needs: [build]
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
  
    - name: Download build artifacts
      uses: actions/download-artifact@v2
      with:
        name: build-artifacts
        path: build/libs/cypress_build
....중략

```

needs로 빌드 과정을 필수조건으로 지정해놓고,
빌드의 결과를 저장해놓지않으면 빌드 결과가 날라가버려, 결국에 병렬적으로 시작이 되는 세가지의 cypress의 테스트가 애매해져버렸다.

아직 아티팩트를 제대로 찾지 못하고 있다.

해결 방안의 틀이 갑자기 생각나서 미리 적어놓고 휴가가끝난 1월 4일에 이어서 해보아야겠다.

