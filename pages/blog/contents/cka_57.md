--- 
title: 'Certified Kubernetes Administration - 57'
subtitle: 'k8s / Secruity Context'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---
### Kubernetes의 보안 컨텍스트(Security Context)

### 보안 컨텍스트의 개요

- 보안 컨텍스트는 컨테이너나 파드의 보안 설정을 정의합니다.

- Docker 컨테이너를 실행할 때, 사용자 ID, Linux 기능 추가/제거 등을 설정할 수 있습니다.

- Kubernetes에서도 이러한 보안 설정을 구성할 수 있습니다.

- 파드(Pod) 수준 또는 컨테이너 수준에서 보안 설정을 구성할 수 있습니다.

  - 파드 수준에서 구성된 설정은 해당 파드 내 모든 컨테이너에 적용됩니다.

  - 컨테이너 수준에서 설정된 보안 컨텍스트는 파드 수준 설정을 덮어씁니다.

### 보안 컨텍스트 구성 방법

1. **파드 정의 파일**:

   - 이 파일을 통해 파드 및 컨테이너의 보안 컨텍스트를 설정할 수 있습니다.

   - 예시 파드 정의 파일은 우분투 이미지를 사용하여 sleep 명령어를 실행하는 컨테이너를 포함합니다.

2. **보안 컨텍스트 필드 추가**:

   - 파드 수준에서 보안 설정을 추가하려면 `spec` 섹션 아래에 `securityContext` 필드를 추가합니다.

   - 특정 사용자 ID로 파드를 실행하려면 `runAsUser` 옵션을 사용합니다.

   - 컨테이너 수준에서 설정하려면 `containers` 섹션 내에 `securityContext` 필드를 추가합니다.

3. **Linux 기능 추가/제거**:

   - `capabilities` 옵션을 사용하여 파드나 컨테이너에 추가하거나 제거할 기능을 지정합니다.

   - 추가할 기능은 `add` 필드에, 제거할 기능은 `drop` 필드에 지정합니다.

### 예시 파드 정의 파일

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsUser: 1000  # 파드 수준 사용자 ID 설정
  containers:
  - name: secure-container
    image: ubuntu
    command: ["sleep", "3600"]
    securityContext:
      capabilities:
        add: ["NET_ADMIN", "SYS_TIME"]  # 컨테이너 수준에서 기능 추가
        drop: ["MKNOD"]  # 컨테이너 수준에서 기능 제거
      runAsUser: 2000  # 컨테이너 수준 사용자 ID 설정 (파드 설정 덮어씀)
```

### 요약

- 보안 컨텍스트는 파드와 컨테이너의 보안 설정을 관리하는 중요한 도구입니다.

- 사용자 ID, Linux 기능 추가/제거 등 다양한 설정을 통해 보안을 강화할 수 있습니다.

- 파드 수준과 컨테이너 수준에서 설정할 수 있으며, 컨테이너 설정이 파드 설정을 덮어씁니다.

- 적절한 보안 컨텍스트 설정을 통해 Kubernetes 클러스터의 보안을 강화할 수 있습니다.
