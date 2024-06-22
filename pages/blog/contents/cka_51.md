--- 
title: 'Certified Kubernetes Administration - 51'
subtitle: 'k8s / Authorization'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes Authorization

### 1. **Introduction to Authorization**:
   
   - **Authentication**: 사용자와 기계가 클러스터에 접근할 수 있는 방법을 배웠습니다.
   
   - **Authorization**: 인증 후 사용자나 기계가 할 수 있는 작업을 정의합니다.

### 2. **Why Authorization is Necessary**:
   
   - **관리자 권한**: 관리자는 클러스터의 모든 작업을 수행할 수 있습니다.
   
   - **다른 사용자**: 개발자, 테스터, 외부 애플리케이션 등도 접근할 수 있도록 사용자 계정을 만듭니다.
   
   - **다양한 권한 수준**: 모든 사용자에게 동일한 수준의 접근 권한을 부여하지 않습니다.
     
     - 개발자는 클러스터 구성 수정 권한이 없습니다.
     
     - 외부 애플리케이션은 필요한 최소 수준의 접근 권한만 가집니다.
   
   - **네임스페이스 분리**: 다른 팀이나 조직 간에 클러스터를 공유할 때, 네임스페이스 단위로 접근 권한을 제한합니다.

### 3. **Authorization Mechanisms**:
   
   - **Node Authorization**:
     
     - kubelet은 클러스터 내에서 관리 작업을 수행하기 위해 API 서버에 접근합니다.
     
     - `system:node` 그룹에 속한 사용자 요청을 처리합니다.
   
   - **Attribute-Based Authorization**:
     
     - 사용자나 사용자 그룹과 권한 집합을 연결합니다.
     
     - 정책 파일을 생성하여 API 서버에 전달합니다.
     
     - 정책 변경 시 파일을 수동으로 수정하고 API 서버를 재시작해야 합니다.
   
   - **Role-Based Access Control (RBAC)**:
     
     - 직접 사용자와 권한을 연결하는 대신 역할을 정의합니다.
     
     - 역할에 필요한 권한을 설정하고, 사용자를 역할에 연결합니다.
     
     - 사용자 권한 변경 시 역할을 수정하여 일괄적으로 반영할 수 있습니다.
   
   - **Webhook Authorization**:
     
     - 외부 정책 에이전트와 연동하여 승인 또는 거부를 결정합니다.
     
     - Kubernetes가 외부 API 호출을 통해 사용자의 접근 권한을 확인합니다.

### 4. **Always Allow and Always Deny**:
   
   - **Always Allow**: 모든 요청을 허용합니다.
   
   - **Always Deny**: 모든 요청을 거부합니다.

### 5. **Configuring Authorization Modes**:
   
   - **Authorization Mode Option**: Kube API Server에서 설정합니다.
   
   - **기본 모드**: Always Allow로 설정됩니다.
   
   - **다중 모드**: 콤마로 구분된 리스트로 여러 모드를 지정할 수 있습니다.
     
     - 예: `node, rbac, webhook`
   
   - **체인 방식**: 요청이 처음부터 차례로 각 모드에서 승인 또는 거부됩니다.
     
     - 첫 번째 모드에서 거부되면 다음 모드로 넘어갑니다.
     
     - 승인되면 더 이상의 검사는 수행되지 않습니다.
