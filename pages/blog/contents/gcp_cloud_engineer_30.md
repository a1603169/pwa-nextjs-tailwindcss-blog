---
title: 'GCP Cloud Engineer - 30'
subtitle: 'Essential Google Cloud Infrastructure: Compute Options / Compute Pricing'
date: '2024-04-15'
tags: [Cloud, GCP]
---

### Compute Options

1. **VM Creation and Configuration Options**
   
   - ㅁ **English**: You have three options for creating and configuring a VM: the `Cloud Console`, the `Cloud Shell command line`, and the `RESTful API`. For `complex configurations`, the `RESTful API is recommended`.
   
   - ㅁ **Korean**: VM을 생성하고 구성하는 세 가지 옵션이 있습니다: 클라우드 콘솔, 클라우드 쉘 명령 줄, RESTful API. 복잡한 구성의 경우 RESTful API를 사용하는 것이 권장됩니다.

2. **Machine Types and Families**
   
   - ㅁ **English**: When creating a VM, select a `machine type` from a `machine family` to determine its `resources`. There are four machine families: `General-purpose`, `Compute-optimized`, `Memory-optimized`, and `Accelerator-optimized`.
   
   - ㅁ **Korean**: VM을 생성할 때 자원을 결정하기 위해 기계 가족에서 기계 유형을 선택합니다. 네 가지 기계 가족이 있습니다: 일반용도, 계산 최적화, 메모리 최적화, 가속기 최적화.

3. **General-purpose Machine Family**
   
   <img class='blogImage' src='/blog/general_purpose_mf.png'>

   - ㅁ **English**: General-purpose family offers the E2`, N2, N2D`, and `Tau series` with a `balance of CPU and memory for most workloads`.
   
   - ㅁ **Korean**: 일반용도 가족은 대부분의 작업 부하에 대한 CPU와 메모리의 균형을 제공하는 E2, N2, N2D, Tau 시리즈를 제공합니다.

4. **Compute-optimized Machine Family**
   
   <img class='blogImage' src='/blog/compute_optimized_mf.png'>

   - ㅁ **English**: The `compute-optimized family`, including `C2 and C2D VMs`, provides the `highest performance per core`, ideal for `compute-intensive tasks`.
   
   - ㅁ **Korean**: C2 및 C2D VM을 포함한 계산 최적화 가족은 코어 당 가장 높은 성능을 제공하며 계산 집약적 작업에 이상적입니다.

5. **Memory-optimized Machine Family**
   
   <img class='blogImage' src='/blog/memory_optimized_mf.png'>

   - ㅁ **English**: The `memory-optimized family`, such as `M1 and M2 series`, offers the `highest amount of memory`, suited for `memory-intensive applications`.
   
   - ㅁ **Korean**: M1 및 M2 시리즈와 같은 메모리 최적화 가족은 메모리 집약적 응용 프로그램에 적합한 가장 많은 양의 메모리를 제공합니다.

6. **Accelerator-optimized Machine Family**
   
   <img class='blogImage' src='/blog/acc_opt_mf.png'>

   - ㅁ **English**: The `accelerator-optimized family` includes the `A2 series`, which is designed for workloads that `benefit from GPUs`, such as `machine learning`.
   
   - ㅁ **Korean**: 가속기 최적화 가족에는 기계 학습과 같은 GPU의 이점을 활용하는 작업에 설계된 A2 시리즈가 포함됩니다.

7. **Custom Machine Types**
   
   - ㅁ **English**: Custom machine types allow you to `specify the exact number` of `vCPUs` and the `amount of memory`, providing `flexibility` for `unique workloads`.
   
   - ㅁ **Korean**: 맞춤형 기계 유형을 사용하면 정확한 vCPU 수와 메모리 양을 지정할 수 있어 독특한 작업 부하에 대한 유연성을 제공합니다.

8. **Region and Zone Considerations**
   
   - ㅁ **English**: Choose a `region and zone` based on `geographical location` and the `default processor` support available in that zone.
   
   - ㅁ **Korean**: 지리적 위치와 해당 영역에서 사용 가능한 기본 프로세서 지원을 기반으로 영역과 영역을 선택합니다.

-----------------

### Compute Pricing

1. **Minimum Billing and Increments**
   
   - ㅁ **English**: All `vCPUs, GPUs, and GB of memory` are billed for a `minimum of 1 minute, then in 1-second increments` after the first minute.
   
   - ㅁ **Korean**: 모든 vCPU, GPU 및 메모리는 최소 1분 동안 청구되며, 첫 1분 이후에는 1초 단위로 청구됩니다.

2. **Resource-based Pricing Model**
   
   - ㅁ **English**: `Each vCPU and GB of memory` are `billed separately`, allowing for `sustained use discounts` to be `applied collectively` in a region.
   
   - ㅁ **Korean**: 각 vCPU와 메모리는 별도로 청구되며, 지역별로 지속 사용 할인이 총괄적으로 적용될 수 있습니다.

3. **Sustained Use Discounts**
   
   - ㅁ **English**: `Automatic discounts` are provided for running `certain resources` for a `significant portion` of the `month`, up to `30% for instances running all month`.
   
   - ㅁ **Korean**: 달의 상당 부분 동안 특정 리소스를 실행하는 경우 자동 할인이 제공되며, 한 달 내내 실행되는 인스턴스의 경우 최대 30%까지 할인됩니다.

4. **Committed Use Discounts**
   
   - ㅁ **English**: `By committing` to a usage term of `1 or 3 years`, you can receive `up to 57% off for most machine types` and `up to 70% off` for `memory-optimized machine types`.
   
   - ㅁ **Korean**: 1년 또는 3년의 사용 기간에 약속함으로써 대부분의 기계 유형에 대해 최대 57%, 메모리 최적화 기계 유형에 대해 최대 70% 할인을 받을 수 있습니다.

5. **Preemptible and Spot VMs**
   
   - ㅁ **English**: These instances offer `much lower prices` than normal instances but `may be terminated if their resources are needed elsewhere`.
   
   - ㅁ **Korean**: 이 인스턴스는 일반 인스턴스보다 훨씬 낮은 가격을 제공하지만, 그 자원이 다른 곳에서 필요한 경우 종료될 수 있습니다.

6. **Custom Machine Types**
   
   - ㅁ **English**: `Customizing the amount of memory and CPU` allows for `further pricing customization`, matching `specific workload requirements`.
   
   - ㅁ **Korean**: 메모리와 CPU 양을 사용자 정의함으로써 특정 작업 요구 사항에 맞게 추가적인 가격 맞춤 설정이 가능합니다.

7. **VM Sizing Recommendations**
   
   - ㅁ **English**: Compute Engine provides `VM sizing recommendations` to `optimize resource usage`, which appear 24 hours after instance creation.
   
   - ㅁ **Korean**: Compute Engine은 리소스 사용을 최적화하기 위한 VM 사이즈 조정 권장 사항을 제공하며, 인스턴스 생성 후 24시간 후에 나타납니다.

8. **Free Usage Limits**
   
   - ㅁ **English**: Compute Engine has `free usage limits` for `certain resources`.
   
   - ㅁ **Korean**: Compute Engine은 특정 리소스에 대해 무료 사용 제한을 가지고 있습니다.

9. **Combining Usage for Discounts**
   
   - ㅁ **English**: Compute Engine `combines` the usage of `vCPUs and memory across instances` to `qualify` for the `largest sustained use discounts`.
   
   - ㅁ **Korean**: Compute Engine은 가장 큰 지속 사용 할인을 받을 자격을 얻기 위해 인스턴스에 걸쳐 vCPU 및 메모리 사용을 결합합니다.
