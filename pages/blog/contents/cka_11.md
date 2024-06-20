---
title: 'Certified Kubernetes Administration - 11'
subtitle: 'k8s YAML'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---

### Kubernetes 초급 강의 요약


- **강의 목표**: YAML 기반 설정 파일을 사용하여 Pod 생성하기

- **이전 강의**: 일반적인 YAML 파일 학습

### Kubernetes에서 YAML 파일의 사용

- **용도**: 객체 생성 (Pods, Replicas, Deployments, Services 등)

- **구조**: 네 가지 최상위 필드 포함 (API version, kind, metadata, spec)

### 네 가지 최상위 필드 설명
1. **API Version**
   
   - **설명**: 객체를 생성하기 위해 사용하는 Kubernetes API 버전
   
   - **예시**: Pod 생성 시 'V1' 사용, 기타 가능한 값들: 'apps/V1beta', 'extensions/V1beta' 등

2. **Kind**
   
   - **설명**: 생성하려는 객체의 유형
   
   - **예시**: Pod 생성 시 'Pod', 기타 가능한 값들: 'ReplicaSet', 'Deployment', 'Service'

3. **Metadata**
   
   - **설명**: 객체에 대한 데이터 (이름, 레이블 등)
   
   - **구조**: 딕셔너리 형태, 'metadata' 하위에 'name'과 'labels' 포함
   
   - **주의**: 들여쓰기 규칙 준수 필요, 'metadata'의 하위 필드는 들여쓰기가 동일해야 함

4. **Spec**
   
   - **설명**: 객체에 대한 추가 정보 제공
   
   - **예시**: Pod 생성 시 'containers' 배열 포함, 배열 항목은 딕셔너리 형태로 'name'과 'image' 포함
   
   - **이미지 값 예시**: 'nginx'

### Pod 생성 절차

1. **YAML 파일 생성**: 필수 필드와 값을 포함한 설정 파일 작성

2. **Pod 생성 명령**: `kubectl create -f pod-definition.yaml`

3. **Pod 확인 명령**: `kubectl get pods`

4. **Pod 세부 정보 확인 명령**: `kubectl describe pod`

#### 요약

- **최상위 필드**: API version, kind, metadata, spec

- **Pod 생성 및 확인**: `kubectl` 명령어 사용

### 예시

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
  labels:
    app: example
spec:
  containers:
  - name: example-container
    image: nginx
```

이 YAML 파일은 다음과 같은 내용을 포함하고 있습니다:

- apiVersion: Kubernetes API 버전을 지정합니다. Pod를 생성하기 위해 'v1'을 사용합니다.

- kind: 생성하려는 객체의 유형을 지정합니다. 여기서는 'Pod'를 사용합니다.

- metadata: 객체에 대한 메타데이터를 지정합니다. 'name'은 Pod의 이름을, 'labels'는 Pod에 적용할 레이블을 지정합니다.

- spec: Pod에 대한 세부 사항을 지정합니다. 'containers' 배열은 Pod에서 실행할 컨테이너를 지정합니다. 각 컨테이너는 'name'과 'image'를 포함해야 합니다. 'image'는 컨테이너에서 사용할 도커 이미지를 지정합니다. 여기서는 'nginx' 이미지를 사용합니다.