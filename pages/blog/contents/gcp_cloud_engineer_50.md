---
title: 'GCP Cloud Engineer - 50'
subtitle: 'Essential Cloud Infrastructure: Sacling and Automation - Cloud Interconnect and Peering'
date: '2024-04-18'
tags: [Cloud, GCP]
---


### `Cloud Interconnect` 서비스

- **`Dedicated Interconnect`**:
  
  - ㅁ `온프레미스 네트워크`와 `Google 네트워크` 간의 직접적인 `물리적 연결` 제공
  
  - ㅁ `대량의 데이터` 전송 가능, 공용 인터넷보다 `경제적`
  
  - ㅁ 99.9% 또는 99.99%의 가동시간 `SLA` 가능 `(10 Gbps or 100 Gbps)`

- **`Partner Interconnect`**:
  
  - ㅁ 지원 서비스 제공업체를 통해 `온프레미스 네트워크와 VPC 네트워크 간의 연결 제공`
  
  - ㅁ 데이터 센터가 `코로케이션 시설에 연결할 수 없거나 데이터 수요가 적은 경우` 유용
  
  - ㅁ 99.9% 또는 99.99%의 가동시간 `SLA` 구성 가능 `(50 Mbps - 50 Gbps)`

- **`Cross-Cloud Interconnect`**:
  
  - ㅁ Google Cloud와 `다른 클라우드 서비스 제공업체 간의 고대역폭 전용 연결 제공`
  
  - ㅁ 사용 가능 크기: `10Gbps 또는 100Gbps`
  
  - ㅁ `통합 멀티클라우드` 전략 지원


### `피어링` 서비스

- **`다이렉트 피어링`**:
  
  - ㅁ `Google 네트워크`와 `비즈니스 네트워크` 간 직접적인 연결 제공
  
  - ㅁ Google Cloud Platform 제품군 및 모든 Google 서비스에 연결 가능
  
  - ㅁ `SLA(X) 없음`, 대역폭 용량: 링크당 10Gbps (구글 엣지 포인트가 필요)

- **`이동통신사 피어링`**:
  
  - ㅁ Google 공개 인프라에 액세스 필요 시 이동통신사 피어링 파트너를 통한 연결
  
  - ㅁ `SLA(X)` 적용되지 않음, 서비스 제공업체에 따라 다양한 용량과 요구사항


### 연결 선택 방법

- **`연결 요구사항 결정`**:
  
  - ㅁ 높은 처리량이 필요하면 `Dedicated Interconnect` 또는 `Partner Interconnect` 선택
  
  - ㅁ 다른 클라우드 서비스와 연결 필요 시 `Cross-Cloud Interconnect` 선택
  
  - ㅁ 저렴한 비용 또는 낮은 대역폭 요구 시 `Cloud VPN` 선택

- **`피어링 vs. 인터커넥트`**:
  
  - ㅁ RFC1918 IP 주소에 직접 액세스 필요 시 인터커넥트 서비스 사용
  
  - ㅁ Google 공개 IP 주소에만 액세스 필요 시 피어링 서비스 사용


### 추가적 고려사항

- **`Google의 코로케이션 시설 접근`**:
  
  - ㅁ 접근 가능 시 `Dedicated Interconnect` 고려
  
  - ㅁ 접근 불가능 시 `Partner Interconnect` 또는 `Cloud VPN` 선택

- **`대역폭 및 암호화 요구사항`**:
  
  - ㅁ 대역폭 요구사항에 따라 인터커넥트 또는 VPN 선택
  
  - ㅁ 민감한 트래픽 처리가 필요하거나 복수 클라우드 접근 필요 시 암호화 옵션 고려


### 모르는 단어 

#### Interconnect 서비스랑 피어링 서비스의 차이 Detail

Google Cloud Platform(GCP)에서 제공하는 Interconnect 서비스와 Peering 서비스는 모두 사용자의 네트워크와 Google Cloud의 네트워크를 연결하는 방법을 제공하지만, 사용 사례와 기능에 따라 차이가 있습니다.

**Interconnect 서비스:**

Interconnect 서비스는 Dedicated Interconnect와 Partner Interconnect 두 가지 옵션을 제공합니다. 

이 서비스는 사용자의 데이터 센터와 Google Cloud 사이에 물리적 연결을 제공하여, 높은 처리량과 낮은 지연 시간을 제공합니다. 

이는 대량의 데이터를 전송하거나, 실시간 애플리케이션을 실행하는 등의 사용 사례에 적합합니다. 

Interconnect 서비스는 SLA(Service Level Agreement)를 제공하며, 비용이 부과됩니다.

**Peering 서비스:** 

Peering 서비스는 Direct Peering과 Carrier Peering 두 가지 옵션을 제공합니다. 

이 서비스는 사용자의 네트워크와 Google의 네트워크를 직접적으로 연결하지만, 이는 Google의 공개 서비스(예: YouTube, Google Search 등)에 대한 액세스를 위한 것입니다. 

Peering 서비스는 Google Cloud의 리소스에 대한 액세스를 제공하지 않으며, SLA를 제공하지 않습니다. 

이 서비스는 일반적으로 무료입니다.

따라서, 사용자의 요구 사항에 따라 적절한 서비스를 선택할 수 있습니다. 

Google Cloud의 리소스에 대한 높은 처리량의 연결이 필요한 경우 Interconnect를, 

Google의 공개 서비스에 대한 액세스가 주된 목적인 경우 Peering을 선택할 수 있습니다.