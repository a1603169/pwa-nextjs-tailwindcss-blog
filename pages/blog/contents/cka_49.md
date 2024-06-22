--- 
title: 'Certified Kubernetes Administration - 49'
subtitle: 'k8s / KubeConfig'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### kubeconfig 파일을 사용한 Kubernetes 클러스터 관리

1. **kubeconfig 파일이란?**:
   
   - kubeconfig 파일은 Kubernetes 클러스터에 접근하기 위한 설정 정보를 저장하는 파일입니다.
   
   - 이 파일에는 클러스터, 사용자, 컨텍스트 정보가 포함되어 있습니다.
   
   - 기본적으로 kubectl 명령어는 사용자의 홈 디렉토리 아래 `.kube/config` 파일을 사용합니다.

2. **kubeconfig 파일의 구조**:
   
   - **클러스터 섹션**: 접근해야 하는 여러 클러스터의 정보를 저장합니다.
   
   - **사용자 섹션**: 클러스터에 접근할 때 사용하는 사용자 계정 정보를 저장합니다.
   
   - **컨텍스트 섹션**: 클러스터와 사용자를 매핑하여 어느 클러스터에 어떤 사용자가 접근할지 정의합니다.

3. **kubeconfig 파일의 예제**:
   
   - kubeconfig 파일은 YAML 형식으로 작성됩니다.
   
   - 세 개의 주요 섹션은 `clusters`, `users`, `contexts`로 나뉩니다.
   
   - 각 섹션은 배열 형식으로 여러 클러스터, 사용자, 컨텍스트 정보를 포함할 수 있습니다.

   ```yaml
   apiVersion: v1
   kind: Config
   clusters:
   - name: my-kube-playground
     cluster:
       server: https://my-kube-playground:6443
       certificate-authority: /path/to/ca.crt
   users:
   - name: my-kube-admin
     user:
       client-certificate: /path/to/admin.crt
       client-key: /path/to/admin.key
   contexts:
   - name: my-kube-admin@my-kube-playground
     context:
       cluster: my-kube-playground
       user: my-kube-admin
   current-context: my-kube-admin@my-kube-playground
   ```

4. **kubectl 명령어로 kubeconfig 관리**:
   
   - 현재 사용 중인 kubeconfig 파일을 확인하려면 `kubectl config view` 명령어를 사용합니다.
   
   - 다른 kubeconfig 파일을 사용하려면 `--kubeconfig` 옵션을 사용합니다.
   
   - 현재 컨텍스트를 변경하려면 `kubectl config use-context` 명령어를 사용합니다.

5. **네임스페이스 설정**:
   
   - 컨텍스트 섹션에 `namespace` 필드를 추가하여 특정 네임스페이스를 기본값으로 설정할 수 있습니다.

   ```yaml
   contexts:
   - name: dev-user@google
     context:
       cluster: google-cluster
       user: dev-user
       namespace: development
   ```

6. **인증서 데이터 지정 방법**:
   
   - 인증서 경로 대신 Base64로 인코딩된 인증서 데이터를 직접 지정할 수 있습니다.

   ```yaml
   users:   
   - name: my-kube-admin
     user:
       client-certificate-data: <base64-encoded-cert>
       client-key-data: <base64-encoded-key>
   ```
