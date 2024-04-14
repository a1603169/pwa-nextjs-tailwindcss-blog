---
title: 'GCP Cloud Engineer - 20'
subtitle: 'Essential Google Cloud Infrastructure: Foundation : Using Google Cloud'
date: '2024-04-14'
tags: [Cloud, GCP]
---

여기서 부터는 실습이 많이 포함이 되었습니다.

### Using Google Cloud 

- ㅇ **Google Cloud Console**: A web-based graphical user interface`(GUI)` accessible at console.cloud.google.com where you can `manage and view details of Google Cloud resources`, such as virtual machines.

- ㅇ **Cloud Shell and Google Cloud CLI**: 

  - ㅁ **Cloud Shell provides:** 
  - A `browser-based, interactive shell environment` `directly accessible` from the Google Cloud Console. It includes a `temporary VM` with the `Google Cloud CLI pre-installed`.

  - ㅁ **The Google Cloud CLI**: 
  - This is accessed through the `gcloud` command-line tool, allows for `management of Google Cloud resources via terminal commands`.

- ㅇ **APIs and Client Libraries**:

  - ㅁ **APIs:** 
  - Google Cloud offers `APIs` that are `accessible through client libraries` optimized for supported languages like Node.js or Python, facilitating the creation and management of resources.

  - ㅁ **Admin APIs:** 
  - These are available for `building custom automated tools` and managing resources.

- ㅇ **Cloud Mobile App**:
  - ㅁ `Enables management` of Google Cloud services from `Android or iOS` devices.

  - ㅁ Features include `starting, stopping, and SSH into Compute Engine instances`, `viewing logs`, `setting up graphs` for `monitoring metrics`, and `receiving billing alerts`.

  - ㅁ `Available` for `download` on Google Play or the App Store.

### 구글 클라우드 사용하기


- ㅇ **구글 클라우드 콘솔**: console.cloud.google.com에서 접근 가능한 웹 기반 그래픽 사용자 인터페이스로, 가상 머신과 같은 구글 클라우드 리소스의 관리 및 세부 정보를 볼 수 있습니다.

- ㅇ **클라우드 셸 및 구글 클라우드 CLI**:
  - ㅁ 클라우드 셸은 구글 클라우드 콘솔에서 직접 접근할 수 있는 브라우저 기반의 대화형 셸 환경을 제공합니다. 여기에는 구글 클라우드 CLI가 사전 설치된 임시 VM이 포함됩니다.

  - ㅁ 구글 클라우드 CLI는 `gcloud` 커맨드라인 도구를 통해 접근되며, 터미널 명령을 통해 구글 클라우드 리소스를 관리할 수 있습니다.

- ㅇ **API 및 클라이언트 라이브러리**:
  - ㅁ 구글 클라우드는 Node.js나 Python과 같은 지원 언어에 최적화된 클라이언트 라이브러리를 통해 접근할 수 있는 API를 제공하여 리소스 생성 및 관리를 용이하게 합니다.

  - ㅁ 관리 API는 맞춤 자동화 도구를 구축하고 리소스를 관리하기 위해 사용할 수 있습니다.

- ㅇ **클라우드 모바일 앱**:
  - ㅁ 안드로이드 또는 iOS 기기에서 구글 클라우드 서비스를 관리할 수 있게 해줍니다.

  - ㅁ 컴퓨트 엔진 인스턴스 시작, 중지 및 SSH 접속, 로그 보기, CPU 사용량, 네트워크 사용량 등의 주요 지표를 보여주는 그래프 설정, 청구 알림 기능이 포함됩니다.

  - ㅁ Google Play 또는 App Store에서 다운로드 가능합니다.


----------------

### Virtual Private Cloud (VPC)

- ㅇ **Software-Defined Network**: GCP operates on a `global fiber(광섬유) infrastructure`, making it one of the world's `largest and fastest networks`.

- ㅇ **Virtual Private Cloud (VPC)**: Introduction to VPC as Google's `managed networking functionality` for cloud resources.

- ㅇ **Networking Components**: Overview of `projects, networks, subnetworks, IP addresses, routes, and firewall rules,` including aspects of `network pricing`.

- ㅇ **Network Structure Exploration**: Lab activities involving the `creation of various networks` and `exploration of their interrelationships`.

- ㅇ **Network Designs**: Examination of `common network configurations` within `Google Cloud`.

- ㅇ **Geographical Structure**: Discussion on `Google Cloud regions` and `points of presence (PoPs)`, highlighting the `extensive global network` and `its benefits` in `reducing costs` and `improving user experience`.

- ㅇ **Regions and Zones**: Specific `focus on the regions`, particularly US-Central1, which has four zones, and `how these regions are interconnected globally`.

### 가상 사설 클라우드 


- ㅇ **소프트웨어 정의 네트워크**: GCP는 전 세계적인 광섬유 인프라를 기반으로 운영되며, 세계에서 가장 크고 빠른 네트워크 중 하나입니다.

- ㅇ **가상 사설 클라우드(VPC)**: 클라우드 리소스를 위한 구글의 관리 네트워킹 기능인 VPC 소개.

- ㅇ **네트워킹 구성 요소**: 프로젝트, 네트워크, 서브네트워크, IP 주소, 라우트 및 방화벽 규칙에 대한 개요, 네트워크 가격 책정을 포함.

- ㅇ **네트워크 구조 탐색**: 다양한 네트워크 생성 및 그들 간의 관계 탐색을 포함하는 실험실 활동.

- ㅇ **네트워크 디자인**: Google 클라우드 내에서 일반적인 네트워크 구성 검토.

- ㅇ **지리적 구조**: Google 클라우드의 지역 및 접점(PoPs)에 대한 논의, 광범위한 글로벌 네트워크가 비용을 줄이고 사용자 경험을 향상시키는 방법 강조.

- ㅇ **지역 및 존**: 특히 네 개의 존을 가진 US-Central1을 포함하여 지역에 초점을 맞추고 이러한 지역이 전 세계적으로 어떻게 연결되어 있는지 설명합니다.