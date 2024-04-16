---
title: 'GCP Cloud Engineer - 32'
subtitle: 'Essential Google Cloud Infrastructure: Disk options / Common Compute Engine Actions'
date: '2024-04-15'
tags: [Cloud, GCP]
---

### Disk Options 

1. **Persistent Disk**
   
   <img class='blogImage' src='/blog/disk_summary.png'>
   
   <img class='blogImage' src='/blog/persist_disk_diff.png'>

   - ㅁ **English**: `Every VM` comes with a `single root persistent disk` which contains the `operating system` and can `survive if the VM terminates`. You can `prevent` the `boot disk from being deleted` with the VM `by changing a setting`.
   
   
   - ㅁ **Korean**: 모든 VM에는 운영 체제가 포함된 단일 루트 영구 디스크가 제공되며, VM이 종료되어도 생존할 수 있습니다. 설정을 변경하여 VM이 삭제될 때 부팅 디스크가 삭제되지 않도록 할 수 있습니다.

2. **Disk Types**
   
   
   - ㅁ **English**: Disks can be `HDD or SSD`, affecting both `cost and performance`. `Persistent disks` allow `snapshots` for `incremental backups` and can be `resized dynamically`.
   
   
   - ㅁ **Korean**: 디스크는 HDD 또는 SSD일 수 있으며, 비용과 성능에 영향을 줍니다. 영구 디스크는 증분 백업을 위한 스냅샷을 허용하며 동적으로 크기를 조정할 수 있습니다.

3. **Zonal and Regional Disks**
   
   
   - ㅁ **English**: `Zonal persistent disks` offer `reliable block storage` within `a single zone`. `Regional persistent disks` provide `synchronous replication across zones`, suitable for `high-performance needs` and `high availability`.
   
   
   - ㅁ **Korean**: 존 영구 디스크는 단일 존 내에서 신뢰할 수 있는 블록 스토리지를 제공합니다. 지역 영구 디스크는 존 간 동기식 복제를 제공하여 고성능 요구 사항 및 높은 가용성에 적합합니다.

4. **Disk Performance and Encryption**
   
   
   - ㅁ **English**: `Standard persistent disks` use `HDDs` and are good for `large data workloads`. `SSD-based disks` like `Performance, Balanced, and Extreme` provide `lower latency` and `higher IOPS`. `Data encryption` is `managed` by Google Cloud by `default`.
   
   
   - ㅁ **Korean**: 표준 영구 디스크는 HDD를 사용하며 대용량 데이터 워크로드에 적합합니다. 성능, 균형 잡힌 및 극단적인 SSD 기반 디스크는 더 낮은 지연 시간과 더 높은 IOPS를 제공합니다. 데이터 암호화는 기본적으로 Google Cloud에 의해 관리됩니다.

5. **Local SSDs and RAM Disks**
   
   
   - ㅁ **English**: `Local SSDs` are `physically attached` to the `VM`, offering `high IOPS` but are `ephemeral` and `do not survive(X) a VM stop`. `RAM disks` provide the `fastest` performance for `small data structures`.
   
   
   - ㅁ **Korean**: 로컬 SSD는 VM에 물리적으로 연결되어 높은 IOPS를 제공하지만 일시적이며 VM 중지를 견디지 못합니다. RAM 디스크는 작은 데이터 구조에 대한 가장 빠른 성능을 제공합니다.

6. **Capacity and Attachment Limits**
   
   
   - ㅁ **English**: The `number of disks` you `can attach` to a VM `varies by machine type`, with limits `ranging from 16 to 128 disks`. `High disk I/O` can compete with `network throughput`.
   
   
   - ㅁ **Korean**: VM에 연결할 수 있는 디스크 수는 기계 유형에 따라 다르며, 16개에서 128개 디스크에 이르는 제한이 있습니다. 높은 디스크 I/O는 네트워크 처리량과 경쟁할 수 있습니다.

7. **Management and Security Features**
   
   
   - ㅁ **English**: `Cloud management` `simplifies` `disk resizing and redundancy`. Disks are `automatically encrypted`, with options for `customer-managed` or `customer-supplied` `encryption keys`.
   
   
   - ㅁ **Korean**: 클라우드 관리는 디스크 크기 조정 및 중복성을 단순화합니다. 디스크는 자동으로 암호화되며, 고객 관리 또는 고객 제공 암호화 키 옵션이 있습니다.

----------------

### Common Compute Engine Action

1. **Metadata Management**
   
   
   - ㅁ **English**: `VM instances` `store metadata` on a `metadata server`, which can be `accessed(O) without extra authorization(X)`. `Startup scripts` can `use` this metadata, such as `external IP addresses`, to set up applications, `ensuring reusability` without `modification(X)`.
   
   
   - ㅁ **Korean**: VM 인스턴스는 메타데이터 서버에 메타데이터를 저장하며, 추가 인증 없이 접근할 수 있습니다. 시작 스크립트는 이 메타데이터(예: 외부 IP 주소)를 사용하여 응용 프로그램을 설정할 수 있으며, 수정 없이 재사용성을 보장합니다.

2. **Instance Moving**
   
   <img class='blogImage' src='/blog/move_new_zone.png'>

   - ㅁ **English**: VM instances `can be moved to new zones` for various reasons, like `geographical optimization` or `deprecation of old zones`. The process involves `shutting down the VM, moving it, and restarting it` in the new location.
   
   
   - ㅁ **Korean**: VM 인스턴스는 지리적 최적화 또는 오래된 존의 폐지와 같은 다양한 이유로 새로운 존으로 이동할 수 있습니다. 이 과정은 VM을 종료하고 이동한 다음 새 위치에서 다시 시작하는 것을 포함합니다.

3. **Snapshots for Backups and Data Migration**
   
   
   - ㅁ **English**: `Snapshots` are used for `backing up data` on `persistent disks` and can also `facilitate data migration` `between zones or disk types`. They are `incremental`, `compressed`, and `stored in Cloud Storage`.
   
   
   - ㅁ **Korean**: 스냅샷은 영구 디스크의 데이터 백업에 사용되며 존 또는 디스크 유형 간 데이터 마이그레이션을 용이하게 할 수 있습니다. 이들은 증분되고 압축되며 클라우드 스토리지에 저장됩니다.

4. **Disk Resizing**
   
   
   - ㅁ **English**: `Persistent disks` `can be resized` to `increase storage capacity` and `improve I/O performance`, even while the `disk is attached to a running VM`. `This cannot be shirinked once you grow`
   
   
   - ㅁ **Korean**: 영구 디스크의 크기를 조정하여 저장 용량을 늘리고 I/O 성능을 향상시킬 수 있으며, 디스크가 실행 중인 VM에 연결된 상태에서도 가능합니다. 한 번 사이즈를 늘리면 줄일 수 없습니다.

5. **Using and Managing Encryption**
   
   
   - ㅁ **English**: Compute Engine `automatically encrypts all data at rest`, with `options` for using `Cloud Key Management Service` or `customer-supplied keys` for further control and security.
   
   
   - ㅁ **Korean**: Compute Engine은 모든 휴면 상태의 데이터를 자동으로 암호화하며, 추가적인 제어 및 보안을 위해 Cloud Key Management Service 또는 고객 제공 키를 사용할 수 있는 옵션이 있습니다.

6. **Persistent Disk Snapshots**
   
   <img class='blogImage' src='/blog/snapshot_additional.png'>

   - ㅁ **English**: Only available for `persistent disks`, `snapshots` provide a `method` for `periodic backup` and are different from `images used for creating instances(XXX)`. They are `useful for restoring data` to a `new disk` in a `different zone`. Not available for local
   
   
   - ㅁ **Korean**: 영구 디스크에만 사용 가능한 스냅샷은 주기적인 백업 방법을 제공하며 인스턴스 생성에 사용되는 이미지와 다릅니다. 다른 존의 새 디스크로 데이터를 복원하는 데 유용합니다.


---------------


### 모르는 단어

### High disk I/O

"High disk I/O"는 디스크 입력/출력(Input/Output) 작업이 높은 수준으로 발생하고 있음을 나타냅니다. 

이는 디스크에 데이터를 읽고 쓰는 작업이 빈번하게 발생하고 있음을 의미합니다.

IOPS(Input/Output Operations Per Second)는 디스크 I/O의 성능을 측정하는 지표 중 하나로, 초당 디스크 입출력 연산의 수를 나타냅니다. 

따라서 "High disk I/O"는 일반적으로 IOPS가 높다는 것을 의미할 수 있습니다.

그러나 "High disk I/O"는 단지 디스크 작업이 빈번하게 발생하고 있다는 것을 나타내며, 이는 반드시 높은 성능을 의미하지는 않습니다. 

예를 들어, 디스크 I/O가 높으면 시스템의 성능이 저하될 수 있으므로, 이를 최적화하는 것이 중요할 수 있습니다.
