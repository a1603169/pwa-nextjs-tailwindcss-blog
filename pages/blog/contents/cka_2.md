---
title: 'Certified Kubernetes Administration - 2'
subtitle: 'Docker vs Containerd & CLI Tools'
date: '2024-06-19'
tags: [Kubernetes, Cloud]
---

## Docker와 Containerd의 차이 및 관련 CLI 도구들

### 초기 컨테이너 시대

1. **Docker의 등장**:
   
   - Docker는 컨테이너 작업을 매우 간단하게 만들어서 널리 사용되었음.
   
   - Kubernetes는 Docker를 오케스트레이션하기 위해 처음에 개발됨.
   
   - 당시 Kubernetes는 Docker에만 의존했고, 다른 컨테이너 런타임을 지원하지 않았음.

2. **Kubernetes의 발전**:
   
   - Kubernetes가 인기를 얻으면서 다른 컨테이너 런타임(rkt 등)도 지원해야 하는 필요가 생김.
   
   - 이를 위해 Kubernetes는 CRI(Container Runtime Interface)를 도입함.

### CRI(Container Runtime Interface)

- **OCI 표준**: 
  
  - OCI(Open Container Initiative)는 이미지 스펙(imagespec)과 런타임 스펙(runtimespec)을 정의함.
  
  - 이미지 스펙은 이미지가 어떻게 빌드되어야 하는지를 정의.
  
  - 런타임 스펙은 컨테이너 런타임이 어떻게 개발되어야 하는지를 정의.


- **CRI 도입**: 
  
  - CRI는 Kubernetes가 다양한 컨테이너 런타임과 통신할 수 있도록 함.
  
  - Docker는 CRI가 도입되기 전에 만들어졌기 때문에 이를 지원하지 않았음.

### Docker의 구성 요소

- Docker는 여러 도구들(Docker CLI, Docker API, 이미지 빌드 도구, runC, Containerd 등)로 구성되어 있음.

- Containerd는 Docker의 데몬으로, CRI 호환 가능하며, 독립적인 런타임으로 사용될 수 있음.

### Kubernetes에서 Docker 지원 중단

- Kubernetes는 dockershim이라는 임시 방편을 통해 Docker를 지원했으나, 이는 유지보수가 어려워짐.

- Kubernetes 1.24 버전부터 dockershim을 제거하고 Docker 지원을 중단함.

- Docker가 만든 이미지는 OCI 표준을 따르므로 Containerd에서도 계속 사용 가능.

### Containerd의 독립성

- Containerd는 이제 독립적인 프로젝트로, Docker 없이도 설치 및 사용할 수 있음.

- Docker의 여러 기능이 필요하지 않다면 Containerd만 설치하는 것이 가능.

### CLI 도구들

1. **ctr**:
   
   - Containerd와 함께 제공되는 도구로, 디버깅 목적으로 사용됨.
   
   - 기능이 제한적이며, 일반적인 컨테이너 관리에는 적합하지 않음.

2. **nerdctl**:
   
   - Docker와 유사한 CLI 도구로, Containerd를 위한 일반적인 용도로 사용됨.
   
   - Docker 명령어와 유사한 방식으로 사용할 수 있음.
   
   - Docker의 최신 기능을 지원하고, Kubernetes의 네임스페이스와 같은 추가 기능도 제공함.

3. **crictl**:
   
   - Kubernetes 커뮤니티에서 개발된 도구로, CRI 호환 컨테이너 런타임과 상호작용하기 위해 사용됨.
   
   - 디버깅 목적에 주로 사용되며, Kubernetes의 kubelet과 함께 작동함.
   
   - Docker와 유사한 명령어로 컨테이너와 상호작용할 수 있음.

### 요약

- **ctr**: Containerd 디버깅용 도구, 기능 제한적.

- **nerdctl**: Docker 유사 CLI 도구, Containerd와 일반적인 용도로 사용.

- **crictl**: Kubernetes 커뮤니티 도구, CRI 호환 런타임과 상호작용, 주로 디버깅 용도.

이와 같은 도구들을 통해 Docker와 Containerd의 차이점을 이해하고, 각각의 도구를 적절히 사용하여 컨테이너 환경을 관리할 수 있습니다.