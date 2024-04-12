---
title: 'GCP Cloud Engineer - 6'
subtitle: 'Introducting Google Cloud - Cloud Identity / Interacting with Google Cloud'
date: '2024-04-12'
tags: [Cloud, GCP]
---


### Cloud Identity


- ㅇ **Initial Setup Challenges**: New Google Cloud customers often start by logging into the `Google Cloud Console with a Gmail account and using Google Groups for collaboration`, which can be **`problematic`** if a team member leaves the organization since identities are not centrally managed.

- ㅇ **Cloud Identity Tool**: Organizations can use `Cloud Identity to define policies` and `manage users and groups` centrally through the `Google Admin Console`.

- ㅇ **Integration with Existing Systems**: Cloud Identity `allows admins to manage Google Cloud resources` with the `same usernames and passwords used in existing Active Directory or LDAP systems`.

- ㅇ **User Management**: When `someone leaves` the organization, `administrators can immediately disable their account` and `remove` them `from groups` using the **Google Admin Console.**

- ㅇ **Cloud Identity Editions**: Available in both a `free edition and a premium edition`, with the latter providing additional capabilities to `manage mobile devices(Premium)`.

- ㅇ **Google Workspace Integration**: If a customer is also a `Google Workspace customer`, these `functionalities are already integrated into the Google Admin Console`.

### 클라우드 아이덴티티

- ㅇ **초기 설정 문제점**: 새로운 구글 클라우드 고객은 종종 구글 클라우드 콘솔에 Gmail 계정으로 로그인하고 Google 그룹을 사용하여 협업을 시작하는데, 이 경우 팀원이 조직을 떠날 때 문제가 발생할 수 있습니다. 이는 신원 정보가 중앙에서 관리되지 않기 때문입니다.

- ㅇ **클라우드 아이덴티티 도구**: 조직은 클라우드 아이덴티티를 사용하여 구글 관리 콘솔을 통해 정책을 정의하고 사용자 및 그룹을 중앙에서 관리할 수 있습니다.

- ㅇ **기존 시스템과의 통합**: 클라우드 아이덴티티를 사용하면 관리자가 기존의 액티브 디렉토리 또는 LDAP 시스템에서 사용하는 것과 동일한 사용자 이름과 비밀번호를 사용하여 구글 클라우드 자원을 관리할 수 있습니다.

- ㅇ **사용자 관리**: 조직을 떠나는 사람이 있을 경우, 관리자는 구글 관리 콘솔을 사용하여 해당 계정을 즉시 비활성화하고 그룹에서 제거할 수 있습니다.

- ㅇ **클라우드 아이덴티티 에디션**: 무료 에디션과 프리미엄 에디션 두 가지 버전이 있으며, 후자는 모바일 기기 관리 기능을 추가로 제공합니다.

- ㅇ **구글 워크스페이스 통합**: 고객이 구글 워크스페이스 고객인 경우, 이러한 기능이 이미 구글 관리 콘솔에 통합되어 있습니다.

------------


### Interacting with Google Cloud

1. **Google Cloud Console**:
   
   - ㅇ Web-based graphical user interface (`GUI`).
   
   - ㅇ `Allows easy finding of resources`, checking their `health`, full `management control`, and setting `budgets`.
   
   - ㅇ `Provides a search facility to quickly locate resources` and `connect` to instances `via SSH` in the browser.

2. **Cloud SDK and Cloud Shell**:
   
   - ㅇ A set of `tools to manage resources` and applications on Google Cloud.
   
   - ㅇ Cloud Shell provides `command-line access` to cloud resources `directly` from a browser, is a `Debian-based virtual machine(5GB)`. (bq - `command line tool for BigQuery`)
   
   - ㅇ Cloud SDK’s `gcloud` command and `other utilities` are `always installed`, `up to date, and fully authenticated`.

3. **Access Through APIs**:
   
   - ㅇ Services that make up Google Cloud `offer APIs to allow control by code`.
   
   - ㅇ The Cloud Console `includes Google APIs Explorer`, a tool that `shows available APIs and their versions`.
   
   - ㅇ `Enables interactive testing of APIs`, even those `requiring user authentication`.
  
   - ㅇ `Google API Client Libraries `

4. **Google Cloud App**:
   
   - ㅇ Used to `start, stop, and use SSH to connect` to **Compute Engine instances**, `view logs` from each instance.
   
   - ㅇ `Allows stopping and starting` of **Cloud SQL instances**.
   
   - ㅇ `Administers applications` deployed on **App Engine** by `viewing errors, rolling back deployments, and changing traffic splitting`.
   
   - ㅇ `Provides up-to-date billing information` and billing `alerts` for projects going over budget.
   
   - ㅇ `Enables setting up customizable graphs` showing `key metrics` such as **CPU usage, network usage, requests per second, and server errors.**
   
   - ㅇ `Offers alerts` and `incident management`, available for download at cloud.google.com/app.


### 구글 클라우드와 상호작용하기

1. **구글 클라우드 콘솔**:
   
   - ㅇ 웹 기반의 그래픽 사용자 인터페이스(GUI).
   
   - ㅇ 자원 찾기, 건강 상태 확인, 전체 관리 제어 및 예산 설정 가능.
   
   - ㅇ 리소스를 빠르게 찾고 브라우저에서 SSH를 통해 인스턴스에 연결할 수 있는 검색 기능 제공.

2. **클라우드 SDK 및 클라우드 셸**:
   
   - ㅇ 구글 클라우드에서 자원과 애플리케이션을 관리할 수 있는 도구 세트.
   
   - ㅇ 클라우드 셸은 브라우저에서 직접 클라우드 자원에 대한 명령줄 접근을 제공하는 Debian 기반 가상 머신(5GB).
   
   - ㅇ 클라우드 SDK의 `gcloud` 명령과 다른 유틸리티는 항상 설치되어 있고, 최신 상태로 유지되며, 완전히 인증됩니다.(bq - CLI for BigQuery)

3. **API를 통한 접근**:
   
   - ㅇ 구글 클라우드를 구성하는 서비스는 코드로 제어할 수 있도록 API를 제공.
   
   - ㅇ 클라우드 콘솔에는 사용 가능한 API와 그 버전을 보여주는 Google APIs Explorer 도구 포함.
   
   - ㅇ 사용자 인증이 필요한 API도 대화형으로 시험해볼 수 있습니다.

   - ㅇ `Google API Client Libraries` + 여러 언어 지원
  
4. **구글 클라우드 앱**:
   
   - ㅇ 컴퓨트 엔진 인스턴스 시작, 중지 및 SSH 연결 지원.
   
   - ㅇ Cloud SQL 인스턴스의 시작과 중지 기능.
   
   - ㅇ 앱 엔진에 배포된 애플리케이션 관리(오류 보기, 배포 롤백, 트래픽 분할 변경 등).
   
   - ㅇ 프로젝트의 최신 결제 정보와 예산 초과 프로젝트에 대한 결제 알림 제공.
   
   - ㅇ CPU 사용량, 네트워크 사용량, 초당 요청 수, 서버 오류와 같은 주요 지표를 보여주는 사용자 정의 그래프 설정 가능.
   
   - ㅇ 알림 및 사고 관리 기능을 제공하며, cloud.google.com/app에서 다운로드 가능.



### 모르는 단어

Active Directory와 LDAP는 모두 디렉토리 서비스를 제공하는 프로토콜입니다. 이들은 사용자, 컴퓨터, 그룹 등의 정보를 저장하고, 이 정보를 네트워크에 있는 다른 애플리케이션과 공유하는 데 사용됩니다.

**Active Directory (AD)**

Active Directory는 마이크로소프트가 개발한 디렉토리 서비스입니다. AD는 사용자 인증 및 권한 부여, 정책 관리, 컴퓨터 등의 리소스 관리 등을 수행합니다. AD는 주로 Windows 환경에서 사용되며, LDAP 프로토콜을 지원합니다.

**LDAP (Lightweight Directory Access Protocol)**

LDAP는 디렉토리 정보를 조회하고 수정하는 데 사용되는 인터넷 프로토콜입니다. LDAP는 사용자 이름과 비밀번호, 이메일 주소, 전화번호 등의 정보를 저장하고, 이 정보를 애플리케이션에 제공합니다. LDAP는 다양한 플랫폼과 운영 체제에서 사용될 수 있습니다.

**Debian-based virtual machine**

Debian-based virtual machine은 Debian이라는 운영 체제를 기반으로 하는 가상 머신을 말합니다.

Debian은 안정성과 보안에 중점을 둔, 오픈 소스의 Linux 배포판입니다. 이는 다양한 애플리케이션과 서비스를 지원하며, 개발자와 시스템 관리자 사이에서 널리 사용됩니다.

가상 머신은 물리적 하드웨어 리소스를 에뮬레이션하여 독립적인 가상의 컴퓨터 시스템을 생성하는 소프트웨어 기술입니다. 이를 통해 하나의 물리적 머신에서 여러 개의 다른 운영 체제를 동시에 실행할 수 있습니다.

따라서, Debian-based virtual machine은 Debian 운영 체제를 실행하는 가상 머신을 의미합니다. 이는 클라우드 환경에서 자주 사용되며, 사용자는 필요에 따라 이러한 가상 머신을 생성하고 관리할 수 있습니다.