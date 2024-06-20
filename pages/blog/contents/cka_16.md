---
title: 'Certified Kubernetes Administration - 16'
subtitle: 'k8s namespaces'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 네임스페이스(Namespace) 개념 설명

### 비유를 통한 이해

- **두 명의 마크**: 마크 스미스와 마크 윌리엄스를 구별하기 위해 성을 사용.

- **각각의 집**: 스미스와 윌리엄스의 집.

- **내부 호칭**: 집 내부에서는 이름만 사용.

- **외부 호칭**: 외부에서는 풀네임 사용.

- **규칙과 자원**: 각 집은 고유한 규칙과 자원을 가짐.

### Kubernetes와의 비교

- **네임스페이스**: 집과 유사한 개념으로, Kubernetes 클러스터 내에서 리소스를 구분하고 관리.

- **디폴트 네임스페이스**: 클러스터가 처음 설정될 때 자동으로 생성.

- **kube-system 네임스페이스**: 네트워킹 솔루션, DNS 서비스 등 내부 용도로 사용.

- **kube-public 네임스페이스**: 모든 사용자에게 공개되어야 하는 리소스를 위한 공간.

### 네임스페이스의 필요성

- **소규모 환경**: 기본 네임스페이스를 사용해도 무방.

- **대규모 환경**: 개발(dev) 및 운영(production) 환경을 분리하여 리소스를 관리.

- **정책과 할당**: 각 네임스페이스에 고유한 정책과 자원 할당.

### 네임스페이스 내에서 리소스 접근

- **내부 접근**: 같은 네임스페이스 내에서는 이름만으로 접근 가능.

- **외부 접근**: 다른 네임스페이스의 리소스 접근 시 `servicename.namespace.svc.cluster.local` 형식을 사용.

### 네임스페이스 관련 명령어


- **기본 명령어**:
  ```bash
  kubectl get pods
  ```


- **특정 네임스페이스의 파드 목록 보기**:
  ```bash
  kubectl get pods -n kube-system
  ```


- **파드 생성**:
  ```bash
  kubectl apply -f pod-definition.yaml
  ```


- **네임스페이스 지정하여 파드 생성**:
  ```bash
  kubectl apply -f pod-definition.yaml -n dev
  ```


- **네임스페이스 정의 파일 예제**:
  ```yaml
  apiVersion: v1
  kind: Namespace
  metadata:
    name: dev
  ```


- **네임스페이스 생성 명령어**:
  ```bash
  kubectl create -f namespace.yaml
  ```


- **명령어를 통한 네임스페이스 생성**:
  ```bash
  kubectl create namespace dev
  ```


- **네임스페이스 전환**:
  ```bash
  kubectl config set-context --current --namespace=dev
  ```


- **모든 네임스페이스의 파드 목록 보기**:
  ```bash
  kubectl get pods --all-namespaces
  ```

### 자원 할당(Quota) 설정

- **리소스 할당 정의 파일**:
  ```yaml
  apiVersion: v1
  kind: ResourceQuota
  metadata:
    name: quota
    namespace: dev
  spec:
    hard:
      pods: "10"
      requests.cpu: "10"
      requests.memory: "10Gi"
  ```
