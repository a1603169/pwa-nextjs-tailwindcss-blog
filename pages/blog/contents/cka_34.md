--- 
title: 'Certified Kubernetes Administration - 34'
subtitle: 'k8s ENV / ConfigMap / Secrets'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서 환경 변수 설정


- **Pod 정의 파일에서 환경 변수 설정**:
  
  - `env` 속성을 사용하여 환경 변수 설정.
  
  - `env`는 배열 형태로, 각 항목은 `name`과 `value` 속성을 가짐.
  
  - 예:
    ```yaml
    env:
    - name: ENV_VAR_NAME
      value: ENV_VAR_VALUE
    ```


- **ConfigMap 및 Secrets 사용**:
  
  - ConfigMap 또는 Secrets를 사용하여 환경 변수를 설정 가능.
  
  - `valueFrom`을 사용하여 설정:
    ```yaml
    env:
    - name: ENV_VAR_NAME
      valueFrom:
        configMapKeyRef:
          name: CONFIG_MAP_NAME
          key: CONFIG_MAP_KEY
    ```

### ConfigMap 사용


- **ConfigMap 정의 및 사용**:
  
  - ConfigMap을 사용하여 환경 변수와 설정 데이터를 중앙에서 관리.
  
  - 두 단계로 구성: ConfigMap 생성 및 Pod에 주입.


- **ConfigMap 생성 방법**:
  1. **명령어 사용 (명령형 방법)**:
     
     - `kubectl create configmap` 명령어를 사용하여 생성.
     
     - 예:
       ```sh
       kubectl create configmap app-config --from-literal=app.color=blue
       ```

  2. **정의 파일 사용 (선언형 방법)**:
     
     - ConfigMap 정의 파일 작성.
     
     - 예:
       ```yaml
       apiVersion: v1
       kind: ConfigMap
       metadata:
         name: app-config
       data:
         app.color: blue
       ```
     
     - `kubectl apply -f <configmap 정의 파일>` 명령어로 생성.


- **ConfigMap 보기**:
  
  - ConfigMap 목록 보기: `kubectl get configmaps`
  
  - ConfigMap 세부 정보 보기: `kubectl describe configmap <configmap 이름>`

### ConfigMap을 사용한 환경 변수 주입


- **Pod 정의 파일에서 ConfigMap 사용**:
  
  - `envFrom` 속성을 사용하여 ConfigMap의 값을 환경 변수로 주입.
  
  - 예:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    spec:
      containers:
      - name: my-container
        image: ubuntu-sleeper
        envFrom:
        - configMapRef:
            name: app-config
    ```

### 요약


- **환경 변수 설정**:
  
  - Pod 정의 파일에서 `env` 속성을 사용하여 직접 설정.
  
  - ConfigMap 및 Secrets를 사용하여 중앙에서 환경 변수 관리 가능.


- **ConfigMap 생성 및 사용**:
  
  - 명령형 방법과 선언형 방법으로 ConfigMap 생성 가능.
  
  - `kubectl get configmaps`와 `kubectl describe configmap` 명령어로 ConfigMap 확인 가능.


- **Pod에서 ConfigMap 사용**:
  
  - `envFrom` 속성을 사용하여 ConfigMap의 값을 환경 변수로 주입하여 구성 관리 용이성 향상.