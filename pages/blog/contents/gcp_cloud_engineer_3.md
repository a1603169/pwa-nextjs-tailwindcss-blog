---
title: 'GCP Cloud Engineer - 3'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Environmental Impact / Security / Open Source Ecosystems'
date: '2024-04-12'
tags: [Cloud, GCP]
---

### Environmental Impact

- ㅇ **High Energy Use**: Data centers globally `consume approximately 2% of the world's electricity`, highlighting the energy-intensive nature of the virtual world, including Google Cloud’s network.

- ㅇ **Efficiency Measures**: Google aims to operate its data centers as `efficiently as possible` to align with `environmental goals`.

- ㅇ **ISO 14001 Certification**: Google's data centers were the first to achieve **`ISO 14001 certification`**, setting a standard for enhancing environmental performance by `improving resource efficiency and reducing waste`.

- ㅇ **Innovative Cooling System**: The Google data center in Hamina, Finland, uses a unique seawater cooling system from the Bay of Finland, `significantly reducing energy use`.

- ㅇ **Environmental Milestones**: 
  
  - ㅁ In its founding decade, Google was the first major company to become `carbon neutral`.
  
  - ㅁ In its second decade, Google achieved `100% renewable energy`.
  
  - ㅁ By 2030, Google `aims` to be the first major company to operate `completely carbon-free`.

### 환경 영향

- ㅇ **높은 에너지 사용량**: 전 세계 데이터 센터는 세계 전력의 약 2%를 소비하며, 이는 가상 세계(구글 클라우드 네트워크 포함)가 에너지 집약적임을 보여줍니다.

- ㅇ **효율성 강화 조치**: 구글은 환경 목표에 부합하도록 데이터 센터의 운영 효율성을 최대한 높이려고 노력하고 있습니다.

- ㅇ **ISO 14001 인증**: 구글 데이터 센터는 자원 효율성을 개선하고 폐기물을 줄이는 방향으로 환경 성능을 향상시키기 위한 틀을 제공하는 ISO 14001 인증을 최초로 획득했습니다.

- ㅇ **혁신적인 냉각 시스템**: 핀란드 하미나에 위치한 구글 데이터 센터는 핀란드만의 바닷물을 사용하는 독특한 냉각 시스템을 도입하여 에너지 사용을 크게 줄였습니다.

- ㅇ **환경 관련 이정표**:
  
  - ㅁ 설립 첫 십년간 구글은 주요 기업 중 최초로 탄소 중립을 달성했습니다.
  
  - ㅁ 두 번째 십년에는 100% 재생 에너지 달성이라는 이정표를 세웠습니다.
  
  - ㅁ 2030년까지 구글은 완전히 탄소 배출이 없는 주요 기업이 되는 것을 목표로 하고 있습니다.

--------

### Security 

- **Hardware Infrastructure**:
  
  - ㅇ `Custom-designed` **server boards** and **networking equipment**.
  
  - ㅇ `Deployment` of a **hardware security chip** on **servers and peripherals**.
  
  - ㅇ `Secure boot stack` with **cryptographic signatures** over the `BIOS, bootloader, kernel, and OS image`.
  
  - ㅇ `Premises security(전제보안)` with **multiple physical layers** and **limited access** to Google employees.

- **Service Deployment**:
  
  - ㅇ `Encryption of inter-service communication` via **cryptographic privacy** and **integrity for RPC(Remote Procedure Call) data**.
  
  - ㅇ `Deployment of hardware cryptographic accelerators` to **extend encryption** across all **RPC traffic** in data centers.

- **User Identity**:
  
  - ㅇ Google’s central identity service uses `advanced authentication methods`, including risk-based challenges.
  
  - ㅇ Supports `secondary authentication factors`, such as **U2F devices**.

- **Storage Services**:
  
  - ㅇ `Encryption at rest(저장 시 암호화)` using `centrally managed keys`.
  
  - ㅇ `Hardware encryption` support in **hard drives and SSDs**.

- **Internet Communication**:
  
  - ㅇ Google Front End `manages TLS connections` with **public-private key pairs** and **X.509 certificates**.
  
  - ㅇ Best practices like `perfect forward secrecy and protections` against **Denial of Service attacks**.

- **Operational Security**:
  
  - ㅇ `Intrusion detection(침입 탐지)` with rules and machine intelligence.
  
  - ㅇ `Red Team exercises` to improve **detection** and **response mechanisms**.
  
  - ㅇ `Reduction of insider risk` by **limiting and monitoring administrative access**.
  
  - ㅇ **Mandatory use** of `U2F-compatible Security Keys` by employees.
  
  - ㅇ **Stringent(엄중한) software development practices** including `two-party code review(한 명 이상의 동료 개발자가 작성한 코드를 검토 / 피드백 제공)` and `secure libraries(보안 라이브러리)`.
  
  - ㅇ `Vulnerability(취약점) Rewards Program` to encourage bug reporting.

### 보안

- **하드웨어 인프라**:
  
  - ㅇ 맞춤형 설계된 서버 보드 및 네트워킹 장비.
  
  - ㅇ 서버 및 주변 장치에 하드웨어 보안 칩 배포.
  
  - ㅇ BIOS, 부트로더, 커널, 운영 체제 이미지에 대한 암호화 서명을 포함한 안전한 부팅 스택.
  
  - ㅇ 여러 물리적 보안 계층과 제한된 구글 직원의 접근을 통한 시설 보안.

- **서비스 배포**:
  
  - ㅇ RPC 데이터에 대한 암호화된 개인 정보 보호 및 무결성을 통한 서비스 간 통신 암호화.
  
  - ㅇ 데이터 센터 내 모든 RPC 트래픽에 대한 암호화를 확장하기 위한 하드웨어 암호화 가속기 배포.

- **사용자 신원**:
  
  - ㅇ 위험 기반 도전을 포함한 고급 인증 방법을 사용하는 구글 중앙 신원 서비스.
  
  - ㅇ U2F 장치와 같은 보조 인증 수단 지원.

- **저장 서비스**:
  
  - ㅇ 중앙에서 관리하는 키를 사용한 저장 시 암호화.
  
  - ㅇ 하드 드라이브 및 SSD에서 하드웨어 암호화 지원.

- **인터넷 통신**:
  
  - ㅇ Google Front End가 공개 키-개인 키 쌍 및 X.509 인증서를 사용하여 TLS 연결 관리.
  
  - ㅇ 완벽한 전진 비밀유지 및 서비스 거부 공격에 대한 보호와 같은 최선의 관행.

- **운영 보안**:
  
  - ㅇ 규칙 및 기계 지능을 사용한 침입 탐지.
  
  - ㅇ 탐지 및 대응 메커니즘 향상을 위한 레드 팀 운동.
  
  - ㅇ 관리적 접근을 제한하고 모니터링함으로써 내부 위험 감소.
  
  - ㅇ 구글 직원의 필수 U2F 호환 보안 키 사용.
  
  - ㅇ 중앙 소스 제어 및 두 명의 검토자가 필요한 엄격한 소프트웨어 개발 관행.
  
  - ㅇ 인프라 또는 애플리케이션의 버그를 발견하고 알리는 것을 장려하는 취약점 보상 프로그램.


--------- 

### Open Source Ecosystems

- ㅇ **Vendor Lock-in Concerns**: Some organizations `hesitate to adopt cloud solutions` due to `fears of becoming dependent on a single vendor`.

- ㅇ **Google's Flexibility**: Google `ensures customers can run their applications elsewhere` if they choose to leave Google Cloud.

- ㅇ **Open Source Initiatives**: Google publishes `key technologies under open source licenses` to **foster ecosystems** that provide alternatives to Google's services.

- ㅇ **Example of TensorFlow**: TensorFlow is an `open source machine learning library` developed by Google, central to a robust open source ecosystem.

- ㅇ **Interoperability Solutions**:
  
  - ㅁ `Kubernetes and Google Kubernetes Engine` support the **mixing and matching of microservices** `across different cloud environments`.
  
  - ㅁ **Google Cloud’s operations suite(운영제품군)** allows for `monitoring of workloads across multiple cloud providers`.

### 오픈 소스 생태계

- ㅇ **벤더 종속성 우려**: 일부 조직은 단일 벤더에 의존하게 될까 봐 클라우드 솔루션 도입을 주저합니다.

- ㅇ **구글의 유연성**: 고객이 구글 클라우드를 떠나기로 결정한 경우, 고객이 자신의 애플리케이션을 다른 곳에서 실행할 수 있도록 지원합니다.

- ㅇ **오픈 소스 이니셔티브**: 구글은 주요 기술을 오픈 소스 라이센스로 공개하여 구글의 서비스 외에 대안을 제공하는 생태계를 조성합니다.

- ㅇ **텐서플로우 예시**: 구글 내부에서 개발된 오픈 소스 기계 학습 라이브러리인 텐서플로우는 강력한 오픈 소스 생태계의 핵심입니다.

- ㅇ **상호 운용성 솔루션**:
  
  - ㅁ 쿠버네티스와 구글 쿠버네티스 엔진은 다양한 클라우드 환경에서 마이크로서비스를 혼합 및 매치하는 것을 지원합니다.
  
  - ㅁ 구글 클라우드의 운영 스위트는 여러 클라우드 제공업체에서 워크로드를 모니터링할 수 있게 합니다.

### 모르는 단어

#### Secure Boot Stack

Secure Boot Stack은 컴퓨터가 부팅될 때 실행되는 소프트웨어의 시퀀스를 안전하게 유지하기 위한 기술입니다. 이는 BIOS, 부트로더, 커널, 운영 체제 이미지 등의 컴포넌트를 포함합니다.

Secure Boot Stack의 주요 목표는 부팅 과정에서 악성 코드가 실행되는 것을 방지하는 것입니다. 이를 위해 각 컴포넌트는 다음 컴포넌트의 무결성을 검증하고, 검증에 실패하면 부팅을 중단합니다. 이 검증 과정은 일반적으로 암호학적 서명을 사용하여 수행됩니다.

따라서, Secure Boot Stack은 컴퓨터가 안전한 상태에서 시작되도록 보장하고, 루트킷이나 부트킷과 같은 고급 악성 코드로부터 시스템을 보호하는 데 중요한 역할을 합니다.

#### RPC Data

RPC(Remote Procedure Call) 데이터는 네트워크를 통해 다른 컴퓨터에 위치한 프로시저나 함수를 호출하는 데 사용되는 데이터를 말합니다.

RPC는 클라이언트-서버 모델에서 서버의 리소스나 서비스에 접근하기 위해 사용되는 프로토콜입니다. 클라이언트는 원격 서버에 있는 함수를 마치 로컬 시스템의 함수처럼 호출할 수 있습니다.

RPC 데이터는 이러한 함수 호출에 필요한 매개변수와 반환 값을 포함합니다. 이 데이터는 네트워크를 통해 전송되므로, 데이터 무결성이 중요합니다. 데이터 무결성이란 데이터가 전송 중에 손상, 손실, 변경되지 않음을 보장하는 것을 말합니다.

#### cryptographic accelerators

Cryptographic accelerators는 암호화 연산을 빠르고 효율적으로 수행하기 위해 설계된 하드웨어 장치입니다.

이들은 CPU의 부하를 줄이고, 보안 애플리케이션의 성능을 향상시키기 위해 사용됩니다. 암호화, 복호화, 디지털 서명 생성 및 검증, 랜덤 숫자 생성 등의 작업을 가속화합니다.

Cryptographic accelerators는 고성능 컴퓨팅, 클라우드 서비스, 데이터 센터, 네트워크 보안 등의 분야에서 중요한 역할을 합니다. 이들은 데이터를 안전하게 보호하고, 보안 통신을 가능하게 하며, 보안 규정을 준수하는 데 도움이 됩니다.

#### Public/Private Key Pairs

퍼블릭/프라이빗 키 페어는 암호화와 디지털 서명에 사용되는 암호화 기법입니다. 

이는 두 개의 암호화 키를 사용하는데, 하나는 공개 키(public key)로 공개적으로 배포할 수 있으며, 다른 하나는 개인 키(private key)로 비밀리에 보관해야 합니다.

- 공개 키는 데이터를 암호화하거나 디지털 서명을 검증하는 데 사용됩니다.
  
- 개인 키는 데이터를 복호화하거나 디지털 서명을 생성하는 데 사용됩니다.

#### X.509 Certificates

X.509 인증서는 공개 키 인증서의 일종으로, 공개 키와 그 키의 소유자 정보를 포함하고 있습니다. 

이 정보는 신뢰할 수 있는 인증 기관(CA)에 의해 디지털로 서명되어, 키의 소유자가 주장하는 대로 신뢰할 수 있음을 보증합니다.

X.509 인증서는 SSL/TLS와 같은 보안 프로토콜에서 사용되며, 웹 사이트의 신원을 확인하고, 안전한 통신을 가능하게 하는데 중요한 역할을 합니다.

#### Perfect Forward Secrecy (PFS)

PFS는 암호화된 통신 세션의 키를 보호하는 보안 속성입니다. 

PFS를 사용하면, 하나의 키가 손상되더라도 과거의 통신 세션은 안전하게 보호됩니다. 

이는 각 세션에 대해 고유한 임시 키를 생성하고 사용한 후 폐기함으로써 달성됩니다. 

이렇게 하면, 공격자가 한 세션의 키를 획득하더라도 다른 세션의 키를 알아낼 수 없습니다.

#### Denial of Service (Dos) Attack

DoS 공격은 공격자가 서버의 리소스를 과도하게 소비하거나 서버를 과부하 상태로 만들어, 정상적인 서비스를 방해하는 공격입니다. DoS 공격에 대한 보호는 이러한 공격을 감지하고, 공격 트래픽을 차단하고, 서비스가 계속 제공될 수 있도록 하는 방법을 포함합니다. 이는 방화벽, 로드 밸런서, 공격 감지 시스템 등의 기술을 사용하여 달성할 수 있습니다.

#### Red Team Exercises 

Red Team 연습은 조직의 보안 체계를 테스트하고 강화하는데 사용되는 시뮬레이션된 공격 시나리오입니다.

'Red Team'은 보통 외부의 위협 요인을 시뮬레이션하여 조직의 보안 체계를 공격하는 역할을 합니다. 이는 실제 공격자가 사용할 수 있는 다양한 방법을 사용하여 시스템의 취약점을 찾고, 이를 이용하여 공격을 시도합니다.

이러한 연습은 조직이 실제 공격에 대비하고, 보안 체계의 취약점을 찾아내고, 이를 수정하여 보안을 강화하는 데 도움이 됩니다. Red Team 연습은 종종 'Blue Team'이라는 내부 보안 팀과 함께 진행되며, Blue Team은 Red Team의 공격을 탐지하고 대응하는 역할을 합니다.

#### U2F

U2F(Universal 2nd Factor)는 사용자가 온라인 서비스에 로그인할 때 두 번째 요소로 물리적 장치를 사용하는 표준화된 인증 프로토콜입니다.

U2F는 사용자 이름과 비밀번호와 같은 첫 번째 요소 외에도 물리적 보안 키를 사용하여 사용자를 인증합니다. 사용자는 이 키를 컴퓨터의 USB 포트에 연결하거나, NFC 또는 블루투스를 통해 연결하여 자신을 인증합니다.

U2F는 피싱 공격과 같은 보안 위협에 대한 보호를 제공하며, 사용자가 로그인 과정에서 추가적인 보안 단계를 수행하도록 요구함으로써 계정의 보안을 강화합니다.


