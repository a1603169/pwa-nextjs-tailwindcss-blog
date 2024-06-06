---
title: 'GCP Cloud Engineer - 71'
subtitle: 'Reliable Cloud Infrastructure: Desgin and Process - REST / HTTP / API'
date: '2024-04-20'
tags: [Cloud, GCP]
---


### REST

**마이크로서비스 설계: REST와 HTTP 기반**

- **독립성과 계약**
  
  - ㅁ 각 마이크로서비스는 버전이 지정되고 잘 정의된 계약을 클라이언트에게 제공해야 함
  
  - ㅁ 서비스는 버전이 지정된 계약을 위반해서는 안 되며, 지원 중단 및 해제 정책을 고려해야 함

- **통신과 페이로드**
  
  - ㅁ 서비스 간 통신은 HTTP를 통해 이루어지며, JSON 또는 XML과 같은 텍스트 기반 페이로드 사용
  
  - ㅁ HTTP 메소드 (`GET`, `POST` 등)를 사용하여 요청된 작업의 의미를 전달

- **REST 아키텍처**
  
  - ㅁ REST(Representational State Transfer)는 프로토콜에 독립적이며 느슨한 결합을 지원
  
  - ㅁ HTTP가 가장 일반적인 프로토콜이지만, gRPC도 널리 사용됨
  
  - ㅁ 강력한 계약을 통해 느슨한 결합 유지, `OpenAPI` 및 프로토콜 버퍼 사용 가능

- **API 설계**
  
  - ㅁ 리소스는 URI 또는 엔드포인트로 식별되며, 요청에 대한 응답은 리소스 정보의 변경 불가능한 표현을 반환
  
  - ㅁ REST 애플리케이션은 일관되고 균일한 인터페이스를 제공하며, 하이퍼미디어를 통해 클라이언트는 서비스에 대한 사전 지식 없이 서비스를 사용 가능
  
  - ㅁ 각 서비스는 오류를 일관되게 보고하고, URL 구조가 일관되며, 페이징 사용도 일관됨을 유지

- **리소스와 표현**
  
  - ㅁ 리소스는 정보의 추상적인 개념이며, 리소스의 표현은 리소스 정보의 사본
  
  - ㅁ 요청된 리소스는 단일 항목 또는 항목 모음일 수 있으며, 일반적으로 JSON 형식으로 반환됨
  
  - ㅁ 성능상의 이유로 항목 모음을 반환하는 것이 개별 항목을 반환하는 것보다 좋음

### HTTP

**HTTP 서비스 및 RESTful API 설계**

- **HTTP 요청의 구성**
  
  - ㅁ **요청 행**: HTTP 메서드 (`GET`, `POST`, `PUT` 등), 요청된 URI, 프로토콜 버전 포함
  
  - ㅁ **헤더 변수**: 사용자 에이전트와 같은 표준 헤더 및 커스텀 헤더가 키-값 쌍으로 포함
  
  - ㅁ **요청 본문**: 서버로 보낼 데이터를 포함하며, 주로 `POST` 및 `PUT` 요청에 사용

- **HTTP 요청 예시**
  
  - ㅁ 첫 번째 예: HTTP `GET` 요청, `Host` 헤더 변수 포함 (`pet.drehnstorm.com`)
  
  - ㅁ 두 번째 예: HTTP `POST` 요청, `Host`, `Content-Type`(json), `Content-Length`(35바이트) 헤더 변수 포함, 요청 본문에 JSON 문서 포함

- **HTTP 응답의 구성**
  
  - ㅁ **응답 행**: HTTP 버전 및 응답 코드 (`200`, `201`, `403`, `404`, `500`, `503` 등)
  
  - ㅁ **응답 헤더**: 콘텐츠 형식을 포함한 키-값 쌍의 집합
  
  - ㅁ **응답 본문**: 요청된 표현에 대한 리소스 표현을 포함

- **RESTful API 설계 원칙**
  
  - ㅁ **리소스 중심**: URI는 리소스를 표현하며, 리소스에 대한 동작은 HTTP 동사(`GET`, `POST`, `PUT`, `DELETE`)를 통해 정의
  
  - ㅁ **URI 설계**: 단수 명사로 개별 리소스, 복수 명사로 리소스 컬렉션을 표현, 동사 사용을 피함
  
  - ㅁ **응답 및 요청 포맷**: 일반적으로 JSON 형식 사용, XML이 가능하지만 JSON이 일반적인 표준
  
  - ㅁ **버전 관리**: API의 버전을 URI에 포함하여 관리

- **API 설계의 중요성**
  
  - ㅁ API는 개발 프로세스의 일부로서 일관성과 유연성을 제공하는 설계 규칙 세트를 따라야 함
  
  - ㅁ 변경 불가능한 리소스와 성능 최적화를 위해 캐싱 고려 필요
  
  - ㅁ 애플리케이션의 인프라보다 더 안정적이어야 하며, 기본 인프라의 장애를 관리할 수 있어야 함

### API

**API 설계 및 관리**

- **일관된 API 설계**
  
  - ㅁ Google은 API 설계 가이드를 제공하며, 이름, 오류 처리, 문서화, 버전 관리 호환성 등을 강조함
  
  - ㅁ Google Cloud API는 REST API를 노출하며, `service.collection.verb` 형식으로 함수를 정의
  
  - ㅁ 예: Compute Engine API의 서비스 엔드포인트는 `compute.googleapis.com`, 컬렉션에는 인스턴스, 인스턴스 그룹, 인스턴스 태블릿이 포함, 동사에는 `LIST`, `GET`, `INSERT`가 포함

- **OpenAPI 및 Swagger**
  
  - ㅁ OpenAPI는 클라이언트에게 API를 노출하는 업계 표준이며, 사양 버전 2.0은 Swagger로 알려짐
  
  - ㅁ Swagger는 API의 설계, 구축, 사용, 문서화를 지원하는 오픈소스 도구
  
  - ㅁ OpenAPI를 통해 단일 소스 저장소(SSOT)를 제공하며, 클라이언트 라이브러리 및 서비스 스텁의 소스 코드를 자동으로 생성

- **Google Cloud의 API 도구**
  
  - ㅁ Cloud Endpoints와 Apigee를 통한 API 관리
    - `Cloud Endpoints`: Google Cloud 백엔드에서 API 개발, 배포 및 관리 지원
    - `Apigee`: 기업용 API 관리 플랫폼으로, 클라우드, 온프레미스 또는 하이브리드로 배포 가능
  
  - ㅁ 기능 세트에는 API 게이트웨이, 맞춤설정 가능한 포털, API 관련 수익 창출, 심층 분석이 포함

- **gRPC와 HTTP/2**
  
  - ㅁ gRPC는 Google에서 개발한 바이너리 프로토콜로, 여러 프로그래밍 언어 지원 및 프로토콜 버퍼로 정의된 계약을 통한 느슨한 결합 지원
  
  - ㅁ HTTP/2 기반으로 클라이언트 및 서버 스트리밍 지원

- **REST API의 기본 구조**
  
  - ㅁ 서비스 예시(`Pets`): 리소스 접근 제공, 리소스의 표현(`Pet`)을 통해 요청 시 하나 이상의 표현 반환
  
  - ㅁ URI 설계: URI 내에 버전 정보 포함, 예: `petstore.swagger.io/v1`
  
  - ㅁ HTTP 요청: `/pets` 엔드포인트에 `GET`을 사용하여 모든 반려동물 목록 제공