--- 
title: 'Certified Kubernetes Administration - 61'
subtitle: 'k8s / Docker Volumes'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Docker Storage Drivers and Volumes

### 스토리지 드라이버

스토리지 드라이버는 이미지와 컨테이너의 스토리지를 관리합니다. 이전 강의에서 이러한 드라이버들이 어떻게 작동하는지 간단히 다뤘습니다.

### 볼륨

데이터를 지속적으로 저장하려면 볼륨을 생성해야 합니다. 볼륨은 스토리지 드라이버가 아닌 볼륨 드라이버 플러그인에 의해 관리됩니다.

### 기본 볼륨 드라이버 플러그인


- **Local**: 기본 볼륨 드라이버 플러그인은 `local`이며, Docker 호스트에서 볼륨을 생성하고 데이터를 `/var/lib/docker/volumes` 디렉토리에 저장합니다.

### 기타 볼륨 드라이버 플러그인

다양한 타사 솔루션에서 볼륨을 생성할 수 있는 여러 볼륨 드라이버 플러그인이 존재합니다. 예를 들면:


- **Azure File Storage**

- **Convoy**

- **DigitalOcean Block Storage**

- **Flocker**

- **Google Compute Persistent Disks**

- **Cluster FS**

- **NetApp**

- **REX-Ray**

- **Portworx**

- **VMware vSphere Storage**

이 외에도 많은 플러그인이 존재합니다.

### REX-Ray 예시

일부 볼륨 드라이버는 여러 스토리지 제공업체를 지원합니다. 예를 들어, REX-Ray 스토리지 드라이버는 다음과 같은 스토리지 프로바이더에서 스토리지를 프로비저닝할 수 있습니다:


- **AWS EBS**

- **S3**

- **EMC 스토리지 어레이 (Isilon, ScaleIO)**

- **Google Persistent Disk**

- **OpenStack Cinder**

### 볼륨 사용 예시

Docker 컨테이너를 실행할 때 특정 볼륨 드라이버를 사용할 수 있습니다. 예를 들어, `REX-Ray EBS` 드라이버를 사용하여 Amazon EBS에서 볼륨을 프로비저닝할 수 있습니다. 이는 컨테이너를 생성하고 AWS 클라우드에서 볼륨을 연결합니다. 컨테이너가 종료되더라도 데이터는 클라우드에 안전하게 저장됩니다.
