---
title: 'Certified Kubernetes Administration - 6'
subtitle: 'Kube Controller Manager'
date: '2024-06-19'
tags: [Kubernetes, Cloud]
---

### Kube Controller Manager의 역할 및 Kubernetes에서의 위치


- **Kube Controller Manager의 역할**:
  
  - 다양한 컨트롤러를 관리하는 역할
  
  - 컨트롤러는 시스템 내 여러 컴포넌트의 상태를 지속적으로 모니터링하고, 시스템을 원하는 상태로 유지하기 위해 필요한 조치를 취함


- **컨트롤러의 예시**:
  
  1. **노드 컨트롤러**:
     
     - 노드의 상태를 모니터링하고 필요한 조치를 취함
     
     - 5초마다 노드 상태를 확인
     
     - 노드에서 하트비트를 수신하지 못하면 40초 후 노드를 도달 불가능으로 표시
     
     - 5분 후에도 노드가 복구되지 않으면 해당 노드에 할당된 파드를 삭제하고, 복제 세트에 포함된 경우 건강한 노드에 파드를 다시 생성

  2. **복제 컨트롤러**:
     
     - 복제 세트의 상태를 모니터링하고, 원하는 수의 파드가 항상 가용하도록 유지
     
     - 파드가 죽으면 새로운 파드를 생성


- **컨트롤러의 역할과 기능**:
  
  - 배포, 서비스, 네임스페이스, 지속성 볼륨 등 Kubernetes의 다양한 개념과 관련된 지능은 모두 다양한 컨트롤러를 통해 구현됨
  
  - Kubernetes의 많은 기능의 중심 역할을 수행

### Kube Controller Manager 설치 및 설정

- **설치 방법**:
  
  - Kubernetes 릴리스 페이지에서 Kube Controller Manager를 다운로드하고, 추출한 후 서비스로 실행
  
  - 실행 시 여러 옵션을 제공하여 컨트롤러를 맞춤 설정 가능
  
  - 노드 컨트롤러의 기본 설정(노드 모니터 기간, 유예 기간, 퇴거 타임아웃 등)을 옵션으로 지정


- **옵션**:
  
  - `controllers` 옵션을 사용하여 활성화할 컨트롤러를 지정 가능
  
  - 기본적으로 모든 컨트롤러가 활성화되어 있으나, 선택적으로 활성화 가능

### Kube Controller Manager 설정 확인 방법

- **kubeadm 사용 클러스터**:
  
  - kube-system 네임스페이스의 파드로 배포됨
  
  - `/etc/kubernetes/manifest` 폴더에 있는 파드 정의 파일에서 옵션 확인


- **직접 설정한 클러스터**:
  
  - 서비스 디렉토리에 있는 Kube Controller Manager 서비스 파일에서 옵션 확인
  
  - 마스터 노드에서 실행 중인 프로세스를 나열하여 Kube Controller Manager 검색

### 요약

- Kube Controller Manager는 Kubernetes의 다양한 컨트롤러를 관리하는 핵심 컴포넌트로, 시스템의 상태를 지속적으로 모니터링하고 원하는 상태로 유지하기 위한 조치를 취함

- 설치 및 설정 방법은 클러스터 설정 방식에 따라 다르며, 다양한 옵션을 통해 컨트롤러를 맞춤 설정할 수 있음

이로써 Kube Controller Manager의 역할과 설정 방법에 대해 이해할 수 있습니다.