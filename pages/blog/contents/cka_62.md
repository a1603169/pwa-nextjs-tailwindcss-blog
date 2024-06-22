--- 
title: 'Certified Kubernetes Administration - 62'
subtitle: 'k8s / CSI (Container Storage Interface)'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Container Storage Interface (CSI)

### 소개
Kubernetes는 다양한 컨테이너 런타임 및 네트워킹 솔루션을 지원하기 위해 확장 가능한 인터페이스를 도입했습니다. 

CSI(Container Storage Interface)는 이러한 컨테이너 오케스트레이션 툴과 스토리지 솔루션 간의 표준 인터페이스입니다.

### 배경

- **Container Runtime Interface (CRI)**: Kubernetes가 Docker와 같은 컨테이너 런타임과 통신하기 위해 정의된 표준. 이는 Kubernetes 소스 코드에 의존하지 않고 다양한 컨테이너 런타임을 지원할 수 있게 합니다.

- **Container Networking Interface (CNI)**: 다양한 네트워킹 솔루션을 지원하기 위한 표준 인터페이스.

### CSI의 필요성

- 여러 스토리지 솔루션을 Kubernetes와 통합할 수 있도록 합니다.

- CSI를 통해 스토리지 벤더는 Kubernetes와 호환되는 드라이버를 개발할 수 있습니다.

### 지원되는 스토리지 솔루션

- Portworx, Amazon EBS, Azure Disk, Dell EMC Isilon, PowerMax, Unity, XtremIO, NetApp, Nutanix, HPE, Hitachi, Pure Storage 등.

### CSI의 작동 방식

- CSI는 컨테이너 오케스트레이터(Kubernetes)와 스토리지 드라이버 간의 RPC(원격 프로시저 호출) 세트를 정의합니다.

- **Create Volume RPC**: 파드가 생성되고 볼륨이 필요할 때 Kubernetes가 호출하여 볼륨을 생성합니다.

- **Delete Volume RPC**: 볼륨이 삭제될 때 Kubernetes가 호출하여 볼륨을 삭제합니다.

### CSI의 이점

- 벤더 간 표준화된 인터페이스를 통해 일관된 스토리지 통합 경험을 제공합니다.

- CSI는 Kubernetes에 국한되지 않으며 Cloud Foundry, Mesos 등 다양한 컨테이너 오케스트레이션 툴과 호환됩니다.

### 상세 사양

- CSI 사양은 GitHub에서 확인할 수 있으며, RPC 호출 시 주고받아야 하는 매개변수, 응답 형식, 에러 코드 등을 명확히 정의합니다.

### 마무리
CSI는 다양한 스토리지 솔루션을 Kubernetes와 통합할 수 있는 표준 인터페이스로, 이를 통해 다양한 스토리지 벤더가 자신들의 솔루션을 Kubernetes와 호환되게 만들 수 있습니다.
