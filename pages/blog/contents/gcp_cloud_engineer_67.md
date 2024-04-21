---
title: 'GCP Cloud Engineer - 67'
subtitle: 'Essential Cloud Infrastructure: Sacling and Automation - Migrate for Anthos(Intro / Architecture / Path / Installation)'
date: '2024-04-19'
tags: [Cloud, GCP, Kubernetes]
---

### **`Migrate for Anthos` 개요**

- **마이그레이션 아키텍처 요구사항**
  
  - ㅁ **`Migrate for Compute Engine`**: `온 프레미스`나 다른 `클라우드 제공자`에서 `Google Cloud`로 데이터를 스트리밍하거나 이전할 파이프라인을 생성
  
  - ㅁ **`GKE` 처리(Processing) 클러스터 설치**: 여러 `쿠버네티스` 자원으로 구성되며 `Migrate for Anthos` 설치
  
  - ㅁ **자산 생성**: `도커파일` 및 `쿠버네티스` 구성을 포함한 배포 아티팩트 생성, `Cloud Storage`에 저장
  
  - ㅁ **배포**: 생성된 구성을 적용하여 목표 클러스터에 애플리케이션 배포


- **마이그레이션 실행 과정**
  
  - ㅁ **처리 클러스터 생성**
  
  - ㅁ **`Migrate for Anthos` 컴포넌트 설치**
  
  - ㅁ **마이그레이션 소스 추가**: `VMware`, `AWS`, `Azure`, `Google Cloud`에서 이전 가능
  
  - ㅁ **마이그레이션 계획 생성 및 수정**: `YAML` 파일을 통해 커스텀 가능
  
  - ㅁ **아티팩트 생성**: 애플리케이션의 컨테이너 이미지와 배포에 필요한 `YAML` 파일 생성
  
  - ㅁ **테스트**: 생성된 컨테이너 이미지 및 배포 테스트
  
  - ㅁ **배포 실행**: `kubectl apply` 명령어로 목표 클러스터에 애플리케이션 배포


- **도구 설치 및 마이그레이션 계획 예시**
  
  - ㅁ **처리 클러스터 설정**: `GKE admin` 권한 필요, 방화벽 규칙 설정
  
  - ㅁ **`migctl` 명령어로 필요한 쿠버네티스 자원 설치**
  
  - ㅁ **마이그레이션 계획 생성**: `migctl migration create` 명령어로 마이그레이션 리소스 정의
  
  - ㅁ **아티팩트 생성**: `migctl migration generate-artifacts` 명령어로 VM 파일을 컨테이너 이미지 레지스트리로 복사 및 구성 `YAML` 파일 생성
  
  - ㅁ **배포 정의 수정 및 적용**: 필요에 따라 `YAML` 파일 수정 후 `kubectl apply` 명령어로 적용
