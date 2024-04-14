---
title: 'GCP Cloud Engineer - 14'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Firestore / Cloud Bigtable'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Firestore

- ㅇ **Firestore**: A `flexible, horizontally scalable NoSQL cloud database` suitable for **mobile, web, and server development**.

- ㅇ **Data Organization**: Data is `stored in documents`, which are `organized into collections`. Documents can contain `complex nested objects and subcollections`.

- ㅇ **Document Structure**: Each document consists of a `set of key-value pairs`.

- ㅇ **Queries**: `Supports complex queries` with `multiple chained filters` and combines `filtering and sorting options`. Queries are `indexed by default`, improving performance.

- ㅇ **Data Synchronization**: `Automatically synchronizes data` across all connected devices and supports `offline operations`. Changes are `synced back to Firestore once the device is online`.

- ㅇ **Infrastructure**: `Leverages(활용하다)` Google Cloud’s `robust infrastructure` with `automatic multi-region data replication`, `strong consistency guarantees`, `atomic batch operations`, and `real transaction support`.

- ㅇ **Pricing**: `Charges` are based on the number of `document reads, writes, and deletes`. `Storage and network bandwidth usage` also contribute to `costs`, though `ingress(입구) and egress(출구)` within `US regions may be free`.

- ㅇ **Free Quota**: Offers a `daily free quota` of `50,000 document reads, 20,000 writes, 20,000 deletes`, and `1 GB of stored data`. `Charges apply after exceeding` these quotas.

### 파이어스토어

- ㅇ **파이어스토어**: 모바일, 웹, 서버 개발에 적합한 유연하고 수평적으로 확장 가능한 NoSQL 클라우드 데이터베이스입니다.

- ㅇ **데이터 구성**: 데이터는 문서에 저장되며, 문서들은 컬렉션으로 조직화됩니다. 문서는 복잡한 중첩 객체와 하위 컬렉션을 포함할 수 있습니다.

- ㅇ **문서 구조**: 각 문서는 키-값 쌍의 집합으로 구성됩니다.

- ㅇ **쿼리**: 다중 필터 연결 및 필터링과 정렬 옵션 결합을 지원하는 복잡한 쿼리를 지원합니다. 쿼리는 기본적으로 인덱싱되어 성능이 향상됩니다.

- ㅇ **데이터 동기화**: 모든 연결된 장치에서 데이터를 자동으로 동기화하며, 오프라인 작업을 지원합니다. 장치가 온라인 상태가 되면 변경사항이 파이어스토어로 다시 동기화됩니다.

- ㅇ **인프라**: 자동 다중 지역 데이터 복제, 강력한 일관성 보장, 원자적 배치 작업, 실제 트랜잭션 지원을 포함하는 구글 클라우드의 강력한 인프라를 활용합니다.

- ㅇ **가격 책정**: 문서 읽기, 쓰기, 삭제 횟수에 따라 요금이 부과됩니다. 저장공간과 네트워크 대역폭 사용도 비용에 포함되지만 미국 지역 내에서는 입출입료가 무료일 수 있습니다.

- ㅇ **무료 할당량**: 일일 무료 할당량으로 문서 50,000건 읽기, 20,000건 쓰기, 20,000건 삭제 및 1GB 저장 데이터를 제공합니다. 이 할당량을 초과하면 요금이 부과됩니다.


---------

### Cloud Bigtabel

- ㅇ **Cloud Bigtable**: Google's `NoSQL Big data database service` used for `handling massive workloads` with consistent `low latency and high throughput`.

- ㅇ **Usage in Google Services**: Powers `core Google services` such as `search, analytics, maps, and Gmail`.

- ㅇ **Ideal Use Cases**: Suitable for `operational and analytical applications` including `Internet of Things (IoT)`, `user analytics`, and `financial data analysis`.

- ㅇ **Data Characteristics**: Best for `handling more than one terabyte of semi-structured or structured data, high throughput, rapidly changing information,` and `NoSQL data` where `strong relational semantics are not required(XX)`.

- ㅇ **Data Organization**: Handles `time-series data` or `data with natural semantic ordering`.

- ㅇ **Processing Compatibility**: Supports both `asynchronous batch` and `synchronous real-time processing`, and is effective for running `machine learning algorithms`.

- ㅇ **Integration with Google Cloud Services**: Can `interact with other Google Cloud services` and `third-party clients via APIs`, `Managed VMs`, `the HBase REST server`, or a `Java server using the HBase client`.

- ㅇ **Streaming Data Input**: Data `can be streamed` in `through frameworks` like `Dataflow streaming, Spark streaming, and Storm`.

- ㅇ **Batch Processing**: Supports `data reading and writing` `through batch processes` like `Hadoop MapReduce, Dataflow, or Spark`.

- ㅇ **Data Output**: Often involves `writing summarized or newly calculated data` back to `Cloud Bigtable` or a `downstream database`.

### 클라우드 빅테이블 

- ㅇ **클라우드 빅테이블**: 구글의 NoSQL 대용량 데이터 데이터베이스 서비스로, 일관된 저지연과 높은 처리량을 유지하며 대규모 워크로드를 처리할 수 있습니다.

- ㅇ **구글 서비스에서의 사용**: 검색, 분석, 지도 및 Gmail과 같은 구글의 핵심 서비스를 지원합니다.

- ㅇ **이상적인 사용 사례**: 사물 인터넷(IoT), 사용자 분석, 금융 데이터 분석을 포함한 운영 및 분석 애플리케이션에 적합합니다.

- ㅇ **데이터 특성**: 1테라바이트 이상의 반구조화된 또는 구조화된 데이터, 높은 처리량, 빠르게 변화하는 정보 및 강력한 관계형 의미가 필요하지 않은 NoSQL 데이터를 처리하는 데 최적화되어 있습니다.

- ㅇ **데이터 구성**: 시계열 데이터 또는 자연스러운 의미 정렬을 가진 데이터를 처리합니다.

- ㅇ **처리 호환성**: 비동기 배치 및 동기 실시간 처리를 지원하며, 머신러닝 알고리즘 실행에 효과적입니다.

- ㅇ **구글 클라우드 서비스와의 통합**: API, 관리형 VM, HBase REST 서버 또는 HBase 클라이언트를 사용하는 Java 서버를 통해 다른 구글 클라우드 서비스 및 타사 클라이언트와 상호 작용할 수 있습니다.

- ㅇ **스트리밍 데이터 입력**: Dataflow 스트리밍, Spark 스트리밍, Storm과 같은 프레임워크를 통해 데이터를 스트리밍할 수 있습니다.

- ㅇ **배치 처리**: 하둡 MapReduce, Dataflow 또는 Spark와 같은 배치 프로세스를 통해 데이터 읽기 및 쓰기를 지원합니다.

- ㅇ **데이터 출력**: 종종 요약되거나 새롭게 계산된 데이터를 클라우드 빅테이블 또는 하위 데이터베이스로 다시 쓰게 됩니다.

---------------------

### 모르는 단어

#### Subcollection

Subcollection은 NoSQL 데이터베이스에서 일반적으로 사용되는 용어로, 특정 문서 내에 중첩된 컬렉션을 의미합니다.

예를 들어, Firebase의 Cloud Firestore와 같은 문서 지향 데이터베이스에서, 각 문서는 필드를 포함할 수 있고, 이 필드는 다른 문서의 컬렉션인 subcollection을 포함할 수 있습니다. 이렇게 하면 데이터를 계층적으로 구조화하고, 관련 데이터를 함께 그룹화하는 것이 가능해집니다.

Subcollection은 주로 복잡한 데이터 구조를 표현하거나, 관련성이 높은 데이터를 함께 저장하고 쿼리하는 데 사용됩니다.

#### Robust infrastructure

"Robust infrastructure"는 안정적이고 견고한 인프라를 의미합니다. 

이는 시스템이 다양한 상황에서도 안정적으로 작동하며, 예상치 못한 문제나 고장에 대해 잘 대처할 수 있음을 의미합니다.

구체적으로, "robust infrastructure"는 다음과 같은 특성을 가질 수 있습니다:

- **고가용성**: 시스템이 항상 사용 가능하도록 설계되어 있습니다.

- **내구성**: 데이터 손실을 방지하기 위해 데이터 복제 및 백업이 수행됩니다.

- **확장성**: 시스템은 사용자 수나 데이터 양의 증가에 따라 쉽게 확장할 수 있습니다.

- **내결함성**: 하드웨어 고장, 네트워크 문제 등의 장애 상황에서도 시스템이 계속 작동할 수 있도록 설계되어 있습니다.

여기서 "Firestore leverages Google Cloud’s robust infrastructure"라는 문장은 Firestore가 Google Cloud의 이러한 견고한 인프라를 활용한다는 것을 의미합니다. 이는 Firestore가 Google Cloud의 고가용성, 내구성, 확장성, 내결함성 등의 특성을 활용하여 안정적인 서비스를 제공한다는 것을 의미합니다.


#### Atomic batch operations

"Atomic batch operations"는 일련의 작업이 모두 성공하거나, 하나라도 실패하면 모두 실패하는 것을 보장하는 작업의 그룹을 의미합니다.

"Atomic"이라는 용어는 원자성을 의미하며, 이는 데이터베이스 트랜잭션에서 중요한 개념입니다. 

원자성은 트랜잭션이 모두 완료되거나 (즉, 모든 변경사항이 데이터베이스에 적용되거나) 아니면 전혀 적용되지 않아야 함을 의미합니다. 

이는 중간 상태에서 트랜잭션이 실패하더라도 데이터베이스가 일관된 상태를 유지할 수 있도록 합니다.

따라서 "atomic batch operations"는 여러 작업을 하나의 단위로 묶어, 이들이 모두 성공하거나 실패하도록 하는 것을 의미합니다. 

이는 데이터의 일관성을 보장하고, 복잡한 작업을 안전하게 수행하는 데 도움이 됩니다.

#### 시계열 데이터 (Time-series data)

시계열 데이터는 시간 순서에 따라 측정되는 데이터를 말합니다. 이는 주식 가격, 기온, 심박수 등과 같이 일정 시간 간격으로 측정되는 데이터를 포함합니다. 

시계열 데이터는 시간에 따른 패턴을 분석하거나, 미래를 예측하는 데 사용됩니다.

#### 자연 세멘틱 정렬 (Natural Semantic Ordering)

자연 세멘틱 정렬은 데이터가 그것이 나타내는 실제 세계의 순서에 따라 정렬되는 것을 말합니다. 

예를 들어, 시계열 데이터에서는 이것이 시간 순서일 수 있습니다.

이는 데이터를 이해하고 분석하는 데 도움이 되며, 특히 시계열 데이터와 같이 순서가 중요한 데이터에서 유용합니다. 

자연 세멘틱 정렬을 사용하면, 데이터의 시간적 패턴을 보다 쉽게 파악하고, 미래를 예측하는 모델을 개발하는 데 도움이 될 수 있습니다.

#### HBase Rest Server

HBase REST 서버는 Apache HBase 데이터베이스에 RESTful 웹 서비스 인터페이스를 제공하는 서버입니다.

Apache HBase는 대규모 분산 환경에서 사용되는 NoSQL 데이터베이스로, Google의 BigTable을 기반으로 합니다. HBase는 빅 데이터를 처리하는 데 특히 유용하며, Hadoop과 함께 사용되어 대량의 데이터를 저장하고 처리하는 데 사용됩니다.

HBase REST 서버를 사용하면, HTTP 메서드를 사용하여 HBase에 저장된 데이터를 생성, 읽기, 업데이트, 삭제(CRUD)하는 것이 가능해집니다. 이는 언어나 플랫폼에 구애받지 않고 HBase 데이터베이스와 상호작용할 수 있게 해주므로, 다양한 애플리케이션에서 HBase 데이터를 쉽게 사용할 수 있게 합니다.

#### HBase Client

HBase Client는 Apache HBase 데이터베이스에 연결하고, 데이터를 조작하는 데 사용되는 라이브러리입니다.

HBase Client를 사용하면, HBase 데이터베이스에 저장된 데이터를 생성, 읽기, 업데이트, 삭제(CRUD)하거나, 테이블을 관리하는 등의 작업을 수행할 수 있습니다.

Java HBase Client는 가장 널리 사용되는 HBase 클라이언트 중 하나로, Java 애플리케이션에서 HBase 데이터베이스와 상호작용하는 데 사용됩니다. 이를 통해, Java 애플리케이션은 HBase의 분산 데이터 저장 및 처리 기능을 활용할 수 있습니다.

#### Downstream database

"Downstream database"는 일반적으로 데이터 파이프라인 또는 데이터 처리 워크플로우에서 "upstream" 소스로부터 데이터를 받는 데이터베이스를 의미합니다.

"Upstream" 데이터 소스는 원본 데이터를 생성하거나 수집하는 시스템이며, 이 데이터는 처리, 변환, 집계 등의 작업을 거친 후 "downstream" 데이터베이스에 저장됩니다.

"Downstream database"는 이렇게 처리된 데이터를 분석, 보고, 시각화 등의 목적으로 사용합니다. 이는 종종 데이터 웨어하우스, 데이터 레이크, 분석 데이터베이스 등의 형태를 가질 수 있습니다.