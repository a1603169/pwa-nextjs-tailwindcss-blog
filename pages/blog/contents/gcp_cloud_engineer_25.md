---
title: 'GCP Cloud Engineer - 25'
subtitle: 'Essential Google Cloud Infrastructure: Pricing'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Pricing

- ㅇ **Network Pricing Overview**:
  
  - ㅁ `Ingress traffic to GCP` is generally `not charged` `unless` processed by a `specific resource like a load balancer`.
  
  - ㅁ `Egress traffic (outbound from GCP)` is `subject to charges`, especially when `responding to requests`.

- ㅇ **Specific Egress Charges**:
  
  - ㅁ `No charge for egress` within the `same zone` using `internal IP addresses`.
  
  - ㅁ `Free egress to Google services` (**YouTube, Maps, Drive**) and within the `same GCP region`.
  
  - ㅁ `Charges apply` for `egress between zones in the same region`, across `external IP addresses`, and between `different regions`.
  
  - ㅁ `Egress` treated as `inter-zone` if the `zone cannot be determined via external IP`.

- ㅇ **External IP Address Pricing**:
  
  - ㅁ `Charges apply` for both `static` and `ephemeral external IP addresses not in use`.
  
  - ㅁ `Higher charges` for reserved `static external IP addresses` `not assigned` to a resource.
  
  - ㅁ `Lower charges` for `external IP addresses used with preemptible(선점형) VMs`.

- ㅇ **Pricing Adjustments and Tools**:
  
  - ㅁ Always `check for updates` in the official GCP documentation due to possible pricing changes.
  
  - ㅁ Use the `GCP pricing calculator` to estimate costs based on expected consumption.
  
  - ㅁ The `pricing calculator` allows adjustments for currency and time frame, and results can be emailed or saved.

### 가격


- ㅇ **네트워크 요금 개요**:
  
  - ㅁ GCP로 들어오는 인입 트래픽은 일반적으로 무료이지만, 로드 밸런서 같은 특정 리소스를 통과할 경우 요금이 부과됩니다.
  
  - ㅁ 응답을 처리하는 경우를 포함하여 GCP에서 나가는 이그레스 트래픽은 요금이 부과됩니다.

- ㅇ **구체적인 이그레스 요금**:
  
  - ㅁ 같은 존 내부 IP 주소를 사용한 이그레스 트래픽은 요금이 부과되지 않습니다.
  
  - ㅁ Google 서비스(YouTube, Maps, Drive) 및 같은 GCP 리전 내 이그레스는 무료입니다.
  
  - ㅁ 같은 리전 내 다른 존 간, 외부 IP 주소를 통한 같은 존 내, 그리고 다른 리전 간 이그레스에 요금이 부과됩니다.
  
  - ㅁ 외부 IP를 통해 존을 판별할 수 없는 경우, 같은 리전 내 다른 존 간 트래픽처럼 취급됩니다.

- ㅇ **외부 IP 주소 요금**:
  
  - ㅁ 사용되지 않는 정적 및 임시 외부 IP 주소에 대해 요금이 부과됩니다.
  
  - ㅁ 리소스에 할당되지 않은 예약된 정적 외부 IP 주소에 대해서는 더 높은 요금이 부과됩니다.
  
  - ㅁ 선점 가능한 VM에서 사용되는 외부 IP 주소는 표준 VM 인스턴스보다 요금이 낮습니다.

- ㅇ **요금 조정 및 도구**:
  
  - ㅁ 가능한 요금 변경에 대해 공식 GCP 문서를 항상 확인하십시오.
  
  - ㅁ 예상 소비량을 기반으로 비용을 추정하기 위해 GCP 요금 계산기를 사용하세요.
  
  - ㅁ 요금 계산기는 통화 및 시간 프레임 조정을 허용하며, 결과를 이메일로 보내거나 저장할 수 있습니다.

