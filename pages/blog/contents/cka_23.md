--- 
title: 'Certified Kubernetes Administration - 23'
subtitle: 'k8s Node Affinity'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 노드 어피니티(Node Affinity)


- **노드 어피니티의 목적**:
  
  - 특정 포드가 특정 노드에 배치되도록 보장.
  
  - 예: 높은 자원이 필요한 데이터 처리 포드를 큰 노드에 배치.


- **노드 셀렉터 vs. 노드 어피니티**:
  
  - 노드 셀렉터는 단순한 조건만 사용 가능.
  
  - 노드 어피니티는 더 복잡한 표현식(예: `or`, `not`)을 사용 가능.


- **노드 어피니티 설정 방법**:
  
  - 포드 정의 파일의 `spec` 섹션에 `affinity` 추가.
  
  - `nodeAffinity` 섹션에 고급 조건 추가 가능.
  
  - 예시:
    ```yaml
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            
            - matchExpressions:
              
              - key: size
                operator: In
                values:
                
                - large
    ```


- **노드 어피니티 연산자**:
  
  - `In`: 특정 값 목록에 포함되는 노드 선택.
  
  - `NotIn`: 특정 값 목록에 포함되지 않는 노드 선택.
  
  - `Exists`: 특정 키가 존재하는 노드 선택.


- **노드 어피니티 타입**:
  
  - **RequiredDuringSchedulingIgnoredDuringExecution**:
    
    - 스케줄링 중에는 필수, 실행 중에는 무시.
    
    - 라벨이 맞는 노드가 없으면 포드가 스케줄되지 않음.
  
  - **PreferredDuringSchedulingIgnoredDuringExecution**:
    
    - 스케줄링 중에는 선호, 실행 중에는 무시.
    
    - 라벨이 맞는 노드가 없으면 가능한 노드에 포드를 배치.
  
  - **RequiredDuringSchedulingRequiredDuringExecution** (미래 계획):
    
    - 스케줄링 중과 실행 중 모두 필수.
    
    - 실행 중 라벨이 변경되면 포드가 퇴출됨.


- **사용 예**:
  
  - 노드 라벨 설정: `kubectl label nodes node1 size=large`.
  
  - 포드 정의 파일에 노드 어피니티 추가:
    ```yaml
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:     
            - matchExpressions:
              - key: size
                operator: In
                values:
                - large
    ```


- **고려 사항**:
  
  - 노드 라벨이 변경되면 현재는 포드가 계속 실행됨.
  
  - 미래에는 라벨 변경 시 포드가 퇴출될 수 있음.

### 요약


- **노드 어피니티**는 포드가 특정 노드에 배치되도록 보장하는 고급 기능입니다.

- 노드 셀렉터는 단순한 조건만 사용할 수 있지만, 노드 어피니티는 더 복잡한 조건을 사용할 수 있습니다.

- 노드 어피니티는 `RequiredDuringSchedulingIgnoredDuringExecution`와 `PreferredDuringSchedulingIgnoredDuringExecution` 타입이 있으며, 미래에는 `RequiredDuringSchedulingRequiredDuringExecution` 타입도 도입될 예정입니다.

- 노드 어피니티를 사용하여 포드 배치 규칙을 설정하고, 라벨이 변경될 경우 포드 퇴출 등의 동작을 제어할 수 있습니다.