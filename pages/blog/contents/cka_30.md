--- 
title: 'Certified Kubernetes Administration - 30'
subtitle: 'k8s Monitor Cluster Components'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 클러스터 모니터링


- **모니터링 필요성**:
  
  - 노드 수준의 메트릭: 클러스터 내 노드 수, 건강 상태, CPU, 메모리, 네트워크, 디스크 사용량.
  
  - 포드 수준의 메트릭: 포드 수, 각 포드의 CPU 및 메모리 사용량.


- **모니터링 솔루션**:
  
  - Kubernetes는 기본적으로 완전한 모니터링 솔루션을 제공하지 않음.
  
  - 오픈 소스 솔루션: Metrics Server, Prometheus, Elastic Stack.
  
  - 상용 솔루션: Datadog, Dynatrace.
  
  - Heapster는 초기 모니터링 프로젝트였으나 현재는 사용 중단됨.


- **Metrics Server**:
  
  - Kubernetes 클러스터당 하나의 Metrics Server.
  
  - 노드와 포드의 메트릭을 수집, 집계하여 메모리에 저장.
  
  - 디스크에 메트릭을 저장하지 않아 과거 성능 데이터를 볼 수 없음.
  
  - 고급 모니터링 솔루션을 사용해야 과거 데이터를 볼 수 있음.


- **메트릭 생성**:
  
  - 각 노드에서 실행되는 에이전트인 kubelet이 메트릭 수집 담당.
  
  - kubelet의 하위 구성 요소인 cAdvisor(Container Advisor)가 포드의 성능 메트릭을 수집.
  
  - cAdvisor가 kubelet API를 통해 메트릭을 노출하여 Metrics Server에서 사용 가능하게 함.


- **Metrics Server 배포**:
  
  - 로컬 클러스터에서는 `minikube addons enable metrics-server` 명령어로 활성화.
  
  - 다른 환경에서는 GitHub 저장소에서 Metrics Server 배포 파일을 클론하고 `kubectl create` 명령어로 필요한 구성 요소 배포.
  
  - 배포 후 Metrics Server가 데이터를 수집하고 처리할 시간을 줌.


- **성능 메트릭 보기**:
  
  - `kubectl top node` 명령어로 각 노드의 CPU 및 메모리 사용량 확인.
  
  - 예: 마스터 노드의 CPU 사용량 8%, 약 166 밀리코어.
  
  - `kubectl top pod` 명령어로 Kubernetes의 포드 성능 메트릭 확인.

### 요약


- Kubernetes 클러스터 모니터링은 노드와 포드의 성능 메트릭을 수집하고 분석하는 것을 포함.

- 기본적인 Metrics Server를 사용하여 실시간 성능 메트릭을 수집 가능하지만, 과거 데이터를 저장하지 않음.

- Prometheus, Elastic Stack과 같은 고급 솔루션을 통해 더 강력한 모니터링 및 분석 가능.

- Metrics Server는 kubelet의 cAdvisor를 통해 메트릭을 수집하고, `kubectl top` 명령어를 통해 성능 메트릭을 확인할 수 있음.