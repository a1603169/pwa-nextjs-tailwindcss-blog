---
title: 'GCP Cloud Engineer - 1'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure'
date: '2024-04-12'
tags: [Cloud, GCP]
---

### 클라우드 컴퓨팅의 5가지 특성

1. **On-Demand and Self-Service Computing Resources (수요 기반 및 자가 서비스 컴퓨팅 자원)**
   
   - ㅁ **English**: Customers get computing resources that are `on-demand` and `self-service`. This means users can access computing power as needed without human interaction from the service provider's side.
   
   - ㅁ **Korean**: 고객은 `수요에 따른` 및 `자가 서비스`로 컴퓨팅 자원을 제공받습니다. 이는 사용자가 서비스 제공자 측의 인간적 상호작용 없이 필요에 따라 컴퓨팅 파워에 접근할 수 있음을 의미합니다.

2. **Broad Network Access (인터넷을 통한 자원 접근성)**
   
   - ㅁ **English**: Customers get access to those resources over the internet, from anywhere. Cloud services are `available over the internet`, enabling users to access them from `any location with an internet connection`.
   
   - ㅁ **Korean**: 고객은 어디에서나 인터넷을 통해 그 자원에 접근할 수 있습니다. 클라우드 서비스는 `인터넷을 통해 제공`되어, `인터넷 연결이 가능한 어떠한 위치`에서도 사용자가 접근할 수 있습니다.

3. **Resource Pooling (자원 풀 관리 및 할당)**
   
   - ㅁ **English**: The provider of those resources allocates them to users out of that pool. The cloud provider `manages a large pool of computing resources` and dynamically `assigns them to users based on demand`.
   
   - ㅁ **Korean**: 그 자원의 제공자는 그 풀에서 사용자에게 자원을 할당합니다. 클라우드 제공자는 `큰 규모의 컴퓨팅 자원 풀을 관리`하고 `수요에 따라 동적으로 사용자에게 할당합니다`.

4. **Rapid Elasticity (자원의 탄력성)**
   
   - ㅁ **English**: Resources are elastic—which means they're flexible, so customers can scale resources up or down as needed, providing flexibility and ensuring efficient usage.
   
   - ㅁ **Korean**: 자원은 탄력적입니다. 즉, 유연하므로 고객은 필요에 따라 자원을 확장하거나 축소할 수 있어 유연성을 제공하고 효율적인 사용을 보장합니다.

5. **Measured Service (사용량 기반 결제)**
   
   - ㅁ **English**: Customers pay only for what they use, or reserve as they go; they stop using resources, they stop paying. The pricing model for cloud services is typically `pay-as-you-go`, meaning customers are billed based on their `actual usage`, much like utilities. When they no longer need the resources, they no longer incur costs.
   
   - ㅁ **Korean**: 고객은 사용한 것에 대해서만 지불하거나 사용하면서 예약합니다; 자원 사용을 중단하면 지불도 중단합니다. 클라우드 서비스의 가격 모델은 일반적으로 `사용량 기반 결제`로, 고객은 `실제 사용량`에 따라 청구되며 이는 유틸리티와 매우 유사합니다. 더 이상 자원이 필요하지 않을 때 비용이 발생하지 않습니다.
  
------------------

### 모르는 단어 

#### Three waves

"Colocation", "Virtual Datacenter", 및 "Container-based Architecture"는 데이터 센터 관리와 클라우드 컴퓨팅의 다양한 접근 방식을 나타냅니다. 각각의 특징과 차이점을 비교하면 다음과 같습니다:

1. ㅇ **Colocation (코로케이션)**
   
   - ㅁ **정의**: 코로케이션은 기업이 자체 서버와 네트워크 장비를 소유하고 있지만, 이를 전문 데이터 센터의 공간에 설치하여 운영하는 방식입니다. 이 경우, 물리적 보안, 전력, 냉각과 같은 인프라는 데이터 센터 제공자가 관리합니다.
  
   - ㅁ **장점**: 전문 데이터 센터의 고급 인프라 이용, 자체 하드웨어 제어, 보안 및 컴플라이언스 요구 사항에 대한 높은 수준의 제어 가능.
  
   - ㅁ **단점**: 초기 투자 비용이 높고, 하드웨어 유지보수 및 업그레이드가 필요합니다.

2. ㅇ **Virtual Datacenter (가상 데이터센터)**
   
   - ㅁ **정의**: 가상 데이터센터는 가상화 기술을 사용하여 서버, 스토리지, 네트워킹 등의 리소스를 가상적으로 통합하고 제공하는 서비스입니다. 이를 통해 물리적 리소스의 제약에서 벗어나 다양한 애플리케이션과 서비스를 유연하게 운영할 수 있습니다.
  
   - ㅁ **장점**: 빠른 배포, 확장성, 자원의 최적화, 비용 효율성 증대.
  
   - ㅁ **단점**: 보안 문제가 복잡해질 수 있으며, 전체 인프라가 제공자의 관리 하에 있어 일부 제어가 제한될 수 있습니다.

3. ㅇ **Container-based Architecture (컨테이너 기반 아키텍처)**
   
   - ㅁ **정의**: 컨테이너 기반 아키텍처는 애플리케이션과 그 종속성을 컨테이너라고 하는 격리된 환경에 패키징하여 실행하는 방식입니다. Docker와 Kubernetes가 이 분야에서 널리 사용되는 기술입니다.
  
   - ㅁ **장점**: 애플리케이션 배포의 일관성 및 신속성, 리소스 사용의 효율성, 운영 환경에서의 이식성.

   - ㅁ **단점**: 아키텍처의 복잡성 증가, 보안 설정의 복잡성, 상태를 유지하는 애플리케이션의 관리가 어려울 수 있습니다.

이 세 가지 모델은 각각의 장단점을 가지고 있으며, 기업이나 조직의 특정 요구 사항에 따라 선택됩니다. 

코로케이션은 자체 하드웨어에 대한 완전한 제어를 원하는 기업에 적합하고, 

가상 데이터센터는 빠른 확장과 유연성을 필요로 하는 기업에 적합하며, 

컨테이너 기반 아키텍처는 높은 이식성과 효율적인 리소스 관리가 요구되는 환경에 적합합니다.