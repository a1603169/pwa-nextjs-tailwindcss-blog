---
title: 'GCP Cloud Engineer - 29'
subtitle: 'Essential Google Cloud Infrastructure: Compute Engine / VM access and lifecycles'
date: '2024-04-15'
tags: [Cloud, GCP]
---

### Compute Engine

1. ㅇ **Flexibility of Compute Engine**
   
   - ㅁ **English**: Compute Engine offers the `ultimate flexibility` allowing you to run `any language` or `software` `on your virtual machines` as part of an `IaaS model`.
   
   - ㅁ **Korean**: Compute Engine은 IaaS 모델의 일부로 가상 머신에서 원하는 언어나 소프트웨어를 실행할 수 있는 최고의 유연성을 제공합니다.


2. ㅇ **Core Features and Options**
   
   - ㅁ **English**: It provides options for `CPU, memory, disk types` (persistent, SSD, or local SSDs), and `networking capabilities`.
   
   - ㅁ **Korean**: CPU, 메모리, 디스크 유형(영구, SSD 또는 로컬 SSD), 네트워킹 기능 등의 옵션을 제공합니다.


3. ㅇ **Autoscaling**
   
   - ㅁ **English**: `Autoscaling` is a feature where Compute Engine can `automatically add more VMs` based on c`onfigured rules in specific scenarios`.
   
   - ㅁ **Korean**: 특정 시나리오에서 구성된 규칙에 따라 Compute Engine이 자동으로 더 많은 VM을 추가할 수 있는 기능입니다.


4. ㅇ **Tensor Processing Unit (TPU)**
   
   - ㅁ **English**: Introduced by Google in 2016 to `overcome the limitations of CPUs and GPUs for machine learning`, TPUs are `custom ASICs that accelerate AI applications`.
   
   - ㅁ **Korean**: 2016년 Google이 머신러닝을 위한 CPU 및 GPU의 한계를 극복하기 위해 도입한 TPU는 AI 애플리케이션을 가속화하는 맞춤형 ASIC입니다.


5. ㅇ **Machine Types and Customization**
   
   - ㅁ **English**: Compute Engine provides `various predefined and custom machine types` allowing for `specific configurations` based on the `user’s needs`.
   
   - ㅁ **Korean**: Compute Engine은 사용자의 요구에 맞게 특정 구성을 허용하는 다양한 사전 정의된 및 맞춤형 머신 유형을 제공합니다.


6. ㅇ **Disk Performance and Cost**
   
   - ㅁ **English**: `Choices` between `HDDs and SSDs` affect `performance and cost`, with `SSDs` offering `higher IOPS` per dollar and `HDDs` providing `more capacity` per dollar.
   
   - ㅁ **Korean**: HDD와 SSD 사이의 선택은 성능과 비용에 영향을 미칩니다. SSD는 달러당 더 높은 IOPS를 제공하고, HDD는 달러당 더 많은 용량을 제공합니다.


7. ㅇ **Networking and Load Balancing**
   
   - ㅁ **English**: Features include `regional HTTPS` and `network load balancing` without the need for `pre-warming, utilizing VPC rules(X)`.
   
   - ㅁ **Korean**: 사전 예열이 필요 없는 지역 HTTPS 및 네트워크 로드 밸런싱 기능을 포함하며, VPC 규칙을 활용합니다.


--------------

### VM access and lifecycle

1. ㅇ **Instance Creation and Initial Access**
   
   - ㅁ **English**: The `creator` of a VM has `full root privileges`, with `SSH capability` on `Linux instances` and `username/password generation` for `Windows instances` using the Google Cloud console.
   
   - ㅁ **Korean**: VM 생성자는 전체 루트 권한을 가지며, Google Cloud 콘솔을 사용하여 Linux 인스턴스에는 SSH 기능을, Windows 인스턴스에는 사용자 이름과 비밀번호를 생성할 수 있습니다.


2. ㅇ **Lifecycle of a VM**
   
   - ㅁ **English**: A VM's `lifecycle` includes `states` such as `provisioning, staging, running, and terminated`. Each state represents a `different phase` of the VM's existence.
   
   - ㅁ **Korean**: VM의 수명 주기에는 프로비저닝, 스테이징, 실행, 종료와 같은 상태가 포함됩니다. 각 상태는 VM 존재의 다른 단계를 나타냅니다.


3. ㅇ **Live Migration and Maintenance**
   
   - ㅁ **English**: Compute Engine can `live migrate a VM to another host` within the `same zone` for `maintenance` without `needing a reboot(X)`, `ensuring uninterrupted service`.
   
   - ㅁ **Korean**: Compute Engine은 재부팅 없이 유지 관리를 위해 같은 존 내 다른 호스트로 VM을 라이브 마이그레이션 할 수 있어 서비스 중단을 방지합니다.


4. ㅇ **VM Maintenance Policies**
   
   - ㅁ **English**: The `default maintenance behavior` for VMs is `live migration`, but it `can be changed to terminate` the VM `during maintenance events`.
   
   - ㅁ **Korean**: VM의 기본 유지 관리 행동은 라이브 마이그레이션입니다만, 유지 관리 이벤트 중에 VM을 종료하도록 변경할 수 있습니다.


5. ㅇ **Patch Management**
   
   - ㅁ **English**: `OS patch management` on Compute Engine involves `patch compliance reporting` and `automated patch deployment` across VMs to `manage updates effectively`.
   
   - ㅁ **Korean**: Compute Engine에서의 OS 패치 관리는 패치 준수 보고 및 자동 패치 배포를 포함하여 VM에 걸쳐 업데이트를 효과적으로 관리합니다.


6. ㅇ **Changing VM States**
   
   - ㅁ **English**: `VM states` can be `changed` using `Google Cloud console` or `gcloud commands`, and some actions like `reboot or shutdown are performed from the OS`.
   
   - ㅁ **Korean**: VM 상태는 Google Cloud 콘솔 또는 gcloud 명령을 사용하여 변경할 수 있으며, 재부팅이나 종료와 같은 일부 작업은 OS에서 수행됩니다.


7. ㅇ **Cost Implications of VM States**
   
   - ㅁ **English**: When a `VM is terminated`, there are `no charges for CPU and memory resources(X)`, but `charges` still apply for `attached disks and reserved IP addresses(O)`.
   
   - ㅁ **Korean**: VM이 종료되면 CPU 및 메모리 리소스에 대한 요금은 부과되지 않지만, 연결된 디스크 및 예약된 IP 주소에 대한 요금은 계속 부과됩니다.


### 모르는 단어

#### ASIC 

ASIC(Application-Specific Integrated Circuit)은 특정 응용 프로그램을 위해 맞춤 제작된 집적 회로를 의미합니다.

ASIC은 특정 작업을 수행하는 데 최적화되어 있으므로, 일반적인 목적의 프로세서(CPU)나 그래픽 처리 장치(GPU)에 비해 더 빠른 성능을 제공하거나, 더 적은 전력을 소비할 수 있습니다.

"custom ASICs that accelerate AI applications"에서는 AI 애플리케이션을 가속화하는 데 사용되는 맞춤형 ASIC을 언급하고 있습니다. 

이러한 ASIC은 대량의 데이터를 빠르게 처리하고, 복잡한 계산을 수행하는 데 필요한 특수한 기능을 제공하여, AI 애플리케이션의 성능을 향상시킵니다. 

Google의 Tensor Processing Unit(TPU)는 AI와 머신 러닝 작업을 가속화하는 데 사용되는 ASIC의 한 예입니다.

#### IOPS

IOPS(Input/Output Operations Per Second)는 컴퓨터 저장장치의 성능을 측정하는 단위로, 초당 입출력 연산의 수를 나타냅니다.

IOPS는 디스크 드라이브, SSD, SAN(Storage Area Network) 등 다양한 저장장치의 성능을 비교하는 데 사용됩니다. 

높은 IOPS 값을 가진 저장장치는 더 많은 데이터를 더 빠르게 처리할 수 있습니다.

IOPS는 주로 랜덤 읽기/쓰기 작업에 대한 성능을 측정하는 데 사용되며, 이는 대부분의 실제 워크로드에서 중요한 요소입니다. 

그러나 IOPS만으로 저장장치의 전체 성능을 판단하는 것은 부적절하며, 처리량(초당 전송되는 데이터의 양)과 지연 시간(데이터 요청과 응답 사이의 시간)도 고려해야 합니다.