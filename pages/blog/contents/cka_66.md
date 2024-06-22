--- 
title: 'Certified Kubernetes Administration - 66'
subtitle: 'k8s / Docker Networking & CNI(Container Networking Interface)'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---


### Docker 네트워킹 옵션

1. **None 네트워크**: 
   
   - 컨테이너가 네트워크에 연결되지 않음.
   
   - 외부와 통신 불가.

2. **Host 네트워크**: 
   
   - 컨테이너가 호스트 네트워크에 연결.
   
   - 네트워크 격리 없음.
   
   - 동일한 포트로 여러 컨테이너 실행 불가.

3. **Bridge 네트워크**:
   
   - 내부 프라이빗 네트워크 생성.
   
   - 컨테이너와 Docker 호스트가 이 네트워크에 연결됨.
   
   - 컨테이너 간 통신 가능.

### Bridge 네트워크 상세

- Docker는 기본적으로 `Bridge` 네트워크를 만듦.

- 호스트에서는 이 네트워크가 `docker0` 인터페이스로 나타남.

- 네임스페이스를 생성하고 가상 케이블로 연결.

### 포트 매핑

- 외부에서 컨테이너 애플리케이션에 접근하기 위해 포트 매핑 설정.

- 예: `docker run -p 8080:80` 명령어로 Docker 호스트의 포트 8080을 컨테이너의 포트 80으로 매핑.

### CNI (Container Networking Interface)

- 여러 컨테이너 런타임 환경에서 일관된 네트워킹 표준 제공.

- 네트워크 네임스페이스를 생성하고, 네트워크 플러그인을 호출하여 네트워크 설정.

- 주요 플러그인: Bridge, VLAN, IP VLAN, MAC VLAN 등.

- Kubernetes는 CNI를 사용하여 네트워킹 설정.

### 주요 CNI 명령어 및 설정

1. **네임스페이스 생성**: `ip netns add`

2. **인터페이스 생성**: `ip link add`

3. **IP 할당 및 인터페이스 활성화**: `ip addr`, `ip link set`

4. **라우팅 추가**: `ip route add`

5. **NAT 설정**: `iptables`

### 요약

- Docker의 다양한 네트워킹 옵션과 그 동작 방식을 이해.

- Bridge 네트워크를 통해 컨테이너 간의 통신 설정.

- CNI를 사용하여 일관된 네트워킹 설정 및 관리.

- Kubernetes에서 CNI를 사용하여 네트워킹 구성.