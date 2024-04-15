---
title: 'GCP Cloud Engineer - 21'
subtitle: 'Essential Google Cloud Infrastructure: Virtual Private Cloud / Projects, networks, and subnetworks'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Virtual Private Cloud (VPC)


- ㅇ **Virtual Private Cloud (VPC)**: A comprehensive `set of Google-managed networking objects` that allow for the `provisioning`, `connection`, and `isolation of GCP resources`.

- ㅇ **Projects**: `Encompass(에워싸다) all services` used, `including networks`.

- ㅇ **Network Types**:
  
  - ㅁ **Default Network**: Comes `pre-configured` with `every new GCP account`.
  
  - ㅁ **Auto Mode Network**: Automatically `creates a subnetwork` in `each GCP region`.
  
  - ㅁ **Custom Mode Network**: Allows for `manual configuration of subnetworks` as needed.

- ㅇ **Subnetworks**: Used to `divide or segregate the environment` for `enhanced security` and organization.

- ㅇ **Regions and Zones**: Represent `Google's data centers`, offering `continuous data protection` and `high availability`.

- ㅇ **IP Addresses**:
  
  - Provides both `internal and external IP` addresses.
  
  - Allows for `granular(세분형) IP address range selection` within the `VPC`.

- ㅇ **Virtual Machines**: Focus on `configuring VM instances` from a `networking perspective` in this module.

- ㅇ **Routing and Firewall**: Discussion on `setting up` `routes and firewall rules` to `manage traffic flow` and `security` within the `VPC`.

### 가상 사설 클라우드(VPC)


- ㅇ **가상 사설 클라우드(VPC)**: GCP 리소스의 프로비저닝, 연결 및 격리를 가능하게 하는 Google 관리 네트워킹 객체의 포괄적인 세트입니다.

- ㅇ **프로젝트**: 사용하는 모든 서비스를 포함한 네트워크를 포괄합니다.

- ㅇ **네트워크 유형**:
  
  - ㅁ **기본 네트워크**: 모든 새 GCP 계정에 사전 구성됩니다.
  
  - ㅁ **자동 모드 네트워크**: 각 GCP 지역에 서브네트워크를 자동으로 생성합니다.
  
  - ㅁ **사용자 정의 모드 네트워크**: 필요에 따라 서브네트워크의 수동 구성을 허용합니다.

- ㅇ **서브네트워크**: 환경을 나누거나 분리하여 보안 및 조직을 강화하는 데 사용됩니다.

- ㅇ **지역 및 존**: Google의 데이터 센터를 나타내며, 지속적인 데이터 보호 및 높은 가용성을 제공합니다.

- ㅇ **IP 주소**:
  
  - 내부 및 외부 IP 주소를 제공합니다.
  
  - VPC 내에서 IP 주소 범위를 세밀하게 선택할 수 있습니다.

- ㅇ **가상 머신**: 이 모듈에서는 네트워킹 관점에서 VM 인스턴스를 구성하는 데 중점을 둡니다.

- ㅇ **라우팅 및 방화벽**: VPC 내의 트래픽 흐름 및 보안을 관리하기 위해 라우트 및 방화벽 규칙 설정에 대해 논의합니다.


--------------

### Projects, networks, and subnetworks


- ㅇ **Projects**: Serve as the `main organizational unit` for Google Cloud resources, `linking services and billing`, and can `contain multiple networks`.

- ㅇ **Network Types**:
  
  - ㅁ **Default Network**: Automatically `provided with each project`, including `pre-set subnets and firewall rules`.
  
  - ㅁ **Auto Mode Network**: Automatically `creates one subnet per region` with a `default CIDR block` that can expand from `/20 to /16`.
  
  - ㅁ **Custom Mode Network**: Offers `full control` over `subnet creation` and `IP range settings`, without `automatic subnet creation(X)`.

- ㅇ **Subnetworks**: 
  
  - Used to `segregate resources regionally` within a network.
  
  - Can `span multiple zones` within the `same region`.
  
  - Have `four reserved IP addresses` for `network gateway` and `management`.

- ㅇ **IPv6 Support**: `Available` in `custom VPC networks` for `dual-stack VM configurations`.

- ㅇ **Global Network**: `Virtual machines` within the `same network` can `communicate globally` using `internal IP` addresses, `leveraging Google's extensive fiber network`.

- ㅇ **External Communication**: `VMs in different networks` `communicate` via `external IP addresses`, routed through `Google Edge routers` without `touching the public internet(X)`.

- ㅇ **VPN Connectivity**: A `single VPN` can `connect on-premises networks securely` to Google Cloud networks `across different regions`.

- ㅇ **IP Range Expansion**: `Subnets' IP ranges` can be `expanded` without `downtime(X)`, `adhering(준수) to unique CIDR block requirements(X)` and `avoiding overlap with other subnets(X)`.

### 프로젝트, 네트워크, 서브네트워크

- ㅇ **프로젝트**: Google Cloud 리소스의 주요 조직 단위 역할을 하며, 서비스와 결제를 연결하고 여러 네트워크를 포함할 수 있습니다.

- ㅇ **네트워크 유형**:
  
  - ㅁ **기본 네트워크**: 각 프로젝트에 자동으로 제공되며, 사전 설정된 서브넷과 방화벽 규칙을 포함합니다.
  
  - ㅁ **자동 모드 네트워크**: 기본 CIDR 블록으로 각 지역에 자동으로 하나의 서브넷을 생성하며, /20에서 /16으로 확장할 수 있습니다.
  
  - ㅁ **사용자 정의 모드 네트워크**: 서브넷 생성 및 IP 범위 설정에 대한 완전한 제어를 제공하며, 자동 서브넷 생성이 없습니다.

- ㅇ **서브네트워크**:
  
  - 네트워크 내에서 지역별로 리소스를 분리하는 데 사용됩니다.
  
  - 동일 지역 내 여러 존에 걸쳐 확장할 수 있습니다.
  
  - 네트워크 게이트웨이 및 관리를 위해 4개의 IP 주소가 예약되어 있습니다.

- ㅇ **IPv6 지원**: 사용자 정의 VPC 네트워크에서 이중 스택 VM 구성을 위해 사용 가능합니다.

- ㅇ **글로벌 네트워크**: 동일 네트워크 내 가상 머신은 Google의 광범위한 광섬유 네트워크를 활용하여 전 세계적으로 내부 IP 주소를 사용하여 통신할 수 있습니다.

- ㅇ **외부 통신**: 다른 네트워크의 VM들은 외부 IP 주소를 통해 통신하며, 공공 인터넷을 통하지 않고 Google 엣지 라우터를 통해 라우팅됩니다.

- ㅇ **VPN 연결**: 단일 VPN은 다른 지역에 있는 온프레미스 네트워크를 Google Cloud 네트워크에 안전하게 연결할 수 있습니다.

- ㅇ **IP 범위 확장**: 서브넷의 IP 범위를 중단 없이 확장할 수 있으며, 고유한 CIDR 블록 요구 사항을 준수하고 다른 서브넷과의 중복을 피해야 합니다.


--------------

### 모르는 단어

#### Provisioning

"Provisioning"은 IT 용어로, 필요한 시스템 리소스를 배포하고 관리하는 과정을 의미합니다.

"Network provisioning"은 네트워크 리소스를 설정하고 배포하는 것을 말합니다. 

이는 네트워크 장치의 구성, IP 주소의 할당, 네트워크 서비스의 활성화 등을 포함할 수 있습니다.

예를 들어, 클라우드 환경에서의 network provisioning은 가상 네트워크, 서브넷, IP 주소, 라우팅 규칙, 방화벽 규칙 등의 네트워크 리소스를 생성하고 설정하는 것을 포함할 수 있습니다. 

이는 사용자가 클라우드 환경에서 필요한 네트워크 구조를 빠르게 설정하고, 필요에 따라 쉽게 변경하거나 확장할 수 있게 해줍니다.


#### IPv4 vs IPv6


IPv4와 IPv6는 인터넷 프로토콜(IP)의 두 가지 버전으로, 인터넷에서 데이터를 전송하는 데 사용되는 주소 체계를 정의합니다. 

**이 두 버전의 주요 차이점은 다음과 같습니다:**

**1. 주소 공간**: 

IPv4는 32비트 주소를 사용하여 약 43억 개의 고유한 주소를 제공합니다. 

반면에 IPv6는 128비트 주소를 사용하여 거의 무한한 수의 주소를 제공합니다. 

이는 IPv4 주소가 부족해지는 문제를 해결합니다.
    
**2. 주소 표현**: 

IPv4 주소는 점으로 구분된 4개의 10진수로 표현되며, 

예를 들어 "192.168.0.1"과 같습니다. 

반면에 IPv6 주소는 콜론으로 구분된 8개의 16진수로 표현되며, 

예를 들어 "2001:0db8:85a3:0000:0000:8a2e:0370:7334"와 같습니다.
    
**3. 보안**: 

IPv6는 기본적으로 IPsec라는 보안 메커니즘을 지원합니다. 

이는 데이터의 무결성, 기밀성, 인증을 제공합니다. 

반면에 IPv4에서는 IPsec는 선택적이며, 일반적으로 VPN과 같은 특정 애플리케이션에서만 사용됩니다.
    
**4. 헤더 구조**: 

IPv6의 헤더 구조는 IPv4보다 간단하며, 라우팅 효율성을 향상시킵니다.
    
**5. 자동 구성**: 

IPv6는 주소를 자동으로 구성하는 기능을 내장하고 있습니다.

이는 네트워크 장치의 설정을 단순화하고 자동화합니다.

#### CIDR 

CIDR(Classless Inter-Domain Routing)는 IP 주소를 효율적으로 할당하고 라우팅 정보를 전파하는 방법입니다.

CIDR는 IP 주소와 함께 "슬래시"(/) 뒤에 숫자를 사용하여 네트워크의 일부를 나타냅니다. 

이 숫자는 IP 주소의 네트워크 부분에 해당하는 비트 수를 나타냅니다. 

예를 들어, "192.0.2.0/24"는 192.0.2.0부터 192.0.2.255까지의 IP 주소를 포함하는 네트워크를 나타냅니다.

CIDR는 IP 주소 공간을 더 세밀하게 분할할 수 있게 해주므로, IP 주소의 낭비를 줄이고 라우팅 테이블의 크기를 줄일 수 있습니다. 

이는 특히 IPv4 주소 공간이 부족해지는 현재 상황에서 중요합니다.

#### Dual-stack VM configurations

"Dual-stack VM configurations"는 가상 머신(VM)이 IPv4와 IPv6 두 가지 인터넷 프로토콜을 동시에 지원하는 설정을 의미합니다.

이 설정을 사용하면, VM은 IPv4와 IPv6 네트워크 모두와 통신할 수 있습니다. 

이는 IPv6를 지원하는 네트워크와 통신할 수 있으면서도, 아직 IPv4를 사용하는 기존 시스템과의 호환성을 유지할 수 있게 해줍니다.

따라서 "dual-stack VM configurations"는 IPv6로의 전환을 준비하면서도, 현재의 IPv4 기반 인프라와의 연결성을 유지하려는 조직에 유용한 옵션입니다.

#### VPN

VPN(Virtual Private Network)은 인터넷을 통해 가상의 네트워크 연결을 생성하는 기술을 의미합니다.

VPN은 사용자의 컴퓨터나 네트워크와 원격 네트워크 사이에 암호화된 "터널"을 만들어, 안전하게 데이터를 전송할 수 있게 해줍니다. 

이를 통해 사용자는 원격 네트워크에 있는 자원을 마치 로컬 네트워크에 있는 것처럼 사용할 수 있습니다.

VPN은 특히 공용 네트워크를 통해 중요한 데이터를 전송해야 하는 경우나, 원격에서 사내 네트워크에 접근해야 하는 경우에 유용합니다. 

이는 데이터의 기밀성, 무결성, 가용성을 보장하며, 사용자의 인터넷 트래픽을 보호합니다.