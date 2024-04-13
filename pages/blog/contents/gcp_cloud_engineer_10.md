---
title: 'GCP Cloud Engineer - 10'
subtitle: 'Introducting Google Cloud - Connecting networks to Google VPC'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Connecting networks to Google VPC 


- ㅇ **Cloud VPN**: Use Cloud VPN `to create a secure tunnel` over the internet to connect Google Virtual Private Cloud `(VPC) networks` with `on-premises` or `other cloud networks`.

- ㅇ **Cloud Router**: `Enhances Cloud VPN` by enabling `dynamic route exchange` using the `Border Gateway Protocol`, `automatically updating routes` when `new subnets are added` to Google VPC.

- ㅇ **Direct Peering**: `Establishes direct network connections with Google` by `placing a router in the same public data center` as a Google point of presence, `allowing traffic exchange` without a Google Service Level Agreement (SLA).

- ㅇ **Carrier Peering**: `Provides direct access to Google Workspace and Google Cloud products via a service provider's network`, `beneficial` for customers `not at a Google point of presence`.

- ㅇ **Dedicated Interconnect**: `Offers private direct connections to Google`, which can be `SLA-backed up to 99.99`%, and can `be complemented(보완되다) by a VPN` for `enhanced reliability`.

- ㅇ **Partner Interconnect**: `Connects an on-premises network with a Google VPC` via a `service provider`, suitable for `locations without access to a Dedicated Interconnect` or `lower data needs`. **(Mission Critical Service or Application that can tolerate the Downtime)**

- ㅇ **Cross-Cloud Interconnect**: `Facilitates high-bandwidth(대역폭) connectivity between Google Cloud and other cloud service providers`, supporting `multicloud strategies` and available in `10 Gbps or 100 Gbps` options.

### Google VPC로 네트워크 연결

- ㅇ **클라우드 VPN**: 인터넷을 통해 구글 가상 사설 클라우드(VPC) 네트워크와 온프레미스 또는 다른 클라우드 네트워크를 연결하는 안전한 터널을 생성하기 위해 클라우드 VPN을 사용합니다.

- ㅇ **클라우드 라우터**: 국경 게이트웨이 프로토콜(Border Gateway Protocol)을 사용하여 동적 경로 교환을 가능하게 하여, Google VPC에 새로운 서브넷이 추가될 때 자동으로 경로를 업데이트합니다.

- ㅇ **직접 피어링**: 구글 존재 지점과 같은 공공 데이터 센터에 라우터를 배치하여 Google과 직접 네트워크 연결을 설정하고, Google 서비스 수준 계약(SLA) 없이 트래픽을 교환합니다.

- ㅇ **캐리어 피어링**: 서비스 제공업체의 네트워크를 통해 구글 워크스페이스와 구글 클라우드 제품에 직접 액세스를 제공하며, Google 존재 지점이 없는 고객에게 유용합니다.

- ㅇ **전용 인터커넥트**: Google과의 개인적이고 직접적인 연결을 제공하며, 최대 99.99%까지 SLA 보장을 받을 수 있고, 신뢰성을 높이기 위해 VPN으로 보완할 수 있습니다.

- ㅇ **파트너 인터커넥트**: 서비스 제공업체를 통해 온프레미스 네트워크와 Google VPC를 연결하며, 전용 인터커넥트에 접근할 수 없는 위치나 데이터 요구가 적은 경우에 적합합니다. (예: 미션 크리티컬 서비스 혹은 다운타임을 감안 할 수 있는 앱)

- ㅇ **크로스 클라우드 인터커넥트**: 구글 클라우드와 다른 클라우드 서비스 제공업체 간의 고대역폭 연결을 지원하여, 멀티클라우드 전략을 지원하고 10 Gbps 또는 100 Gbps 옵션으로 제공됩니다.

-------------

### 틀린 문제

<img class='blogImage' src='/blog/rule_for_ping_t.png'>

------------------

### 모르는 단어

#### Boarder Gateway Protocol (BGP)

Border Gateway Protocol (BGP)은 인터넷에서 정보를 교환하는 데 사용되는 주요 라우팅 프로토콜입니다. BGP는 서로 다른 네트워크 (일반적으로는 서로 다른 인터넷 서비스 제공자(ISP)의 네트워크) 간에 정보를 교환하는 데 사용됩니다.

BGP는 네트워크 상태에 대한 정보를 교환하고, 이 정보를 기반으로 최적의 경로를 결정합니다. 이는 각 BGP 스피커가 자신의 네트워크에 대한 정보를 다른 BGP 스피커에게 알리고, 이 정보를 사용하여 전체 인터넷의 최적의 경로를 계산하는 방식으로 작동합니다.

BGP는 인터넷의 규모와 복잡성을 관리하는 데 필수적인 프로토콜로, 인터넷의 기본 구조를 형성하는 데 중요한 역할을 합니다.

#### Point of Presence (PoP)

Point of Presence (PoP)는 특정 지리적 위치에서 인터넷에 접근할 수 있는 물리적인 접근 지점을 말합니다.

인터넷 서비스 제공자(ISP)는 여러 PoP를 통해 고객에게 서비스를 제공합니다. 각 PoP는 네트워크 장비, 서버, 라우터 등을 포함하며, 이를 통해 사용자는 인터넷에 연결할 수 있습니다.

클라우드 서비스 제공자의 경우, PoP는 사용자가 클라우드 서비스에 더 빠르게 접근할 수 있도록 지역적으로 서비스를 제공하는 데 사용됩니다. 이는 네트워크 지연 시간을 줄이고, 서비스의 성능을 향상시키는 데 도움이 됩니다.

#### subnet 정의 

서브넷(Subnet)은 IP 네트워크의 하위 세그먼트를 말합니다. 큰 네트워크를 더 작은 네트워크로 나누는 것을 서브네팅이라고 하며, 이는 IP 주소 공간을 효율적으로 관리하고, 네트워크 트래픽을 분리하여 성능과 보안을 향상시키는 데 도움이 됩니다.

서브넷은 일반적으로 하나의 지역 내에서 여러 존을 포괄할 수 있습니다. 각 서브넷은 고유한 IP 주소 범위를 가지며, 이 범위 내의 IP 주소는 해당 서브넷에 속한 장치에 할당됩니다.

서브넷은 라우터에 의해 서로 구분되며, 라우터는 서브넷 간의 통신을 제어합니다. 이를 통해 네트워크 관리자는 특정 서브넷에 대한 접근을 제한하거나, 서브넷 간의 트래픽을 제어할 수 있습니다.

#### SLA (Service Level Agreement)

SLA(Service Level Agreement)는 서비스 제공자와 고객 간에 서비스 수준에 대해 합의한 계약입니다.

이 계약은 서비스의 품질, 가용성, 응답 시간 등을 명시하며, 이러한 항목들이 충족되지 않을 경우의 보상 방안을 포함할 수 있습니다.

예를 들어, 클라우드 서비스 제공자의 SLA는 일반적으로 서비스의 가용성을 백분율로 표시하며, 서비스 중단 시간에 대한 보상을 제공합니다. 이는 고객이 서비스의 품질을 이해하고, 서비스 제공자가 약속한 서비스 수준을 유지하는 데 도움이 됩니다.


#### Mission Critical Service 

Mission Critical 서비스는 조직의 핵심 업무 수행에 필수적인 서비스를 말합니다. 이러한 서비스는 조직의 기본적인 기능을 유지하고, 목표를 달성하는 데 중요한 역할을 합니다.

Mission Critical 서비스가 중단되면, 조직의 운영에 심각한 영향을 미칠 수 있습니다. 예를 들어, 은행의 경우 온라인 뱅킹 시스템, 거래 처리 시스템 등이 Mission Critical 서비스에 해당할 수 있습니다. 이러한 시스템이 중단되면 고객 서비스에 큰 영향을 미치고, 은행의 신뢰성을 손상시킬 수 있습니다.

따라서, Mission Critical 서비스는 높은 가용성과 신뢰성이 필요하며, 이를 위해 장애 복구 계획, 백업 솔루션, 높은 SLA(Service Level Agreement) 등이 필요할 수 있습니다.