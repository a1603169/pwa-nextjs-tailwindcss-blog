--- 
title: 'Certified Kubernetes Administration - 80'
subtitle: 'k8s / Kubeadm and deployment'
date: '2024-06-23'
tags: [Kubernetes, Cloud]
---

### kubeadm 소개

- **kubeadm**: Kubernetes 클러스터를 부트스트랩하는 도구로, 여러 노드 클러스터를 쉽게 설정 가능.

- **Kubernetes 클러스터 구성 요소**: kube-apiserver, etcd, 컨트롤러 등.

- **보안 및 인증 요구 사항**: 모든 구성 요소 간 통신을 위한 인증서 설정 등.

- **수동 설치의 어려움**: 모든 구성 요소를 개별적으로 설치하고 구성 파일을 수정하는 것은 매우 번거롭다.

- **kubeadm의 장점**: 모든 작업을 자동으로 처리하여 클러스터 설정을 간소화.

### 클러스터 설정 단계

1. **여러 시스템 또는 VM 프로비저닝**: Kubernetes 클러스터를 위해 물리적 또는 가상 머신을 준비.

2. **마스터 및 워커 노드 지정**: 하나의 노드를 마스터로 지정하고 나머지를 워커 노드로 설정.

3. **컨테이너 런타임 설치**: 모든 노드에 containerd 설치.

4. **kubeadm 도구 설치**: 모든 노드에 kubeadm 설치.

5. **마스터 서버 초기화**: 마스터 서버에 필요한 모든 구성 요소 설치 및 구성.

6. **네트워크 사전 요구 사항 확인**: 마스터와 워커 노드 간의 특수 네트워크 솔루션(POD Network) 설정.

7. **워커 노드 클러스터에 추가**: 워커 노드를 마스터 노드에 연결하여 클러스터에 추가.

8. **애플리케이션 배포**: Kubernetes 환경에 애플리케이션 배포.

### 데모: VMs 프로비저닝 및 클러스터 부트스트랩

1. **VMs 프로비저닝**
   
   - **VirtualBox 및 Vagrant 설치**: VirtualBox는 하이퍼바이저, Vagrant는 VM 자동화 도구.
   
   - **Vagrant 파일 사용**: Vagrant 파일을 통해 동일한 설정의 VM을 간단히 프로비저닝.
   
   - **VM 생성**: `vagrant up` 명령으로 VM 생성 및 상태 확인(`vagrant status`).


2. **노드 접속**
   
   - **SSH 접속**: `vagrant ssh <노드 이름>` 명령으로 각 노드에 SSH 접속.
   
   - **노드 상태 확인**: `uptime` 명령 등으로 각 노드의 상태 확인.


3. **컨테이너 런타임 설치**
   
   - **IPv4 포워딩 및 iptables 설정**: 각 노드에서 네트워크 설정.
   
   - **containerd 설치**: `apt install containerd.io` 명령으로 containerd 설치 및 Cgroup 드라이버 설정.


4. **kubeadm, kubelet 및 kubectl 설치**
   
   - **설치 명령 실행**: `apt install kubeadm kubelet kubectl` 명령으로 설치.


5. **마스터 노드 초기화**
   
   - **kubeadm init 명령 실행**: `kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=<마스터 노드 IP>` 명령으로 마스터 노드 초기화.
   
   - **관리자 구성 파일 복사**: `mkdir -p $HOME/.kube` 및 `cp /etc/kubernetes/admin.conf $HOME/.kube/config` 명령으로 관리 구성 파일 설정.


6. **Pod 네트워크 설정**
   
   - **Weave Net 설치**: `kubectl apply -f https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')` 명령으로 네트워크 애드온 설치.
   
   - **DaemonSet 설정 수정**: `kubectl edit daemonset weave-net -n kube-system` 명령으로 설정 수정.


7. **워커 노드 클러스터에 추가**
   
   - **kubeadm join 명령 실행**: 각 워커 노드에서 `kubeadm join <마스터 노드 IP>:<포트> --token <토큰> --discovery-token-ca-cert-hash <해시>` 명령 실행.
   
   - **노드 상태 확인**: `kubectl get nodes` 명령으로 노드 상태 확인.


8. **애플리케이션 배포 및 확인**
   
   - **nginx 배포**: `kubectl

run nginx --image=nginx` 명령으로 nginx 배포.
   
   - **Pod 상태 확인**: `kubectl get pods` 명령으로 배포된 Pod 상태 확인.
   
   - **Pod 삭제**: `kubectl delete pod <pod 이름>` 명령으로 Pod 삭제.

### 요약

- **kubeadm**을 사용하면 Kubernetes 클러스터를 쉽게 부트스트랩할 수 있으며, 모든 구성 요소를 자동으로 설치하고 구성합니다.

- **VM 프로비저닝**: VirtualBox와 Vagrant를 사용하여 동일한 설정의 여러 VM을 쉽게 프로비저닝.

- **컨테이너 런타임 설치**: 각 노드에 containerd 설치 및 Cgroup 드라이버 설정.

- **클러스터 초기화**: 마스터 노드 초기화 및 네트워크 설정 후 워커 노드 추가.

- **애플리케이션 배포 및 확인**: 클러스터에 애플리케이션을 배포하고 상태를 확인하여 클러스터가 제대로 동작하는지 확인.
