--- 
title: 'Certified Kubernetes Administration - 78'
subtitle: 'k8s / Choosing k8s Infra'
date: '2024-06-23'
tags: [Kubernetes, Cloud]
---

### Kubernetes 고가용성 설계 강의 정리

### 고가용성의 필요성

- **마스터 노드 손실**: 마스터 노드가 다운되면 워커 노드가 살아있고 컨테이너가 실행 중이어도 애플리케이션은 계속 실행됨. 그러나 문제가 발생하면 복구할 마스터가 없으므로 서비스 장애 발생.

- **복구 필요 시**: 예를 들어, 워커 노드의 컨테이너가 실패하면 복제 컨트롤러가 새로운 파드를 로드해야 하지만 마스터가 없으면 이 작업이 수행되지 않음.

- **API 서버 접근**: 마스터 노드가 없으면 `kubectl` 도구를 통해 클러스터에 접근할 수 없음.

### 고가용성 설정

- **중복성 보장**: 클러스터의 모든 구성 요소에 중복성을 제공해 단일 장애 지점을 피함.
  
  - **마스터 노드**
  
  - **워커 노드**
  
  - **제어 플레인 컴포넌트**
  
  - **애플리케이션**

### 고가용성 구성의 작동 원리

- **API 서버**: 모든 마스터 노드에서 활성 상태로 실행되며, 모든 노드에서 요청을 처리할 수 있음.
  
  - **로드 밸런서**: API 서버 앞에 로드 밸런서를 배치해 요청을 분산시킴.
  

- **스케줄러와 컨트롤러 매니저**: 활성-대기 모드로 실행.
  
  - **리더 선출 과정**: 각 프로세스는 리더 역할을 얻기 위해 선출 과정을 거침.
    
    - **리더 임대 옵션**: `leader-elect` 옵션으로 활성화, 기본값은 true.
    
    - **임대 기간**: `leader-elect-lease-duration` 기본값은 15초.
    
    - **갱신 마감 시간**: `leader-elect-renew-deadline` 기본값은 10초.
    
    - **재시도 주기**: `leader-elect-retry-period` 기본값은 2초.

### etcd 설정

- **토폴로지 유형**:
  
  - **스택형 제어 플레인 노드 토폴로지**: etcd가 마스터 노드에 포함됨.
    
    - **장점**: 설정 및 관리가 쉬움.
    
    - **단점**: 노드 손실 시 등등 제어 플레인과 etcd 데이터 손실 가능성 높음.
  
  
  - **외부 etcd 서버 토폴로지**: etcd가 별도의 서버에서 실행됨.
    
    - **장점**: 제어 플레인 노드 손실이 etcd 클러스터에 영향을 미치지 않음.
    
    - **단점**: 설정이 복잡하고, 더 많은 서버가 필요함.


- **API 서버와 etcd 통신**: etcd 서버에 접근하기 위해 API 서버는 etcd 인스턴스 목록을 지정함.

### 고가용성 클러스터 디자인

- **원래 디자인**: 단일 마스터 노드로 구성.

- **고가용성 추가**: 다중 마스터 노드와 로드 밸런서 추가.

- **최종 디자인**: 총 5개의 노드(다중 마스터 노드 포함).

이 요약은 고가용성 Kubernetes 클러스터 설계를 설명합니다. 고가용성 설정을 통해 클러스터의 안정성과 가용성을 높일 수 있습니다.