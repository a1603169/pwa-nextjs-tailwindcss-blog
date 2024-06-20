---
title: 'Certified Kubernetes Administration - 9'
subtitle: 'kube-proxy'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---

### 쿠브 프로시 개요

- 쿠버네티스 클러스터 내에서 모든 파드는 다른 모든 파드에 접근할 수 있습니다.
  
  - 이는 클러스터에 파드 네트워킹 솔루션을 배포함으로써 이루어집니다.

- 파드 네트워크는 모든 노드를 포함하는 내부 가상 네트워크로, 모든 파드가 연결됩니다.
  
  - 이를 통해 파드들은 서로 통신할 수 있습니다.

- 여러 파드 네트워크 솔루션이 있습니다.

- 예를 들어, 첫 번째 노드에 웹 애플리케이션을, 두 번째 노드에 데이터베이스 애플리케이션을 배포합니다.
  
  - 웹 애플리케이션은 데이터베이스 파드의 IP를 사용해 데이터베이스에 접근할 수 있지만, 데이터베이스 파드의 IP는 항상 동일하지 않을 수 있습니다.

- 더 나은 방법은 서비스를 사용하는 것입니다.
  
  - 서비스를 생성하여 클러스터 전체에서 데이터베이스 애플리케이션을 노출시킵니다.
  
  - 이제 웹 애플리케이션은 서비스 이름(DB)을 사용하여 데이터베이스에 접근할 수 있습니다.
  
  - 서비스에도 IP 주소가 할당됩니다.
  
  - 파드가 서비스의 IP나 이름을 사용하여 접근하면, 트래픽을 백엔드 파드(이 경우 데이터베이스)로 전달합니다.

### 서비스와 IP 할당

- 서비스는 실제 존재하지 않기 때문에 파드 네트워크에 참여할 수 없습니다.
  
  - 서비스는 파드와 같은 컨테이너가 아니므로 인터페이스나 활성 리스닝 프로세스가 없습니다.
  
  - 서비스는 쿠버네티스 메모리에서만 존재하는 가상 구성 요소입니다.

- 그러나 서비스는 클러스터의 모든 노드에서 접근 가능해야 합니다.
  
  - 이를 가능하게 하는 것이 바로 kube-proxy입니다.

### kube-proxy의 역할

- kube-proxy는 쿠버네티스 클러스터의 각 노드에서 실행되는 프로세스입니다.
  
  - 새로운 서비스가 생성될 때마다 이를 감지하고, 트래픽을 백엔드 파드로 전달하는 적절한 규칙을 각 노드에 생성합니다.
  
  - iptables 규칙을 사용하여 이를 수행합니다.
  
  - 예를 들어, 서비스의 IP(10.96.0.12)로 향하는 트래픽을 실제 파드의 IP(10.32.0.15)로 전달하는 iptables 규칙을 생성합니다.

### kube-proxy 설치

- kube-proxy 바이너리를 쿠버네티스 릴리스 페이지에서 다운로드하고, 압축을 풀고, 서비스로 실행합니다.

- kubeadm 도구는 각 노드에 kube-proxy를 파드로 배포합니다.
  
  - 사실 이는 DaemonSet으로 배포되어, 클러스터의 각 노드에 항상 하나의 파드가 배포됩니다.
  
  - DaemonSet에 대해 잘 모른다면 걱정하지 마세요. 이 강의에서 다룰 예정입니다.

### 요약

- 이 강의에서는 다양한 쿠버네티스 컨트롤 플레인 구성 요소의 고급 개요를 다루었습니다.

- 이후 강의에서 네트워킹, 서비스, kube-proxy, 파드 네트워킹 등에 대해 더 자세히 다룰 예정입니다.