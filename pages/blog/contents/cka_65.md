--- 
title: 'Certified Kubernetes Administration - 65'
subtitle: 'k8s / Switching Routing & DNS & CoreDNS & Network Namespaces'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### 네트워크 기본 개념

### 네트워크 구성

- **스위치**: 동일 네트워크 내의 시스템 간 통신 가능.

- **라우터**: 서로 다른 네트워크 연결 가능.

- **게이트웨이**: 네트워크 외부로 나가는 문 역할.

### 기본 네트워크 명령어

- **인터페이스 확인**: `ip link`

- **IP 주소 설정**: `ip addr`

- **라우팅 테이블 보기**: `route`

- **라우트 추가**: `ip route add`

- **IP 포워딩 설정**: `/proc/sys/net/ipv4/ip_forward`

### DNS 구성

- **로컬 호스트 파일**: `/etc/hosts`
  
  - 호스트명과 IP 주소 매핑.

- **DNS 서버**: `/etc/resolv.conf` 파일에 DNS 서버 주소 설정.

- **네임 서버 순서**: `/etc/nsswitch.conf` 파일에서 설정.

- **DNS 레코드 타입**: A, AAAA, CNAME

### 주요 DNS 명령어

- **DNS 확인**: `nslookup`, `dig`

### CoreDNS 설정

1. **CoreDNS 설치**: GitHub에서 바이너리 다운로드.

2. **CoreDNS 실행**: 기본 포트 53에서 DNS 서버 실행.

3. **DNS 엔트리 설정**: `/etc/hosts` 파일을 사용하여 IP와 호스트명 매핑.

4. **Corefile 설정**: CoreDNS가 `/etc/hosts` 파일을 사용하도록 설정.

### 네트워크 네임스페이스

- **네임스페이스 생성**: `ip netns add`

- **네임스페이스 목록 보기**: `ip netns`

- **네임스페이스 내부에서 명령 실행**: `ip netns exec <네임스페이스명> <명령어>`

- **네임스페이스 간 연결**: 가상 이더넷 페어(veth) 사용.

- **가상 네트워크 브리지**: Linux Bridge 생성하여 네임스페이스 연결.

### 네임스페이스 네트워크 구성

- **네임스페이스에 IP 할당**: `ip addr`

- **인터페이스 활성화**: `ip link set`

- **네트워크 라우팅 추가**: `ip route add`

- **IP 테이블 NAT 설정**: `iptables`를 사용하여 NAT 설정.

### 퍼시스턴트 볼륨(Persistent Volume, PV) 및 퍼시스턴트 볼륨 클레임(Persistent Volume Claim, PVC)

- **PV 생성**: 중앙 집중식 스토리지 풀 구성.

- **PVC 생성**: PV에서 스토리지 요청.

- **PVC를 Pod에 사용**: Pod 정의 파일에서 PVC를 볼륨으로 사용.

### 스토리지 클래스

- **스토리지 클래스 생성**: 동적 프로비저닝을 위해 스토리지 클래스 정의.

- **PVC에서 스토리지 클래스 사용**: PVC 정의 파일에서 스토리지 클래스 이름 지정. 

### 주요 내용 요약

- 네트워크 구성 및 DNS 설정 방법 이해.

- CoreDNS를 사용한 DNS 서버 설정.

- 네트워크 네임스페이스를 통해 격리된 네트워크 환경 구성.

- 퍼시스턴트 볼륨 및 클레임을 통해 중앙 집중식 스토리지 관리.

- 스토리지 클래스를 사용한 동적 스토리지 프로비저닝.