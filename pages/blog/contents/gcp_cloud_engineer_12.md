---
title: 'GCP Cloud Engineer - 12'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Cloud Storage / Detail: Storage Classes and Data Transfer'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Cloud Storage

- ㅇ **Cloud Storage**: Google’s object storage service that offers `durable and highly available storage` for any amount of data, suitable for `frequent access`.

- ㅇ **Object Storage Defined**: `Manages data as "objects"(O)` rather than `in a file/folder hierarchy (file storage)(X) or as disk chunks (block storage)(X)`. Objects contain the `data` itself, `relevant metadata`, and a `globally unique identifier`.

- ㅇ **Data Types for Object Storage**: Typically includes `data like videos, pictures, and audio`, which are stored as objects.

- ㅇ **Use Cases**: Cloud Storage is used for s`erving web content`, `archival(보관)` and `disaster recovery`, and `distributing large data objects directly to users`.

- ㅇ **Object Immortality**: Objects in Cloud Storage are `immutable`, meaning `changes create a new version(O)` rather than `altering the existing one(X)`.

- ㅇ **Versioning**: Administrators can `enable versioning` to `track changes` and `maintain a detailed history of modifications`.

- ㅇ **Access Control**: `Utilizes IAM roles` and `Access Control Lists (ACLs)` to `manage access`, ensuring that users have `permissions only as needed for security and privacy`.

- ㅇ **Lifecycle Management**: Allows setting `policies to manage object lifecycles`, such as `automatic deletion of objects` older than a `specified time` or `maintaining only` a certain number of `versions`.

### 클라우드 스토리지

- ㅇ **클라우드 스토리지**: 데이터의 양에 상관없이 데이터를 안전하고 높은 가용성으로 저장할 수 있는 구글의 오브젝트 스토리지 서비스입니다. 자주 접근해야 하는 데이터에 적합합니다.

- ㅇ **오브젝트 스토리지 정의**: 데이터를 파일/폴더 계층구조(파일 스토리지)나 디스크 조각(블록 스토리지)이 아닌 "오브젝트"로 관리합니다. 오브젝트는 데이터 자체, 관련 메타데이터 및 전역 고유 식별자를 포함합니다.

- ㅇ **오브젝트 스토리지 데이터 유형**: 주로 비디오, 사진 및 오디오와 같은 데이터가 오브젝트로 저장됩니다.

- ㅇ **사용 사례**: 웹 콘텐츠 제공, 보관 및 재해 복구, 사용자에게 대용량 데이터 오브젝트 직접 배포 등에 사용됩니다.

- ㅇ **오브젝트 불변성**: 클라우드 스토리지의 오브젝트는 불변으로, 변경사항이 생길 때 기존 오브젝트를 수정하는 대신 새 버전이 생성됩니다.

- ㅇ **버전 관리**: 관리자는 변경사항을 추적하고 수정 사항의 자세한 기록을 유지하기 위해 버전 관리를 활성화할 수 있습니다.

- ㅇ **접근 제어**: IAM 역할과 접근 제어 목록(ACL)을 사용하여 접근을 관리하며, 보안과 개인정보 보호를 위해 필요한 만큼의 사용자 권한만 부여합니다.

- ㅇ **수명 주기 관리**: 오브젝트의 수명 주기를 관리하는 정책을 설정할 수 있습니다. 예를 들어, 특정 기간 이상 된 오브젝트 자동 삭제나 버전 관리가 활성화된 버킷에서 가장 최근 버전만 유지하는 등의 정책을 적용할 수 있습니다. 이러한 제어를 통해 실제 필요한 것 이상으로 비용을 지불하지 않도록 할 수 있습니다.

--------------------------

### Cloud Storage: Storage Classes and Data Transfer

- ㅇ **Standard Storage**: Best for `frequently accessed data` or `"hot" data`, and ideal for data stored for short durations.

- ㅇ **Nearline Storage**: Suitable for `infrequently accessed data`, such as data read or modified `once a month or less`. Examples include data backups and long-term multimedia content storage.

- ㅇ **Coldline Storage**: A `low-cost option` for `infrequently accessed data`, meant for data accessed at most `once every 90 days`.

- ㅇ **Archive Storage**: The `lowest cost storage class`, ideal for `data archiving, online backup, and disaster recovery`. Designed for data accessed less than once a year, with `higher costs for data access and a minimum storage duration of 365 days`.

- ㅇ **Common Characteristics**: All storage classes offer `unlimited storage` with `no minimum` object size, `worldwide accessibility`, `low latency`, `high durability`, a `uniform experience across security tools and APIs`, and `geo-redundancy` in `multi-region` or `dual-region setups`.

- ㅇ **Auto-class Feature**: `Automatically transitions objects` to `colder or hotter storage classes` based on `access patterns to optimize costs`.

- ㅇ **Encryption**: `Data is encrypted server-side before being written` to disk and during transport using `HTTPS/TLS`, at `no additional cost`.

- ㅇ **Data Transfer Options**: `Includes online transfers using Cloud SDK`, `drag-and-drop in the Cloud Console` via Google Chrome, `Storage Transfer Service for large-scale data imports`, and the `Transfer Appliance` for `up to a petabyte of data per appliance`.

- ㅇ **Integration**: `Tightly integrated with other Google Cloud products` and services, `facilitating data movement` between services like **BigQuery, Cloud SQL, and more**.

### Cloud 저장소: 저장소 클래스 및 데이터 전송

- ㅇ **표준 저장소(Standard Storage)**: 자주 접근하는 데이터나 "핫" 데이터에 적합하며, 짧은 기간 동안 저장되는 데이터에 이상적입니다.

- ㅇ **니어라인 저장소(Nearline Storage)**: 자주 접근하지 않는 데이터에 적합하며, 월 1회 이하로 데이터를 읽거나 수정할 때 사용합니다. 데이터 백업 및 장기 멀티미디어 콘텐츠 저장이 예입니다.

- ㅇ **콜드라인 저장소(Coldline Storage)**: 자주 접근하지 않는 데이터를 저장하는 저비용 옵션으로, 90일에 최대 한 번 데이터에 접근할 수 있습니다.

- ㅇ **아카이브 저장소(Archive Storage)**: 데이터 보관, 온라인 백업, 재난 복구에 이상적인 가장 저렴한 저장소 클래스입니다. 연간 1회 이하로 데이터에 접근할 계획이 있는 경우에 적합하며, 데이터 접근 및 최소 365일의 저장 기간에 대한 비용이 더 높습니다.

- ㅇ **공통 특성**: 모든 저장 클래스는 최소 객체 크기 제한 없이 무제한 저장공간을 제공하며, 전 세계 어디에서나 접근 가능하고, 지연 시간이 낮으며, 내구성이 높습니다. 또한 보안 도구 및 API에 걸쳐 통일된 경험을 제공하며, 다중 지역 또는 이중 지역 설정에서 지리적 중복성을 제공합니다.

- ㅇ **자동 클래스(Auto-class) 기능**: 접근 패턴에 따라 객체를 더 차가운 또는 더 뜨거운 저장 클래스로 자동 전환하여 비용을 최적화합니다.

- ㅇ **암호화**: 서버 측에서 디스크에 기록되기 전과 HTTPS/TLS를 사용하여 데이터 전송 중에 데이터를 암호화하며, 추가 비용 없이 제공됩니다.

- ㅇ **데이터 전송 옵션**: Cloud SDK를 사용한 온라인 전송, 구글 크롬을 통한 클라우드 콘솔에서의 드래그 앤 드롭, 대규모 데이터 수입을 위한 스토리지 전송 서비스, 페타바이트 단위의 데이터를 전송할 수 있는 전

송 어플라이언스 등이 포함됩니다.

- ㅇ **통합**: BigQuery, Cloud SQL 등과 같은 다른 구글 클라우드 제품 및 서비스와 긴밀하게 통합되어 서비스 간 데이터 이동을 용이하게 합니다.

-------

### 모르는 단어

#### metadata

메타데이터(Metadata)는 데이터에 대한 데이터를 의미합니다. 즉, 다른 데이터를 설명하거나, 분류하거나, 이해하는 데 도움이 되는 정보입니다.

객체 저장소에서, 객체는 데이터 자체와 함께 메타데이터를 포함합니다. 이 메타데이터는 객체에 대한 추가적인 정보를 제공하며, 이는 객체의 생성 날짜, 수정 날짜, 소유자, 크기, MIME 타입 등이 될 수 있습니다. 또한, 사용자가 정의한 키-값 쌍도 메타데이터로 저장될 수 있습니다.

메타데이터는 데이터 관리, 검색, 보안, 감사 등에 사용됩니다. 예를 들어, 메타데이터를 사용하여 특정 조건을 만족하는 객체를 검색하거나, 객체의 보안 설정을 관리할 수 있습니다.

#### Access Control Lists (ACLs)

Access Control Lists (ACLs)는 네트워크 보안에서 널리 사용되는 방법으로, 특정 리소스에 대한 사용자의 접근 권한을 제어하는 데 사용됩니다.

ACL은 사용자(또는 사용자 그룹)와 그들이 수행할 수 있는 작업(예: 읽기, 쓰기, 실행 등)의 목록을 포함합니다. 이는 파일, 디렉토리, 네트워크 포트, 데이터베이스 등 다양한 리소스에 적용될 수 있습니다.

ACL을 사용하면, 관리자는 각 사용자가 어떤 리소스에 접근할 수 있는지, 그리고 어떤 작업을 수행할 수 있는지를 세밀하게 제어할 수 있습니다. 이는 데이터의 보안을 강화하고, 불필요한 접근을 제한하는 데 도움이 됩니다.
