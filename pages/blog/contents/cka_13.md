---
title: 'Certified Kubernetes Administration - 13'
subtitle: 'k8s deployment'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---

### 배포 환경에서의 애플리케이션 배포

- **다수의 인스턴스 필요**: 웹 서버를 프로덕션 환경에 배포할 때 여러 인스턴스가 필요

- **무중단 업데이트**: Docker Registry에서 새로운 버전의 애플리케이션이 나오면 순차적으로 롤링 업데이트를 수행

- **롤백 기능**: 업데이트 중 오류 발생 시 최근 변경 사항을 롤백

- **변경 사항 일괄 적용**: 여러 변경 사항(예: 웹 서버 버전 업그레이드, 스케일링, 리소스 할당 변경 등)을 일괄 적용하기 위해 일시 중지 후 재개

### Kubernetes 배포 개요

- **Pods**: 애플리케이션의 단일 인스턴스를 배포

- **Replication Controllers / ReplicaSets**: 여러 Pods를 배포

- **Deployments**: 상위 계층의 Kubernetes 객체로서 롤링 업데이트, 롤백, 일시 중지 및 재개 기능 제공

### 배포 정의 파일 생성

- **API Version**: `apps/v1`

- **Kind**: `Deployment`

- **Metadata**: 이름 및 레이블 지정

- **Spec**: 템플릿, 복제 수, 셀렉터 포함
  
  - **템플릿**: Pod 정의 포함

### 배포 생성 절차

1. **정의 파일 작성**: `Deployment` 객체 정의 파일 작성

2. **배포 생성 명령어**: `kubectl create -f <file>`

3. **배포 확인 명령어**: `kubectl get deployment`

4. **ReplicaSet 확인 명령어**: `kubectl get replicaset`

5. **Pod 확인 명령어**: `kubectl get pods`

6. **전체 객체 확인 명령어**: `kubectl get all`

### 주요 기능

- **롤링 업데이트**: 무중단으로 새로운 버전의 애플리케이션 배포

- **롤백**: 최근 변경 사항 롤백

- **일시 중지 및 재개**: 여러 변경 사항을 일괄 적용하기 위해 일시 중지 후 재개
