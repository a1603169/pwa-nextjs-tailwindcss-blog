---
title: 'GCP Cloud Engineer - 2'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - IaaS, PaaS / Google Cloud Network'
date: '2024-04-12'
tags: [Cloud, GCP]
---
### 서비스 모델 (Service Model)

1. **Infrastructure as a Service (IaaS) (인프라스트럭처 애즈 어 서비스)**:
  
  - ㅇ Delivers `on-demand infrastructure resources` via the cloud.
  
  - ㅇ Provides `raw compute, storage, and network` capabilities.

  - ㅇ Organizes `resources virtually`, similar to physical data centers.

  - ㅇ Examples include **`Google Cloud's Compute Engine`**.

  - ㅇ Customers `pay` for resources `they allocate ahead of time`.

  - ㅇ 클라우드를 통해 필요에 따라 인프라 자원을 제공합니다.
  
  - ㅇ 컴퓨트, 저장 공간, 네트워크 기능 등의 기본 인프라 자원을 제공합니다.

  - ㅇ 물리적 데이터 센터와 유사하게 가상으로 자원을 조직합니다.

  - ㅇ 예시: 구글 클라우드의 컴퓨트 엔진.
  
  - ㅇ 고객은 사전에 할당한 자원에 대해 비용을 지불합니다.

2. **Platform as a Service (PaaS) (플랫폼 애즈 어 서비스)**:
  
  - ㅇ Binds `code to libraries` that access the `infrastructure applications need`.
  
  - ㅇ Focuses more `resources` on `application logic`.
  
  - ㅇ Examples include **`Google Cloud's App Engine`**.
  
  - ㅇ Customers `pay` for the resources they `actually use`.

  - ㅇ 코드를 인프라 애플리케이션 접근이 필요한 라이브러리에 연결합니다.
  
  - ㅇ 애플리케이션 로직에 더 많은 자원을 집중할 수 있도록 합니다.
  
  - ㅇ 예시: 구글 클라우드의 앱 엔진.
  
  - ㅇ 고객은 실제 사용한 자원에 대해서만 비용을 지불합니다.

3. **Managed Infrastructure and Services (관리된 인프라 및 서비스)**:
  
  - ㅇ Helps companies focus more on **business goals**.
  
  - ㅇ **`Reduces`** the need for spending **time and money** on `technical infrastructure`.
  
  - ㅇ **`Enhances`** the ability to deliver `products and services` **quickly and reliably**.

  - ㅇ 회사가 비즈니스 목표에 더 집중할 수 있도록 도와줍니다.
  
  - ㅇ 기술 인프라 구축 및 유지에 드는 시간과 비용을 줄여줍니다.
  
  - ㅇ 제품과 서비스를 더 빠르고 신뢰성 있게 제공할 수 있도록 합니다.

4. **Serverless Computing (서버리스 컴퓨팅)**:

  - ㅇ **`Allows`** developers to `focus on code rather than server configuration`.
  
  - ㅇ **`Eliminates`** the need for `infrastructure management`.
  
  - ㅇ **`Includes`** `Google Cloud Functions` (**event-driven**, **pay-as-you-go** service) and `Cloud Run` (managed environment for **deploying containerized microservices**).

  - ㅇ 개발자가 서버 구성보다 코드 작성에 집중할 수 있도록 합니다.
  
  - ㅇ 인프라 관리 필요성을 제거합니다.
  
  - ㅇ 구글 클라우드 함수(이벤트 기반, 사용량만큼 비용 지불 서비스) 및 클라우드 런(컨테이너화된 마이크로서비스를 배포할 수 있는 관리 환경)을 포함합니다.

5. **Software as a Service (SaaS) (소프트웨어 애즈 어 서비스)**:
  
  - ㅇ `Provides entire application stacks` as **cloud-based** applications.
  
  - ㅇ Applications are `not installed locally but run in the cloud`.
  
  - ㅇ Accessed and `used over the internet` by end users.
  
  - ㅇ Examples include **Google Workspace applications** like **`Gmail, Docs, and Drive`**.

  - ㅇ 클라우드 기반 애플리케이션으로 전체 애플리케이션 스택을 제공합니다.
  
  - ㅇ 애플리케이션은 로컬에 설치되지 않고 클라우드에서 실행됩니다.
  
  - ㅇ 최종 사용자가 인터넷을 통해 접근하여 사용합니다.
  
  - ㅇ 예시: 구글 워크스페이스의 구글 메일, 문서, 드라이브 등.

----------------------

### Google Cloud Network (구글 클라우드 네트워크)

1. **Global Network (글로벌 네트워크)**

   - ㅇ **English**: Google Cloud operates on `Google’s own extensive global network`, the largest of its kind, built with billions of dollars invested over many years.
   
   - ㅇ **Korean**: 구글 클라우드는 다년간 수십억 달러를 투자하여 구축한 세계 최대 규모의 구글 자체 글로벌 네트워크에서 운영됩니다.

2. **High Performance (높은 성능)**

   - ㅇ **English**: Designed for the `highest throughput and lowest latencies`, leveraging over 100 content `caching nodes` worldwide.
   
   - ㅇ **Korean**: 전 세계 100개 이상의 콘텐츠 캐싱 노드를 활용하여 최고의 처리량과 최저의 대기 시간을 설계했습니다.

3. **Strategic Locations (전략적 위치)**

   - ㅇ **English**: Content is `cached in high-demand areas` for **faster access** and **quicker response times** to user requests.
   
   - ㅇ **Korean**: 높은 수요 지역에서 콘텐츠를 캐싱하여 사용자 요청에 대한 **더 빠른 접근**과 **더 빠른 응답 시간**을 제공합니다.

4. **Infrastructure Distribution (인프라 분포)**

   - ㅇ **English**: Located across `five major geographic regions`: North America, South America, Europe, Asia, and Australia.
   
   - ㅇ **Korean**: 북미, 남미, 유럽, 아시아, 호주 등 다섯 개 주요 지리적 지역에 위치하고 있습니다.

5. **Regional Divisions (지역 구분)**

   - ㅇ **English**: Each region is `divided into several zones`. For example, London (europe-west2) comprises three zones.
   
   - ㅇ **Korean**: 각 지역은 여러 구역으로 나뉘며, 예를 들어 런던(유럽-서부2)은 세 개의 구역으로 구성됩니다.

6. **Resource Deployment (자원 배치)**

   - ㅇ **English**: `Resources` like **virtual machines** in Compute Engine `run in specified zones` to **ensure redundancy**.
   
   - ㅇ **Korean**: 예를 들어 컴퓨트 엔진의 **가상 머신**과 같은 `자원은` 지정된 구역에서 실행되어 **중복성을 보장합니다**.

7. **Multi-Region Support (다중 지역 지원)**

   - ㅇ **English**: `Services` like **Cloud Spanner** `support multi-region configurations` for **low-latency data access and disaster recovery** across multiple regions.
   
   - ㅇ **Korean**: 클라우드 스패너와 같은 `서비스`는 여러 지역에 걸친 **낮은 대기 시간의 데이터 접근 및 재해 복구**를 위해 **다중 지역 구성을 지원합니다**.

8. **Continual Expansion (지속적 확장)**

   - ㅇ **English**: Google Cloud supports 118 zones in 39 regions, with numbers `continually increasing`.
   
   - ㅇ **Korean**: 현재 구글 클라우드는 39개 지역의 118개 구역을 지원하며, 이 수는 **계속해서 증가하고 있습니다**.