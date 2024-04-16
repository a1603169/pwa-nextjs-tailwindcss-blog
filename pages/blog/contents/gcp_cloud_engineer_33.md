---
title: 'GCP Cloud Engineer - 33'
subtitle: 'Essential Google Cloud Infrastructure: Core Services (한국어) - Identity and Access Management - Overview'
date: '2024-04-16'
tags: [Cloud, GCP]
---

### IAM - Overview

- **Identity and Access Management (IAM)**: `누가` `어떤 리소스`에서 `무엇을` 할 수 있는지를 구분하는 방식
  
  - ㅁ **'누가'**: 사용자, 그룹, 또는 애플리케이션
  
  - ㅁ **'무엇'**: 특정 권한 또는 작업, Google Cloud 서비스의 리소스

- 예를 들면, `Compute 뷰어 권한 또는 역할`을 부여하여 `Compute Engine 리소스의 읽기 전용 액세스 권한`을 줄 수 있음

- `Cloud IAM`은 다양한 요소로 구성되어 있으며, 각 요소는 Cloud IAM `정책과` Cloud IAM `리소스 계층 구조`에서 확인 가능

- `Google Cloud 리소스`는 `계층 구조`로 되어 있음

<img class='blogImage' src='/blog/iam_res_hierachy.png'>
  
  - ㅁ **조직**: 회사를 나타내며, `조직 아래의 모든 리소스에 부여된 역할`이 상속됨
  
  - ㅁ **폴더**: 조직의 하위 요소로, `폴더에 포함된 모든 리소스에 상속된 역할`이 부여됨
  
  - ㅁ **프로젝트**: 회사 내 신뢰 경계를 나타내며, `동일 프로젝트 내의 서비스는 같은 기본 신뢰 수준`을 가짐 



