--- 
title: 'Certified Kubernetes Administration - 48'
subtitle: 'k8s / TLS Certificate API'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터에서 TLS 인증서 관리 / 인증서 관리와 인증서 API

1. **클러스터 설정과 CA 서버**:
   
   - 클러스터 설정 중 CA 서버를 설정하고 여러 컴포넌트에 대한 인증서를 생성합니다.
   
   - CA 서버는 루트 인증서와 개인 키를 보관하고, 이를 통해 다른 인증서를 서명합니다.
   
   - 새로운 관리자가 팀에 합류하면, 개인 키를 생성하고 인증서 서명 요청(CSR)을 CA 서버에 보내 인증서를 발급받습니다.

2. **CA 서버 위치**:
   
   - CA 서버는 CA 루트 인증서와 개인 키 파일을 보관하는 서버입니다.
   
   - 이 서버에 접근할 수 있는 사람은 누구든지 Kubernetes 환경을 위한 인증서를 서명할 수 있습니다.
   
   - Kubernetes의 경우, CA 서버는 일반적으로 마스터 노드에 위치합니다.

3. **인증서 갱신과 관리**:
   
   - 인증서는 유효 기간이 있으며, 만료될 때마다 CSR을 생성하고 CA 서버에 서명 요청을 보내야 합니다.
   
   - Kubernetes는 인증서 API를 통해 인증서 요청을 자동화하고 관리할 수 있습니다.

4. **인증서 API 사용**:
   
   - 사용자: 개인 키 생성 후 인증서 서명 요청(CSR)을 생성하여 관리자에게 보냅니다.
   
   - 관리자: CSR을 받아 Kubernetes API 객체인 CertificateSigningRequest를 생성합니다.
   
   - 요청 승인: `kubectl get csr`로 요청을 확인하고, `kubectl certificate approve` 명령어로 요청을 승인합니다.
   
   - 인증서 발급: Kubernetes는 CA 키 쌍을 사용하여 인증서를 서명하고 사용자에게 인증서를 전달합니다.

5. **인증서 API 구현**:
   
   - 사용자: 개인 키 생성 (`openssl genrsa -out user.key 2048`)
   
   - CSR 생성 (`openssl req -new -key user.key -subj "/CN=user" -out user.csr`)
   
   - 관리자: CSR을 Base64로 인코딩하여 CertificateSigningRequest 객체 생성 (`openssl base64 -in user.csr -out user.csr.base64`)
   
   - 요청 확인 및 승인 (`kubectl get csr` 및 `kubectl certificate approve csr-name`)
   
   - 발급된 인증서 확인 및 디코딩 (`kubectl get csr csr-name -o yaml` 및 `openssl base64 -d -in encoded-cert -out user.crt`)

6. **컨트롤러 매니저의 역할**:
   
   - Kubernetes 컨트롤러 매니저는 인증서 관련 작업을 담당합니다.
   
   - 컨트롤러 매니저는 CSR-Approving, CSR-Signing과 같은 특정 작업을 수행하는 컨트롤러를 포함합니다.
   
   - 컨트롤러 매니저는 CA 루트 인증서와 개인 키를 사용하여 인증서를 서명합니다.
