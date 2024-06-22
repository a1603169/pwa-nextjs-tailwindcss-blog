--- 
title: 'Certified Kubernetes Administration - 58'
subtitle: 'k8s / Network Policy'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### 네트워크와 보안의 기본 개념

- **네트워크 트래픽**:

  - **Ingress 트래픽**: 외부에서 내부로 들어오는 트래픽

  - **Egress 트래픽**: 내부에서 외부로 나가는 트래픽

### 네트워크 트래픽 흐름 예시

- **웹 애플리케이션**:

  - 사용자 -> 웹 서버(포트 80)

  - 웹 서버 -> API 서버(포트 5000)

  - API 서버 -> 데이터베이스 서버(포트 3306)

### Kubernetes에서 네트워크 보안

- **기본 설정**: 기본적으로 모든 파드는 다른 모든 파드와 서비스와 통신할 수 있습니다.

- **네트워크 정책(Network Policy)**: 특정 파드에 대한 트래픽을 제한하기 위해 네트워크 정책을 사용합니다.

### 네트워크 정책 예시

1. **웹 서버와 데이터베이스 서버**:

   - 웹 서버와 데이터베이스 서버 간의 직접적인 통신을 차단하고, API 서버를 통해서만 접근하도록 설정

   - 네트워크 정책을 통해 데이터베이스 서버는 API 서버에서 오는 트래픽만 허용

2. **네트워크 정책 정의**:

   - 네트워크 정책 객체를 정의하고 이를 파드에 연결

   - **예시 네트워크 정책 정의**:
     ```yaml
     apiVersion: networking.k8s.io/v1
     kind: NetworkPolicy
     metadata:
       name: db-policy
     spec:
       podSelector:
         matchLabels:
           role: db
       policyTypes:
       - Ingress
       ingress:
       - from:
         - podSelector:
             matchLabels:
               role: api
         ports:
         - protocol: TCP
           port: 3306
     ```

   - **설명**:

     - `podSelector`는 정책이 적용될 파드를 선택합니다.

     - `policyTypes`는 트래픽 유형을 정의합니다(예: Ingress, Egress).

     - `ingress` 섹션은 API 서버에서 오는 트래픽만 허용하도록 설정합니다.

### 네트워크 정책 지원 네트워크 솔루션

- **지원 솔루션**: Kube Router, Calico, Romana, WaveNet

- **비지원 솔루션**: Flannel

### 네트워크 정책 고급 사용 예

1. **Namespace Selector**:

   - 여러 네임스페이스에 동일한 라벨을 가진 API 파드가 있을 때, 특정 네임스페이스의 파드만 접근 허용

   - 예시:
     ```yaml
     from:
     - podSelector:
         matchLabels:
           role: api
       namespaceSelector:
         matchLabels:
           env: prod
     ```

2. **IP Block**:

   - 클러스터 외부의 특정 IP 주소에서 오는 트래픽을 허용

   - 예시:
     ```yaml
     from:
     - ipBlock:
         cidr: 192.168.5.10/32
     ```

3. **Egress**:

   - 데이터베이스 파드에서 외부 백업 서버로의 트래픽을 허용

   - 예시:
     ```yaml
     policyTypes:
     - Egress
     egress:
     - to:
       - ipBlock:
           cidr: 192.168.5.10/32
       ports:
       - protocol: TCP
         port: 80
     ```

### 요약

- 네트워크 정책은 Kubernetes에서 파드 간의 트래픽을 제어하는 데 사용됩니다.

- 기본적으로 모든 파드 간의 트래픽이 허용되며, 네트워크 정책을 통해 이를 제한할 수 있습니다.

- 네트워크 정책은 Ingress 및 Egress 트래픽을 제어할 수 있습니다.

- 다양한 셀렉터(예: podSelector, namespaceSelector, ipBlock)를 사용하여 세부적인 정책을 정의할 수 있습니다.
