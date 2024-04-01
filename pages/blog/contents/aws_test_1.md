---
title: 'AWS Solution Architechture Associate 시험준비 - 1'
subtitle: 'AWS Region / AZ basic '
date: '2024-03-22'
tags: [Cloud, CS]
---

3월 22일 다시 준비하는 AWS

**`Getting started with AWS`**

### 지역기반의 서비스 AWS에서 Region을 선택하는 법

- `Compliance(법률준수)` with data governance and legal requirements
- `Proximity(지연시간)` to customers
- `Available services` -> 특정 서비스는 특정 리전에서만 지원함.
- `Pricing`

### AWS AZ란

- 정의: 가용가능 존 Availability Zones

- Min: 3개 

- Max: 6개

각각의 AZ는 하나 혹은 그 이상의 `분리된 데이터 센터`를 `redundant power`, `networking` 그리고 `connectivity` 로 운영함 (redundant power: 중요한 작업을 수행하는 동안 `전원 공급이 중단 없이` 사용하는 방법)

### AWS Points of Presence란 (Edge Locations)

`400개 이상`의 Edge Location과 10개 이상의 Regional Caches 이루어진 `Points of Presence`가 있음 (90개 이상의 도시와 40개 이상의 나라)

### AWS Console 종류


#### Global Services

- IAM (identity and Access Management)

- Route 53 (DNS service)

- Cloud Front (Content Delivery Network)

- WAF (Web Application Firewall)

### Region-scoped AWS 서비스

- Amazon EC2 

- Elastic Beanstalk 

- Lambda

- Rekognition

