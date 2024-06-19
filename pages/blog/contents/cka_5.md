---
title: 'Certified Kubernetes Administration - 5'
subtitle: 'Role of Kube-apiserver'
date: '2024-06-19'
tags: [Kubernetes, Cloud]
---


### kube-apiserver의 역할 및 Kubernetes 아키텍처


- **kube-apiserver 역할**:
  
  - Kubernetes의 주요 관리 컴포넌트
  
  - `kubectl` 명령어가 kube-apiserver에 요청을 보냄
  
  - 요청을 인증하고 유효성을 검사
  
  - etcd 클러스터에서 데이터 조회 및 업데이트 후 응답


- **kube-apiserver와의 상호작용**:
  
  - API를 직접 호출하여 POST 요청으로 작업 가능
  
  - 예를 들어, 파드 생성 시:
    1. 요청 인증 및 유효성 검사
    2. 파드 객체 생성 및 etcd 서버에 업데이트
    3. 스케줄러가 새로운 파드를 감지하고 적절한 노드를 선택
    
    4. 선택된 노드를 kube-apiserver에 전달
    
    5. kube-apiserver가 etcd 클러스터에 정보 업데이트
    6. kubelet이 해당 노드에서 파드를 생성하고 컨테이너 런타임 엔진에 애플리케이션 이미지를 배포 지시
    7. 완료 후 상태를 API 서버에 업데이트하고, API 서버는 이를 etcd 클러스터에 다시 업데이트


- **kube-apiserver와 기타 컴포넌트**:
  
  - etcd 데이터 스토어와 직접 상호작용하는 유일한 컴포넌트
  
  - 스케줄러, kube-controller-manager, kubelet 등은 API 서버를 통해 클러스터를 업데이트


- **kube-apiserver 설치 및 설정**:
  
  - kubeadm을 사용하면 자동으로 설정되지만, 직접 설정할 경우 Kubernetes 릴리스 페이지에서 바이너리를 다운로드하여 마스터 노드에서 서비스로 설정
  
  - 많은 파라미터와 함께 실행됨

### 주요 설정 옵션

- **etcd servers**:
  
  - etcd 서버의 위치를 지정
  
  - kube-apiserver가 etcd 서버에 연결하는 방법


### kube-apiserver 옵션 확인 방법

- **kubeadm 사용 클러스터**:
  
  - kube-system 네임스페이스의 파드로 배포됨
  
  - `/etc/kubernetes/manifest` 폴더에 있는 파드 정의 파일에서 옵션 확인


- **직접 설정한 클러스터**:
  
  - `/etc/systemd/system/kube-apiserver.service` 파일에서 서비스 옵션 확인
  
  - 마스터 노드에서 실행 중인 프로세스를 나열하여 kube-apiserver 검색

### 인증, 권한 부여, 암호화 및 보안

- **다양한 인증 모드 및 보안 설정**:
  
  - 여러 컴포넌트 간의 보안 연결을 위한 인증서 사용
  
  - SSL/TLS 인증서 관련 내용은 후속 강의에서 자세히 다룸

### 요약

- kube-apiserver는 Kubernetes 클러스터의 핵심 관리 컴포넌트로, 요청을 인증하고 유효성을 검사하며, etcd 클러스터와 상호작용하여 데이터를 조회 및 업데이트함

- 다양한 설정 옵션을 통해 클러스터를 구성할 수 있으며, 설정 방법에 따라 옵션 확인 방법이 다름