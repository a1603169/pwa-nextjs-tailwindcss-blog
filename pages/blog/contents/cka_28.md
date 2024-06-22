--- 
title: 'Certified Kubernetes Administration - 28'
subtitle: 'k8s Multi Scheduler in cluster'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터에서 다중 스케줄러 배포

- **다중 스케줄러의 필요성**:
  
  - 기본 스케줄러가 모든 요구를 충족하지 못할 때, 특정 애플리케이션을 위한 맞춤형 스케줄링 알고리즘 필요.
  
  - 커스텀 스케줄러를 작성하여 추가적인 조건과 검사를 추가할 수 있음.

- **스케줄러 배포**:
  
  - Kubernetes 클러스터에 여러 스케줄러 배포 가능.
  
  - 기본 스케줄러는 "default-scheduler"로 명명.
  
  - 추가 스케줄러는 별도의 구성 파일로 설정하여 배포.

- **스케줄러 이름 설정**:
  
  - 스케줄러의 구성 파일에 `schedulerName` 속성 추가.

- **추가 스케줄러 배포 방법**:
  1. **바이너리 사용**:
     
     - kube-scheduler 바이너리를 다운로드하여 서비스로 실행.
     
     - 각 스케줄러는 별도의 구성 파일과 스케줄러 이름 사용.
  2. **Pod로 배포**:
     
     - 스케줄러를 Pod 정의 파일로 작성.
     
     - `kubeconfig` 경로 및 커스텀 구성 파일 경로를 지정.
     
     - 리더 선출 옵션 (`leaderElect`) 설정.
  3. **Deployment로 배포**:
     
     - Kubernetes의 Deployment로 스케줄러 배포.
     
     - 커스텀 스케줄러 이미지와 구성 파일 사용.
     
     - ConfigMap을 통해 구성 파일을 제공.
     
     - 서비스 계정 및 클러스터 역할 바인딩 설정 필요.

- **Pod에 스케줄러 지정**:
  
  - Pod 정의 파일에 `schedulerName` 속성 추가하여 특정 스케줄러 사용 지정.
  
  - 예시:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: mypod
    spec:
      schedulerName: my-custom-scheduler
      containers:   
      - name: mycontainer
        image: myimage
    ```

- **Pod 상태 확인**:
  
  - `kubectl create` 명령어로 Pod 생성.
  
  - Pod가 `Pending` 상태에 머무를 경우, 스케줄러가 올바르게 구성되지 않았을 가능성.
  
  - `kubectl describe pod <pod-name>` 명령어로 Pod 이벤트 및 스케줄러 상태 확인.
  
  - `kubectl get events -o wide` 명령어로 이벤트 소스 확인.
  
  - `kubectl logs <scheduler-pod-name>` 명령어로 스케줄러 로그 확인.

### 요약

- Kubernetes 클러스터에 여러 스케줄러를 배포하여 다양한 스케줄링 요구를 충족할 수 있음.

- 기본 스케줄러 외에도 커스텀 스케줄러를 추가하여 특정 애플리케이션의 요구 사항을 충족.

- Pod 정의 파일에 `schedulerName` 속성을 추가하여 특정 스케줄러를 지정할 수 있음.

- Pod 상태와 스케줄러 동작을 확인하기 위해 다양한 `kubectl` 명령어를 사용할 수 있음.