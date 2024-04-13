---
title: 'GCP Cloud Engineer - 16'
subtitle: 'Introducting Google Cloud - Kubernetes / Google Kubernetes Engine'
date: '2024-04-14'
tags: [Cloud, GCP, Kubernetes]
---


### Introduction to containers

- ㅇ **Containers vs. Virtual Machines (VMs)**: Containers provide an isolated environment for code and its dependencies, utilizing limited access to file system and hardware resources, unlike VMs which virtualize hardware for each instance.

- ㅇ **Flexibility and Speed**: Containers are lightweight, requiring only a few system calls to create and start as quickly as a process. This offers flexibility similar to Infrastructure as a Service (IaaS) but with the scalability of Platform as a Service (PaaS).

- ㅇ **System Requirements**: Each host needs an OS kernel that supports containers and a container runtime to deploy containers.

- ㅇ **OS Virtualization**: In containers, the OS is virtualized, making the application highly portable across different environments without needing changes or rebuilds.

- ㅇ **Scalability**: Containers can scale up quickly, allowing for rapid deployment of multiple instances on a single host based on application demand.

- ㅇ **Microservices Architecture**: Containers are ideal for building applications as microservices, which are modular, easily deployable, and scalable across multiple hosts.

- ㅇ **Dynamic Resource Management**: Hosts can dynamically scale up or down and manage container lifecycles based on application demand or host availability.

### Container 소개

- ㅇ **컨테이너 대 가상 머신 (VM)**: 컨테이너는 코드와 그 종속성을 위한 격리된 환경을 제공하며, 각 인스턴스마다 하드웨어를 가상화하는 VM과 달리 파일 시스템 및 하드웨어 자원에 대한 접근을 제한합니다.

- ㅇ **유연성 및 속도**: 컨테이너는 가벼우며 생성 및 시작이 프로세스처럼 빠르게 이루어집니다. 이는 인프라로서의 서비스(IaaS)와 같은 유연성을 제공하지만 플랫폼으로서의 서비스(PaaS)의 확장성을 갖추고 있습니다.

- ㅇ **시스템 요구 사항**: 각 호스트는 컨테이너를 배포하기 위해 컨테이너를 지원하는 OS 커널과 컨테이너 런타임이 필요합니다.

- ㅇ **OS 가상화**: 컨테이너에서는 OS가 가상화되어, 다양한 환경에서 변경이나 재구축 없이 애플리케이션을 쉽게 이동할 수 있습니다.

- ㅇ **확장성**: 컨테이너는 빠르게 확장할 수 있어, 애플리케이션 수요에 따라 단일 호스트에서 여러 인스턴스를 신속하게 배포할 수 있습니다.

- ㅇ **마이크로서비스 아키텍처**: 컨테이너는 마이크로서비스로 애플리케이션을 구축하기에 이상적이며, 이는 모듈식이며 배포가 쉽고 여러 호스트에 걸쳐 독립적으로 확장 가능합니다.

- ㅇ **동적 자원 관리**: 호스트는 애플리케이션 수요 또는 호스트 가용성에 따라 동적으로 확장하거나 축소하고 컨테이너 수명 주기를 관리할 수 있습니다.