---
title: 'GCP Cloud Engineer - 47'
subtitle: 'Essential Google Cloud Infrastructure: Core Services (한국어) - Logging / Error Reporting'
date: '2024-04-17'
tags: [Cloud, GCP]
---

### Logging

**Logging 기능 및 개념**:

- ㅁ Google Cloud 운영 제품군의 `중요한 부분`이며, `Google Cloud` 및 `AWS의 로그 데이터 및 이벤트를 저장, 검색, 분석, 모니터링함`

- ㅁ 완전 관리형 서비스로, 대규모로 실행되며 수천 개의 `VM에서 애플리케이션 및 시스템 로그 데이터를 수집할 수 있음`

**Logging의 구성 요소**:

- ㅁ `로그용 스토리지, 로그 탐색`기라고 불리는 사용자 인터페이스, 로그를 프로그래밍 방식으로 관리하는 `API`로 구성됨

- ㅁ 로그 항목을 `읽고 쓰고 검색 및 필터링`하며 로그 기반 `측정항목을 만들 수 있음`

**Looker Studio**:

- ㅁ Looker Studio는 Google Cloud Platform의 `데이터 분석 도구`인 Looker의 기능 중 하나입니다.
  
- ㅁ 사용자가 `데이터 모델을 만들고 관리`할 수 있는 환경을 제공합니다.
  
- ㅁ LookML이라는 Looker의 데이터 모델링 언어를 사용하여 `데이터의 관계와 계산을 정의`합니다.
  
- ㅁ SQL `쿼리를 직접 작성하지 않고도 복잡한 데이터 분석`을 수행할 수 있습니다.

- ㅁ Looker Studio에서 정의한 데이터 모델은 `Looker의 다른 기능(예: 대시보드, 보고서 등)에서 재사용`할 수 있습니다.


**로그 데이터 보존과 내보내기**:

- ㅁ 로그는 `기본적으로 30일 동안 보관`되지만 `Cloud Storage 버킷, BigQuery 데이터세트, Pub/Sub 주제`로 내보낼 수 있음

- ㅁ `BigQuery`로 로그를 내보내면 `데이터 분석 및 시각화`를 수행할 수 있으며 대규모 데이터셋에 대해 `빠르게 SQL 쿼리를 실행`할 수 있음

**로그 데이터 활용**:

- ㅁ 로그 데이터를 분석하여 `용량 예측, 네트워크 트래픽 비용 최적화, 이슈 분석 등에 활용`할 수 있음

- ㅁ BigQuery 테이블을 연결하여 `데이터를 시각화하고 이해하기 쉬운 보고서 및 대시보드`를 생성할 수 있음

**Pub/Sub을 통한 로그 스트리밍**:

- ㅁ `Pub/Sub`로 로그를 내보내어 `애플리케이션 또는 엔드포인트로 로그를 스트리밍`할 수 있음

---------------


### Error Reporting

**Google Cloud Error Reporting 기능 정리**

- **중앙 오류 관리 인터페이스**
  
  - ㅁ `오류 집계`, `분석`, `종합`
  
  - ㅁ `결과 정렬` 및 `필터링 기능` 제공
  
  - ㅁ `실시간 알림` 설정 가능

- **지원되는 서비스**
  
  - ㅁ `App Engine` (표준 및 가변형 환경)
  
  - ㅁ `Apps Script`
  
  - ㅁ `Compute Engine`
  
  - ㅁ `Cloud Functions`
  
  - ㅁ `Cloud Run`
  
  - ㅁ `Google Kubernetes Engine`
  
  - ㅁ `Amazon EC2` (정식 버전으로 출시)

- **지원되는 프로그래밍 언어**
  
  - ㅁ 예외 스택 트레이스 파서 처리 언어: `Go`, `Java`, `.NET`, `Node.js`, `PHP`, `Python`, `Ruby`

