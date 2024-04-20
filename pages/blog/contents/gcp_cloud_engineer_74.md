---
title: 'GCP Cloud Engineer - 74'
subtitle: 'Reliable Cloud Infrastructure: Desgin and Process - Choosing Google Cloud Storage and Data Solution'
date: '2024-04-20'
tags: [Cloud, GCP]
---

### GC Storage and Data Solution

**Google Cloud 스토리지 및 데이터 솔루션 선택 방법**

- **Google Cloud 스토리지 종류**
  
  - ㅁ 관계형, NoSQL, 객체 스토리지, 데이터 웨어하우스, 인메모리 저장소로 다양하게 제공
  
  - ㅁ 각 서비스는 고정 스키마 또는 스키마 없이 제공됨

- **Cloud SQL**
  
  - ㅁ 고정 스키마 관계형 데이터베이스
  
  - ㅁ 지원 데이터베이스: MySQL, PostgreSQL, SQL Server
  
  - ㅁ 적합한 사용 사례: CMS, 전자상거래

- **Cloud Spanner**
  
  - ㅁ 관계형 데이터베이스이며 무한 확장 가능
  
  - ㅁ 리전 또는 멀티 리전 구성 가능
  
  - ㅁ 적합한 사용 사례: 고가용성이 필요한 글로벌 액세스 및 공급망 관리

- **Firestore**
  
  - ㅁ 스키마가 없는 완전 관리형 문서 데이터스토어
  
  - ㅁ 적합한 사용 사례: 게임 상태, 사용자 프로필

- **Cloud Bigtable**
  
  - ㅁ NoSQL 데이터스토어로 대량의 읽기/쓰기 이벤트 지원
  
  - ㅁ 적합한 사용 사례: 금융 서비스, 사물 인터넷, 디지털 광고

- **Cloud Storage**
  
  - ㅁ 스키마 없는 완전 관리형 객체 스토리지
  
  - ㅁ 바이너리 객체 데이터 저장에 적합

- **BigQuery**
  
  - ㅁ 고정 스키마 데이터 웨어하우스
  
  - ㅁ 분석 및 비즈니스 인텔리전스 대시보드 실행에 적합

- **Memorystore**
  
  - ㅁ 원활한 관리형 Redis 데이터베이스
  
  - ㅁ 웹 및 모바일 애플리케이션 캐싱에 적합

- **스토리지 선택 기준**
  
  - ㅁ 데이터의 구조화 여부, 워크로드 유형, 필요한 확장성 및 관계형 여부를 기반으로 선택
  
  - ㅁ 예: 구조화된 데이터에 대한 분석이 주 작업인 경우, Cloud Bigtable 또는 BigQuery 선택

- **데이터 전송 서비스**
  
  - ㅁ Cloud Storage Transfer Service: 외부 클라우드 스토리지에서 데이터 이전 지원
  
  - ㅁ Storage Transfer Service: 대규모 온프레미스 데이터를 Cloud Storage로 업로드 지원
  
  - ㅁ Transfer Appliance: 대량의 데이터를 물리적 어플라이언스를 통해 Google Cloud로 전송 지원
