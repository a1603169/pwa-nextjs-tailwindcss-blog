---
title: 'GCP Cloud Engineer - 18'
subtitle: 'Introducting Google Cloud - Cloud Run / Development in the cloud'
date: '2024-04-14'
tags: [Cloud, GCP, Kubernetes]
---

### Cloud Run 

- ㅇ **Introduction to Cloud Run**: Cloud Run is a `managed compute platform` that `enables running stateless containers` which respond to `web requests` or `Pub/Sub events.`

- ㅇ **Serverless Nature**: It is serverless, meaning it `eliminates infrastructure management tasks`, allowing `developers to focus` solely on `application development`.

- ㅇ **Based on Knative**: Built on Knative, which is an `open API` and `runtime environment on Kubernetes`, allowing `deployment` on `Google Cloud, Google Kubernetes Engine`, or anywhere `Knative is supported`.

- ㅇ **Scalability and Cost-Efficiency**: Cloud Run `automatically scales up and down` from zero `almost instantly`, `charging only` for the `resources used`, calculated to the `nearest 100 milliseconds`.

- ㅇ **Developer Workflow**: The workflow involves three main steps: 
  
  - ㅁ `Writing the application` in any preferred `programming language`
  - ㅁ `Building the application` into a `container image`
  - ㅁ `Pushing the image` to `Artifact Registry` for `deployment on Cloud Run`.

- ㅇ **HTTPS and Dynamic Handling**: `Once deployed`, the application `receives` a `unique HTTPS URL` and dynamically `manages container scaling` to handle `incoming requests`.

- ㅇ **Flexibility in Development**: `Supports` both `container-based` and `source-based workflows`, where the `latter involves building from source code` using `Buildpacks`.

- ㅇ **Secure and Automated Management**: Cloud Run `handles HTTPS configuration`, ensuring `secure web requests handling` without `manual setup(X)`.

- ㅇ **Pricing Model**: `Charges` are based only on the `actual usage of resources` during `active web requests` or during `startup/shutdown phases`, with `additional fees` per million requests served.

- ㅇ **Support for Various Languages**: `Compatible with popular programming languages` like Java, Python, Node.js, PHP, Go, C++, and even less common ones like Cobol, Haskell, and Perl, as long as the `application can handle web requests`.

### 클라우드 런

- ㅇ **클라우드 런 소개**: 클라우드 런은 웹 요청 또는 Pub/Sub 이벤트에 반응하는 무상태 컨테이너를 실행할 수 있는 관리형 컴퓨트 플랫폼입니다.

- ㅇ **서버리스 특성**: 인프라 관리 작업을 제거하여 개발자가 애플리케이션 개발에만 집중할 수 있도록 하는 서버리스 플랫폼입니다.

- ㅇ **크나티브 기반**: 크나티브(쿠버네티스 기반의 오픈 API 및 런타임 환경)에 구축되어 구글 클라우드, 구글 쿠버네티스 엔진 또는 크나티브가 지원되는 어디에서나 배포할 수 있습니다.

- ㅇ **확장성 및 비용 효율성**: 거의 즉시 제로에서 자동으로 확장되며, 사용한 자원에 대해서만 100밀리초 단위로 요금이 청구됩니다.

- ㅇ **개발자 워크플로우**: 애플리케이션을 선호하는 프로그래밍 언어로 작성, 컨테이너 이미지로 빌드, 아티팩트 레지스트리로 이미지 푸시하여 클라우드 런에 배포하는 세 단계로 구성됩니다.

- ㅇ **HTTPS 및 동적 처리**: 배포 후 고유한 HTTPS URL을 받고, 들어오는 요청을 처리하기 위해 컨테이너 스케일링을 동적으로 관리합니다.

- ㅇ **개발의 유연성**: 컨테이너 기반 및 소스 기반 워크플로우를 지원하며, 후자는 빌드팩을 사용하여 소스 코드에서 빌드합니다.

- ㅇ **보안 및 자동화된 관리**: 클라우드 런이 HTTPS 구성을 처리하여 수동 설정 없이도 안전한 웹 요청 처리를 보장합니다.

- ㅇ **가격 모델**: 활성 웹 요청 중 또는 시작/종료 단계에서 실제 사용한 자원에 대해서만 요금이 부과되며, 요청 백만 건당 추가 요금이 부과됩니다.

- ㅇ **다양한 언어 지원**: Java, Python, Node.js, PHP, Go, C++ 등 인기 있는 프로그래밍 언어 뿐만 아니라 Cobol, Haskell, Perl과 같은 덜 일반적인 언어도 지원하며, 애플리케이션에서 웹 요청을 처리할 수 있어야 합니다.


--------------------------

### Development in the cloud

- ㅇ **Cloud Functions Overview**: A `lightweight, event-based, asynchronous compute solution` that allows developers to write `single-purpose functions` for handling specific tasks without `managing servers(X)`.

- ㅇ **Event-Driven Architecture**: `Ideal` for applications with `event-driven components`, such as `image uploading`, where the `function` automatically `runs` `to process images` when `triggered by an event`.

- ㅇ **Use Case Example**: When a user `uploads an image`, Cloud Functions can automatically `handle tasks` like `converting the image to a standard format`, `resizing it into thumbnails`, and `storing the processed files` in a repository.

- ㅇ **Efficiency and Scalability**: Functions only use `compute resources when running`, and developers are only `charged` for the `compute time` in increments(증가) of 100 milliseconds.

- ㅇ **Integration and Extension**: `Easily connects` with and `extends other Cloud Services`, `enhancing application workflows` with `custom business logic`.

- ㅇ **Programming Support**: `Supports multiple programming languages` including Node.js, Python, Go, Java, .Net Core, Ruby, and PHP, with `specific version details available` in the `runtime documentation`.

- ㅇ **Triggers**: Functions can be `triggered asynchronously by events` from `Cloud Storage` and `Pub/Sub`, or `synchronously via HTTP invocation`.

### 클라우드 안에서 개발

- ㅇ **클라우드 함수 개요**: 서버 관리가 필요 없는 경량의 이벤트 기반 비동기 컴퓨트 솔루션으로, 개발자가 특정 작업을 처리하기 위해 단일 목적의 함수를 작성할 수 있게 해줍니다.

- ㅇ **이벤트 구동 아키텍처**: 이미지 업로드와 같은 이벤트 구동 구성 요소가 있는 애플리케이션에 이상적으로, 이벤트에 의해 트리거될 때 이미지 처리와 같은 작업을 자동으로 수행하는 함수를 실행합니다.

- ㅇ **사용 사례 예시**: 사용자가 이미지를 업로드하면 클라우드 함수가 자동으로 표준 형식으로 이미지 변환, 썸네일 크기 조정, 처리된 파일 저장소에 저장하는 작업을 처리할 수 있습니다.

- ㅇ **효율성 및 확장성**: 함수는 실행 중일 때만 컴퓨트 리소스를 사용하며, 개발자는 100밀리초 단위로 계산된 컴퓨트 시간에 대해서만 비용을 지불합니다.

- ㅇ **통합 및 확장**: 다른 클라우드 서비스와 쉽게 연결되고 확장되어, 맞춤형 비즈니스 로직으로 애플리케이션 워크플로를 향상시킬 수 있습니다.

- ㅇ **프로그래밍 지원**: Node.js, Python, Go, Java, .Net Core, Ruby, PHP 등 다양한 프로그래밍 언어를 지원하며, 구체적인 버전 정보는 런타임 문서에서 확인할 수 있습니다.

- ㅇ **트리거**: Cloud Storage 및 Pub/Sub에서 발생하는 이벤트에 의해 비동기적으로 함수를 트리거하거나 HTTP 호출을 통해 동기적으로 실행할 수 있습니다.


--------------------

### 모르는 단어

#### Pub/Sub Events

Google Cloud Pub/Sub에서의 "events"는 메시지를 의미합니다. Pub/Sub은 Publisher-Subscriber 모델을 사용하는 메시징 서비스로, 이 모델에서는 메시지를 생성하는 Publisher와 메시지를 수신하는 Subscriber가 있습니다.

"Pub/Sub events"는 특정 시스템에서 발생하는 사건을 나타내는 메시지를 의미합니다. 예를 들어, 파일이 Cloud Storage 버킷에 업로드되었을 때의 이벤트, 또는 새로운 사용자가 애플리케이션에 가입했을 때의 이벤트 등이 있을 수 있습니다.

이러한 이벤트는 Pub/Sub 시스템에 의해 메시지로 변환되어, 해당 이벤트에 대해 알림을 받도록 구독한 시스템이나 서비스로 전송됩니다. 이를 통해 실시간으로 이벤트를 처리하거나, 비동기 작업을 트리거하는 등의 작업을 수행할 수 있습니다.

#### Artifact Registry

Artifact Registry는 Google Cloud에서 제공하는 관리형 패키지 저장소 서비스입니다.

이 서비스는 Docker 컨테이너 이미지와 Maven, npm, Python, 그리고 다른 언어로 작성된 패키지를 저장하고, 관리하고, 보안을 유지하고, 배포하는 데 사용됩니다.

Artifact Registry는 개발자가 소프트웨어 빌드 및 배포 프로세스를 효율적으로 관리할 수 있도록 돕습니다. 

이 서비스를 사용하면, 개발자는 소프트웨어 패키지를 안전하게 저장하고, 버전 관리를 수행하고, 다양한 환경에 패키지를 배포할 수 있습니다. 

또한, Artifact Registry는 통합 보안 및 규정 준수 기능을 제공하여 패키지의 보안을 강화합니다.

### HTTP invocation

HTTP invocation은 HTTP 프로토콜을 사용하여 웹 서비스나 API를 호출하는 것을 의미합니다.

HTTP는 웹에서 데이터를 전송하는 데 사용되는 프로토콜입니다. HTTP를 사용하여 웹 서버에 요청을 보내고 응답을 받을 수 있습니다. 

이러한 요청과 응답의 프로세스를 "HTTP invocation"이라고 합니다.

HTTP invocation은 일반적으로 HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 수행됩니다. 이 메서드들은 웹 서버에게 어떤 종류의 작업을 수행해야 하는지를 알려줍니다