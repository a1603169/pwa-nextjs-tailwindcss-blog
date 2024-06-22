--- 
title: 'Certified Kubernetes Administration - 45'
subtitle: 'k8s Authentication'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터의 인증

### 사용자 유형

1. **인간 사용자**:
   
   - 관리자: 클러스터 관리 작업 수행.
   
   - 개발자: 애플리케이션 테스트 및 배포.
2. **로봇 사용자**:
   
   - 프로세스, 서비스, 애플리케이션 등 클러스터 접근이 필요한 기타 사용 사례.

### 사용자 접근 관리

- **엔드 유저**: 애플리케이션 내부에서 자체적으로 관리됨.

- **관리 사용자**: Kubernetes 클러스터 관리 작업을 위해 클러스터 접근 필요.

### Kubernetes에서의 사용자 관리

- Kubernetes는 네이티브 사용자 계정을 관리하지 않음.

- 외부 소스(파일, 인증서, LDAP 등)에 의존.

- 사용자 목록을 생성하거나 조회하는 기능이 없음.

- 서비스 계정은 Kubernetes가 관리할 수 있음.

### 인증 메커니즘

1. **정적 비밀번호 파일**:
   
   - CSV 파일에 사용자 정보(비밀번호, 사용자 이름, 사용자 ID) 포함.
   
   - Kube API 서버에 옵션으로 파일 이름 전달.
   
   - Kube API 서버 재시작 필요.
   
   - Kubeadm 도구를 사용한 클러스터 설정 시, Kube API 서버 POD 정의 파일 수정.
   
   - `curl` 명령어로 API 서버 접근 시 사용자 이름과 비밀번호를 지정.

2. **정적 토큰 파일**:
   
   - CSV 파일에 토큰 정보 포함.
   
   - 토큰 파일을 `tokenauth file` 옵션으로 전달.
   
   - `curl` 명령어로 API 서버 접근 시 토큰을 `Bearer token`으로 지정.

### 인증 예제

1. **정적 비밀번호 파일 사용 예제**:
   ```plaintext
   password,username,userID,group
   pass123,admin,1,admins
   pass456,dev,2,developers
   ```
   
   - `curl` 명령어:
     ```bash
     curl -u admin:pass123 https://<kube-apiserver>/api/v1/nodes
     ```

2. **정적 토큰 파일 사용 예제**:
   ```plaintext
   token123,admin,1,admins
   token456,dev,2,developers
   ```
   
   - `curl` 명령어:
     ```bash
     curl -H "Authorization: Bearer token123" https://<kube-apiserver>/api/v1/nodes
     ```

### 주의사항

- 정적 비밀번호 및 토큰 파일은 보안이 취약하므로 권장되지 않음.

- kubeadm 설정에서 인증 파일을 전달할 때 볼륨 마운트를 고려해야 함.

- 새로운 사용자에 대한 권한 설정 필요.

### 향후 학습 내용

- 인증서 기반 인증

- Kubernetes 클러스터 내부 컴포넌트 간의 인증 방법

### 요약

- 클러스터 접근을 관리하는 다양한 인증 메커니즘이 존재함.

- 정적 비밀번호 및 토큰 파일은 이해를 돕기 위한 기본 예제로, 실제 사용에는 부적합.