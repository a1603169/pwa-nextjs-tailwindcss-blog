--- 
title: 'Certified Kubernetes Administration - 26'
subtitle: 'k8s DaemonSet'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 DaemonSet

- **DaemonSet 소개**:
  
  - DaemonSets는 ReplicaSets와 유사하게 여러 인스턴스의 포드를 배포.
  
  - 클러스터의 각 노드에 하나의 포드를 실행.
  
  - 새 노드가 클러스터에 추가되면, 포드의 복제본이 자동으로 해당 노드에 추가.
  
  - 노드가 제거되면, 포드도 자동으로 제거.

- **DaemonSet의 주요 사용 사례**:
  
  - **모니터링 에이전트 배포**: 클러스터의 각 노드에 모니터링 에이전트나 로그 수집기를 배포.
  
  - **kube-proxy**: 모든 노드에 배포가 필요한 클러스터 컴포넌트.
  
  - **네트워킹 에이전트**: Vivenet와 같은 네트워킹 솔루션은 클러스터의 각 노드에 에이전트를 배포해야 함.

- **DaemonSet 생성 방법**:
  
  - ReplicaSet과 유사한 구조로 DaemonSet 정의 파일 생성.
  
  - API 버전은 `apps/v1`, kind는 `DaemonSet`.
  
  - `metadata`와 `spec` 섹션 포함.
  
  - `spec`에는 셀렉터와 포드 정의 템플릿이 포함됨.
  
  - 셀렉터의 라벨과 포드 템플릿의 라벨이 일치해야 함.
  
  - DaemonSet 생성: `kubectl create -f <파일명>` 명령어 사용.
  
  - DaemonSet 조회: `kubectl get daemonset` 명령어 사용.
  
  - 상세 정보 조회: `kubectl describe daemonset <DaemonSet 이름>` 명령어 사용.

- **DaemonSet의 작동 원리**:
  
  - 각 노드에 포드를 스케줄링하는 방식.
  
  - Kubernetes 1.12 이전에는 각 포드에 노드 이름을 설정하여 스케줄러를 우회.
  
  - Kubernetes 1.12 이후부터는 기본 스케줄러와 노드 어피니티 규칙을 사용하여 포드를 스케줄링.

### 요약

- **DaemonSet**은 클러스터의 각 노드에 하나의 포드를 배치하는 데 사용됩니다.

- 모니터링 에이전트, kube-proxy, 네트워킹 에이전트와 같은 사용 사례에 적합합니다.

- ReplicaSet과 유사한 방식으로 생성되며, API 버전과 kind, 메타데이터 및 스펙을 포함합니다.

- Kubernetes 1.12 이후 버전에서는 기본 스케줄러와 노드 어피니티를 사용하여 포드를 스케줄링합니다.