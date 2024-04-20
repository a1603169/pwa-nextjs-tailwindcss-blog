---
title: 'GCP Cloud Engineer - 76'
subtitle: 'Reliable Cloud Infrastructure: Desgin and Process - Connecting Networks'
date: '2024-04-20'
tags: [Cloud, GCP]
---

### Connecting Networks

**Google Cloud 네트워크 연결 제품**

- **VPC 피어링**
  
  - ㅁ 두 개의 VPC 네트워크 연결을 가능하게 함
  
  - ㅁ RFC 1918 비공개 연결을 통한 상호 작용 허용
  
  - ㅁ 서로 다른 프로젝트나 조직 간 연결 가능
  
  - ㅁ 중복되지 않는 서브넷 범위가 필요
  
  - ㅁ 방화벽 규칙을 통해 트래픽 허용 또는 거부

- **Cloud VPN**
  
  - ㅁ IPsec VPN을 통해 안전한 네트워크 연결 제공
  
  - ㅁ 공개 인터넷을 통한 데이터 보호
  
  - ㅁ 기본 VPN: 단일 인터페이스 및 IP, 최대 3Gbps 지원
  
  - ㅁ HA VPN: 고가용성을 위해 2개의 인터페이스 및 IP로 구성

- **Cloud Interconnect**
  
  - ㅁ 온프레미스 네트워크와 VPC 네트워크 간 고속 연결 제공
  
  - ㅁ **Dedicated Interconnect**: 직접 연결 제공, 최대 200Gbps
  
  - ㅁ **Partner Interconnect**: 서비스 제공업체를 통한 연결 제공
  
  - ㅁ 내부 IP 주소 공간을 사용하여 VPC 리소스에 액세스

- **네트워크 라우팅 설정**
  
  - ㅁ Cloud Router를 사용하여 BGP 세션을 통한 동적 경로 관리
  
  - ㅁ BGP를 통해 변경사항이 네트워크에 자동으로 반영

- **데이터 센터와의 연결**
  
  - ㅁ **Dedicated Interconnect**: Google과 코로케이션 시설 간 라우터 교차 연결
  
  - ㅁ **Partner Interconnect**: 데이터 센터 위치에 따라 선택 가능
