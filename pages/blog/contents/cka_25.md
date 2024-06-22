--- 
title: 'Certified Kubernetes Administration - 25'
subtitle: 'k8s Resource Management'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서의 리소스 관리

- **노드와 포드**:
  
  - 각 노드는 CPU와 메모리 자원을 가지고 있음.
  
  - 각 포드는 실행을 위해 필요한 자원을 요구.
  
  - 스케줄러는 포드의 자원 요구량과 노드의 가용 자원을 고려하여 포드를 배치.

- **리소스 요청(Resource Requests)**:
  
  - 포드가 필요로 하는 최소한의 CPU와 메모리 양.
  
  - 포드 정의 파일의 `resources.requests` 섹션에 설정.
  
  - 예시: `2 CPU`, `4 GiB 메모리`.

- **리소스 제한(Resource Limits)**:
  
  - 포드가 사용할 수 있는 최대 CPU와 메모리 양.
  
  - 포드 정의 파일의 `resources.limits` 섹션에 설정.
  
  - 예시: `1 CPU`, `512 MiB 메모리`.

- **CPU와 메모리 단위**:
  
  - CPU: `0.1 CPU` = `100m` (milli), `1 CPU` = `1 vCPU`.
  
  - 메모리: `256Mi` (MebiByte), `256M` (MegaByte), `1Gi` (GibiByte), `1G` (GigaByte).

- **리소스 요청과 제한의 중요성**:
  
  - 요청(Requests): 보장된 자원.
  
  - 제한(Limits): 최대 사용 가능 자원.
  
  - 요청과 제한이 없는 경우, 포드는 노드의 모든 자원을 소비할 수 있음.

- **다양한 시나리오**:
  1. 요청과 제한 없음: 하나의 포드가 모든 자원을 소비할 수 있음.
  2. 제한만 있음: 요청이 제한과 동일하게 설정됨.
  3. 요청과 제한 모두 있음: 요청된 자원 보장, 제한까지 사용 가능.
  4. 요청만 있음: 자원이 가용하면 최대한 사용 가능.

- **OOM(Out Of Memory) 에러**:
  
  - 메모리 제한 초과 시 포드는 종료되고 OOM 에러가 발생.

- **기본 리소스 설정**:
  
  - 기본적으로 Kubernetes는 요청이나 제한을 설정하지 않음.
  
  - LimitRange 객체를 사용하여 네임스페이스 수준에서 기본값 설정 가능.
  
  - 예시:
    ```yaml
    apiVersion: v1
    kind: LimitRange
    metadata:
      name: cpu-resource-constraint
    spec:
      limits:
      - default:
          cpu: 500m
        defaultRequest:
          cpu: 500m
        max:
          cpu: "1"
        min:
          cpu: 100m
      ```

- **리소스 쿼터(Resource Quota)**:
  
  - 네임스페이스 수준에서 전체 자원 사용량 제한 설정.
  
  - 예시:
    ```yaml
    apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: example-quota
    spec:
      hard:
        requests.cpu: "4"
        requests.memory: 4Gi
        limits.cpu: "10"
        limits.memory: 10Gi
      ```

### 요약

- **리소스 요청**은 포드가 필요로 하는 최소 자원을 보장.

- **리소스 제한**은 포드가 사용할 수 있는 최대 자원을 제한.

- 기본적으로 요청과 제한이 설정되지 않은 포드는 노드의 모든 자원을 소비할 수 있음.

- `LimitRange`와 `ResourceQuota`를 사용하여 네임스페이스 수준에서 기본값과 전체 자원 사용량을 관리할 수 있음.