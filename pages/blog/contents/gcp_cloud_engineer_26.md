---
title: 'GCP Cloud Engineer - 26'
subtitle: 'Essential Google Cloud Infrastructure: Common Network Designs'
date: '2024-04-15'
tags: [Cloud, GCP]
---

### Common Network Designs (일반 네트워크 디자인)

1. ㅇ **Increased Availability with Multiple Zones**
   
   - ㅁ **English**: If your application `needs increased availability`, you can `place two virtual machines` into `multiple zones`, but within the `same subnet`. This setup `improves availability` without `adding security complexity(X)`.
   
   - ㅁ **Korean**: 애플리케이션이 높은 가용성을 요구할 경우, 동일 서브넷 내 여러 존에 두 개의 가상 머신을 배치할 수 있습니다. 이 구성은 보안의 복잡성을 증가시키지 않으면서 가용성을 향상시킵니다.

2. ㅇ **Globalization and Resource Distribution**
   
   - ㅁ **English**: Placing `resources in different regions` increases `failure independence` and allows for the `design of robust systems` with `resources spread` across different failure domains.
   
   - ㅁ **Korean**: 자원을 다양한 지역에 배치함으로써 실패 독립성을 높이고 다양한 실패 도메인에 걸쳐 자원을 분산시킨 견고한 시스템을 설계할 수 있습니다.

3. ㅇ **HTTP Load Balancer for Global Traffic Management**
   
   - ㅁ **English**: Using a `global load balancer`, such as the `HTTP load balancer`, helps `route traffic to the region closest to the user`, `improving latency` and `reducing network traffic costs`.
   
   - ㅁ **Korean**: HTTP 로드 밸런서와 같은 글로벌 로드 밸런서를 사용하면 사용자와 가장 가까운 지역으로 트래픽을 라우팅하여 지연 시간을 개선하고 네트워크 트래픽 비용을 절감할 수 있습니다.

4. ㅇ **Cloud NAT for Securing VPC Networks**
   
   - ㅁ **English**: `Cloud NAT` allows `private instances to access the internet` for `updates and other needs` without `public IP addresses(X)`, `enhancing security` by `blocking inbound connections`.
   
   - ㅁ **Korean**: Cloud NAT는 공용 IP 주소 없이 개인 인스턴스가 업데이트 및 기타 요구 사항을 위해 인터넷에 접근할 수 있게 하여, 들어오는 연결을 차단함으로써 보안을 강화합니다.

5. ㅇ **Private Google Access for Internal-only VMs**
   
   - ㅁ **English**: `Private Google access` enables `VMs with only internal IP addresses to access Google APIs and services`. It needs to `be enabled` on a `subnet-by-subnet basis`.
   
   - ㅁ **Korean**: 내부 IP 주소만 있는 VM이 Google API 및 서비스에 접근할 수 있게 해주는 Private Google access는 서브넷별로 활성화해야 합니다.

6. ㅇ **Selective Access Based on Subnet Settings**
   
   - ㅁ **English**: The `access` to `Google APIs` and `services` is `conditional` based on the `subnet settings`; some `VMs may have access` `while others may not`, depending on their `subnet’s configuration`.
   
   - ㅁ **Korean**: Google API 및 서비스에 대한 접근은 서브넷 설정에 따라 조건부로 제공됩니다; 일부 VM은 접근할 수 있지만 다른 VM은 서브넷 구성에 따라 접근할 수 없을 수 있습니다.


### 틀린 문제

<img class='blogImage' src='/blog/network_wrong_q.png'>

### 추가 자료

#### IAP 터널링

IAP(Identity-Aware Proxy) 터널링은 Google Cloud Platform(GCP)에서 제공하는 기능으로, 사용자가 인터넷을 통해 GCP 리소스에 안전하게 액세스할 수 있게 해줍니다.

IAP는 VPN을 사용하지 않고도 GCP의 VM 인스턴스에 안전하게 SSH 또는 RDP 연결을 설정할 수 있게 해줍니다. 

이는 IAP가 사용자의 신원을 확인하고 해당 사용자가 요청한 리소스에 액세스할 권한이 있는지 확인하기 때문입니다.

IAP 터널링을 사용하려면, 먼저 GCP 콘솔에서 IAP API를 활성화하고, IAP에 대한 액세스 권한을 설정해야 합니다. 

그런 다음 gcloud 명령줄 도구를 사용하여 SSH 또는 RDP 연결을 설정할 수 있습니다. 이 연결은 IAP 터널을 통해 전송되며, 

이 터널은 사용자와 VM 인스턴스 사이에 암호화된 "터널"을 생성하여 데이터를 안전하게 전송합니다.

#### RDP

RDP(Remote Desktop Protocol)는 마이크로소프트가 개발한 프로토콜로, 네트워크를 통해 원격 컴퓨터에 대한 그래픽 인터페이스를 제공합니다.

RDP를 사용하면 사용자는 원격 위치에서 로컬 컴퓨터처럼 원격 컴퓨터를 제어할 수 있습니다. 

이는 원격 관리, 원격 작업, 원격 교육 등 다양한 상황에서 유용합니다.

RDP는 기본적으로 TCP/IP를 사용하며, 보안을 위해 SSL/TLS 또는 네트워크 레벨 인증을 사용할 수 있습니다. 

또한, RDP는 다양한 기능을 지원하며, 이에는 화면 공유, 파일 전송, 오디오/비디오 스트리밍, USB 장치 리디렉션 등이 포함됩니다.

Google Cloud Platform(GCP)에서는 Windows 기반의 가상 머신(VM)에 대해 원격 데스크톱 프로토콜(RDP)을 사용하여 액세스할 수 있습니다.

RDP를 사용하면 사용자는 원격 위치에서 GCP의 Windows VM을 로컬 컴퓨터처럼 제어할 수 있습니다. 

이는 원격 관리, 원격 작업, 원격 교육 등 다양한 상황에서 유용합니다.

GCP에서 RDP를 사용하려면, 먼저 Windows VM을 생성하고, RDP를 위한 네트워크 방화벽 규칙을 설정해야 합니다. 

그런 다음, Windows VM의 공용 IP 주소와 Windows 사용자 계정을 사용하여 RDP 클라이언트에서 연결을 설정할 수 있습니다.

또한, GCP는 IAP(Identity-Aware Proxy)를 통한 RDP 연결도 지원합니다. IAP를 사용하면, 사용자는 인터넷을 통해 VM에 안전하게 RDP 연결을 설정할 수 있습니다. 

이는 VPN을 사용하지 않고도 VM에 안전하게 액세스할 수 있게 해줍니다.