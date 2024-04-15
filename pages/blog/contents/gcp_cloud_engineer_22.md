---
title: 'GCP Cloud Engineer - 22'
subtitle: 'Essential Google Cloud Infrastructure: Demo -> Expand a Subnet / IP addresses'
date: '2024-04-14'
tags: [Cloud, GCP, Kubernetes]
---

### Demo -> Expand subnets


- ㅇ **Initial Setup**: Started with a `custom subnet having a /29 mask`, providing `eight addresses`, but only `four available` for use `due to GCP reservations`.

- ㅇ **Attempt to Add VM**: Tried creating an `additional VM`, which should `fail` due to `IP space exhaustion`.

- ㅇ **Error Confirmation**: `Received` an error indicating that the `subnet's IP space was exhausted`.

- ㅇ **Expanding the Subnet**: `Accessed the subnet settings` through the network interface details, changed the `subnet mask from /29 to /23 to increase the number of available IP addresses`.

- ㅇ **Recreation of VM**: After expanding the subnet, `retried creating the VM` which previously failed to check if the subnet expansion was `successful`.

- ㅇ **Successful Creation**: The VM was successfully created with `a new internal IP address`, `indicating successful subnet expansion` without any downtime.

### Demo -> 서브넷 확장하기 

- ㅇ **초기 설정**: /29 마스크를 가진 커스텀 서브넷으로 시작하여 8개의 주소를 제공하지만, GCP 예약으로 인해 4개의 주소만 사용 가능합니다.

- ㅇ **VM 추가 시도**: IP 공간 부족으로 인해 추가 VM 생성 시도가 실패할 것입니다.

- ㅇ **오류 확인**: 서브넷의 IP 공간이 소진되었다는 오류를 받았습니다.

- ㅇ **서브넷 확장**: 네트워크 인터페이스 세부 정보를 통해 서브넷 설정에 접근하여 /29에서 /23으로 서브넷 마스크를 변경하여 사용 가능한 IP 주소 수를 늘렸습니다.

- ㅇ **VM 재생성**: 서브넷을 확장한 후 이전에 실패한 VM 생성을 재시도하여 서브넷 확장이 성공적이었는지 확인했습니다.

- ㅇ **성공적인 생성**: 새로운 내부 IP 주소를 가진 VM이 성공적으로 생성되어 서브넷 확장이 중단이나 다운타임 없이 성공적으로 이루어졌음을 나타냅니다.

----------------

### IP Addresses

- ㅇ **Internal IP Addresses**:
  
  - ㅁ Assigned via `DHCP` to `every virtual machine and service` that `relies on virtual machines`, such as `App Engine` and `Google Kubernetes Engine`.
  
  - ㅁ `Symbolic names of VMs` are `registered` with an `internal DNS service` within the `same network`, `translating names` to `internal IP addresses`.
  
  - ㅁ The `DNS is network-scoped` and cannot `translate host names from VMs in different networks(X)`.

- ㅇ **External IP Addresses**:
  
  - ㅁ `Optional` and `only` necessary `if the VM is externally facing`.
  
  - ㅁ Can be `ephemeral(임시)` (from a pool) or `static` (from a `reserved external IP address`).
  
  - ㅁ `Unused reserved static external IP addresses` incur `higher charges` `than those in use`.

- ㅇ **Using Own IP Addresses**:
  
  - ㅁ You can use your `own publicly routable IP address` prefixes as `external IP addresses` on Google Cloud.
  
  - ㅁ `To be eligible`, you must own a `/24 block` or `larger` and bring it to `Google Cloud for use`.

### IP 주소

- ㅇ **내부 IP 주소**:
  
  - ㅁ DHCP를 통해 모든 가상 머신과 가상 머신에 의존하는 서비스(예: App Engine 및 Google Kubernetes Engine)에 할당됩니다.
  
  - ㅁ VM의 상징적 이름은 동일 네트워크 내부 DNS 서비스에 등록되어 이름을 내부 IP 주소로 변환합니다.
  
  - ㅁ DNS는 네트워크 범위로 설정되어 있으며 다른 네트워크의 VM 호스트 이름을 변환할 수 없습니다.

- ㅇ **외부 IP 주소**:
  
  - ㅁ 선택 사항이며 VM이 외부에 노출되어 있을 경우에만 필요합니다.
  
  - ㅁ 일시적(풀에서 할당) 또는 고정(예약된 외부 IP 주소에서 할당) IP 주소가 될 수 있습니다.
  
  - ㅁ 사용하지 않는 예약된 고정 외부 IP 주소는 사용 중인 고정 및 일시적 외부 IP 주소보다 더 높은 요금이 부과됩니다.

- ㅇ **자체 IP 주소 사용**:
  
  - ㅁ 공개적으로 라우팅 가능한 자체 IP 주소 접두사를 Google Cloud의 외부 IP 주소로 사용할 수 있습니다.
  
  - ㅁ 자격을 얻으려면 /24 블록 이상을 소유하고 Google Cloud에 가져와 사용해야 합니다.

---------------------

### 모르는 단어

#### DHCP

DHCP(Dynamic Host Configuration Protocol)는 네트워크에 연결된 장치들에게 자동으로 IP 주소와 기타 관련 설정을 할당하는 프로토콜입니다.

DHCP 서버는 네트워크에 연결된 각 장치(클라이언트)에게 고유한 IP 주소, 서브넷 마스크, 기본 게이트웨이, DNS 서버 정보 등을 제공합니다. 

이 정보는 장치가 네트워크와 인터넷에 연결되는 데 필요한 설정입니다.

DHCP를 사용하면 네트워크 관리자는 수동으로 각 장치에 IP 주소를 할당하거나 설정을 변경할 필요가 없으므로, 네트워크 설정과 관리가 단순화되고 효율성이 향상됩니다. 

또한 IP 주소 충돌과 같은 문제를 방지하고, IP 주소를 효율적으로 재사용할 수 있습니다.
