---
title: 'GCP Cloud Engineer - 16'
subtitle: 'Introducting Google Cloud - Comparing Storage Options'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Comparing Storage Options

- ㅇ **Cloud Storage**: Best for `storing large immutable blobs over 10 megabytes`, like **images and movies**. Offers `petabytes of storage` with a `maximum` object size of `5 terabytes`.

- ㅇ **Cloud SQL**: `Ideal` for applications that `need full SQL support for online transaction processing`. Provides up to `64 terabytes` `depending on the machine type` and is suited for `web frameworks` and `traditional applications`, such as `managing user credentials and customer orders`.

- ㅇ **Cloud Spanner**: Recommended for scenarios `requiring horizontal scalability` `beyond what Cloud SQL's read replicas offer`, with `petabyte-scale storage` and `strong consistency` across `global transactions`.

- ㅇ **Firestore**: Suitable for applications `requiring massive scaling`, `real-time query results`, and `offline query capabilities`, `with terabytes of capacity` and a `maximum entity size of 1 megabyte`. Ideal for **mobile and web applications** needing `data syncing` and `querying`.

- ㅇ **Cloud Bigtable**: Good for `storing large numbers of structured objects`, with support for `petabyte-scale storage` and a `maximum unit size of 10 megabytes per cell` and `100 megabytes per row`. Best for `heavy read/write operations` such as `AdTech, financial systems, or IoT data`. Does `not support SQL queries(X)` or `multi-row transactions(X)`.

- ㅇ **BigQuery**: `Not` covered as `a primary storage option(X)` because it `bridges data storage and processing`. Mainly used for `big data analysis` and `interactive querying`, `not solely` as a `data storage solution(X)`.

### 스토리지 옵션 비교

- ㅇ **클라우드 스토리지**: 10메가바이트 이상의 큰 불변성 블롭(예: 이미지 및 영화) 저장에 최적화. 객체 최대 크기 5테라바이트, 페타바이트 규모의 저장 공간 제공.

- ㅇ **클라우드 SQL**: 온라인 트랜잭션 처리를 위한 전체 SQL 지원이 필요한 애플리케이션에 적합. 기계 유형에 따라 최대 64테라바이트 제공, 웹 프레임워크 및 사용자 인증 정보, 고객 주문 관리 같은 기존 애플리케이션에 적합.

- ㅇ **클라우드 스패너**: 클라우드 SQL의 읽기 복제본을 넘어서 수평 확장이 필요한 시나리오에 권장. 전 세계 트랜잭션에 걸친 강력한 일관성을 제공하며, 페타바이트 규모의 저장 공간.

- ㅇ **파이어스토어**: 엄청난 스케일링, 실시간 쿼리 결과 및 오프라인 쿼리 기능이 필요한 애플리케이션에 적합. 테라바이트 규모의 용량 및 최대 엔티티 크기 1메가바이트 제공, 모바일 및 웹 애플리케이션 데이터 동기화 및 쿼리에 이상적.

- ㅇ **클라우드 빅테이블**: 구조화된 객체의 대량 저장에 적합, 페타바이트 규모의 저장 공간 및 셀 당 최대 10메가바이트, 행 당 100메가바이트의 최대 단위 크기 제공. AdTech, 금융 시스템 또는 IoT 데이터와 같이 읽기/쓰기 작업이 많은 애플리케이션에 최적. SQL 쿼리 또는 다중 행 트랜잭션 지원하지 않음.

- ㅇ **빅쿼리**: 주요 저장 옵션으로 다루지 않음. 데이터 저장과 처리 사이의 경계에 있어, 주로 대규모 데이터 분석 및 상호작용 쿼리용도로 사용되며, 순수한 데이터 저장 솔루션으로만 사용되지는 않음.

--------

### 틀린 문제

<img class='blogImage' src='/blog/wrong_database_size_storage.png'>

--------


### 모르는 단어 

#### Blob

"Blob"은 "Binary Large OBject"의 약자로, 대량의 이진 데이터를 저장하는 데 사용되는 데이터 유형을 의미합니다.

Blob은 일반적으로 이미지, 오디오, 비디오 등의 미디어 파일 또는 대규모 텍스트 파일과 같은 큰 크기의 데이터를 저장하는 데 사용됩니다. 

이러한 Blob 데이터는 일반적으로 데이터베이스에서 별도로 관리되며, 파일 시스템이나 객체 저장소와 같은 별도의 저장 공간에 저장될 수 있습니다.

따라서 "storing large immutable blobs"는 큰 크기의 변경 불가능한 이진 데이터를 저장하는 것을 의미합니다. "Immutable"은 이 데이터가 생성된 후에는 변경되지 않음을 의미합니다.

#### Entity size

"Entity size"는 일반적으로 데이터베이스에서 사용되는 용어로, 특정 엔티티(데이터 항목 또는 객체)의 크기를 나타냅니다.

 이는 엔티티가 포함하는 데이터의 양이나 복잡성을 측정하는 데 사용됩니다.

예를 들어, 데이터베이스의 테이블에서 한 행(row)의 크기를 나타낼 수 있습니다. 

이는 행에 포함된 모든 필드의 데이터 크기를 합한 것입니다.

또는, NoSQL 데이터베이스에서는 문서 또는 객체의 크기를 나타낼 수 있습니다. 

이는 문서 또는 객체가 포함하는 모든 필드와 값의 데이터 크기를 합한 것입니다.

따라서 "entity size"는 특정 데이터 항목의 크기를 나타내는 일반적인 용어입니다. 

이는 데이터베이스의 성능, 저장 공간 사용량, 데이터 전송 시간 등을 계산하는 데 사용될 수 있습니다.

#### AdTech

AdTech(Advertising Technology)는 광고 산업에서 디지털 광고 캠페인을 관리하고 최적화하는 데 사용되는 기술을 의미합니다.

AdTech은 광고주, 에이전시, 퍼블리셔, 소비자 등 다양한 이해관계자 간의 상호작용을 가능하게 하는 다양한 소프트웨어 및 서비스를 포함합니다.

이에는 디지털 광고의 구매, 판매, 배포, 타겟팅, 추적, 측정 등을 지원하는 플랫폼과 도구가 포함됩니다.

AdTech의 주요 기술에는 프로그래매틱 광고(자동화된 광고 구매 및 판매), 광고 네트워크, 광고 서버, 데이터 관리 플랫폼(DMP), 수요측 플랫폼(DSP), 공급측 플랫폼(SSP) 등이 있습니다. 

이러한 기술은 광고 캠페인의 효율성과 효과성을 높이는 데 도움이 됩니다.