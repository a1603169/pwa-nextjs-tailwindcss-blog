--- 
title: 'Certified Kubernetes Administration - 63'
subtitle: 'k8s / Volumes: PV(Persistent Volume) & PVC(Persistent Volume Claim)'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Persistent Volumes and Persistent Volume Claims in Kubernetes

### 개요

Kubernetes에서 데이터를 영구적으로 저장하기 위해서는 볼륨을 사용합니다. Docker와 마찬가지로 Kubernetes에서도 볼륨을 사용하여 데이터를 지속적으로 저장할 수 있습니다. 하지만, Kubernetes는 Persistent Volume(PV)과 Persistent Volume Claim(PVC)을 사용하여 더 중앙 집중적으로 스토리지를 관리합니다.

### 볼륨 개요

- **Docker 볼륨**: Docker 컨테이너는 일시적인 성격을 가지며, 컨테이너가 삭제될 때 데이터도 함께 삭제됩니다. 이를 방지하기 위해 볼륨을 컨테이너에 연결하여 데이터를 영구적으로 저장할 수 있습니다.

- **Kubernetes 볼륨**: Kubernetes에서도 파드가 일시적인 성격을 가지며, 볼륨을 사용하여 데이터를 영구적으로 저장할 수 있습니다. 

### 볼륨 스토리지 옵션

- **호스트 경로 (hostPath)**: 로컬 디렉토리를 볼륨으로 사용. 단일 노드에서 사용 가능하며, 다중 노드 클러스터에서는 비추천.

- **다양한 스토리지 솔루션**: NFS, Cluster FS, Flocker, Ceph FS, AWS EBS, Azure Disk, Google Persistent Disk 등.

### Persistent Volumes (PV)

- **Persistent Volume 정의**: 
  
  - API 버전: `v1`
  
  - Kind: `PersistentVolume`
  
  - 이름: `PV-Vol1`
  
  - 접근 모드: `ReadOnlyMany`, `ReadWriteOnce`, `ReadWriteMany`
  
  - 용량: `1Gi`
  
  - 스토리지 유형: `hostPath` (생산 환경에서는 AWS EBS 등으로 대체)

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  capacity:
    storage: 1Gi
  accessModes: 
    - ReadWriteOnce
  hostPath:
    path: "/data"
```


- **PV 생성**: `kubectl create -f pv.yaml`

- **PV 목록 확인**: `kubectl get persistentvolumes`

### Persistent Volume Claims (PVC)

- **Persistent Volume Claim 정의**:
  
  - API 버전: `v1`
  
  - Kind: `PersistentVolumeClaim`
  
  - 이름: `my-claim`
  
  - 접근 모드: `ReadWriteOnce`
  
  - 요청 용량: `500Mi`

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```

- **PVC 생성**: `kubectl create -f pvc.yaml`

- **PVC 목록 확인**: `kubectl get persistentvolumeclaims`

### PVC와 PV 바인딩

- **PVC가 생성되면** Kubernetes는 PVC의 요청에 맞는 PV를 찾아서 바인딩합니다.

- **바인딩 조건**: 요청된 용량, 접근 모드, 스토리지 클래스 등.

- **여러 PV가 있는 경우**: PVC가 특정 PV와 바인딩되도록 라벨과 셀렉터를 사용할 수 있습니다.

- **남은 용량 문제**: 작은 클레임이 큰 볼륨에 바인딩될 수 있으며, 이 경우 나머지 용량은 다른 클레임에서 사용할 수 없습니다.

### PVC 삭제

- **PVC 삭제 명령어**: `kubectl delete persistentvolumeclaim my-claim`

- **PV의 처리 방식**: 
  
  - `Retain`: PVC가 삭제되도 PV는 유지됩니다.
  
  - `Delete`: PVC가 삭제되면 PV도 삭제됩니다.
  
  - `Recycle`: 데이터가 삭제되고 PV가 재사용 가능 상태로 전환됩니다.


### PVC를 사용하는 방법

PVC(Persistent Volume Claims)를 사용하여 Pod에 스토리지를 연결하는 방법에 대해 설명합니다.

### Pod 정의 파일에서 PVC 사용

Pod 정의 파일에서 PVC를 사용하려면 `volumes` 섹션의 `persistentVolumeClaim` 아래에 PVC 클레임 이름을 지정합니다. 그런 다음, 컨테이너의 원하는 경로에 볼륨을 마운트합니다.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
        - mountPath: "/var/www/html"
          name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```

### 설명

- **컨테이너 섹션**: Pod 내에서 실행되는 컨테이너를 정의합니다.

  - `volumeMounts`: 컨테이너 내의 `/var/www/html` 경로에 `mypd` 볼륨을 마운트합니다.

- **볼륨 섹션**: Pod에서 사용할 수 있는 볼륨을 정의합니다.
  
  - `persistentVolumeClaim`: 볼륨으로 사용할 PVC `myclaim`을 참조합니다.

### ReplicaSets 또는 Deployments에서 PVC 사용

ReplicaSets 또는 Deployments에서도 동일한 방법을 적용할 수 있습니다. Pod 템플릿 섹션에 볼륨과 볼륨 마운트 세부 사항을 추가합니다.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mydeployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myfrontend
          image: nginx
          volumeMounts:
            - mountPath: "/var/www/html"
              name: mypd
      volumes:
        - name: mypd
          persistentVolumeClaim:
            claimName: myclaim
```

### 참고
자세한 내용은 Kubernetes 공식 문서의 [클레임을 볼륨으로 사용](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes) 섹션을 참조하십시오.


### 요약

PVC를 사용하여 Pod에 스토리지를 연결하려면 Pod 정의 파일에서 `persistentVolumeClaim` 섹션에 PVC 클레임 이름을 지정하면 됩니다. ReplicaSets나 Deployments에서도 동일한 방식으로 PVC를 사용할 수 있습니다. 이를 통해 다양한 Pod에서 중앙 집중식으로 관리되는 스토리지를 효율적으로 사용할 수 있습니다.