--- 
title: 'Certified Kubernetes Administration - 70'
subtitle: 'k8s / CNI Weave'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Weave Net 업데이트 및 설치

### Weave Cloud 서비스 종료

Weaveworks에서 Weave Cloud 서비스를 종료한다고 발표했습니다. 이에 따라 기존 Weave Net 설치 링크는 더 이상 작동하지 않습니다. 새로운 Weave Net 설치 링크를 사용해야 합니다:

```sh
kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml
```

자세한 내용은 다음 블로그를 참조하세요: [Weave Cloud 서비스 종료](https://www.weave.works/blog/weave-cloud-end-of-service)

### 참고 링크

- [Weave Net 설치 가이드](https://www.weave.works/docs/net/latest/kubernetes/kube-addon/#-installation)

- [Weaveworks GitHub 릴리스 페이지](https://github.com/weaveworks/weave/releases)

### Weaveworks Weave CNI 플러그인

### 개요

Weaveworks의 Weave CNI 플러그인은 Kubernetes 클러스터에서 네트워크 통신을 관리하는 데 사용되는 솔루션입니다. 이번 강의에서는 Weave 솔루션의 작동 방식에 대해 알아보겠습니다.

### Weave의 네트워킹 방식

Weave는 각 노드에 에이전트를 배치하여 네트워크 통신을 관리합니다. 에이전트는 서로 통신하여 전체 클러스터의 토폴로지를 저장하고, 각 노드의 네트워크와 파드를 파악합니다.

### Weave의 동작 방식

1. **브리지 네트워크 생성**: 각 노드에 Weave 브리지 네트워크를 생성하고 IP 주소를 할당합니다.

2. **패킷 캡슐화**: 한 노드의 파드에서 다른 노드의 파드로 패킷을 전송할 때, Weave는 패킷을 캡슐화하여 네트워크를 통해 전송합니다.

3. **패킷 디캡슐화**: 목적지 노드에 도착한 패킷을 디캡슐화하여 해당 파드로 전달합니다.

### Weave 설치 방법

1. **Weave 배포**: Kubernetes 클러스터에 Weave를 배포하기 위해 다음 명령어를 사용합니다:
    ```sh
    kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml
    ```

2. **DaemonSet 사용**: Weave 피어는 DaemonSet으로 배포되며, 이는 클러스터의 모든 노드에 Weave 피어가 배포됨을 보장합니다.

3. **로그 확인**: 문제 해결을 위해 `kubectl logs` 명령어를 사용하여 Weave 피어의 로그를 확인할 수 있습니다.

### 참고

Weave를 통해 Kubernetes 클러스터의 네트워크를 관리할 수 있으며, 다른 네트워킹 솔루션과 유사한 방식으로 작동합니다. 이를 이해하면 다른 네트워킹 솔루션도 쉽게 이해할 수 있습니다.