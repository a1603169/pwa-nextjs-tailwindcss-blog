---
title: 'GCP Cloud Engineer - 24'
subtitle: 'Essential Google Cloud Infrastructure: Routes and firewall rules'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Routes and firewall rules

- ㅇ **Traffic Routing in GCP**:
  
  - ㅁ `Default routes allow instances` `within a network` to `communicate directly`, `even across subnets`.
  
  - ㅁ `Every network` has a `default route for external traffic`, `directing packets` to `external destinations`.
  
  - ㅁ `Special routes` can be created `to override default routes` but `must be complemented(보완하다) by appropriate firewall rules`.

- ㅇ **Firewall Rules**:
  
  - ㅁ `Default network firewall rules` allow `all internal communications within the network`.
  
  - ㅁ `Manually created networks` require `custom firewall rules`, as experienced in lab exercises.
  
  - ㅁ `Routes` are `matched` by `destination IP addresses`, but `effective traffic flow` also `depends on corresponding firewall rules`.

- ㅇ **Routing Tables**:
  
  - ㅁ Routes collection may `apply to specific instances based on network matching` and `instance tags`.
  
  - ㅁ `Compute Engine` generates `read-only routing tables` for `each instance.`
  
  - ㅁ A `virtual router at the core` of each network manages `packet routing to the appropriate next hop`.

- ㅇ **Firewall Rules in GCP**:
  
  - ㅁ GCP firewalls are `stateful, allowing bidirectional communication` once a session is established.
  
  - ㅁ `Default` behavior includes an implied `"Deny all" for ingress` and `"Allow all" for egress` `if all rules are deleted.`
  
  - ㅁ Firewall configurations include `directions`, `sources/destinations`, `protocols`, `ports`, `actions`, `priorities`, and `specific assignments`.

- ㅇ **Firewall Use Cases**:
  
  - ㅁ **Egress Rules**: Manage `outbound connections`, `allowing or denying` based on `protocols, ports`, and `IP addresses`.
  
  - ㅁ **Ingress Rules**: `Protect instances` from `unwanted incoming connections`, with allowances based on specified conditions.

### 라우트와 firewall 규칙


- ㅇ **GCP에서의 트래픽 라우팅**:
  
  - ㅁ 기본 라우트는 네트워크 내 인스턴스들이 서브넷을 거쳐 직접 통신할 수 있게 합니다.
  
  - ㅁ 모든 네트워크는 외부 목적지로 패킷을 보내는 기본 라우트를 갖추고 있습니다.
  
  - ㅁ 특별 라우트를 생성하여 기본 라우트를 덮어쓸 수 있지만, 적절한 방화벽 규칙이 필요합니다.

- ㅇ **방화벽 규칙**:
  
  - ㅁ 기본 네트워크의 방화벽 규칙은 네트워크 내 모든 인스턴스 간 통신을 허용합니다.
  
  - ㅁ 수동으로 생성된 네트워크는 사용자가 직접 방화벽 규칙을 생성해야 합니다.
  
  - ㅁ 라우트는 목적지 IP 주소에 따라 패킷을 매치하지만, 효과적인 트래픽 흐름은 해당 방화벽 규칙에도 의존합니다.

- ㅇ **라우팅 테이블**:
  
  - ㅁ 라우트 모음은 네트워크 일치 및 인스턴스 태그에 따라 특정 인스턴스에 적용될 수 있습니다.
  
  - ㅁ Compute Engine은 각 인스턴스에 대해 읽기 전용 라우팅 테이블을 생성합니다.
  
  - ㅁ 각 네트워크의 핵심에 있는 대규모 가상 라우터가 패킷의 다음 홉을 관리합니다.

- ㅇ **GCP의 방화벽 규칙**:
  
  - ㅁ GCP 방화벽은 상태를 유지하며, 세션이 시작되면 양방향 통신을 허용합니다.
  
  - ㅁ 모든 규칙이 삭제되면 "모든 수신 차단" 및 "모든 발신 허용"이 기본 동작이 됩니다.
  
  - ㅁ 방화벽 구성은 방향, 소스/목적지, 프로토콜, 포트, 조치, 우선 순위 및 특정 할당을 포함합니다.

- ㅇ **방화벽 사용 사례**:
  
  - ㅁ **발신 규칙(Egress Rules)**: 프로토콜, 포트 및 IP 주소를 기반으로 발신 연결을 관리합니다.
  
  - ㅁ **수신 규칙(Ingress Rules)**: 원하지 않는 수신 연결로부터 인스턴스를 보호하며, 지정된 조건에 따라 허용합니다.



----------

### 모르는 단어

#### hop

네트워킹에서 "hop"은 패킷이 소스에서 목적지까지 이동하는 동안 거치는 중간 라우터나 스위치 등의 네트워크 장치를 의미합니다.

예를 들어, 컴퓨터 A에서 컴퓨터 B로 패킷을 보낼 때, 패킷이 직접 A에서 B로 가지 않고 중간에 라우터 R을 거칠 수 있습니다. 이 경우, R은 한 "hop"을 나타냅니다.

"hop" 개수는 네트워크 성능을 측정하는 데 사용되는 중요한 지표 중 하나로, 일반적으로 hop 개수가 적을수록 네트워크 지연 시간이 짧아지고 통신 성능이 향상됩니다.