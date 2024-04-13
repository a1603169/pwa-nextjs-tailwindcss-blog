---
title: 'GCP Cloud Engineer - 8'
subtitle: 'Introducting Google Cloud - Scaling Virtual Machines / Importance VPC compatibilities(호환성)'
date: '2024-04-13'
tags: [Cloud, GCP]
---

### Scaling Virtual Machines

- ㅇ **Machine Type Selection**: You can choose from `predefined machine types` or `create custom machine types` in **Compute Engine** to specify the number of `virtual CPUs` and amount of `memory`.

- ㅇ **Autoscaling**: Compute Engine features `Autoscaling`, which `dynamically adjusts the number of VMs` in an application based on load metrics.

- ㅇ **Load Balancing**: Google's `Virtual Private Cloud (VPC)` supports various types of **load balancing** to `distribute incoming traffic` across VMs.

- ㅇ **Large VM Configuration**: Compute Engine `allows the configuration of very large VMs`, suitable for `CPU-intensive analytics` and `in-memory databases`.

- ㅇ **Scaling Practices**: Most Google Cloud customers begin with scaling out `(adding more VMs)(Preferred)` rather `than scaling up (increasing resources in a single VM)`.

- ㅇ **Machine Family and Quotas**: The `maximum` number of `CPUs per VM` depends on the `machine family` and the `quota(할당량) available` to the user, which `varies by zone`.

- ㅇ **Further Information**: **Detailed specifications** for available VM machine types can be found at [Google Cloud's official machine types documentation](https://cloud.google.com/compute/docs/machine-types).

### 가상 머신의 스케일 확장

- ㅇ **머신 타입 선택**: 사용자는 정의된 머신 타입을 선택하거나 커스텀 머신 타입을 생성하여 가상 CPU 수와 메모리 양을 지정할 수 있습니다.

- ㅇ **자동 스케일링**: 컴퓨트 엔진은 부하 메트릭에 기반해 애플리케이션의 VM 수를 동적으로 조정하는 자동 스케일링 기능을 제공합니다.

- ㅇ **로드 밸런싱**: 구글의 가상 사설 클라우드(VPC)는 VM들 사이에서 들어오는 트래픽을 분산시키는 다양한 종류의 로드 밸런싱을 지원합니다.

- ㅇ **대형 VM 구성**: 컴퓨트 엔진은 CPU 집약적 분석 및 인메모리 데이터베이스와 같은 워크로드에 적합한 매우 큰 VM을 구성할 수 있습니다.

- ㅇ **스케일링 실습**: 대부분의 구글 클라우드 고객은 단일 VM의 리소스를 증가시키는 것이 아니라, 여러 VM을 추가하는 '확장' 방식으로 시작합니다.

- ㅇ **머신 패밀리 및 할당량**: VM당 최대 CPU 수는 머신 패밀리와 사용자에게 할당된 할당량에 따라 달라지며, 이는 지역에 따라 다를 수 있습니다.

- ㅇ **추가 정보**: 사용 가능한 VM 머신 타입의 상세 사양은 [구글 클라우드 공식 머신 타입 문서](https://cloud.google.com/compute/docs/machine-types)에서 확인할 수 있습니다.

--------------------

### Important VPC compatibilities


- ㅇ **Routing Tables**: VPCs `include built-in routing tables` that `eliminate the need for provisioning or managing a router`. They are used to `forward traffic within the network`, across `subnetworks`, or `between zones` `without` needing an `external IP address`.

- ㅇ **Firewall Management**: Google Cloud VPCs feature a `global distributed firewall` that does `not require manual provisioning or management`. This firewall can `control` both `incoming and outgoing traffic` to instances.

- ㅇ **Firewall Rules through Network Tags**: `Firewall rules` can be easily `defined using network tags` on `Compute Engine instances`. For example, `tagging web servers` with **"WEB"** a`llows traffic` on `ports 80 and 443` to all VMs with this tag, regardless of IP address.

- ㅇ **VPC Peering**: `Allows` for the `establishment of a relationship` between `two VPCs` from **different Google Cloud projects** to` exchange traffic, facilitating inter-VPC communication`.

- ㅇ **Shared VPC**: `Enables the use` of Identity Access Management `(IAM) to control interactions` `between resources and VPCs` across different projects, `enhancing security` and `management efficiency`.

### VPC 호환성의 중요성


- ㅇ **라우팅 테이블**: VPC는 라우터를 별도로 설정(provisioning)하거나 관리할 필요 없이 내장된 라우팅 테이블을 포함하고 있습니다. 이 테이블은 네트워크 내부, 서브네트워크 간, 또는 구글 클라우드 존 간의 트래픽을 외부 IP 주소 없이 전달하는 데 사용됩니다.

- ㅇ **방화벽 관리**: 구글 클라우드 VPC는 수동 설정이나 관리가 필요 없는 글로벌 분산 방화벽을 제공합니다. 이 방화벽은 인스턴스로의 들어오는 및 나가는 트래픽을 제어할 수 있습니다.

- ㅇ **네트워크 태그를 통한 방화벽 규칙**: 컴퓨트 엔진 인스턴스의 네트워크 태그를 사용하여 방화벽 규칙을 쉽게 정의할 수 있습니다. 예를 들어, 웹 서버를 "WEB"이라고 태그하고 80 또는 443 포트의 트래픽을 해당 태그를 가진 모든 VM으로 허용하는 규칙을 작성할 수 있습니다.

- ㅇ **VPC 피어링**: 서로 다른 구글 클라우드 프로젝트의 두 VPC 간에 트래픽을 교환할 수 있는 관계를 설정할 수 있어 VPC 간 통신을 촉진합니다.

- ㅇ **공유 VPC**: 다른 프로젝트의 리소스와 VPC 간 상호 작용을 제어할 수 있도록 아이덴티티 액세스 관리(IAM)를 사용할 수 있으며, 이를 통해 보안 및 관리 효율성이 향상됩니다.


------

### 모르는 단어

#### in-memory databases

인메모리 데이터베이스는 모든 데이터를 메인 메모리에 저장하는 데이터베이스 관리 시스템입니다. 이는 디스크 기반의 데이터베이스보다 훨씬 빠른 읽기 및 쓰기 속도를 제공합니다.

인메모리 데이터베이스는 실시간 분석, 캐싱, 게임, 모바일 애플리케이션 등과 같은 고성능이 필요한 애플리케이션에서 주로 사용됩니다. 이러한 애플리케이션은 데이터에 대한 빠른 액세스와 처리가 필요하며, 인메모리 데이터베이스는 이러한 요구 사항을 충족시킵니다.

그러나 인메모리 데이터베이스는 메모리가 비용이 많이 들고, 용량이 제한적이라는 단점이 있습니다. 또한, 전원이 꺼지거나 시스템이 다운되면 메모리에 저장된 데이터가 손실될 수 있습니다. 이러한 문제를 해결하기 위해, 일부 인메모리 데이터베이스는 디스크에 데이터를 주기적으로 백업하거나, 여러 시스템에 데이터를 복제하는 등의 방법을 사용합니다.