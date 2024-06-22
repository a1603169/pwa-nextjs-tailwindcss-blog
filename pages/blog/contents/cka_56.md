--- 
title: 'Certified Kubernetes Administration - 56'
subtitle: 'Secruity in Docker'
date: '2024-06-22'
tags: [Kubernetes, Cloud, Linux]
---

### Docker 보안 기본 개념

1. **프로세스 격리**:
   
   - 호스트에는 Docker 데몬, SSH 서버 등의 프로세스가 실행됩니다.
   
   - 컨테이너는 호스트와 동일한 커널을 공유하지만, 네임스페이스를 통해 격리됩니다.
   
   - 호스트는 모든 프로세스를 볼 수 있지만, 각 컨테이너는 자신의 프로세스만 볼 수 있습니다.
   
   - 예를 들어, 컨테이너 내에서 실행되는 프로세스는 호스트에서 다른 프로세스 ID를 가질 수 있습니다.

2. **사용자 및 권한 관리**:
   
   - 기본적으로 Docker는 컨테이너 내 프로세스를 루트 사용자로 실행합니다.
   
   - 컨테이너 내에서 실행되는 프로세스는 루트 사용자 권한을 가지지만, 이는 호스트의 루트 사용자와 다릅니다.
   
   - `docker run` 명령어에서 `--user` 옵션을 사용하여 비루트 사용자로 프로세스를 실행할 수 있습니다.
   
   - Docker 이미지 생성 시 `USER` 지시문을 사용하여 사용자 ID를 설정할 수 있습니다.

3. **루트 사용자 보안 제한**:
   
   - Docker는 루트 사용자의 권한을 제한하는 보안 기능을 제공합니다.
   
   - 루트 사용자라도 컨테이너 내에서 호스트를 재부팅하거나 중요한 시스템 설정을 변경할 수 없습니다.
   
   - 리눅스 기능(Linux capabilities)을 사용하여 이러한 제한을 구현합니다.
   
   - `cap-add` 옵션을 사용하여 추가 권한을 부여할 수 있으며, `cap-drop` 옵션으로 권한을 제거할 수 있습니다.
   
   - 모든 권한을 부여하려면 `--privileged` 플래그를 사용할 수 있습니다.

### Kubernetes 보안 컨텍스트

1. **보안 컨텍스트 정의**:
   
   - Kubernetes에서 보안 컨텍스트는 파드 또는 컨테이너의 보안 설정을 정의합니다.
   
   - 사용자는 보안 컨텍스트를 사용하여 컨테이너가 실행되는 방식에 대한 보안 관련 설정을 지정할 수 있습니다.

2. **사용자 및 그룹 설정**:
   
   - `securityContext` 필드를 사용하여 파드 또는 컨테이너 수준에서 사용자와 그룹을 지정할 수 있습니다.
   
   - `runAsUser`: 컨테이너 내 프로세스를 특정 사용자 ID로 실행.
   
   - `runAsGroup`: 컨테이너 내 프로세스를 특정 그룹 ID로 실행.

3. **Linux Capabilities 관리**:
   
   - `capabilities` 필드를 사용하여 컨테이너에 추가하거나 제거할 Linux 기능을 지정할 수 있습니다.
   
   - `add`: 컨테이너에 추가할 기능.
   
   - `drop`: 컨테이너에서 제거할 기능.

4. **Privileged 모드**:
   
   - `privileged` 필드를 `true`로 설정하여 컨테이너에 모든 권한을 부여할 수 있습니다.
   
   - 이는 보안 위험이 있으므로 신중하게 사용해야 합니다.

### 예시 파드 정의 파일

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  containers:
  - name: secure-container
    image: nginx
    securityContext:
      runAsUser: 1000
      runAsGroup: 3000
      capabilities:
        add: ["NET_ADMIN", "SYS_TIME"]
        drop: ["MKNOD"]
      privileged: false
```

### 요약

Docker와 Kubernetes에서 보안 컨텍스트는 컨테이너의 보안 설정을 관리하는 데 중요한 역할을 합니다. 프로세스 격리, 사용자 및 그룹 설정, Linux 기능 관리 등을 통해 보안을 강화할 수 있습니다. 이를 통해 컨테이너의 보안성을 높이고, 호스트 시스템의 안전을 유지할 수 있습니다.