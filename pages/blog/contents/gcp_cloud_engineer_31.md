---
title: 'GCP Cloud Engineer - 31'
subtitle: 'Essential Google Cloud Infrastructure: Special compute configurations / Images'
date: '2024-04-15'
tags: [Cloud, GCP]
---

### Special Compute Configuration

1. **Preemptible VMs**
   
   - ㅁ **English**: `Preemptible VMs` offer `significant cost savings`, `potentially` being `preempted at any time` but with `no charges` if `within the first minute`. These VMs have a lifespan of up to 24 hours and do `not support live migrations(X)` or `automatic restarts(X)`.
   
   - ㅁ **Korean**: 선점형 VM은 상당한 비용 절감을 제공하며, 언제든지 선점될 수 있지만 첫 번째 분 이내에는 요금이 부과되지 않습니다. 이 VM들은 최대 24시간 동안 존재할 수 있으며 라이브 마이그레이션 또는 자동 재시작을 지원하지 않습니다.

2. **Spot VMs**
   
   - ㅁ **English**: `Spot VMs` have `no maximum(X) runtime`, `similar to Preemptible VMs`, and `can be preempted` `based on resource needs`. They also `cannot live-migrate(X)` or a`utomatically restart(X)` during maintenance.
   
   - ㅁ **Korean**: 스팟 VM은 최대 실행 시간이 없으며 선점형 VM과 유사하게 리소스 필요에 따라 선점될 수 있습니다. 또한 유지보수 중에 라이브 마이그레이션 또는 자동 재시작을 할 수 없습니다.

3. **Sole-Tenant Nodes**
   
   - ㅁ **English**: `Sole-tenant nodes` provide `physical isolation` for `VMs`, useful for `compliance` and `sensitive workloads`. These nodes `host VMs from a single project`, `offering options` for `custom machine types` and `extended memory`.
   
   - ㅁ **Korean**: 단독 테넌트 노드는 VM의 물리적 격리를 제공하여 규정 준수 및 민감한 워크로드에 유용합니다. 이러한 노드는 단일 프로젝트의 VM을 호스팅하며 사용자 정의 기계 유형 및 확장 메모리 옵션을 제공합니다.

4. **Shielded VMs**
   
   - ㅁ **English**: `Shielded VMs` ensure the `integrity of your VM instances` with `protection against rootkits and other threats`. They are part of the `Shielded Cloud Initiative`, enhancing `security across Google Cloud`.
   
   - ㅁ **Korean**: 실드 VM은 루트킷 및 기타 위협으로부터 보호하여 VM 인스턴스의 무결성을 보장합니다. 이들은 Google Cloud 전반의 보안을 강화하는 Shielded Cloud Initiative의 일부입니다.

5. **Confidential VMs**
   
   - ㅁ **English**: `Confidential VMs` offer `data encryption` `in use`, operating on `AMD Epyc "Rome" processors` with `AMD Secure Encrypted Virtualization`. They are designed for `high memory`, `compute-heavy workloads` with `enhanced security`.
   
   - ㅁ **Korean**: 기밀 VM은 사용 중 데이터 암호화를 제공하며 AMD Secure Encrypted Virtualization이 적용된 AMD Epyc "Rome" 프로세서에서 작동합니다. 이들은 보안이 강화된 고메모리, 계산 집약적 워크로드를 위해 설계되었습니다.


--------

### VM Images

1. **Boot Disk Image**
   
   - ㅁ **English**: When `creating a virtual machine`, you select a `boot disk image` containing the `boot loader`, `operating system`, `file system structure`, `pre-configured software`, and `customizations`. Options include `public` or `custom images`.
   
   - ㅁ **Korean**: 가상 머신을 생성할 때, 부트 로더, 운영 체제, 파일 시스템 구조, 사전 구성된 소프트웨어 및 맞춤 설정이 포함된 부트 디스크 이미지를 선택합니다. 공개 이미지 또는 사용자 정의 이미지 중에서 선택할 수 있습니다.

2. **Image Types**
   
   - ㅁ **English**: You `can choose` from `Linux and Windows images`. `Premium images` are indicated with a `"p"` and have `specific billing rates`.
   
   - ㅁ **Korean**: Linux 및 Windows 이미지 중에서 선택할 수 있습니다. 프리미엄 이미지는 'p'로 표시되며 특정 요금이 적용됩니다.

3. **Billing for Premium Images**
   
   - ㅁ **English**: `Premium images` incur `per-second charges` `after` a `1-minute minimum`, except for `SQL Server images`, which are billed `per minute after a 10-minute minimum`.
   
   - ㅁ **Korean**: 프리미엄 이미지는 1분 최소 사용 후 초당 요금이 부과되며, SQL Server 이미지는 10분 최소 사용 후 분당 요금이 부과됩니다.

4. **Global Pricing**
   
   - ㅁ **English**: The `prices` for `premium images vary` with the `machine type` but are `consistent globally`, `regardless of region or zone`.
   
   - ㅁ **Korean**: 프리미엄 이미지의 가격은 기계 유형에 따라 다르지만 지역이나 구역에 관계없이 전 세계적으로 일관됩니다.

5. **Custom Images**
   
   - ㅁ **English**: `Custom images` can be `created by pre-installing software` for `specific organizational needs`. They can also be `imported from on-premises` or `another cloud provider` at `no cost`.
   
   - ㅁ **Korean**: 특정 조직의 필요에 맞게 소프트웨어를 미리 설치하여 사용자 정의 이미지를 생성할 수 있습니다. 또한 온프레미스 또는 다른 클라우드 제공업체에서 무료로 가져올 수 있습니다.

6. **Image Sharing and Use**
   
   - ㅁ **English**: `Custom images` can be `shared` within `your project` or `across other projects`. They are `useful` for `system maintenance scenarios` like `VM creation, backup, recovery, and instance cloning`.
   
   - ㅁ **Korean**: 사용자 정의 이미지는 프로젝트 내부나 다른 프로젝트 간에 공유할 수 있습니다. 가상 머신 생성, 백업, 복구 및 인스턴스 복제와 같은 시스템 유지 관리 시나리오에 유용합니다.

7. **Machine Images**
   
   - ㅁ **English**: A `machine image` stores `all necessary configuration`, `metadata`, `permissions`, and `data from one or more disks` to `create a VM instance`. Ideal for `disk backups` and `instance cloning`.
   
   - ㅁ **Korean**: 기계 이미지는 VM 인스턴스를 생성하기 위해 하나 이상의 디스크에서 필요한 모든 구성, 메타데이터, 권한 및 데이터를 저장합니다. 디스크 백업 및 인스턴스 복제에 이상적입니다.


