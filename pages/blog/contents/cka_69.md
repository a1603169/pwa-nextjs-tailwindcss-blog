--- 
title: 'Certified Kubernetes Administration - 69'
subtitle: 'k8s / CNI in k8s'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 CNI 개요

CNI(Container Network Interface)는 컨테이너 네트워크를 표준화하고 다양한 네트워크 플러그인을 사용할 수 있도록 하는 인터페이스입니다. CNI를 사용하면 네트워크 네임스페이스를 생성하고, 적절한 네트워크 플러그인을 호출하여 컨테이너를 네트워크에 연결할 수 있습니다.

### CNI 플러그인 구성

Kubernetes에서 CNI 플러그인을 사용하는 방법을 알아보겠습니다.

1. **CNI 플러그인의 역할**:
    
    - 네트워크 네임스페이스 생성
    
    - 네임스페이스를 적절한 네트워크에 연결
    
    - 네트워크 플러그인을 호출

2. **Kubernetes의 CNI 플러그인 지정**:
    
    - CNI 플러그인은 컨테이너를 생성하는 Kubernetes의 구성 요소에 의해 호출됩니다.
    
    - 각 노드의 kubelet 서비스 파일에서 네트워크 플러그인을 설정합니다.

3. **kubelet 서비스 파일**:
    
    - kubelet 서비스 파일에는 `network-plugin` 옵션이 CNI로 설정되어 있습니다.
    
    - 실행 중인 kubelet 서비스를 확인하면 `network-plugin`이 CNI로 설정된 것을 볼 수 있습니다.
    
    - CNI 바이너리 디렉터리와 CNI 구성 디렉터리도 포함되어 있습니다.

4. **CNI 바이너리 디렉터리와 구성 파일**:
    
    - **CNI 바이너리 디렉터리**: 다양한 CNI 플러그인 실행 파일이 포함되어 있습니다 (예: bridge, flannel 등).
    
    - **CNI 구성 디렉터리**: 플러그인 구성 파일이 포함되어 있습니다.
    
    - kubelet은 이 디렉터리에서 사용할 플러그인을 찾습니다. 여러 파일이 있을 경우, 알파벳 순서로 선택합니다.

5. **브리지 구성 파일 예제**:
    ```json
    {
        "cniVersion": "0.3.1",
        "name": "mynet",
        "type": "bridge",
        "bridge": "cni0",
        "isGateway": true,
        "isDefaultGateway": true,
        "ipMasq": true,
        "ipam": {
            "type": "host-local",
            "subnet": "10.244.0.0/16",
            "routes": [
                { "dst": "0.0.0.0/0" }
            ]
        }
    }
    ```
    
    - **name**: 네트워크 이름
    
    - **type**: 사용 중인 플러그인의 유형 (예: bridge)
    
    - **isGateway**: 브리지 네트워크가 IP 주소를 할당받아 게이트웨이 역할을 할지 여부
    
    - **ipMasq**: IP 마스커레이드(NAT) 규칙을 추가할지 여부
    
    - **ipam**: IP 주소 관리(IPAM) 설정

### 결론

이 강의에서는 Kubernetes에서 CNI 플러그인을 구성하고 사용하는 방법에 대해 알아보았습니다. CNI를 통해 네트워크 네임스페이스를 관리하고, 네트워크 플러그인을 사용하여 컨테이너를 네트워크에 연결할 수 있습니다. 