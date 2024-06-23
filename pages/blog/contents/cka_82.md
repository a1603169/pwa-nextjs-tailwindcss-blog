--- 
title: 'Certified Kubernetes Administration - 82'
subtitle: 'k8s / Worker Node Failure and Network TroubleShooting'
date: '2024-06-23'
tags: [Kubernetes, Cloud]
---

### 워커 노드 장애 처리

### 절차
1. **노드 상태 확인**
   
   - 클러스터의 노드 상태를 확인하여 준비 상태(Ready)인지 확인.
   
   - `kubectl describe node` 명령어를 사용하여 노드에 대한 자세한 정보를 확인.
   
   - 각 노드에는 디스크 공간 부족, 메모리 부족, 디스크 압력, PID 압력, 노드 준비 상태 등을 나타내는 조건이 있음.

2. **상태 플래그 확인**
   
   - **out of disk**: 디스크 공간 부족 시 true로 설정.
   
   - **memory pressure**: 메모리 부족 시 true로 설정.
   
   - **disk pressure**: 디스크 용량이 낮을 때 true로 설정.
   
   - **PID pressure**: 프로세스가 많을 때 true로 설정.
   
   - **ready**: 노드가 건강할 때 true로 설정.
   
   - 노드가 마스터와 통신하지 않으면 상태가 unknown으로 설정됨.

3. **노드 상태 자체 확인**
   
   - 노드가 온라인인지 오프라인인지 확인.
   
   - 노드가 충돌했다면, 다시 시작.
   
   - 노드의 CPU, 메모리 및 디스크 공간을 확인.
   
   - **kubelet 상태 확인**: `systemctl status kubelet` 명령어를 사용하여 kubelet 상태 확인.
   
   - **kubelet 로그 확인**: `journalctl -u kubelet` 명령어를 사용하여 kubelet 로그 확인.
   
   - **kubelet 인증서 확인**: 인증서가 만료되지 않았는지, 올바른 그룹에 속해 있는지, 올바른 CA에 의해 발급되었는지 확인.

### 네트워크 트러블슈팅

### 네트워크 플러그인 설치
1. **Weave Net 설치**
   ```sh
   kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml
   ```

2. **Flannel 설치**
   ```sh
   kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml
   ```
   
   - Flannel은 Kubernetes 네트워크 정책을 지원하지 않음.

3. **Calico 설치**
   ```sh
   curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml -O
   kubectl apply -f calico.yaml
   ```
   
   - Calico는 가장 진보된 CNI 네트워크 플러그인으로 평가됨.

### DNS 문제 해결

1. **CoreDNS 설치 및 구성**
   
   - CoreDNS는 Kubernetes 클러스터의 기본 DNS 서버로 사용됨.
   
   - 메모리 사용량은 클러스터의 Pod 및 서비스 수에 영향을 받음.
   
   - 주요 리소스: service account, cluster roles, clusterrolebindings, deployment, configmap, service.

2. **CoreDNS 문제 해결**
   
   - CoreDNS Pod가 대기 상태(Pending)에 있으면 네트워크 플러그인 설치 확인.
   
   - SELinux와 구버전의 Docker가 충돌하여 CoreDNS Pod가 CrashLoopBackOff 또는 Error 상태일 수 있음.
   
   - SELinux 비활성화, Docker 업그레이드, `allowPrivilegeEscalation` 설정 변경 등을 시도.

3. **CoreDNS 설정 확인**
   
   - CoreDNS Pod가 루프를 감지했을 때 문제 발생 가능.
   
   - `resolv.conf` 파일을 수정하거나, Upstream DNS IP 주소를 직접 지정하여 문제 해결 시도.

### Kube-Proxy 문제 해결

1. **kube-proxy 상태 확인**
   
   - kube-proxy Pod가 실행 중인지 확인 (`kubectl get pods -n kube-system`).
   
   - kube-proxy 로그 확인 (`kubectl logs -n kube-system <kube-proxy-pod>`).
   
   - configmap이 올바르게 정의되었는지 확인.
   
   - `kube-config`가 configmap에 정의되었는지 확인.

2. **네트워크 규칙 확인**
   
   - kube-proxy가 올바르게 실행 중인지 확인 (`netstat -plan | grep kube-proxy`).

### 참고 자료

- **서비스 문제 해결 참고사항**: 

<span class='blogLink'>[Debug Service issues](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/)</span>


- **DNS 문제 해결 참고사항**: 

<span class='blogLink'>[DNS Troubleshooting](https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/)</span>