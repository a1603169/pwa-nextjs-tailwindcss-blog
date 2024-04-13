---
title: 'GCP Cloud Engineer - 16'
subtitle: 'Introducting Google Cloud - Kubernetes / Google Kubernetes Engine'
date: '2024-04-14'
tags: [Cloud, GCP, Kubernetes]
---

### Kubernetes

- ㅇ **Kubernetes Overview**: Kubernetes is an open-source platform for managing containerized workloads and services, which simplifies the orchestration of many containers across multiple hosts.

- ㅇ **Cluster Management**: Utilizes a cluster of nodes, where a node represents a computing instance, different from a Google Cloud virtual machine.

- ㅇ **Pods and Deployments**: Pods are the smallest deployable units in Kubernetes, typically containing one container, but can hold multiple if they share dependencies. Deployments manage groups of these pods to ensure availability and scaling.

- ㅇ **Services and Networking**: Kubernetes provides services that assign a stable IP address to groups of pods, facilitating consistent access and load balancing through network load balancers in GKE.

- ㅇ **Scaling and Autoscaling**: Scaling is managed with commands like `kubectl scale`, with options for autoscaling based on parameters like CPU utilization.

- ㅇ **Declarative Management**: Promotes using configuration files to define desired states, rather than imperative commands, for managing deployments and updates.

- ㅇ **Update and Rollout Strategies**: Updates are managed through `kubectl rollout` or by applying changes in deployment configuration files, with strategies to minimize risk during updates.

### 쿠버네티스

- ㅇ **쿠버네티스 개요**: 쿠버네티스는 컨테이너화된 워크로드 및 서비스를 관리하는 오픈 소스 플랫폼으로, 다수의 호스트에서 많은 컨테이너를 용이하게 조정합니다.

- ㅇ **클러스터 관리**: 노드의 클러스터를 사용하며, 여기서 노드는 컴퓨팅 인스턴스를 나타내고, 구글 클라우드의 가상 머신과는 다릅니다.

- ㅇ **파드 및 배포**: 파드는 쿠버네티스에서 배포 가능한 가장 작은 단위로, 일반적으로 하나의 컨테이너를 포함하지만, 의존성을 공유하는 경우 여러 개를 포함할 수 있습니다. 배포는 이러한 파드의 그룹을 관리하여 가용성과 확장성을 보장합니다.

- ㅇ **서비스 및 네트워킹**: 쿠버네티스는 파드 그룹에 안정적인 IP 주소를 할당하는 서비스를 제공하여, GKE의 네트워크 로드 밸런서를 통해 일관된 접근성과 로드 밸런싱을 촉진합니다.

- ㅇ **확장 및 자동 확장**: `kubectl scale`과 같은 명령을 사용하여 확장을 관리하며, CPU 사용률과 같은 매개변수에 기반한 자동 확장 옵션을 제공합니다.

- ㅇ **선언적 관리**: 배포 및 업데이트를 관리하기 위해 명령어 대신 원하는 상태를 정의하는 구성 파일을 사용하는 것을 촉진합니다.

- ㅇ **업데이트 및 롤아웃 전략**: `kubectl rollout`을 사용하거나 배포 구성 파일의 변경 사항을 적용하여 업데이트를 관리하며, 업데이트 동안의 위험을 최소화하기 위한 전략을 사용합니다.

----------------------------

### Google Kubernetes Engine (GKE)

Here are detailed bullet points summarizing Google Kubernetes Engine (GKE) and its functionalities in both English and Korean:

**English:**

- ㅇ **Google Kubernetes Engine (GKE)**: A managed Kubernetes service hosted by Google in the cloud, simplifying container management.

- ㅇ **Cluster Configuration**: GKE uses multiple Compute Engine instances grouped to form a Kubernetes cluster.

- ㅇ **Cluster Creation**: Clusters can be created using the Google Cloud Console or the `gcloud` command from the Cloud Software Development Kit.

- ㅇ **Customization and Flexibility**: Supports customization with various machine types, numbers of nodes, and network settings.

- ㅇ **Kubernetes Integration**: Provides tools and commands to interact with your cluster, deploy and manage applications, set policies, and monitor workload health.

- ㅇ **Advanced Management Features**: Includes load balancing, node pools for resource flexibility, automatic node scaling, automatic software upgrades, node auto-repair for health and availability, and integrated logging and monitoring for operational visibility.

- ㅇ **Starting a Cluster**: To initiate a Kubernetes cluster in GKE, use the command: `gcloud container clusters create k1`.

### 구글 쿠버네티스 엔진 (GKE)

- ㅇ **구글 쿠버네티스 엔진 (GKE)**: 구글 클라우드에서 호스팅되는 관리형 쿠버네티스 서비스로, 컨테이너 관리를 간소화합니다.

- ㅇ **클러스터 구성**: 여러 컴퓨트 엔진 인스턴스를 그룹화하여 쿠버네티스 클러스터를 형성합니다.

- ㅇ **클러스터 생성**: 클러스터는 Google Cloud Console 또는 Cloud Software Development Kit의 `gcloud` 명령을 사용하여 생성할 수 있습니다.

- ㅇ **맞춤 설정 및 유연성**: 다양한 머신 유형, 노드 수 및 네트워크 설정을 지원하는 맞춤 설정이 가능합니다.

- ㅇ **쿠버네티스 통합**: 클러스터와 상호 작용, 애플리케이션 배포 및 관리, 정책 설정, 워크로드 건강 모니터링을 위한 도구 및 명령 제공.

- ㅇ **고급 관리 기능**: 로드 밸런싱, 자원 유연성을 위한 노드 풀, 자동 노드 스케일링, 소프트웨어 자동 업그레이드, 건강 및 가용성을 위한 노드 자동 수리, 운영 가시성을 위한 통합 로깅 및 모니터링 포함.

- ㅇ **클러스터 시작**: GKE에서 쿠버네티스 클러스터를 시작하려면 다음 명령을 사용합니다: `gcloud container clusters create k1`.