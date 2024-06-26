--- 
title: 'Certified Kubernetes Administration - 73'
subtitle: 'k8s / Cluster DNS'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터 내 DNS 요약

### 개요

이 강의에서는 Kubernetes 클러스터 내에서의 DNS 작동 방식을 다룹니다. DNS가 무엇인지, DNS 도구 (예: host, nslookup, dig) 및 DNS 레코드 유형 (예: A, CNAME 등)에 대해 기본적인 이해를 바탕으로 Kubernetes 클러스터에서 DNS가 어떻게 설정되고 동작하는지 알아봅니다.

### 클러스터 내 DNS 해석

Kubernetes 클러스터 내에서 DNS는 기본적으로 클러스터가 설정될 때 자동으로 배포되는 내장 DNS 서버를 통해 관리됩니다. 이 DNS 서버는 클러스터 내의 모든 파드와 서비스 간의 이름 해석을 가능하게 합니다.

### 예시

1. **파드와 서비스**
   
   - 테스트 파드: IP 10.244.1.5
   
   - 웹 서버 파드: IP 10.244.2.5
   
   - 웹 서비스: IP 10.107.37.188

2. **서비스 생성**
   
   - 웹 서비스를 생성하면 Kubernetes DNS 서비스는 이 서비스의 이름을 IP 주소와 매핑하는 DNS 레코드를 생성합니다.
   
   - 같은 네임스페이스 내에서는 서비스 이름만으로 접근이 가능합니다. (예: `web-service`)

3. **네임스페이스와 도메인**
   
   - 다른 네임스페이스에 있는 서비스를 참조하려면 네임스페이스를 포함한 전체 이름을 사용해야 합니다. (예: `web-service.apps`)
   
   - 각 네임스페이스는 서브 도메인으로 관리되며, 모든 서비스는 `svc`라는 서브 도메인에 그룹화됩니다.
   
   - 클러스터의 기본 루트 도메인은 `cluster.local`입니다.

4. **전체 도메인 이름 (FQDN)**
   
   - 서비스를 참조할 때는 전체 도메인 이름(FQDN)을 사용할 수 있습니다. 예: `web-service.apps.svc.cluster.local`

### 파드의 DNS 레코드

- 기본적으로 파드에 대한 DNS 레코드는 생성되지 않지만, 이를 명시적으로 활성화할 수 있습니다.

- 파드의 DNS 이름은 IP 주소의 점을 대시로 변환하여 생성됩니다. 예: `10-244-1-5.default.pod.cluster.local`

### 핵심 요약

- **서비스 DNS**: 서비스 생성 시 Kubernetes DNS는 서비스 이름을 IP 주소와 매핑합니다.

- **네임스페이스**: 각 네임스페이스는 서브 도메인으로 관리되며, 서비스는 `svc` 서브 도메인에 그룹화됩니다.

- **FQDN**: 전체 도메인 이름을 사용하여 서비스를 참조할 수 있습니다.

- **파드 DNS**: 기본적으로 파드의 DNS 레코드는 생성되지 않지만 활성화할 수 있으며, IP 주소를 대시로 변환하여 이름이 생성됩니다.
