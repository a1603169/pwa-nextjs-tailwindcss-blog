--- 
title: 'Certified Kubernetes Administration - 35'
subtitle: 'k8s Secrets'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서 Secrets 사용


- **개요**:
  
  - Secrets는 비밀번호나 키와 같은 민감한 정보를 저장하는 데 사용.
  
  - ConfigMap과 유사하지만, 인코딩된 형식으로 저장됨.


- **Secrets 생성 및 사용 단계**:
  1. **Secrets 생성**
  2. **Pod에 Secrets 주입**

### Secrets 생성 방법

1. **명령형 방법**:
   
   - `kubectl create secret generic` 명령어를 사용하여 직접 키-값 쌍 지정.
   
   - 예:
     ```sh
     kubectl create secret generic app-secret --from-literal=DB_HOST=MySQL
     ```

2. **선언형 방법**:
   
   - Secret 정의 파일 작성.
   
   - 예:
     ```yaml
     apiVersion: v1
     kind: Secret
     metadata:
       name: app-secret
     data:
       DB_HOST: bXlzcWw=  # base64로 인코딩된 값
     ```
   
   - 인코딩된 값 생성 방법:
     ```sh
     echo -n 'MySQL' | base64
     ```

### Secrets 보기 및 디코딩


- **Secrets 목록 보기**:
  ```sh
  kubectl get secrets
  ```


- **Secrets 상세 정보 보기**:
  ```sh
  kubectl describe secret <secret 이름>
  ```


- **Secrets 값 보기**:
  ```sh
  kubectl get secret <secret 이름> -o yaml
  ```


- **Secrets 디코딩**:
  ```sh
  echo 'bXlzcWw=' | base64 --decode
  ```

### Pod에 Secrets 주입


- **환경 변수로 주입**:
  
  - Pod 정의 파일의 `envFrom` 속성을 사용.
  
  - 예:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    spec:
      containers:      
      - name: my-container
        image: my-image
        envFrom:
        - secretRef:
            name: app-secret
    ```


- **볼륨으로 주입**:
  
  - Secret을 파일로 마운트하여 주입.
  
  - 예:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    spec:
      containers:
      - name: my-container
        image: my-image
        volumeMounts:
        - name: secret-volume
          mountPath: /etc/secrets
          readOnly: true
      volumes:
      - name: secret-volume
        secret:
          secretName: app-secret
    ```

### 주의사항 및 보안 고려사항

1. **Secrets는 인코딩된 상태**:
   
   - 인코딩된 형식일 뿐 암호화된 것은 아님.
   
   - 인코딩된 값을 디코딩하여 민감한 정보를 얻을 수 있음.
   
   - Secrets 정의 파일을 GitHub와 같은 저장소에 푸시하지 않도록 주의.

2. **ETCD에서 암호화되지 않음**:
   
   - 기본적으로 ETCD에 저장된 데이터는 암호화되지 않음.
   
   - 암호화를 활성화하려면 `encryption-at-rest` 설정 고려.
   
   - 예:
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
               secret: <base64-encoded-secret>
     ```

3. **RBAC 설정**:
   
   - 동일한 네임스페이스 내에서 Pod이나 Deployment를 생성할 수 있는 권한이 있는 사용자는 Secrets에 접근할 수 있음.
   
   - RBAC를 설정하여 접근을 제한.

4. **서드파티 Secret 제공자 사용**:
   
   - AWS, Azure, GCP, Vault와 같은 외부 Secret 제공자 사용 고려.
   
   - 외부 제공자는 보안 관리를 더 효율적으로 처리.

### 요약


- Secrets는 Kubernetes에서 비밀번호와 같은 민감한 정보를 인코딩된 형식으로 저장하고 관리하는 데 사용됨.

- 명령형 방법과 선언형 방법을 통해 Secrets를 생성할 수 있음.

- Pod 정의 파일에서 `envFrom`과 `volumes` 속성을 사용하여 Secrets를 주입할 수 있음.

- 보안 고려사항을 준수하여 Secrets를 안전하게 관리하는 것이 중요함.