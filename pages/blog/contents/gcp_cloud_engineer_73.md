---
title: 'GCP Cloud Engineer - 73'
subtitle: 'Reliable Cloud Infrastructure: Desgin and Process - Key Storage Characteristics'
date: '2024-04-20'
tags: [Cloud, GCP]
---

### 주요 스토리지 특성

**Google Cloud의 스토리지 옵션과 데이터 관리**

- **스토리지 서비스의 범위**
  
  - ㅁ 관계형 데이터베이스, NoSQL, 객체 스토리지, 데이터 웨어하우스, 인메모리 데이터베이스를 포함한 다양한 스토리지 옵션
  
  - ㅁ 업계 최고의 SLA로 완전히 관리되며 확장 가능하고 지원됨

- **스토리지 선택의 중요성**
  
  - ㅁ 데이터 유형, 규모, 내구성, 가용성, 위치 요구사항을 고려하여 적합한 스토리지 솔루션 선택
  
  - ㅁ 가용성 SLA는 서비스 구성에 따라 다르며, 멀티 리전 설정이 단일 리전보다 높은 가용성 제공

- **데이터 내구성**
  
  - ㅁ 데이터 손실 가능성을 나타내며, 공유 책임 모델 하에서 Google Cloud는 하드웨어 오류 시 데이터 보호를 책임짐
  
  - ㅁ 사용자의 책임은 데이터 백업 수행으로, Cloud Storage는 99.999999999%의 내구성 제공
  
  - ㅁ 데이터 백업은 버전 관리 및 객체 수명 관리 정책을 포함하여 관리됨

- **데이터 양과 트랜잭션 처리**
  
  - ㅁ 데이터양과 읽기/쓰기 횟수에 따라 BigTable, Spanner, Cloud SQL, Memorystore 등의 서비스 선택에 영향
  
  - ㅁ 데이터베이스의 `strong consistency`와 `eventual consistency` 간의 선택은 성능 및 확장성 요구에 따라 결정

- **총비용 계산과 서비스 선택**
  
  - ㅁ GB당 총비용을 계산하여 재정적 영향을 고려
  
  - ㅁ BigTable, Spanner는 대규모 데이터 세트에 적합하며, Firestore는 저장 비용은 저렴하나 읽기/쓰기 비용 발생
  
  - ㅁ Cloud Storage는 저렴하지만 특정 데이터 유형에 적합하며, BigQuery는 저장소 비용은 저렴하지만 쿼리 비용 발생