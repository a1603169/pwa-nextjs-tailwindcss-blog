---
title: 'Certified Kubernetes Administration - 12'
subtitle: 'k8s controller'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---

### Kubernetes 컨트롤러 소개

- **컨트롤러의 역할**: Kubernetes 객체를 모니터링하고 대응하는 프로세스

- **중점 컨트롤러**: 복제 컨트롤러(Replication Controller)

### 복제 컨트롤러 필요성

- **단일 Pod 문제**: 애플리케이션이 충돌하여 Pod가 실패할 경우, 사용자가 애플리케이션에 접근 불가

- **다중 인스턴스 필요**: 다수의 Pod를 실행하여 고가용성 제공

### 복제 컨트롤러 기능

- **여러 Pod 실행**: 동일 애플리케이션의 여러 인스턴스를 실행

- **자동 복구**: Pod 실패 시 자동으로 새로운 Pod 생성

- **로드 분산**: 여러 Pod를 통해 로드를 분산

### 복제 컨트롤러와 레플리카 셋

- **복제 컨트롤러**: 이전 기술로, 현재는 레플리카 셋으로 대체됨

- **레플리카 셋**: 새로운 권장 방식, 주요 차이점은 셀렉터 사용

### 복제 컨트롤러 정의 파일 생성

1. **API Version**: 'V1'

2. **Kind**: 'ReplicationController'

3. **Metadata**: 이름 및 레이블 지정

4. **Spec**: Pod 템플릿 및 복제 수 설정

### 레플리카 셋 정의 파일 생성

1. **API Version**: 'apps/V1'

2. **Kind**: 'ReplicaSet'

3. **Metadata**: 이름 및 레이블 지정

4. **Spec**: Pod 템플릿, 복제 수, 셀렉터 정의

### 주요 명령어

- **생성**: `kubectl create -f <file>`

- **리스트 보기**: `kubectl get replicationcontroller` 또는 `kubectl get replicaset`

- **삭제**: `kubectl delete replicaset <name>`

- **업데이트**: `kubectl replace -f <file>`

- **스케일링**: `kubectl scale --replicas=<number> -f <file>` 또는 `kubectl scale replicaset <name> --replicas=<number>`

### 기타 중요한 사항

- **Pod 라벨링**: 셀렉터를 통해 모니터링할 Pod 식별

- **자동 스케일링**: 로드 기반 스케일링 (고급 주제)