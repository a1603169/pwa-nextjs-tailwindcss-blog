--- 
title: 'Certified Kubernetes Administration - 77'
subtitle: 'k8s / Choosing k8s Infra'
date: '2024-06-23'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터를 호스팅하기 위한 다양한 선택지

### 로컬 머신에 Kubernetes 배포

- **리눅스 머신**: 바이너리 수동 설치 및 로컬 클러스터 설정 가능.
  
  - **Minikube**: 단일 노드 클러스터를 쉽게 배포. VirtualBox와 같은 가상화 소프트웨어를 사용.
  
  - **Kubeadm**: 단일 노드 또는 멀티 노드 클러스터를 빠르게 배포. 미리 프로비저닝된 VM 필요.

- **윈도우 머신**: 네이티브 Kubernetes 설치 불가능. Hyper-V, VMware Workstation, VirtualBox 등을 사용해 리눅스 VM 생성 후 Kubernetes 실행.

### 로컬 머신에서 Kubernetes 시작을 위한 솔루션

- **Minikube**: 단일 노드 클러스터를 쉽게 배포. VirtualBox와 같은 가상화 소프트웨어를 사용.

- **Kubeadm**: 단일 노드 또는 멀티 노드 클러스터를 빠르게 배포. 미리 프로비저닝된 VM 필요.

### 프로덕션 환경에서 Kubernetes 클러스터 배포

- **턴키 솔루션**: 필요한 VM을 프로비저닝하고, 스크립트나 도구를 사용해 Kubernetes 클러스터 구성.
  
  - **예**: AWS에서 kOps 도구 사용.

- **호스티드 솔루션**: 클러스터 및 필요한 VM을 제공자가 배포하고 관리.
  
  - **예**: Google Container Engine, Azure Kubernetes Service, Amazon Elastic Container Service for Kubernetes.

### 주요 솔루션들

- **OpenShift**: Red Hat의 Kubernetes 플랫폼.

- **Cloud Foundry Container Runtime**: Cloud Foundry의 오픈 소스 프로젝트로, BOSH 도구를 사용해 고가용성 Kubernetes 클러스터 배포 및 관리.

- **VMware Cloud PKS**: 기존 VMware 환경을 활용한 Kubernetes 솔루션.

- **Vagrant**: 다양한 클라우드 서비스 제공업체에서 Kubernetes 클러스터를 배포하는 스크립트 제공.

### 호스티드 솔루션

- **Google Container Engine**: Google Cloud Platform의 Kubernetes 서비스.

- **OpenShift Online**: Red Hat의 Kubernetes 클러스터 온라인 서비스.

- **Azure Kubernetes Service**: Azure의 Kubernetes 서비스.

- **Amazon Elastic Container Service for Kubernetes**: Amazon의 호스티드 Kubernetes 서비스.

### 우리 선택

- **학습 목적**: VirtualBox에서 로컬 Kubernetes 클러스터 배포.
  
  - **설계**: VirtualBox에 3개의 VM (마스터 노드 1개, 워커 노드 2개)으로 구성된 클러스터 배포.

### 요약

Kubernetes 클러스터를 호스팅하는 다양한 방법을 선택할 수 있습니다. 로컬 머신에서 시작하는 간단한 방법부터, 퍼블릭 클라우드에서 제공되는 호스티드 솔루션까지 여러 옵션이 있습니다. 

학습 목적으로는 VirtualBox에서 로컬 Kubernetes 클러스터를 배포하는 것이 좋은 선택이 될 수 있습니다.