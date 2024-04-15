---
title: 'GCP Cloud Engineer - 23'
subtitle: 'Essential Google Cloud Infrastructure: Mapping IP addresses'
date: '2024-04-14'
tags: [Cloud, GCP, Kubernetes]
---

### Mapping IP addresses


- ㅇ **Internal vs. External IP Addresses**:
  
  - ㅁ `External IP addresses` are `unknown` to the `VM's operating system` and are `mapped transparently` to the `VM’s internal addresses` by VPC.
  
  - ㅁ Running `ifconfig` inside a VM `only shows the internal IP address`.

- ㅇ **DNS Resolution**:
  
  - ㅁ **Internal Addresses**: Google Cloud offers `Zonal and Global DNS names`, with `zonal DNS` preferred for `higher reliability by isolating failures` to `individual zones`.
  
  - ㅁ `Instances` have `hostnames` that r`esolve to internal IP addresses`, and each instance has a `fully qualified domain name (FQDN)`.
  
  - ㅁ `DNS names` point to `specific instances` `regardless of changes` in `internal IP addresses`.

- ㅇ **External Addresses**:
  
  - ㅁ `Instances with external IP addresses` can receive `connections from outside` the project.
  
  - ㅁ `Public DNS records` for instances `are not automatically published(X)` but can be `manually set up using Cloud DNS` or `other DNS servers`.

- ㅇ **Cloud DNS**:
  
  - ㅁ `A scalable, reliable, and managed DNS service` running on Google’s infrastructure.
  
  - ㅁ Uses `Google's global Anycast name servers` for `low latency` and `high availability.`
  
  - ㅁ Offers a `100% uptime SLA` and allows for `easy management of millions of DNS records`.

- ㅇ **Alias IP Ranges**:
  
  - ㅁ Allow `assignment of a range of internal IP addresses` as `aliases` to a `VM’s network interface`, useful for `hosting multiple services` on a `single VM`.
  
  - ㅁ Supports `configuration of multiple IP addresses` without `separate network interfaces(X)` by `utilizing local subnet CIDR ranges`.

### IP 주소 매핑하기


- ㅇ **내부 IP 대 외부 IP 주소**:
  
  - ㅁ 외부 IP 주소는 VM의 운영 체제에서 인식할 수 없으며 VPC에 의해 VM의 내부 주소로 투명하게 매핑됩니다.
  
  - ㅁ VM 내부에서 `ifconfig`를 실행하면 내부 IP 주소만 표시됩니다.

- ㅇ **DNS 해상도**:
   
  - ㅁ **내부 주소**: Google Cloud는 존 DNS과 글로벌 DNS 이름을 제공하며, 각 존의 장애를 격리하여 높은 신뢰성을 제공하는 존 DNS를 선호합니다.
  
  - ㅁ 인스턴스는 내부 IP 주소로 해결되는 호스트 이름을 가지고 있으며, 각 인스턴스에는 전체 정규화 도메인 이름(FQDN)이 있습니다.
  
  - ㅁ 내부 IP 주소가 변경되어도 DNS 이름은 특정 인스턴스를 가리킵니다.

- ㅇ **외부 주소**:
  
  - ㅁ 외부 IP 주소가 있는 인스턴스는 프로젝트 외부의 호스트로부터 연결을 받을 수 있습니다.
  
  - ㅁ 인스턴스의 공개 DNS 레코드는 자동으로 게시되지 않지만 Cloud DNS 또는 기타 DNS 서버를 사용하여 수동으로 설정할 수 있습니다.

- ㅇ **클라우드 DNS**:
  
  - ㅁ Google의 인프라에서 운영되는 확장 가능하고 신뢰할 수 있는 관리 DNS 서비스입니다.
  
  - ㅁ 낮은 대기 시간과 높은 가용성을 위해 Google의 글로벌 애니캐스트 이름 서버를 사용합니다.
  
  - ㅁ 100% 가동 시간 SLA를 제공하며 수백만 DNS 레코드의 관리를 간편하게 할 수 있습니다.

- ㅇ **별칭 IP 범위**:
  
  - ㅁ VM의 네트워크 인터페이스에 별칭으로 내부 IP 주소 범위를 할당할 수 있으며, 이는 단일 VM에서 여러 서비스를 호스팅하는 데 유용합니다.
  
  - ㅁ 로컬 서브넷 CIDR 범위에서 별칭 IP 범위를 사용하여 별도의 네트워크 인터페이스 없이 여러 IP 주소를 구성할 수 있습니다.

--------------

### 모르는 단어

#### Anycast

Anycast는 네트워크 주소 지정 방식 중 하나로, 하나의 목적지 주소가 여러 노드에 할당되는 방식을 의미합니다. 

이 방식에서 데이터 패킷은 가장 가까운 또는 가장 적합한 노드(일반적으로 가장 낮은 비용, 가장 빠른 응답 시간, 가장 적은 홉 수 등의 기준에 따라)로 라우팅됩니다.

"Google's global Anycast name"에서 Anycast name은 Google의 Anycast 네트워크를 통해 라우팅되는 DNS 이름을 의미할 수 있습니다. 

Google의 Anycast 네트워크는 전 세계의 여러 위치에 분산된 서버로 구성되어 있으며, 이를 통해 사용자의 DNS 쿼리는 가장 가까운 위치의 서버로 라우팅되어 빠른 응답 시간을 제공합니다.


#### FQDN

FQDN(Fully Qualified Domain Name)은 컴퓨터나 서버의 고유한 도메인 이름을 의미합니다.

FQDN은 호스트 이름과 도메인 이름을 포함하며, 이를 통해 인터넷에서 컴퓨터나 서버를 고유하게 식별할 수 있습니다. 

예를 들어, "www.example.com"은 "www"라는 호스트 이름과 "example.com"이라는 도메인 이름을 가진 FQDN입니다.

FQDN은 DNS(Domain Name System)에서 사용되며, 사람이 읽을 수 있는 도메인 이름을 컴퓨터가 이해할 수 있는 IP 주소로 변환하는 데 사용됩니다. 

이를 통해 사용자는 웹 브라우저에 IP 주소 대신 도메인 이름을 입력하여 웹 사이트에 접속할 수 있습니다.

Google Cloud Platform(GCP)에서 Fully Qualified Domain Name(FQDN)은 일반적으로 다음과 같은 형식을 가집니다:

> [INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal

여기서:

- `[INSTANCE_NAME]`은 Compute Engine 인스턴스의 이름입니다.
- `[ZONE]`은 인스턴스가 위치한 존입니다.
- `[PROJECT_ID]`는 GCP 프로젝트의 ID입니다.

예를 들어, "my-instance"라는 이름의 인스턴스가 "us-central1-a" 존에 위치하고, 프로젝트 ID가 "my-project"인 경우, 이 인스턴스의 FQDN은 다음과 같습니다:

> my-instance.us-central1-a.c.my-project.internal

이 FQDN은 GCP의 VPC 네트워크 내에서만 접근 가능하며, 이를 통해 인스턴스에 네트워크 트래픽을 라우팅할 수 있습니다.