--- 
title: 'Certified Kubernetes Administration - 47'
subtitle: 'k8s / TLS Certificate'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터에서 TLS 인증서 설정

### 기본 개념


- **서버 인증서 (Server Certificates)**: 서버의 신뢰성을 보장하고 클라이언트와의 통신을 암호화.

- **루트 인증서 (Root Certificates)**: 인증 기관(CA)이 서버 인증서를 서명할 때 사용하는 인증서.

- **클라이언트 인증서 (Client Certificates)**: 클라이언트가 서버에 자신을 인증하는 데 사용.

### 인증서 명명 규칙


- **공개 키 인증서**: `.crt` 또는 `.pem` 확장자 (예: server.crt, server.pem)

- **개인 키**: `.key` 또는 `-key.pem` 확장자 (예: server.key, server-key.pem)

### Kubernetes 클러스터의 주요 구성 요소

1. **서버 구성 요소**:
   
   - **kube-apiserver**: 클러스터의 API 서버.
   
   - **etcd 서버**: 클러스터의 상태 정보를 저장.
   
   - **kubelet**: 각 노드에서 실행되며, 노드와 통신.

2. **클라이언트 구성 요소**:
   
   - **kubectl**: 관리자가 클러스터에 접근하는 도구.
   
   - **kube-scheduler**: 파드를 스케줄링하는 컴포넌트.
   
   - **kube-controller-manager**: 클러스터 상태를 관리하는 컴포넌트.
   
   - **kube-proxy**: 네트워크 프록시.

### 인증서 생성

1. **CA 인증서 생성**:
   
   - 개인 키 생성: `openssl genrsa -out ca.key 2048`
   
   - 인증서 서명 요청(CSR) 생성: `openssl req -new -key ca.key -subj "/CN=Kubernetes-CA" -out ca.csr`
   
   - 인증서 생성: `openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt`

2. **클라이언트 인증서 생성**:
   
   - 예: `kubectl`, `kube-scheduler`, `kube-controller-manager`, `kube-proxy`
   
   - 개인 키 생성: `openssl genrsa -out admin.key 2048`
   
   - CSR 생성: `openssl req -new -key admin.key -subj "/CN=admin/O=system:masters" -out admin.csr`
   
   - 인증서 생성: `openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out admin.crt`

3. **서버 인증서 생성**:
   
   - 예: `kube-apiserver`, `etcd`, `kubelet`
   
   - 개인 키 생성: `openssl genrsa -out apiserver.key 2048`
   
   - OpenSSL 구성 파일 생성:
     ```plaintext
     [req]
     req_extensions = v3_req
     distinguished_name = req_distinguished_name
     [req_distinguished_name]
     [v3_req]
     basicConstraints = CA:FALSE
     keyUsage = nonRepudiation, digitalSignature, keyEncipherment
     extendedKeyUsage = serverAuth
     subjectAltName = @alt_names
     [alt_names]
     DNS.1 = kubernetes
     DNS.2 = kubernetes.default
     DNS.3 = kubernetes.default.svc
     DNS.4 = kubernetes.default.svc.cluster.local
     IP.1 = 10.96.0.1
     ```
   
   - CSR 생성: `openssl req -new -key apiserver.key -subj "/CN=kube-apiserver" -out apiserver.csr -config openssl.cnf`
   
   - 인증서 생성: `openssl x509 -req -in apiserver.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out apiserver.crt -extensions v3_req -extfile openssl.cnf`

### 클러스터 설정


- 인증서와 키 파일을 관련 컴포넌트의 설정 파일에 지정.

- `kube-apiserver` 예시:
  ```plaintext
  --client-ca-file=/etc/kubernetes/pki/ca.crt
  --tls-cert-file=/etc/kubernetes/pki/apiserver.crt
  --tls-private-key-file=/etc/kubernetes/pki/apiserver.key
  --etcd-certfile=/etc/kubernetes/pki/apiserver-etcd-client.crt
  --etcd-keyfile=/etc/kubernetes/pki/apiserver-etcd-client.key
  ```

### 클러스터의 인증서 확인

1. **클러스터 구성 방식 파악**: 클러스터가 kubeadm을 사용하여 설정되었는지 여부 확인.

2. **API 서버 설정 파일 확인**: `/etc/kubernetes/manifests/kube-apiserver.yaml` 파일에서 인증서 파일 경로 파악.

3. **인증서 정보 조회**:
   
   - `openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout`
   
   - 중요 정보: 주체(Subject), 대체 이름(Alt Names), 유효 기간(Validity), 발급자(Issuer)

### 문제 해결


- **로그 확인**: `kubectl logs` 명령어를 사용하여 로그 조회.

- **도커 컨테이너 로그 확인**: `docker ps -a`와 `docker logs` 명령어 사용.
