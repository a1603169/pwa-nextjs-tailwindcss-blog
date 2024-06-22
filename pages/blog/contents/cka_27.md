--- 
title: 'Certified Kubernetes Administration - 27'
subtitle: 'k8s Static Pod'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 Static Pod

- **Static Pod 소개**:
  
  - kubelet은 독립적으로 노드를 관리할 수 있음.
  
  - kube-apiserver, kube-scheduler, ETCD 클러스터가 없어도 작동 가능.
  
  - Kubernetes 클러스터에 속하지 않고도 포드를 생성 및 관리 가능.

- **Static Pod의 작동 방식**:
  
  - kubelet이 포드 정의 파일을 특정 디렉토리에서 읽음.
  
  - 해당 디렉토리에 포드 정의 파일을 배치하면 kubelet이 주기적으로 확인하고 포드를 생성.
  
  - 포드가 생성되면, 애플리케이션이 충돌해도 kubelet이 자동으로 재시작.
  
  - 파일을 수정하면 포드를 재생성하고, 파일을 삭제하면 포드도 삭제됨.

- **Static Pod 생성 방법**:
  
  - 지정된 디렉토리에 포드 정의 파일을 배치.
  
  - 이 디렉토리는 kubelet 서비스 실행 시 `pod-manifest-path` 옵션으로 지정.
  
  - 또는 kubelet 설정 파일에서 `staticPodPath`로 지정 가능.

- **Static Pod의 특징**:
  
  - API 서버나 다른 클러스터 컴포넌트 없이도 포드 생성 가능.
  
  - 레플리카셋, 디플로이먼트, 서비스 등은 생성 불가 (클러스터 컴포넌트 필요).
  
  - 포드 수준에서만 작동, 다른 Kubernetes 아키텍처의 개념은 사용 불가.

- **Static Pod 설정 경로 확인**:
  
  - `kubelet.service` 파일에서 `pod-manifest-path` 옵션 확인.
  
  - `config` 옵션을 통해 설정 파일 경로를 지정할 수 있으며, 설정 파일 내에서 `staticPodPath` 확인.
  
  - 설정된 경로에 포드 정의 파일 배치.

- **Static Pod 조회**:
  
  - `docker ps` 명령어를 통해 생성된 포드 확인.
  
  - 클러스터의 다른 구성 요소가 없는 경우 `kubectl` 명령어 사용 불가.
  
  - 클러스터에 속한 경우, `kubectl get pods` 명령어로도 조회 가능.

- **Static Pod와 클러스터 통합**:
  
  - 클러스터의 일원인 경우, static Pod는 kube-apiserver에 미러 객체를 생성.
  
  - 미러 객체는 읽기 전용으로 포드 정보를 조회할 수 있으나 수정 또는 삭제 불가.
  
  - 포드 이름에 노드 이름이 자동으로 추가됨 (예: `node01`).

- **Static Pod의 사용 사례**:
  
  - Kubernetes 제어 평면 컴포넌트를 포드로 배포.
  
  - 모든 마스터 노드에 kubelet 설치 후, API 서버, 컨트롤러, ETCD 등의 컨트롤 플레인 컴포넌트를 포함하는 포드 정의 파일을 생성.
  
  - 정의 파일을 지정된 디렉토리에 배치하여 kubelet이 제어 평면 컴포넌트를 포드로 배포.
  
  - 제어 평면 컴포넌트의 바이너리 다운로드, 서비스 구성, 서비스 충돌 시 대처 필요 없음.

- **Static Pod와 DaemonSet의 차이점**:
  
  - **DaemonSet**:
    
    - 클러스터의 모든 노드에 애플리케이션 인스턴스를 배포.
    
    - DaemonSet 컨트롤러와 kube-apiserver를 통해 관리.
  
  - **Static Pod**:
    
    - kube-apiserver나 다른 클러스터 컴포넌트 없이 kubelet이 직접 생성.
    
    - Kubernetes 제어 평면 컴포넌트 배포에 사용.
  
  - 두 경우 모두 kube-scheduler는 포드에 영향을 미치지 않음.

### 요약

- **Static Pod**는 kube-apiserver와 같은 클러스터 구성 요소 없이 독립적으로 포드를 생성하고 관리할 수 있는 방법입니다.

- 지정된 디렉토리에 포드 정의 파일을 배치하여 kubelet이 해당 포드를 생성하고 관리합니다.

- 클러스터의 제어 평면 컴포넌트를 포드로 배포하는 데 유용하며, 이는 바이너리 다운로드 및 서비스 구성을 단순화합니다.

- DaemonSet과 달리 Static Pod는 kube-apiserver와 독립적으로 작동합니다.

### 추가 ETCD 클러스터란

- **ETCD 개요**:
  
  - **ETCD**는 분산 키-값 저장소로, Kubernetes와 같은 분산 시스템에서 중요한 역할을 함.
  
  - 주로 클러스터의 상태 정보를 저장하고 관리하는 데 사용됨.
  
  - 예를 들어, 노드, 포드, 컨피그맵, 시크릿 등의 상태 정보가 ETCD에 저장됨.

- **ETCD 클러스터**:
  
  - **ETCD 클러스터**는 여러 ETCD 노드로 구성된 클러스터로, 고가용성과 데이터 일관성을 보장.
  
  - 여러 노드로 구성된 클러스터는 하나의 노드가 장애가 발생해도 데이터를 손실하지 않도록 함.

- **ETCD 클러스터의 작동 원리**:
  
  - **리더-팔로워 구조**: ETCD 클러스터는 리더와 여러 팔로워 노드로 구성됨.
  
  - **Raft 알고리즘**: 데이터 일관성과 무결성을 보장하기 위해 Raft 합의 알고리즘을 사용.
  
  - **쓰기 작업**: 모든 쓰기 작업은 리더 노드에서 처리되며, 리더는 변경 사항을 팔로워 노드에 복제.
  
  - **읽기 작업**: 읽기 작업은 리더와 팔로워 모두에서 처리 가능.

- **Kubernetes와 ETCD**:
  
  - Kubernetes의 모든 클러스터 상태 정보는 ETCD에 저장됨.
  
  - API 서버는 클러스터 상태를 조회하거나 업데이트할 때 ETCD와 통신.
  
  - 클러스터의 구성, 상태, 시크릿, 컨피그맵 등 모든 중요한 정보가 ETCD에 저장됨.

- **ETCD 클러스터의 구성**:
  
  - **다중 노드**: 보통 홀수 개의 노드(3개, 5개 등)로 구성되어 합의 알고리즘을 통해 데이터 일관성을 유지.
  
  - **백업**: 주기적으로 ETCD 데이터를 백업하여 데이터 손실을 방지.
  
  - **모니터링**: ETCD 클러스터의 상태를 모니터링하여 장애 발생 시 신속하게 대응.

- **ETCD 클러스터 설정 예시**:
  
  - 예를 들어, 3개의 노드로 구성된 ETCD 클러스터:
  
    ```yaml
    etcd1:
      name: etcd1
      initial-cluster: etcd1=http://etcd1:2380,etcd2=http://etcd2:2380,etcd3=http://etcd3:2380
      initial-cluster-state: new
      initial-cluster-token: etcd-cluster
      listen-peer-urls: http://etcd1:2380
      listen-client-urls: http://etcd1:2379

    etcd2:
      name: etcd2
      initial-cluster: etcd1=http://etcd1:2380,etcd2=http://etcd2:2380,etcd3=http://etcd3:2380
      initial-cluster-state: new
      initial-cluster-token: etcd-cluster
      listen-peer-urls: http://etcd2:2380
      listen-client-urls: http://etcd2:2379

    etcd3:
      name: etcd3
      initial-cluster: etcd1=http://etcd1:2380,etcd2=http://etcd2:2380,etcd3=http://etcd3:2380
      initial-cluster-state: new
      initial-cluster-token: etcd-cluster
      listen-peer-urls: http://etcd3:2380
      listen-client-urls: http://etcd3:2379
    ```

### ETCD 요약

- **ETCD**는 Kubernetes 클러스터 상태를 저장하는 분산 키-값 저장소.

- **ETCD 클러스터**는 다수의 노드로 구성되어 고가용성과 데이터 일관성을 보장.

- Kubernetes의 모든 중요한 상태 정보가 ETCD에 저장되며, API 서버는 ETCD와 통신하여 클러스터를 관리.

- ETCD 클러스터는 Raft 합의 알고리즘을 사용하여 데이터의 무결성과 일관성을 유지.