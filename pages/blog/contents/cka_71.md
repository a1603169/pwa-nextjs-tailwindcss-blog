--- 
title: 'Certified Kubernetes Administration - 71'
subtitle: 'k8s / IPAM(Ip Address Management): Weave'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서의 IP 주소 관리

### 개요

이번 강의에서는 Kubernetes에서 IP 주소 관리가 어떻게 이루어지는지에 대해 논의합니다. 이 섹션에서는 노드에 할당된 IP 주소가 아닌, 각 노드의 가상 브리지 네트워크에 할당된 IP 서브넷과 파드에 할당된 IP 주소에 대해 다룹니다.

### CNI의 역할

CNI(Container Network Interface)는 IP 주소 할당을 네트워크 솔루션 제공자의 책임으로 규정하고 있습니다. 기본적으로 CNI 플러그인이 각 컨테이너에 IP 주소를 할당하는 책임을 집니다.

### IP 주소 관리 방법

1. **파일 기반 관리**: IP 주소를 파일에 저장하고, 각 호스트에 해당 파일을 배치하여 IP 주소 관리를 수행합니다. 이를 통해 중복된 IP 주소 할당을 방지할 수 있습니다.

2. **CNI 플러그인 사용**: IP 주소 관리를 위한 플러그인 중 하나인 Host Local 플러그인을 사용할 수 있습니다. 이 플러그인은 로컬 호스트에서 IP 주소 관리를 수행합니다.

3. **IPAM 구성**: CNI 구성 파일에 IPAM 섹션을 추가하여 사용할 플러그인 타입, 서브넷, 라우트 등을 지정할 수 있습니다. 이를 통해 스크립트가 적절한 플러그인을 호출하도록 동적으로 구성할 수 있습니다.

### Weaveworks의 IP 주소 관리

Weaveworks의 Weave CNI 플러그인은 기본적으로 10.32.0.0/12 범위의 IP 주소를 할당합니다. 이는 약 백만 개의 IP 주소를 제공하며, 각 노드는 이 범위 내에서 IP 주소를 할당받습니다. 이 범위는 Weave 플러그인을 클러스터에 배포할 때 추가 옵션을 통해 구성할 수 있습니다.

### 요약

- **CNI**: IP 주소 관리는 네트워크 솔루션 제공자의 책임.

- **Host Local 플러그인**: 로컬 파일을 통해 IP 주소 관리.

- **Weave CNI 플러그인**: 기본적으로 10.32.0.0/12 범위의 IP 주소 할당.