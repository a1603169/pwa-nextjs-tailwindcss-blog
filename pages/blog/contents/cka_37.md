--- 
title: 'Certified Kubernetes Administration - 37'
subtitle: 'k8s Multi Container Pods'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### 다중 컨테이너 포드 설계 패턴

1. **소개**
   
   - 다중 컨테이너 포드는 여러 컨테이너를 하나의 포드에 포함시켜 공통 생명주기를 공유.
   
   - 동일한 네트워크 공간을 공유하여 로컬호스트로 서로 참조 가능.
   
   - 동일한 스토리지 볼륨에 접근 가능.

2. **설계 패턴**
   
   - **사이드카 패턴 (Sidecar)**
     
     - 로그 수집기와 같은 보조 서비스와 함께 메인 애플리케이션 컨테이너를 배치.
   
   - **어댑터 패턴 (Adapter)**
     
     - 기존 애플리케이션을 새로운 환경에 맞추기 위해 데이터를 변환하는 컨테이너를 추가.
   
   - **앰배서더 패턴 (Ambassador)**
     
     - 외부 네트워크 요청을 처리하기 위해 프록시 역할을 하는 컨테이너를 추가.

3. **생명주기 공유**
   
   - 포드에 포함된 모든 컨테이너는 함께 생성되고 함께 삭제됨.
   
   - 각 컨테이너는 포드의 전체 생명주기 동안 실행되어야 함.

4. **Multi-Container Pods**
   
   - 포드 정의 파일에 여러 컨테이너를 추가하여 구성.
   
   - 각 컨테이너는 `spec` 섹션의 `containers` 배열에 추가됨.
   
   - 예: 웹 애플리케이션 컨테이너와 로그 에이전트 컨테이너를 동일한 포드에 배치.

### 초기화 컨테이너 (InitContainers)

1. **개념**
   
   - 초기화 컨테이너는 포드 생성 시 한 번 실행되고 완료된 후 실제 애플리케이션 컨테이너가 시작됨.
   
   - 외부 서비스 대기 또는 코드/바이너리 다운로드와 같은 일회성 작업을 수행.

2. **구성**
   
   - 초기화 컨테이너는 포드 정의 파일의 `initContainers` 섹션에 정의.
   
   - 예:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: myapp-pod
       labels:
         app: myapp
     spec:
       containers:
       - name: myapp-container
         image: busybox:1.28
         command: ['sh', '-c', 'echo The app is running! && sleep 3600']
       initContainers:
       - name: init-myservice
         image: busybox
         command: ['sh', '-c', 'git clone <some-repository-that-will-be-used-by-application> ; done;']
     ```

3. **초기화 컨테이너 실행 순서**
   
   - 여러 초기화 컨테이너를 정의할 수 있으며, 순차적으로 실행됨.
   
   - 초기화 컨테이너 중 하나라도 실패하면 포드가 재시작되며, 초기화 컨테이너가 성공할 때까지 반복됨.

4. **예제**
   ```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: myapp-pod
     labels:
       app: myapp
   spec:
     containers:
     - name: myapp-container
       image: busybox:1.28
       command: ['sh', '-c', 'echo The app is running! && sleep 3600']
     initContainers:
     - name: init-myservice
       image: busybox:1.28
       command: ['sh', '-c', 'until nslookup myservice; do echo waiting for myservice; sleep 2; done;']
     - name: init-mydb
       image: busybox:1.28
       command: ['sh', '-c', 'until nslookup mydb; do echo waiting for mydb; sleep 2; done;']
   ```

### 요약

- 다중 컨테이너 포드는 단일 포드 내에서 여러 컨테이너가 협력하여 실행될 수 있게 함.

- 초기화 컨테이너는 포드 시작 시 일회성 작업을 수행하기 위해 사용.

- 이를 통해 더 복잡한 애플리케이션 배포 및 초기화 작업을 효율적으로 관리 가능.