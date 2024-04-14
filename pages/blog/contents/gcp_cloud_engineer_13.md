---
title: 'GCP Cloud Engineer - 13'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Cloud SQL / Cloud Spanner'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Cloud SQL 

- ㅇ **Cloud SQL**: A `fully managed relational database service` offering **MySQL, PostgreSQL, and SQL Server**.

- ㅇ **Maintenance-Free**: `No need for software installation or maintenance`. Google handles `mundane(평범한) tasks` like applying `patches and updates, managing backups, and configuring replications`.

- ㅇ **Scalability**: Can scale up to `128 processor cores`, `864 GB of RAM`, and `64 TB of storage`.

- ㅇ **Automatic Replication**: Supports `automatic replication` from a `Cloud SQL primary instance`, an `external primary instance`, and `external MySQL instances`.

- ㅇ **Managed Backups**: `Provides managed backups` with `secure storage` and `accessibility for restoration`; cost covers seven backups.

- ㅇ **Data Encryption**: `Encrypts data on Google’s internal networks` and when stored in d**atabase tables, temporary files, and backups**.

- ㅇ **Network Firewall**: Includes a network firewall to `control access to each database instance`.

- ㅇ **Integration with Google Cloud Services**: `Accessible by other Google Cloud services and external services`; can be used with `App Engine` and `Compute Engine instances`.

- ㅇ **Compatibility with External Tools**: Supports tools like `SQL Workbench, Toad, and applications` using standard MySQL drivers.

### 클라우드 SQL

- ㅇ **클라우드 SQL**: MySQL, PostgreSQL, SQL 서버를 포함하는 완전 관리형 관계형 데이터베이스 서비스를 제공합니다.

- ㅇ **유지보수 불필요**: 소프트웨어 설치나 유지보수가 필요 없으며, 구글이 패치 적용, 백업 관리, 복제 구성과 같은 일상적인 작업을 처리합니다.

- ㅇ **확장성**: 프로세서 코어 128개, RAM 864GB, 저장공간 64TB까지 확장 가능합니다.

- ㅇ **자동 복제**: 클라우드 SQL 주 인스턴스, 외부 주 인스턴스 및 외부 MySQL 인스턴스에서 자동 복제를 지원합니다.

- ㅇ **관리형 백업**: 안전하게 저장되고 필요시 복원 가능한 백업을 관리하며, 비용은 7개의 백업을 포함합니다.

- ㅇ **데이터 암호화**: 구글 내부 네트워크에서 및 데이터베이스 테이블, 임시 파일, 백업에 저장된 데이터를 암호화합니다.

- ㅇ **네트워크 방화벽**: 각 데이터베이스 인스턴스에 대한 네트워크 접근을 제어하는 네트워크 방화벽을 포함합니다.

- ㅇ **구글 클라우드 서비스와의 통합**: 다른 구글 클라우드 서비스 및 외부 서비스에 접근 가능하며, App Engine 및 Compute Engine 인스턴스와 함께 사용할 수 있습니다.

- ㅇ **외부 도구와의 호환성**: SQL Workbench, Toad 및 표준 MySQL 드라이버를 사용하는 다른 외부 애플리케이션을 지원합니다.


------------

### Cloud Spanner

- ㅇ **Cloud Spanner**: A `fully managed relational database service` that `scales horizontally` and offers `strong consistency` and `SQL support`.

- ㅇ **Use Case**: `Battle-tested` by Google's own `mission-critical applications`, Spanner powers Google’s $80 billion business.

- ㅇ **Features**: `Supports SQL with capabilities` for `joins and secondary indexes`, `ensuring comprehensive data handling`.

- ㅇ **High Availability**: Built-in high availability `to ensure service continuity without disruptions.`

- ㅇ **Global Consistency**: Provides strong `global consistency` across all nodes, critical for applications `requiring accurate data sync`.

- ㅇ **Performance**: Capable of `handling tens of thousands of reads and writes` per second, suitable for `high-load applications`.

### 클라우드 스페너

- ㅇ **클라우드 스패너**: 수평적으로 확장 가능한 완전 관리형 관계형 데이터베이스 서비스로, 강력한 일관성과 SQL 지원을 제공합니다.

- ㅇ **사용 사례**: 구글의 중요한 애플리케이션을 테스트한 경험이 있으며, 구글의 800억 달러 규모의 비즈니스를 지원합니다.

- ㅇ **기능**: 조인 및 보조 인덱스를 지원하는 SQL 기능을 통해 포괄적인 데이터 처리가 가능합니다.

- ㅇ **고가용성**: 내장된 고가용성을 통해 서비스 중단 없이 연속성을 보장합니다.

- ㅇ **전역 일관성**: 모든 노드에 걸쳐 강력한 전역 일관성을 제공하여 정확한 데이터 동기화가 필요한 애플리케이션에 필수적입니다.

- ㅇ **성능**: 초당 수만 건의 읽기 및 쓰기를 처리할 수 있어 고부하 애플리케이션에 적합합니다.

----------

### 모르는 단어 

#### Toad

Toad는 데이터베이스 관리 및 개발을 위한 포괄적인 도구 모음입니다. Toad는 Oracle, SQL Server, MySQL, IBM DB2, Sybase, PostgreSQL 등 다양한 데이터베이스 시스템을 지원합니다.

Toad를 사용하면, 데이터베이스 관리자(DBA), 개발자, 분석가들이 데이터베이스를 더 효과적으로 관리하고, SQL을 작성하고, 데이터를 분석하고, 데이터베이스 성능을 최적화하는 데 도움이 됩니다.

Toad의 주요 기능에는 SQL 편집 및 디버깅, 데이터베이스 오브젝트 관리, 데이터베이스 성능 최적화, 데이터 비교 및 동기화, 데이터 모델링 등이 있습니다.

#### Battle-tested

"Battle-tested"는 어떤 제품, 시스템, 전략 등이 실제 환경에서 테스트되고 검증된 것을 의미합니다. 이는 그것이 실제로 어려운 조건이나 상황에서도 성공적으로 작동할 수 있음을 보여줍니다.

여기서 "Google's own mission-critical applications"에 대해 "Battle-tested"라는 표현이 사용된 것은, Google의 핵심 애플리케이션들이 Spanner를 사용하고, 이를 통해 Spanner가 실제로 고부하와 중요한 업무에서도 안정적으로 작동할 수 있음을 검증했다는 것을 의미합니다.