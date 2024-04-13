---
title: 'GCP Cloud Engineer - 11'
subtitle: 'Introducting Google Cloud - Google Cloud Storage Options'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Google Cloud storage options


- ㅇ **Google Cloud Storage Options**: `Provides storage solutions` for **structured, unstructured, transactional, and relational data**.

- ㅇ **Cloud Storage**: `Ideal for storing large unstructured data` such as **media files** or **sensor data** from devices.

- ㅇ **Cloud SQL**: `Supports relational databases`, suitable for `transactional data` that require structured query language `(SQL) capabilities`.

- ㅇ **Cloud Spanner**: `Combines the benefits` of `relational database structure` with `non-relational horizontal scalability`, ideal for `large-scale database applications` that require `high availability and consistency`.

- ㅇ **Firestore**: A `NoSQL document database` designed for `high performance and scalability`, perfect for **mobile, web, and server development**.

- ㅇ **Cloud BigTable**: A `NoSQL big data database service` that is `highly scalable` and `ideal for applications` such as `analytics` and `machine learning` on large datasets.

### 구글 클라우드 스토리지 옵션

- ㅇ **구글 클라우드 저장 옵션**: 구조화된 데이터, 비구조화된 데이터, 트랜잭션 데이터 및 관계형 데이터를 위한 저장 솔루션을 제공합니다.

- ㅇ **클라우드 스토리지**: 디바이스에서 나오는 미디어 파일이나 센서 데이터와 같은 대규모 비구조화된 데이터 저장에 이상적입니다.

- ㅇ **클라우드 SQL**: 관계형 데이터베이스를 지원하며, 구조화된 쿼리 언어(SQL) 기능이 필요한 트랜잭션 데이터에 적합합니다.

- ㅇ **클라우드 스패너**: 관계형 데이터베이스 구조의 장점과 비관계형 수평 확장성을 결합하여, 높은 가용성과 일관성이 요구되는 대규모 데이터베이스 애플리케이션에 이상적입니다.

- ㅇ **파이어스토어**: 모바일, 웹, 서버 개발에 완벽한 고성능 및 확장성을 갖춘 NoSQL 문서 데이터베이스입니다.

- ㅇ **클라우드 빅테이블**: 매우 확장 가능하며 대규모 데이터셋의 분석과 머신 러닝 애플리케이션에 이상적인 NoSQL 빅 데이터 데이터베이스 서비스입니다.


### 모르는 단어

#### 구조화된 데이터 (Structured Data)

구조화된 데이터는 정해진 형식이나 모델에 따라 조직화된 데이터를 말합니다. 이는 일반적으로 테이블 형태로 저장되며, 각 열은 특정 유형의 값(예: 날짜, 문자열, 숫자 등)을 가집니다. 예를 들어, 관계형 데이터베이스의 테이블이나 CSV 파일 등이 구조화된 데이터에 해당합니다.

#### 비구조화된 데이터 (Unstructured Data)

비구조화된 데이터는 특정 형식이나 모델에 따라 조직화되지 않은 데이터를 말합니다. 이는 텍스트 문서, 이미지, 비디오, 이메일, 소셜 미디어 게시물 등 다양한 형태를 가질 수 있습니다. 비구조화된 데이터는 분석이 더 어렵지만, 빅 데이터 분석, 자연어 처리, 이미지 인식 등의 분야에서 중요한 역할을 합니다.

#### 트랜잭션 데이터 (Transactional Data)

트랜잭션 데이터는 비즈니스 트랜잭션에서 생성되는 데이터를 말합니다. 이는 주문, 결제, 배송 등의 이벤트에 대한 정보를 포함하며, 일반적으로 시간, 날짜, 트랜잭션 유형, 관련 항목 등의 정보를 포함합니다. 트랜잭션 데이터는 비즈니스 분석, 판매 예측, 고객 행동 분석 등에 사용됩니다.

#### 관계형 데이터 (Relational Data)

관계형 데이터는 서로 관련이 있는 여러 테이블에 분산되어 저장되는 데이터를 말합니다. 각 테이블은 행과 열로 구성되며, 테이블 간의 관계는 키를 통해 정의됩니다. 관계형 데이터는 관계형 데이터베이스 관리 시스템(RDBMS)에서 주로 사용되며, SQL 같은 질의 언어를 통해 조작됩니다.

#### SQL vs NoSQL

**SQL (관계형 데이터베이스)**

SQL(Structured Query Language)은 관계형 데이터베이스에서 사용되는 표준 질의 언어입니다. 관계형 데이터베이스는 데이터를 테이블의 형태로 저장하며, 각 테이블은 행과 열로 구성됩니다. 테이블 간의 관계는 기본 키와 외래 키를 통해 정의됩니다.

**관계형 데이터베이스의 장점은 다음과 같습니다:**

**ㅁ** 데이터의 무결성을 보장합니다.

**ㅁ** 트랜잭션을 지원하며, ACID(Atomicity, Consistency, Isolation, Durability) 속성을 충족합니다.

**ㅁ** SQL을 통해 복잡한 질의를 수행할 수 있습니다.


**단점은 다음과 같습니다:**

**ㅁ** 대량의 데이터를 처리하는 데 어려움이 있을 수 있습니다.
**ㅁ** 수평 확장이 어렵습니다.


**NoSQL**

NoSQL(Not Only SQL)은 관계형 데이터베이스의 제약을 벗어나 대량의 데이터를 빠르게 처리할 수 있는 데이터베이스입니다. NoSQL 데이터베이스는 Key-Value, Document, Column, Graph 등 다양한 유형이 있습니다.

**NoSQL의 장점은 다음과 같습니다:**

**ㅁ** 대량의 데이터를 빠르게 처리할 수 있습니다.
**ㅁ** 수평 확장이 쉽습니다.
**ㅁ** 유연한 데이터 모델을 가집니다.

**단점은 다음과 같습니다:**

**ㅁ** ACID 속성을 완전히 지원하지 않을 수 있습니다.
**ㅁ** SQL만큼 질의가 강력하지 않을 수 있습니다.


**"질의가 강력하다"는 표현**

데이터베이스 질의 언어의 능력을 설명하는 데 사용됩니다. SQL 같은 질의 언어는 복잡한 데이터 조작과 분석 기능을 제공하며, 다양한 조건에 따른 데이터 필터링, 여러 테이블 간의 조인, 집계 함수(평균, 합계 등)의 사용 등을 가능하게 합니다.

반면에, 일부 NoSQL 데이터베이스는 이러한 복잡한 질의 기능을 제한적으로만 지원하거나 전혀 지원하지 않을 수 있습니다. 

예를 들어, Key-Value 스토어나 Document 데이터베이스는 일반적으로 간단한 키 기반의 조회를 제공하며, SQL만큼 복잡한 데이터 조작이나 분석 기능을 제공하지 않습니다.

따라서 "질의가 강력하지 않다"는 표현은 NoSQL 데이터베이스의 질의 기능이 SQL(관계형 데이터베이스)에 비해 제한적일 수 있다는 것을 의미합니다.

**수직 확장 (Vertical Scaling)**

수직 확장은 기존의 하드웨어(예: 서버)의 성능을 향상시키는 방법을 말합니다.

예를 들어, 더 빠른 CPU, 더 많은 RAM, 더 큰 디스크 등을 추가하는 것이 포함됩니다. 

수직 확장은 일반적으로 관리가 쉽지만, 하드웨어의 물리적 한계로 인해 확장성에 제한이 있습니다.

**수평 확장 (Horizontal Scaling)**

수평 확장은 더 많은 하드웨어(예: 서버)를 추가하여 시스템의 성능을 향상시키는 방법을 말합니다. 

이는 로드 밸런싱, 클러스터링 등의 기술을 사용하여 여러 서버 간에 작업을 분산시킵니다. 

수평 확장은 일반적으로 더 높은 확장성을 제공하지만, 관리가 복잡해질 수 있습니다.

SQL(관계형 데이터베이스)는 일반적으로 수직 확장에 더 적합하며, 

NoSQL 데이터베이스는 수평 확장에 더 적합합니다. 

하지만, 최근에는 샤딩, 복제 등의 기술을 사용하여 SQL 데이터베이스를 수평 확장하는 방법도 개발되고 있습니다.