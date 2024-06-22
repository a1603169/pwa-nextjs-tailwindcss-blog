--- 
title: 'Certified Kubernetes Administration - 29'
subtitle: 'k8s scheduler profile'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 스케줄러 프로파일

- **Kubernetes 스케줄러 작동 방식**:
  
  - 포드가 네 개의 노드 중 하나에 스케줄링됨.
  
  - 포드는 스케줄링 큐에 들어가 대기함.
  
  - 포드의 우선 순위에 따라 큐에서 정렬됨.
  
  - 필터링 단계에서 자원이 부족한 노드는 제외됨.
  
  - 점수화 단계에서 남은 자원에 따라 노드에 점수가 부여됨.
  
  - 바인딩 단계에서 가장 높은 점수를 받은 노드에 포드가 배정됨.


- **스케줄링 플러그인**:
  
  - 각 단계에서 다양한 플러그인이 작동함.
  
  - 예:
    
    - **큐 정렬**: `PrioritySort` 플러그인이 포드 우선 순위에 따라 큐 정렬.
    
    - **필터링**: `NodeResourcesFit`, `NodeName`, `NodeUnschedulable` 플러그인이 작동.
    
    - **점수화**: `NodeResourcesFit`, `ImageLocality` 플러그인이 노드에 점수 부여.
    
    - **바인딩**: `DefaultBinder` 플러그인이 포드를 노드에 바인딩.


- **확장 포인트와 플러그인**:
  
  - 각 스케줄링 단계는 확장 포인트를 가짐.
  
  - **Pre-Filter**, **Filter**, **Post-Filter**, **Pre-Score**, **Score**, **Reserve**, **Permit**, **Pre-Bind**, **Bind**, **Post-Bind** 등 확장 포인트가 있음.
  
  - 확장 포인트에 커스텀 플러그인을 연결하여 사용자 정의 코드 실행 가능.


- **다중 스케줄러와 프로파일**:
  
  - 여러 스케줄러를 배포할 수 있지만, 별도의 프로세스로 실행될 경우 관리가 복잡하고 경쟁 조건 발생 가능.
  
  - Kubernetes 1.18부터 다중 프로파일을 단일 스케줄러에서 지원.
  
  - 스케줄러 구성 파일에 여러 프로파일을 추가하여 각각 다른 스케줄러로 작동하게 설정 가능.
  
  - 각 프로파일마다 스케줄러 이름과 플러그인을 다르게 설정 가능.


- **예시 구성**:
  
  - 프로파일 설정 예시:
    ```yaml
    apiVersion: kubescheduler.config.k8s.io/v1alpha2
    kind: KubeSchedulerConfiguration
    profiles:
    - schedulerName: default-scheduler
    - schedulerName: my-scheduler-2
      plugins:
        filter:
          disabled:
          - name: TaintToleration
        score:
          disabled:
          - name: SomeOtherPlugin
          enabled:
          - name: MyCustomPlugin
    - schedulerName: my-scheduler-3
      plugins:
        preScore:
          disabled: true
        score:
          disabled: true
    ```


- **스케줄러 프로파일 작동 방식**:
  
  - 프로파일마다 다른 플러그인을 활성화하거나 비활성화하여 사용자 정의 스케줄링 가능.
  
  - 단일 스케줄러 프로세스 내에서 여러 프로파일을 실행하여 관리 용이성 및 성능 향상.

### 요약


- **Kubernetes 스케줄러**는 포드를 스케줄링 큐에 넣고, 필터링, 점수화, 바인딩 단계를 거쳐 노드에 배정함.

- **스케줄링 플러그인**은 각 단계에서 작동하여 포드를 스케줄링함.

- **확장 포인트**를 통해 사용자 정의 플러그인을 추가하여 스케줄링 동작을 커스터마이징 가능.

- **다중 스케줄러 프로파일**을 사용하면 단일 스케줄러 프로세스 내에서 여러 프로파일을 실행하여 관리 용이성과 성능을 향상시킬 수 있음.

- Kubernetes 1.18부터 다중 스케줄러 프로파일을 지원하며, 구성 파일을 통해 설정 가능.