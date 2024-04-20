---
title: 'GCP Cloud Engineer - 72'
subtitle: 'Reliable Cloud Infrastructure: Desgin and Process - Continuous Integration(CI) Automation === DevOps Automation'
date: '2024-04-20'
tags: [Cloud, GCP]
---

### CI Pipeline

**지속적 통합 파이프라인과 Google Cloud의 활용**

- **지속적 통합 파이프라인**
  
  - ㅁ 코드를 저장소로 가져오고, 모든 단위 테스트를 실행
  
  - ㅁ 테스트 통과 후, 배포 패키지가 Docker 이미지로 빌드
  
  - ㅁ Docker 이미지는 `Container Registry`에 저장 후 배포 가능
  
  - ㅁ 추가 단계로 코드 린트, 정량적 분석(SonarQube 사용), 통합 테스트, 테스트 보고서 생성, 이미지 스캔 포함

- **Google Cloud의 구성요소**
  
  - ㅁ `Cloud Source Repositories`: 비공개 Git 저장소 호스팅
  
  - ㅁ `Cloud Build`: Google Cloud 인프라에서 빌드 실행, 소스 코드를 Cloud Storage, Cloud Source Repositories, GitHub, Bitbucket에서 가져와 빌드
  
  - ㅁ `Cloud Build 트리거`: 소스 코드 변경 시 자동 빌드 시작

- **Container Registry의 기능**
  
  - ㅁ Docker 이미지나 배포 패키지 관리, 취약점 분석 수행
  
  - ㅁ 세분화된 액세스 제어를 통한 액세스 주체 및 대상 결정

- **Google Cloud의 도구**
  
  - ㅁ `Cloud IAM`: 저장소 관리 및 접근 권한 부여
  
  - ㅁ `Pub/Sub`: 저장소 이벤트에 대한 메시지 게시 설정
  
  - ㅁ `Cloud Debugger` 및 `Logging`: 프로덕션에서 디버깅 및 로깅
  
  - ㅁ 연결된 저장소: GitHub 또는 Bitbucket 저장소를 Cloud Source Repositories와 동기화

- **Cloud Build의 활용**
  
  - ㅁ 모든 언어로 소프트웨어 빠르게 빌드
  
  - ㅁ `gcloud builds submit`: 빌드 제출 및 원격 실행, 이미지 생성 시 `--tag` 사용
  
  - ㅁ 빌드 트리거: 코드 푸시 시 저장소 감시 및 컨테이너 빌드, Maven, Docker 지원

- **Container Registry와 Cloud Build**
  
  - ㅁ `Container Registry`: Docker 저장소 호스팅, 빌드된 이미지 자동 저장
  
  - ㅁ 이미지 태그 지정 및 Docker 명령어를 사용한 이미지 수출 및 가져오기
  
  - ㅁ `Binary Authorization`: 신뢰할 수 있는 컨테이너만 GKE에 배포 보장, Kritis 사양 기반

### Infrastructure as Code

**코드형 인프라(IaC)와 Terraform의 활용**

- **코드형 인프라의 필요성**
  
  - ㅁ 클라우드 컴퓨팅으로의 전환은 전통적인 온프레미스 방식과 다른 사고방식 요구
  
  - ㅁ 클라우드는 리소스를 대여하여 사용하며 필요하지 않을 때 즉시 종료 가능
  
  - ㅁ 다수의 소형 머신을 사용하고 장애를 예상하여 설계하는 수평 확장을 지향

- **코드형 인프라의 이점**
  
  - ㅁ 프로비저닝, 구성, 배포 작업을 자동화하여 위험 최소화 및 사용자 실수 감소
  
  - ㅁ 반복 가능한 배포와 확장성, 속도 지원
  
  - ㅁ 스크립트나 Terraform 같은 선언적 도구를 사용하여 자동화 달성

- **Terraform의 기능**
  
  - ㅁ 인프라의 빠른 프로비저닝 및 삭제 지원
  
  - ㅁ 지속적 통합 파이프라인에 통합되어 지속적 배포를 매끄럽게 지원
  
  - ㅁ 인프라 프로비저닝 자동화를 통해 주문형으로 프로비저닝 가능

- **Terraform의 구현**
  
  - ㅁ Google Cloud 및 다른 IaC 도구(Chef, Puppet, Ansible, Packer)를 지원
  
  - ㅁ Terraform은 Google Cloud 리소스를 프로비저닝할 수 있는 오픈소스 도구
  
  - ㅁ 선언적 구성 파일을 사용하여 가상 머신, 컨테이너, 스토리지, 네트워킹 등을 프로비저닝
  
  - ㅁ HashiCorp 구성 언어(HCL)로 블록, 인수, 표현식을 사용하여 리소스 기술

- **Terraform의 선언적 접근**
  
  - ㅁ 사용자는 애플리케이션에 필요한 리소스를 선언적 형식으로 지정
  
  - ㅁ 구성을 배포하면 Terraform이 필요한 조치를 취함
  
  - ㅁ 배포를 여러 번 반복해도 동일한 결과를 얻을 수 있으며, 배포 전체를 쉽게 삭제 가능

- **Terraform 구성의 구성**
  
  - ㅁ 구성은 템플릿을 사용하여 모듈화 가능, 리소스를 재사용 가능한 구성요소로 추상화
  
  - ㅁ Terraform 언어의 구문은 객체를 나타내며, 블록은 0개 이상의 라벨을 가질 수 있음
  
  - ㅁ 블록은 인수와 중첩된 블록을 선언할 수 있는 본문을 포함
