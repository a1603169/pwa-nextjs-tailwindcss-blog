---
title: 'GCP Cloud Engineer - 60'
subtitle: 'Essential Cloud Infrastructure: Sacling and Automation - BigQuery / Cloud Dataflow / Cloud Dataprep / Cloud Dataproc'
date: '2024-04-18'
tags: [Cloud, GCP]
---

### **BigQuery**

- **`개요`**:
  
  - ㅁ Google Cloud의 `서버리스 클라우드 데이터 웨어하우스`입니다.
  
  - ㅁ 페타바이트 규모의 데이터를 초고속으로 쿼리할 수 있습니다.

- **`특징`**:
  
  - ㅁ `인프라 관리(X)`가 필요 없으며 `SQL을 사용하여 데이터 분석을 수행`합니다.
  
  - ㅁ 다양한 클라이언트 라이브러리와 서드 파티 도구를 통해 `데이터 시각화 및 로드`가 가능합니다.

### **Cloud Dataflow**

<img class='blogImage' src='/blog/flow_of_dataflow.png'>

- **`개요`**:
  
  - ㅁ `스트림 및 배치 데이터`를 처리하는 `완전 관리형 서비스`입니다.
  
  - ㅁ Apache Beam SDK를 사용하여 `데이터 파이프라인`을 구축합니다.

- **`특징`**:
  
  - ㅁ `자동 확장 기능`으로 초당 수백만 개의 쿼리를 처리할 수 있습니다.
  
  - ㅁ `다양한 데이터 소스와 싱크`를 지원하며, `Stackdriver와 연동`하여 파이프라인의 상태를 `모니터링`합니다. (우선순위 알림 설정 가능)

### **Cloud Dataprep**

<img class='blogImage' src='/blog/dataprep_architect.png'>

- **`개요`**:
  
  - ㅁ 데이터를 `시각적으로 탐색, 정리 및 준비`할 수 있는 `지능형 데이터 서비스`입니다.
  
  - ㅁ `서버리스 구조`로 모든 규모에서 작동하며, `Trifacta가 운영`합니다.

- **`특징`**:
  
  - ㅁ `코드 작성 없이 데이터 변환 제안`을 `자동`으로 제공합니다.
  
  - ㅁ 다양한 데이터 소스로부터 데이터를 준비하고 분석 또는 `머신러닝`에 사용할 수 있도록 출력합니다.

### **Cloud Dataproc**

<img class='blogImage' src='/blog/dataproc_vs_dataflow.png'>

- **`개요`**:
  
  - ㅁ `Apache Spark와 Apache Hadoop 클러스터`를 간단하고 빠르게 실행할 수 있는 `클라우드 서비스`입니다.(Fully-managed)
  
  - ㅁ `초당 과금 방식`을 채택하며, `선점형 인스턴스(Spotted Instance)`를 사용하여 비용을 절감할 수 있습니다.

- **`특징`**:
  
  - ㅁ 클러스터를 빠르게 시작, 확장, 종료할 수 있으며, `다양한 GCP 서비스와 통합`됩니다.
  
  - ㅁ `기존 Spark, Hadoop 프로젝트`를 쉽게 이전할 수 있으며, 필요하지 않을 때 `클러스터를 꺼 비용을 절약`할 수 있습니다.