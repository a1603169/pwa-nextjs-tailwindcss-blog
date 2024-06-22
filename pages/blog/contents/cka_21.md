--- 
title: 'Certified Kubernetes Administration - 21'
subtitle: 'k8s label and selector'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 라벨과 셀렉터


- **라벨**:
  
  - 각 객체에 부착되는 속성 (키-값 쌍).
  
  - 클래스, 종류, 색상 등과 같은 기준에 따라 객체를 그룹화하는 데 사용.
  
  - 예시: `class=mammal`, `color=green`.


- **셀렉터**:
  
  - 라벨을 기반으로 객체를 필터링하는 데 사용.
  
  - 예시: 녹색 포유류를 얻기 위해 `class=mammal`과 `color=green`을 사용.


- **일반적인 사용 예시**:
  
  - **유튜브 동영상/블로그**: 태그를 통해 콘텐츠를 필터링.
  
  - **온라인 스토어**: 제품을 보기 위한 필터.


- **Kubernetes 객체**:
  
  - 포드(pod), 서비스(service), 레플리카셋(replica set), 디플로이먼트(deployment) 등 포함.
  
  - 수백 또는 수천 개의 객체를 필터링하고 그룹화해야 할 수 있음.


- **라벨 추가**:
  
  - 포드 정의 파일에서 `metadata` 섹션 아래에 `labels` 섹션을 생성하고 키-값 쌍을 추가.
  
  - 예시:
    ```yaml
    metadata:
      labels:
        app: app1
        function: web
    ```


- **셀렉터 사용**:
  
  - 라벨로 필터링하기 위해 `kubectl get pods --selector app=app1` 명령어 사용.


- **레플리카셋(Replica Sets)**:
  
  - 포드 정의의 라벨은 `template` 섹션 아래에 있음.
  
  - 레플리카셋 정의 자체의 라벨은 상단에 위치.
  
  - 레플리카셋의 셀렉터 필드는 포드 라벨과 일치해야 연결됨.
  
  - 예시:
    ```yaml
    spec:
      template:
        metadata:
          labels:
            app: app1
            function: web
      selector:
        matchLabels:
          app: app1
          function: web
    ```


- **서비스(Services)**:
  
  - 레플리카셋 정의의 라벨을 통해 올바른 포드에 연결하기 위해 셀렉터 사용.


- **어노테이션(Annotations)**:
  
  - 추가적인 정보를 기록하는 데 사용 (예: 도구 정보, 연락처 정보).
  
  - 예시:
    ```yaml
    metadata:
      annotations:
        build: "v1.0"
        contact: "dev@example.com"
    ```
