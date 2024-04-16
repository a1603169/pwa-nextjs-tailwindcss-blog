---
title: 'GCP Cloud Engineer - 37'
subtitle: 'Essential Google Cloud Infrastructure: Core Services (한국어) - Storage and Database Services - Overview'
date: '2024-04-16'
tags: [Cloud, GCP]
---

### Google Cloud 스토리지/데이터베이스 서비스 모듈 요약

- **데이터 저장 및 검색 기술**:
  
  - 모든 애플리케이션은 비즈니스 데이터, 스트리밍 미디어, 기기 센서 데이터 등을 저장해야 함.
  
  - 서비스의 특성을 고려하여 데이터 저장과 검색을 효율적으로 지원하는지 확인.

<img class='blogImage' src='/blog/storage_db_services.png'>

- **Google Cloud 데이터 스토리지 서비스**:
  
  - `Cloud Storage`: 비구조화된 데이터 저장소.
  
  - `Filestore`: 공유 파일 시스템 필요 시 사용.
  
  - `Cloud SQL`: 관계형 데이터베이스 요구 사항에 적합.
  
  - `Cloud Spanner`: 글로벌 확장성을 필요로 하는 관계형 데이터베이스.
  
  - `AlloyDB`: HTAP 요구 사항을 가진 관계형 데이터베이스.
  
  - `Firestore`: 문서 기반의 NoSQL 데이터베이스.
  
  - `Cloud Bigtable`: NoSQL 와이드 칼럼 데이터베이스, 짧은 지연 시간과 대량의 읽기/쓰기 요구 사항에 적합.
  
  - `Memorystore`: 인메모리 데이터베이스, 애플리케이션 캐싱에 사용.

- **Decision Tree Chart**

<img class='blogImage' src='/blog/decision_tree.png'>

- **데이터베이스 선택 결정 트리**:
  
  - 데이터가 구조화되어 있는지 확인 후 선택 경로 따름.
  
  - 분석 요구 시 `BigQuery` 또는 `Bigtable` 선택.
  
  - 비관계형이며 캐싱 필요 시 `Memorystore`, 그렇지 않다면 `Firestore` 선택.
  
  - 관계형 데이터베이스 요구 사항에 따라 `Cloud SQL`, `AlloyDB`, 또는 `Spanner` 중 선택.

- **데이터 처리 및 분석**:
  
  - `BigQuery`: 데이터 웨어하우스로서 대규모 SQL 기반 분석 및 보고에 최적화.
  
  - 데이터가 자주 변경되지 않는 경우 `BigQuery DML`의 내장 캐시 활용.

- **Google Cloud의 교육 및 실습**:
  
  - 데이터 스토리지 서비스에 대한 이해를 높이기 위한 실습 제공.
  
  - 데이터 엔지니어링 관련 과정으로 보다 심층적인 학습 가능.

-----------------

### 모르는 단어

#### 비구조화 (Unstructured)

"비구조화"라는 용어는 데이터가 특정 형식이나 모델에 따라 구성되지 않은 상태를 나타냅니다.

비구조화 데이터는 일반적으로 표, 행, 열 등의 전통적인 데이터베이스 스키마에 쉽게 맞춰지지 않는 데이터를 의미합니다. 

이러한 데이터는 텍스트 문서, 이메일, 비디오, 오디오, 소셜 미디어 게시물 등 다양한 형태와 형식을 가질 수 있습니다.

비구조화 데이터 저장소는 이러한 비구조화 데이터를 저장하고 처리하는 데 특화되어 있습니다. 이러한 저장소는 데이터를 효율적으로 저장하고 검색할 수 있도록 데이터를 인덱싱하거나 메타데이터를 사용하여 구조화합니다. 

이를 통해 사용자는 대량의 비구조화 데이터에서 유용한 정보를 추출하고 분석할 수 있습니다.


#### 인메모리 (In-memory)

"인메모리(In-memory)"는 데이터를 메인 메모리(RAM)에 저장하고 처리하는 방식을 의미합니다.

인메모리 컴퓨팅은 디스크 기반의 저장 방식에 비해 데이터 액세스와 처리 속도가 훨씬 빠르므로, 빅 데이터 분석, 실시간 처리, 고성능 컴퓨팅 등 성능이 중요한 애플리케이션에서 주로 사용됩니다.

그러나 메모리는 디스크에 비해 비용이 높고, 전원이 꺼지면 데이터가 사라지는 휘발성을 가지므로, 인메모리 컴퓨팅을 사용할 때는 이러한 특성을 고려해야 합니다. 

이를 해결하기 위해, 일부 인메모리 시스템은 데이터를 디스크에 주기적으로 백업하거나, 여러 노드에 데이터를 복제하여 내결함성을 제공합니다.

#### HTAP

`HTAP`(Hybrid Transactional/Analytical Processing)은 트랜잭션 처리(`OLTP`, Online Transaction Processing)와 분석 처리(`OLAP`, Online Analytical Processing)를 동일한 데이터베이스 시스템에서 동시에 처리하는 방식을 의미합니다.

전통적으로, OLTP와 OLAP는 서로 다른 시스템에서 처리되었습니다. OLTP는 일반적으로 단일 레코드에 대한 간단한 쿼리를 빠르게 처리하는 데 최적화되어 있으며, OLAP는 대량의 데이터를 분석하는 복잡한 쿼리를 처리하는 데 최적화되어 있습니다.

그러나 HTAP을 사용하면, 실시간 트랜잭션 데이터에 대한 실시간 분석이 가능해집니다. 

이는 데이터 복제나 ETL(Extract, Transform, Load) 과정이 필요 없으므로, 데이터의 신선도를 유지하면서 분석 지연 시간을 크게 줄일 수 있습니다.

HTAP은 빅 데이터, 실시간 분석, IoT(Internet of Things) 등의 애플리케이션에서 중요한 역할을 합니다.
