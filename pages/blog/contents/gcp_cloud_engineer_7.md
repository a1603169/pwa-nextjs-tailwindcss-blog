---
title: 'GCP Cloud Engineer - 7'
subtitle: 'Introducting Google Cloud - Virtual Private Cloud(VPC) networking / Compute Engine'
date: '2024-04-13'
tags: [Cloud, GCP]
---

### Virtual Private Cloud Networking


- ㅇ **Virtual Private Cloud (VPC)**: A `private`, `secure` `cloud computing model` `hosted within a public cloud`, allowing the **running of code**, **data storage**, **website hosting**, and **more**, with the `isolation(격리성) of a private cloud` and the `scalability(확장성) of a public cloud.`

- ㅇ **Network Configuration**: VPC networks `connect Google Cloud resources internally` and `to the internet`, using **firewalls**, segmenting(분할) **networks**, and creating **static routes**.

- ㅇ **Global Network**: Google VPC networks are `global`, enabling `subnets` in **any Google Cloud region worldwide**.

- ㅇ **Subnets**: Subnets are `segmented parts of the larger network` and can span `multiple zones` within a region. They can be `resized without affecting existing VMs`.

- ㅇ **Example of VPC Usage**: In a VPC named `vpc1` with subnets in the Asia-East1 and US-East1 regions, VMs on the same subnet can `reside(존재하다) in different zones`, `facilitating(가능하게하다) resilient(탄력있는) and simplified network architectures`.

### 가상 사설 클라우드 네트워킹

- ㅇ **가상 사설 클라우드(VPC)**: 공용 클라우드 내에서 호스팅되는 개인적이고 안전한 클라우드 컴퓨팅 모델로, 코드 실행, 데이터 저장, 웹사이트 호스팅 등을 할 수 있으며, 사설 클라우드의 격리성과 공용 클라우드의 확장성을 결합하고 있습니다.

- ㅇ **네트워크 구성**: VPC 네트워크는 Google Cloud 리소스를 서로 및 인터넷에 연결하며, 방화벽을 사용하고 네트워크를 세분화하며 특정 목적지로 트래픽을 전달하는 정적 라우트를 생성합니다.

- ㅇ **글로벌 네트워크**: Google VPC 네트워크는 전 세계 어떤 Google Cloud 지역에서도 서브넷을 가질 수 있는 글로벌 네트워크입니다.

- ㅇ **서브넷**: 서브넷은 더 큰 네트워크의 세분화된 부분으로, 하나의 지역 내 여러 존을 포괄할 수 있습니다. 기존 VM에 영향을 주지 않고 크기를 조정할 수 있습니다.

- ㅇ **VPC 사용 예**: `vpc1`이라는 VPC가 아시아 동부1 및 미국 동부1 지역에 서브넷을 정의하고 있고, 동일 서브넷에 있는 VM들은 다른 존에 위치할 수 있으며, 이를 통해 간소화된 네트워크 구조를 가진 솔루션을 구축할 수 있습니다.

-----------------------

### Compute Engine


- ㅇ **Compute Engine**: `Google Cloud's IaaS solution` allows users to create and run `virtual machines (VMs)` on Google's infrastructure with `no upfront investments` and access to thousands of `virtual CPUs.`

- ㅇ **Virtual Machine Configuration**: VMs offer the functionality of a `full operating system` and can be configured with **specific CPU, memory, storage, and operating system options**.

- ㅇ **Access and Management**: VM instances can be `created and managed` via the **Google Cloud console**, the **Google Cloud CLI**, or the **Compute Engine API**.

- ㅇ **Operating System Support**: `Supports Linux and Windows Server images`, including both `Google-provided and custom images`. Users can `also` build and run `other operating system images`.

- ㅇ **Cloud Marketplace**: `Provides ready-to-use solutions` from **Google** and **third-party vendors**, `simplifying the setup` of **software, VM instances, storage, and networking**.

- ㅇ **Pricing and Billing**: `Billing is by the second`, with a **one-minute minimum**. `Sustained-use discounts apply for VMs` running longer, with `additional discounts` after VMs run for more than `25% of a month`.

- ㅇ **Committed-use Discounts**: Offers up to a `57% discount for committing to a specific amount of vCPUs and memory` for one or three years, ideal for stable and predictable workloads.

- ㅇ **Preemptible and Spot VMs**: `Cost-effective options for non-interactive workloads` like `batch processing`, offering **`significant savings`**. `Preemptible(선점형) VMs` have a `maximum runtime of 24 hours`, while `Spot VMs do not have this` limitation.

- ㅇ **Storage**: High throughput(처리량) between `processing and persistent disks` is standard and comes at `no extra cost`.

- ㅇ **Custom Machine Types**: `Allows customization of machine properties`, such as the number of **vCPUs and memory**, either through `predefined` or `custom machine types`.

### 컴퓨트 엔진

- ㅇ **컴퓨트 엔진**: 구글 클라우드의 IaaS 솔루션으로, 사용자는 구글의 인프라에서 가상 머신(VM)을 생성하고 실행할 수 있습니다. 초기 투자 없이 수천 개의 가상 CPU를 사용할 수 있습니다.

- ㅇ **가상 머신 구성**: 가상 머신은 완전한 운영 체제의 기능을 제공하며, 특정 CPU, 메모리, 저장소 및 운영 체제 옵션으로 구성할 수 있습니다.

- ㅇ **접근 및 관리**: Google Cloud 콘솔, Google Cloud CLI 또는 Compute Engine API를 통해 VM 인스턴스를 생성 및 관리할 수 있습니다.

- ㅇ **운영 체제 지원**: Linux 및 Windows Server 이미지를 지원하며, Google이 제공하는 이미지 또는 사용자가 직접 만든 이미지를 사용할 수 있습니다. 사용자는 다른 운영 체제 이미지도 구축하고 실행할 수 있습니다.

- ㅇ **클라우드 마켓플레이스**: Google 및 타사 제공업체의 사용하기 쉬운 솔루션을 제공하여 소프트웨어, VM 인스턴스, 저장소 및 네트워킹 설정을 간소화합니다.

- ㅇ **가격 및 청구**: 초 단위로 청구되며, 최소 1분이 요구됩니다. VM이 더 오래 실행될수록 지속적인 사용 할인이 적용되며, 한 달의 25% 이상 실행되면 추가 할인이 적용됩니다.

- ㅇ **약정 사용 할인**: 안정적이고 예측 가능한 워크로드에 대해 1년 또는 3년 동안 특정 vCPU 및 메모리 양을 사용하는 데 동의하면 최대 57% 할인을 받을 수 있습니다.

- ㅇ **선점형 및 스팟 VM**: 대화형 작업이 필요하지 않은 워크로드(예: 배치 처리 작업)에 비용 효과적인 옵션을 제공하며 상당한 절약이 가능합니다. 선점형 VM은 최대 24시간 동안만

 실행할 수 있으나, 스팟 VM은 최대 실행 시간 제한이 없습니다.

- ㅇ **저장소**: 처리 및 영구 디스크 간의 높은 처리량은 표준이며 추가 비용이 발생하지 않습니다.

- ㅇ **사용자 정의 머신 타입**: 미리 정의된 머신 타입이나 사용자 정의 머신 타입을 사용하여, 인스턴스의 머신 속성(예: vCPU 수 및 메모리 양)을 사용자화할 수 있습니다.

-----------------------

### 모르는 단어 

#### Firewall

방화벽(Firewall)은 네트워크의 보안을 유지하기 위해 설계된 시스템입니다. 이는 안전하지 않은 외부 네트워크와 신뢰할 수 있는 내부 네트워크를 분리하며, 특정 종류의 네트워크 트래픽을 허용하거나 차단하는 역할을 합니다.

방화벽은 패킷 필터링, 상태 검사, 프록시 서비스, 네트워크 주소 변환(NAT) 등 다양한 방법을 사용하여 네트워크 트래픽을 제어합니다. 이를 통해 원치 않는 접근을 차단하고, 악성 코드의 전파를 막으며, 내부 네트워크의 데이터를 외부 공격자로부터 보호합니다.

#### Spot VMs 정의 및 Preemptible VMs 와의 차이

Spot VMs는 Google Cloud Platform(GCP)에서 제공하는 일종의 가상 머신입니다. 이들은 미사용의 컴퓨팅 리소스를 활용하여 비용을 절감할 수 있습니다.

Spot VMs는 일반적인 VMs에 비해 훨씬 저렴하지만, GCP가 이 리소스를 다시 필요로 할 때는 사전 공지 없이 종료될 수 있습니다. 따라서, Spot VMs는 중단이 발생해도 문제가 되지 않는 일시적인 작업에 적합합니다. 예를 들어, 대규모 데이터 처리, 배치 작업, 테스트 환경 등에 사용될 수 있습니다.

<img class='blogImage' src='/blog/spot_preemptible_vms.png'>

Google Cloud Platform (GCP)에서 Spot VM과 Preemptible VM은 비용 효율적인 가상 머신 옵션으로, 높은 할인을 제공하지만, Google이 필요할 경우 이들을 선점하고 종료할 수 있다는 공통점이 있습니다. 그러나 두 유형 사이에는 몇 가지 주요 차이점이 있습니다:

1. ㅇ **운영 시간 제한**:
   - ㅁ **Preemptible VMs**: 최대 24시간 동안만 실행할 수 있으며, 이후에는 Google에 의해 자동으로 종료됩니다.
   - ㅁ **Spot VMs**: 최대 운영 시간 제한이 없습니다. 리소스가 필요할 때 언제든지 Google에 의해 종료될 수 있지만, 24시간 제한이 없기 때문에 더 긴 작업에 적합할 수 있습니다.

2. ㅇ **가용성과 기능**:
   - ㅁ **Preemptible VMs**: 일반적으로 단기간의 배치 작업이나 실험적인 계산에 사용됩니다. 이 VM들은 할인율이 매우 높지만, 더 빈번하게 회수될 수 있습니다.
  
   - ㅁ **Spot VMs**: Spot VM은 Preemptible VM보다 더 많은 기능과 유연성을 제공하며, 리소스 수요에 따른 선점의 빈도가 낮을 수 있어 보다 안정적인 작업에 유리할 수 있습니다. 예를 들어, 사용자는 Spot VM을 사용하여 더 복잡하거나 지속적인 작업을 실행할 수 있습니다.

3. ㅇ **가격 정책**:
   - ㅁ 두 유형 모두 유사한 가격 정책을 적용받을 수 있으나, Spot VM의 경우 시장 상황과 리소스 수요에 따라 가격이 변동될 수 있습니다.

4. ㅇ **정리**: 
   - ㅁ 이러한 차이점들은 사용자가 자신의 특정 워크로드 요구 사항과 비용 관리 목표에 따라 가장 적합한 옵션을 선택할 수 있도록 도와줍니다. Preemptible VM은 단기간에 집중적으로 리소스를 사용할 작업에 적합하며, Spot VM은 조금 더 길게, 또는 더 안정적인 리소스 활용이 필요한 작업에 적합할 수 있습니다.

