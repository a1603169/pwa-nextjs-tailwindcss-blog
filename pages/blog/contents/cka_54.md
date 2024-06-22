--- 
title: 'Certified Kubernetes Administration - 54'
subtitle: 'k8s / Service Account'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 서비스 어카운트(Service Accounts) 정리

1. **서비스 어카운트 개요**:
   
   - **유저 어카운트**: 사람이 사용하는 계정.

   - **서비스 어카운트**: 머신이 사용하는 계정.

   - 유저 어카운트는 클러스터에 대한 관리 작업을 수행하는 관리자나 개발자가 사용.

   - 서비스 어카운트는 Prometheus와 같은 모니터링 애플리케이션이나 Jenkins와 같은 자동화 빌드 툴이 사용.

2. **서비스 어카운트 생성 및 사용**:

   - 서비스 어카운트 생성 명령어:
     ```bash
     kubectl create serviceaccount dashboard-sa
     ```

   - 서비스 어카운트 목록 조회:
     ```bash
     kubectl get serviceaccounts
     ```

   - 생성된 서비스 어카운트와 연관된 토큰은 시크릿 객체로 저장됩니다.

   - 시크릿 객체 조회:
     ```bash
     kubectl describe secret <secret-name>
     ```

   - 외부 애플리케이션이 Kubernetes API에 접근할 때, 이 토큰을 인증 토큰으로 사용합니다.

3. **Kubernetes 내에서 서비스 어카운트 사용**:

   - 기본(default) 서비스 어카운트는 모든 네임스페이스에 자동으로 생성됩니다.

   - Pod가 생성될 때, 기본 서비스 어카운트의 토큰이 자동으로 마운트됩니다.

   - 예시 Pod 정의 파일에 서비스 어카운트 필드를 추가하여 특정 서비스 어카운트를 사용할 수 있습니다:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: my-pod
     spec:
       serviceAccountName: dashboard-sa
       containers:
       - name: my-container
         image: my-image
     ```

4. **Kubernetes 버전 1.22 및 1.24의 변경 사항**:

   - **버전 1.22**:

     - 토큰 요청 API 도입: 이 API는 더 안전하고 확장 가능한 토큰을 제공합니다.

     - Pod가 생성될 때, 서비스 어카운트 토큰 대신 수명 정의된 토큰이 생성되어 projected volume으로 마운트됩니다.

   - **버전 1.24**:

     - 서비스 어카운트를 생성할 때 자동으로 토큰이 생성되지 않습니다.

     - 토큰을 생성하려면 다음 명령어를 사용해야 합니다:
       ```bash
       kubectl create token <service-account-name>
       ```

5. **서비스 어카운트 토큰의 만료**:

   - 새로운 토큰은 만료 시간이 정의됩니다.

   - 예시:
     ```bash
     kubectl create token <service-account-name>
     ```
     - 이 명령어는 기본적으로 1시간 만료 시간을 가집니다. 만료 시간을 조정하려면 추가 옵션을 사용합니다.

6. **토큰 요청 API 사용 권장**:

   - 토큰 요청 API는 더 안전하고 유효 기간이 있는 토큰을 제공합니다.

   - 오래된 방식의 비 만료 토큰은 권장되지 않습니다.

7. **서비스 어카운트 토큰의 시크릿 객체로의 생성**:

   - 비 만료 토큰을 생성하려면 다음과 같은 시크릿 객체를 생성합니다:
     ```yaml
     apiVersion: v1
     kind: Secret
     metadata:
       name: my-secret
       annotations:
         kubernetes.io/service-account.name: <service-account-name>
     type: kubernetes.io/service-account-token
     ```

   - 이 방법은 가능한 피하고, 토큰 요청 API를 사용하는 것이 좋습니다.
