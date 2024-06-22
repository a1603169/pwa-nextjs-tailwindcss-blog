--- 
title: 'Certified Kubernetes Administration - 36'
subtitle: 'k8s Encryption of Secret Data'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서 비밀 데이터의 암호화

### 개요

- Kubernetes에서 비밀 데이터를 안전하게 저장하기 위해 암호화 필요.

- 비밀 데이터는 기본적으로 인코딩된 형식으로 저장되지만, 인코딩된 값은 쉽게 디코딩 가능.

- etcd에 저장된 데이터는 기본적으로 암호화되지 않음.

### 비밀 데이터 생성 및 조회

1. **비밀 데이터 생성**:
   ```sh
   kubectl create secret generic my-secret --from-literal=key1=supersecret
   ```

2. **비밀 데이터 조회**:
   ```sh
   kubectl get secrets
   kubectl describe secret my-secret
   kubectl get secret my-secret -o yaml
   ```

3. **비밀 데이터 디코딩**:
   ```sh
   echo 'c3VwZXJzZWNyZXQ=' | base64 --decode
   ```

### etcd에 저장된 데이터 조회

1. **etcdctl 설치**:
   ```sh
   sudo apt-get install etcd-client
   ```

2. **etcdctl를 사용하여 etcd에서 데이터 조회**:
   ```sh
   ETCDCTL_API=3 etcdctl get /registry/secrets/default/my-secret --prefix --keys-only --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key | hexdump -C
   ```

### 암호화 설정

1. **암호화 구성 파일 생성**:
   
   - `encryption-config.yaml` 파일 생성:
     ```yaml
     apiVersion: apiserver.config.k8s.io/v1
     kind: EncryptionConfiguration
     resources:       
       - resources:
         - secrets
         providers:
         - aescbc:
             keys:
             - name: key1
               secret: c2VjcmV0S2V5MTIzNDU2Nzg5MA==
         - identity: {}
     ```

2. **암호화 키 생성**:
   ```sh
   head -c 32 /dev/urandom | base64
   ```

3. **암호화 구성 파일을 kube-apiserver에 추가**:
   
   - `/etc/kubernetes/manifests/kube-apiserver.yaml` 파일 수정:
     ```yaml
     - --encryption-provider-config=/etc/kubernetes/enc/encryption-config.yaml
     ```

   
   - 볼륨 및 볼륨 마운트 추가:
     ```yaml
     volumeMounts:
     - mountPath: /etc/kubernetes/enc
       name: encryption-config
       readOnly: true
     
     volumes:
     - hostPath:
         path: /etc/kubernetes/enc
         type: DirectoryOrCreate
       name: encryption-config
     ```

4. **kube-apiserver 재시작 확인**:
   ```sh
   kubectl get pods -n kube-system
   ```

### 암호화 상태 확인

1. **새로운 비밀 데이터 생성**:
   ```sh
   kubectl create secret generic my-secret-2 --from-literal=key2=topsecret
   ```

2. **etcdctl로 새로운 비밀 데이터 조회**:
   ```sh
   ETCDCTL_API=3 etcdctl get /registry/secrets/default/my-secret-2 --prefix --keys-only --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key | hexdump -C
   ```

3. **기존 비밀 데이터 암호화**:
   ```sh
   kubectl get secrets -o json | kubectl replace -f -
   ```

4. **기존 비밀 데이터 암호화 상태 확인**:
   ```sh
   ETCDCTL_API=3 etcdctl get /registry/secrets/default/my-secret --prefix --keys-only --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt --key /etc/kubernetes/pki/etcd/server.key | hexdump -C
   ```

### 요약


- 비밀 데이터는 기본적으로 인코딩된 형식으로 저장되며, 쉽게 디코딩 가능.

- etcd에 저장된 데이터를 암호화하려면 암호화 구성 파일을 생성하고 kube-apiserver에 추가해야 함.

- 새로운 비밀 데이터는 자동으로 암호화되며, 기존 비밀 데이터는 업데이트를 통해 암호화 가능.

- 암호화된 비밀 데이터를 etcdctl 명령어를 사용하여 확인할 수 있음.