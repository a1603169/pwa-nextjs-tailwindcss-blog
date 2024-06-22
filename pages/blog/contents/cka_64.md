--- 
title: 'Certified Kubernetes Administration - 64'
subtitle: 'k8s / Storage Class'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### 스토리지 클래스

이 강의에서는 스토리지 클래스에 대해 알아봅니다.

### 이전 강의 요약

- PV(Persistent Volumes) 생성

- PVC(Persistent Volume Claims)를 사용하여 스토리지 요청

- PVC를 Pod 정의 파일에서 볼륨으로 사용

### 문제점

Google Cloud Persistent Disk에서 PV를 생성하는 경우:

1. 먼저 Google Cloud에서 디스크를 수동으로 프로비저닝해야 함.

2. 수동으로 Persistent Volume 정의 파일을 작성해야 함.

이 과정은 수동으로 진행되므로 '정적 프로비저닝'이라고 불립니다. 애플리케이션이 스토리지를 필요로 할 때 자동으로 프로비저닝되는 기능이 필요합니다.

### 스토리지 클래스의 역할

스토리지 클래스는 애플리케이션이 스토리지를 필요로 할 때 자동으로 스토리지를 프로비저닝할 수 있게 해줍니다. 이를 '동적 프로비저닝'이라고 합니다.

### 스토리지 클래스 정의

스토리지 클래스 객체를 생성하는 방법은 다음과 같습니다:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
  replication-type: none
```

### PVC에서 스토리지 클래스 사용

PVC 정의 파일에서 스토리지 클래스 이름을 지정하여 사용할 스토리지 클래스를 명시합니다.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: fast
```

PVC가 생성되면 스토리지 클래스는 정의된 프로비저너를 사용하여 필요한 크기의 디스크를 프로비저닝하고, PVC에 PV를 자동으로 생성하고 바인딩합니다.

### 다양한 프로비저너

다양한 프로비저너가 있으며, 각각 특정 매개변수를 지원합니다.

- AWS EBS

- Azure File

- Azure Disk

- CephFS

- Portworx

- ScaleIO

- 등등

### 매개변수 예시

Google Persistent Disk의 경우:

- 디스크 타입: `standard` 또는 `pd-ssd`

- 복제 모드: `none` 또는 `regional-pd`

### 스토리지 클래스의 예시

다양한 스토리지 클래스를 정의하여 다양한 서비스 수준을 제공합니다.

- `silver` 클래스: 표준 디스크 사용

- `gold` 클래스: SSD 드라이브 사용

- `platinum` 클래스: SSD 드라이브 및 복제 사용

PVC를 생성할 때 원하는 스토리지 클래스를 지정하여 필요에 맞는 스토리지를 요청할 수 있습니다.

### 요약

스토리지 클래스를 사용하면 스토리지의 동적 프로비저닝이 가능해져, 관리가 편리해지고 애플리케이션의 스토리지 요구사항에 맞는 다양한 스토리지 옵션을 제공할 수 있습니다.