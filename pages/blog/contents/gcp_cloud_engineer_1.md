---
title: 'GCP Cloud Engineer - 1'
subtitle: 'Introducting Google Cloud'
date: '2024-04-12'
tags: [Cloud, GCP]
---

### 클라우드 컴퓨팅이란

클라우드 컴퓨팅은 인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹, 소프트웨어, 분석 등의 컴퓨팅 서비스를 제공하는 것을 말합니다. 이 서비스를 제공하는 회사를 클라우드 제공자라고 하며, Google Cloud Platform(GCP), Amazon Web Services(AWS), Microsoft Azure 등이 있습니다.

클라우드 컴퓨팅을 사용하면, 기업은 대규모 컴퓨팅 인프라를 구축하고 유지 관리할 필요 없이 필요한 IT 리소스를 즉시 이용하고 비용을 지불할 수 있습니다. 이로 인해 초기 비용을 크게 줄이고, 운영 효율성을 높이며, 규모의 경제를 실현하고, 속도와 민첩성을 높일 수 있습니다.

#### 컴퓨팅의 정의 

"컴퓨팅(computing)"이라는 단어는 넓은 의미를 가지고 있어서, 사용하는 맥락에 따라 그 정의가 다소 변할 수 있습니다. 일반적으로, 컴퓨팅은 다음과 같은 여러 가지 의미로 사용됩니다:

1. **정보 처리**: 가장 넓은 의미로, 컴퓨터나 컴퓨터 시스템을 사용하여 정보를 처리하는 행위를 가리킵니다. 이는 데이터의 입력, 처리, 출력을 포함할 수 있으며, 계산, 데이터 관리, 네트워킹 등 다양한 기술적 작업을 말합니다.

2. **계산**: 컴퓨팅의 기원적 의미는 '계산'이며, 이는 수학적 계산이나 알고리즘을 실행하여 결과를 도출하는 과정을 말합니다.

3. **컴퓨터 과학**: 좀 더 학문적인 맥락에서 컴퓨팅은 컴퓨터 과학의 분야를 일컫는데 사용되기도 합니다. 여기에는 소프트웨어 개발, 시스템 아키텍처, 인공지능 등의 연구 영역이 포함됩니다.

4. **서비스 형태의 컴퓨팅**: 클라우드 컴퓨팅과 같이, 컴퓨팅 자원을 원격 서비스로 제공받는 형태를 지칭할 때도 사용됩니다. 이 경우, 컴퓨팅은 단순한 계산을 넘어서 네트워크를 통해 접근 가능한 자원과 서비스의 이용을 포함합니다.

5. **일상적 사용**: 일상 대화에서는 종종 '컴퓨터를 사용하는 것'을 가리켜 간단히 '컴퓨팅'이라고 말하기도 합니다. 예를 들어, "오늘은 컴퓨팅 작업이 많았어요"와 같이 사용할 수 있습니다.

이처럼 '컴퓨팅'이라는 단어는 매우 광범위한 개념을 포괄하며, 정확한 의미는 맥락에 따라 결정됩니다.

### 클라우드 컴퓨팅 5가지 특성

**1. Customers get computing resources that are on-demand and self-service.**

This means users can `access computing power` as needed `without human interaction` from the service provider's side.

**2. Customers get access to those resources over the internet, from anywhere.**

Cloud services are `available over the internet`, enabling users to access them from `any location with an internet connection`.

**3. The provider of those resources allocates them to users out of that pool.**

The cloud provider `manages a large pool of computing resources` and dynamically `assigns them to users based on demand`.

**4. Resources are elastic—which means they're flexible, so customers can be...**

Elasticity allows customers to `scale resources up or down as needed`, providing flexibility and ensuring efficient usage.

**5. Customers pay only for what they use, or reserve as they go; they stop using resources, they stop paying.**

The pricing model for cloud services is typically `pay-as-you-go`, meaning customers are billed based on their `actual usage`, much like utilities. When they no longer need the resources, they no longer incur costs.

### Three waves

"Colocation", "Virtual Datacenter", 및 "Container-based Architecture"는 데이터 센터 관리와 클라우드 컴퓨팅의 다양한 접근 방식을 나타냅니다. 각각의 특징과 차이점을 비교하면 다음과 같습니다:

1. **Colocation (코로케이션)**
   
   - **정의**: 코로케이션은 기업이 자체 서버와 네트워크 장비를 소유하고 있지만, 이를 전문 데이터 센터의 공간에 설치하여 운영하는 방식입니다. 이 경우, 물리적 보안, 전력, 냉각과 같은 인프라는 데이터 센터 제공자가 관리합니다.
  
   - **장점**: 전문 데이터 센터의 고급 인프라 이용, 자체 하드웨어 제어, 보안 및 컴플라이언스 요구 사항에 대한 높은 수준의 제어 가능.
  
   - **단점**: 초기 투자 비용이 높고, 하드웨어 유지보수 및 업그레이드가 필요합니다.

2. **Virtual Datacenter (가상 데이터센터)**
   
   - **정의**: 가상 데이터센터는 가상화 기술을 사용하여 서버, 스토리지, 네트워킹 등의 리소스를 가상적으로 통합하고 제공하는 서비스입니다. 이를 통해 물리적 리소스의 제약에서 벗어나 다양한 애플리케이션과 서비스를 유연하게 운영할 수 있습니다.
  
   - **장점**: 빠른 배포, 확장성, 자원의 최적화, 비용 효율성 증대.
  
   - **단점**: 보안 문제가 복잡해질 수 있으며, 전체 인프라가 제공자의 관리 하에 있어 일부 제어가 제한될 수 있습니다.

3. **Container-based Architecture (컨테이너 기반 아키텍처)**
   
   - **정의**: 컨테이너 기반 아키텍처는 애플리케이션과 그 종속성을 컨테이너라고 하는 격리된 환경에 패키징하여 실행하는 방식입니다. Docker와 Kubernetes가 이 분야에서 널리 사용되는 기술입니다.
  
   - **장점**: 애플리케이션 배포의 일관성 및 신속성, 리소스 사용의 효율성, 운영 환경에서의 이식성.

   - **단점**: 아키텍처의 복잡성 증가, 보안 설정의 복잡성, 상태를 유지하는 애플리케이션의 관리가 어려울 수 있습니다.

이 세 가지 모델은 각각의 장단점을 가지고 있으며, 기업이나 조직의 특정 요구 사항에 따라 선택됩니다. 

코로케이션은 자체 하드웨어에 대한 완전한 제어를 원하는 기업에 적합하고, 

가상 데이터센터는 빠른 확장과 유연성을 필요로 하는 기업에 적합하며, 

컨테이너 기반 아키텍처는 높은 이식성과 효율적인 리소스 관리가 요구되는 환경에 적합합니다.