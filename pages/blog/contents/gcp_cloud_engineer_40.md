---
title: 'GCP Cloud Engineer - 40'
subtitle: 'Essential Google Cloud Infrastructure: Core Services (한국어) - Cloud SQL'
date: '2024-04-16'
tags: [Cloud, GCP]
---

### Google Cloud의 Cloud SQL 기능 및 사용 사례 요약

- **Cloud SQL 기본 정보**:
  
  - Cloud SQL은 `MySQL`, `PostgreSQL`, `Microsoft SQL Server`의 완전 관리형 서비스입니다.
  
  - 패치와 업데이트가 자동으로 적용되며, 사용자는 기본 인증 도구를 사용하여 데이터베이스를 관리해야 합니다.

- **Cloud SQL 성능 및 확장성**:
  
  - 스토리지 용량 최대 `64TB`, `60,000 IOPS`, 인스턴스당 `624GB RAM`을 제공합니다.
  
  - 최대 `96`개 프로세서 코어로 수직 확장 가능하며, 읽기 복제본으로 수평 확장도 가능합니다.

- **지원되는 데이터베이스 버전**:
  
  - MySQL `5.6`, `5.7`, `8.0`; PostgreSQL `9.6`부터 `15`; SQL Server `2017`, `2019`의 `Web`, `Express`, `Standard`, `Enterprise` 버전.

- **고가용성 (HA) 및 백업**:
  
  - HA 구성은 기본 및 대기 인스턴스로 구성되어 있으며, 영구 디스크에 동기식으로 데이터를 복제합니다.
  
  - 장애 조치를 통해 인스턴스 또는 영역에 장애가 발생한 경우 자동 복구를 수행합니다.
  
  - `Point-in-Time Recovery` (PITR) 및 `mysqldump`를 통한 자동화된 백업 및 복원 기능을 제공합니다.

- **연결 옵션**:
  
  - 동일 리전 내 애플리케이션과의 연결에는 비공개 IP를 사용하며, 이는 데이터 트래픽이 공개 인터넷에 노출되지 않게 합니다.
  
  - 다른 리전이나 Google Cloud 외부에서 연결할 경우, `Cloud SQL 프록시` 사용이 권장됩니다.

- **Cloud SQL의 관리 및 운영 효율성**:
  
  - 외부 애플리케이션과 툴이 연동 가능하며, SQL Workbench, Toad 등의 표준 MySQL 드라이버를 지원합니다.