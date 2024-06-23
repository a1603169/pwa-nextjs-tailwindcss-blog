--- 
title: 'Certified Kubernetes Administration - 74'
subtitle: 'k8s / DNS with k8s'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터 내 DNS 설정

### 개요

이 강의에서는 Kubernetes 클러스터 내에서 DNS가 어떻게 구현되고 설정되는지에 대해 알아봅니다. 이전 강의에서는 서비스와 파드 간의 DNS 해석 방법을 배웠고, 이번 강의에서는 Kubernetes가 이를 어떻게 가능하게 하는지에 대해 설명합니다.

### DNS 구현

- Kubernetes는 클러스터 내에 DNS 서버를 배포하여 파드와 서비스 간의 이름 해석을 관리합니다.

- Kubernetes 1.12 버전 이전에는 `kube-dns`가 사용되었고, 이후 버전에서는 `CoreDNS`가 권장됩니다.

- `CoreDNS` 서버는 `kube-system` 네임스페이스 내에 파드로 배포됩니다. 일반적으로 두 개의 파드로 구성되어 고가용성을 보장합니다.

### CoreDNS 설정

- `CoreDNS`는 `Corefile`이라는 구성 파일을 사용합니다.

- 이 파일에는 여러 플러그인이 설정되어 있으며, 중요한 플러그인은 `kubernetes` 플러그인입니다.
  
  - 이 플러그인은 클러스터의 최상위 도메인 이름을 설정합니다 (예: `cluster.local`).
  
  - `pods` 옵션은 기본적으로 비활성화되어 있지만, 이를 활성화하면 IP 주소를 대시 형식으로 변환하여 파드에 대한 레코드를 생성합니다.

### DNS 서버와 파드의 연결

- `CoreDNS`는 클러스터 내의 새로운 파드나 서비스가 생성될 때마다 해당 항목에 대한 레코드를 데이터베이스에 추가합니다.

- `CoreDNS` 솔루션을 배포할 때, 다른 구성 요소가 이를 사용할 수 있도록 `KubeDNS`라는 이름의 서비스가 생성됩니다.

- 이 서비스의 IP 주소가 파드의 `etc/resolv.conf` 파일에 네임서버로 설정됩니다.

- 파드가 생성될 때, `kubelet`이 이 DNS 설정을 자동으로 구성합니다.

### DNS 조회

- 서비스 접근 예시: `web-service`, `web-service.default`, `web-service.default.svc`, `web-service.default.svc.cluster.local`

- `resolv.conf` 파일에는 검색 항목 (`search entries`)이 설정되어 있어, 간단한 이름으로도 전체 FQDN을 찾을 수 있게 합니다.

- 그러나, 파드에 대한 DNS 조회는 전체 FQDN을 사용해야 합니다.

### 핵심 요약

1. **CoreDNS 배포**: Kubernetes 1.12 버전 이후 권장되는 DNS 서버로, `kube-system` 네임스페이스 내에 파드로 배포됩니다.

2. **Corefile**: CoreDNS 설정 파일로, 여러 플러그인이 포함되어 있으며 `kubernetes` 플러그인이 중요합니다.

3. **DNS 서비스**: `KubeDNS`라는 서비스가 생성되어 파드의 `resolv.conf` 파일에 네임서버로 설정됩니다.

4. **kubelet**: 파드 생성 시 DNS 설정을 자동으로 구성하는 Kubernetes 구성 요소입니다.

5. **DNS 조회**: 서비스는 다양한 형식의 이름으로 조회할 수 있으며, 전체 FQDN을 반환합니다.
