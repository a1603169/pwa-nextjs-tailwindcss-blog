---
title: 'GCP Cloud Engineer - 9'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Cloud Load Balancing / Cloud DNS and Cloud CDN'
date: '2024-04-13'
tags: [Cloud, GCP]
---


### Cloud Load Balancing


- ㅇ **Purpose of Load Balancing**: `Distributes user traffic` across `multiple instances` of an application `to reduce performance issues` and `ensure smooth operation`.

- ㅇ **Types of Traffic Supported**: Cloud Load Balancing can `handle HTTP, HTTPS, TCP, SSL, and UDP traffic`.

- ㅇ **No Pre-Warming Required**: The system `automatically adjusts` to `traffic spikes` without needing prior notification.

- ㅇ **Cross-Region Load Balancing**: Offers `global HTTP(S) load balancing` for `web applications` and `automatic multi-region failover` to `handle backend failures` smoothly.

- ㅇ **Specialized Proxy Services**: Includes `Global SSL Proxy` and `Global TCP Proxy load balancers`, which are specific to `certain types of traffic and TCP port numbers`.

- ㅇ **Regional Load Balancing**: For `non-global traffic` such as `UDP` or any traffic over `specific port numbers`, use the `Regional External Passthrough(통과하는) Network load balancer`.

- ㅇ **Additional Regional Options**: `Regional External Application load balancer` and `Proxy Network load balancer` are available for `internet-facing traffic`.

- ㅇ **Internal Load Balancing**: For `traffic within a project`, such as `between different layers of an application`, use the `Regional Internal load balancer`.

- ㅇ **Cross-Region Internal Load Balancing**: The Google Cloud **Cross-region Internal load balancer** is a `Layer 7 solution` that manages `traffic to globally distributed backend services`.

### 클라우드 로드 밸런싱

- ㅇ **로드 밸런싱의 목적**: 애플리케이션의 여러 인스턴스에 사용자 트래픽을 분산하여 성능 문제를 줄이고 원활한 운영을 보장합니다.

- ㅇ **지원하는 트래픽 유형**: 클라우드 로드 밸런싱은 HTTP, HTTPS, TCP, SSL, UDP 트래픽을 처리할 수 있습니다.

- ㅇ **사전 예열 필요 없음**: 시스템은 트래픽 급증에 자동으로 조정되므로 사전 통지가 필요 없습니다.

- ㅇ **크로스 리전 로드 밸런싱**: 웹 애플리케이션을 위한 글로벌 HTTP(S) 로드 밸런싱과 백엔드 장애 발생 시 원활하게 처리할 수 있는 자동 다중 리전 페일오버를 제공합니다.

- ㅇ **특화된 프록시 서비스**: 특정 트래픽 유형과 TCP 포트 번호에 맞춰 제공되는 글로벌 SSL 프록시 및 TCP 프록시 로드 밸런서를 포함합니다.

- ㅇ **지역 로드 밸런싱**: 글로벌 트래픽이 아닌 UDP 또는 특정 포트 번호를 사용하는 트래픽의 경우, 지역 외부 패스스루 네트워크 로드 밸런서를 사용합니다.

- ㅇ **추가 지역 옵션**: 지역 외부 애플리케이션 로드 밸런서 및 프록시 네트워크 로드 밸런서가 인터넷 향 트래픽에 사용할 수 있습니다.

- ㅇ **내부 로드 밸런싱**: 프로젝트 내의 트래픽, 예를 들어 애플리케이션의 다양한 레이어 간의 트래픽을 위해 지역 내부 로드 밸런서를 사용합니다.

- ㅇ **크로스 리전 내부 로드 밸런싱**: Google Cloud 크로스 리전 내부 로드 밸런서는 전 세계적으로 분산된 백엔드 서비스로의 트래픽을 관리하는 7계층 솔루션입니다.

---------

### Cloud DNS and Cloud CDN

- ㅇ **8.8.8.8 DNS Service**: Google provides a `public Domain Name Service (DNS)` at 8.8.8.8, `offering a free, reliable DNS resolution service` that helps `translate internet hostnames into addresses`.

- ㅇ **Google Cloud DNS**: A `managed DNS service` that runs on `Google’s infrastructure`, designed to `offer low latency and high availability` for applications built in Google Cloud.

- ㅇ **Scalability and Programmability**: Cloud DNS allows the `management and publication of millions of DNS zones and records` through the **Cloud Console**, **CLI**, or **API**.

- ㅇ **Global Redundancy(중복성)**: DNS information is `served from multiple redundants locations` worldwide, ensuring `reliability` and `speed`.

- ㅇ **Cloud CDN Integration**: After setting up `HTTP(S) Load Balancing`, **Cloud CDN** can be enabled to `accelerate content delivery`, `reduce origin load`, and `save costs`.

- ㅇ **CDN Interconnect(상호연결)**: `If` you are `using another CDN`, it might be part of Google Cloud's `CDN Interconnect partner program`, allowing `continued usage` with `potentially enhanced integration`.

### 클라우드 DNS와 클라우드 CDN

- ㅇ **8.8.8.8 DNS 서비스**: 구글은 8.8.8.8에서 공개 도메인 네임 서비스(DNS)를 제공하여, 인터넷 호스트 이름을 주소로 변환하는 신뢰할 수 있는 무료 DNS 해석 서비스를 제공합니다.

- ㅇ **구글 클라우드 DNS**: 구글 인프라에서 운영되는 관리형 DNS 서비스로, 구글 클라우드에서 구축된 애플리케이션에 낮은 지연 시간과 높은 가용성을 제공합니다.

- ㅇ **확장성 및 프로그래밍 가능성**: 클라우드 DNS는 클라우드 콘솔, CLI 또는 API를 통해 수백만 개의 DNS 영역 및 레코드를 관리하고 게시할 수 있습니다.

- ㅇ **글로벌 중복성**: DNS 정보는 전 세계 여러 중복 위치에서 제공되어 신뢰성과 속도를 보장합니다.

- ㅇ **클라우드 CDN 통합**: HTTP(S) 로드 밸런싱 설정 후, 클라우드 CDN을 활성화하여 콘텐츠 전송을 가속화하고, 원점 부하를 줄이며 비용을 절감할 수 있습니다.

- ㅇ **CDN 인터커넥트**: 다른 CDN을 사용 중이라면, 그것은 구글 클라우드의 CDN 인터커넥트 파트너 프로그램의 일부일 수 있으며, 향상된 통합을 통해 계속 사용할 수 있습니다.


-------

### 빠진 개념 

#### Edge Caching

Google Cloud Platform (GCP)의 Edge Caching 서비스는 Google Cloud CDN (Content Delivery Network)의 일부입니다.

Edge Caching은 `사용자에게 콘텐츠를 더 빠르게 제공하기 위해 전 세계의 여러 위치에 데이터를 저장`하는 기술입니다. 사용자의 요청이 들어오면, 가장 가까운 `'edge' 위치에 있는 캐시에서 콘텐츠를 제공합니다`. 이로 인해 `데이터 전송 시간이 단축`되고, 웹 사이트의 `로딩 시간이 줄어들며`, `서버의 부하가 감소`합니다.

Google Cloud CDN은 HTTP(S) 로드 밸런싱과 통합되어, Google의 전 세계적인 분산 네트워크를 통해 콘텐츠를 빠르게 전달합니다. 이는 정적 및 동적 웹 콘텐츠를 모두 지원하며, `캐시된 콘텐츠에 대한 빠른 응답 시간을 제공합니다.`


### 모르는 단어 

#### DNS (Domain Name System)

DNS는 도메인 이름을 IP 주소로 변환하는 시스템입니다. 컴퓨터는 IP 주소를 사용하여 서버와 통신하지만, 사람들은 도메인 이름을 더 쉽게 기억할 수 있습니다. 

예를 들어, 사용자가 웹 브라우저에 "www.example.com"을 입력하면, DNS는 이 도메인 이름을 해당 서버의 IP 주소로 변환합니다. 

 이렇게 하면 사용자는 웹 사이트의 IP 주소를 기억할 필요 없이 도메인 이름만으로 웹 사이트에 접속할 수 있습니다.


#### CDN (Content Delivery Network)

CDN은 사용자에게 콘텐츠를 빠르게 제공하기 위해 전 세계 여러 위치에 데이터 센터를 두고 있는 네트워크입니다. 

사용자가 요청을 보내면, CDN은 사용자에게 가장 가까운 데이터 센터에서 콘텐츠를 제공합니다. 

이로 인해 데이터 전송 시간이 단축되고, 웹 사이트의 로딩 시간이 줄어들며, 서버의 부하가 감소합니다


#### Proxy 

프록시(Proxy)는 네트워크에서 클라이언트와 서버 사이에 위치하여 클라이언트의 요청을 대신 전송하고, 서버의 응답을 클라이언트에게 전달하는 역할을 하는 서버입니다.

프록시는 다음과 같은 기능을 수행합니다:

ㅁ **캐싱:** 

프록시는 자주 접근하는 웹 페이지나 다른 온라인 콘텐츠를 캐시에 저장하여, 이후 동일한 요청이 들어올 때 빠르게 응답할 수 있습니다.

ㅁ **필터링:** 

프록시는 특정 웹 사이트나 콘텐츠에 대한 접근을 차단하거나 제한할 수 있습니다. 이는 보안 정책을 강화하거나, 부적절한 콘텐츠를 차단하는 데 사용됩니다.

ㅁ **보안:** 

프록시는 클라이언트의 실제 IP 주소를 숨기고, 대신 프록시 서버의 IP 주소를 사용하여 클라이언트의 신원을 보호할 수 있습니다.

ㅁ **로드 밸런싱:** 

여러 프록시 서버를 사용하여 네트워크 트래픽을 분산시키고, 서버의 부하를 줄일 수 있습니다.