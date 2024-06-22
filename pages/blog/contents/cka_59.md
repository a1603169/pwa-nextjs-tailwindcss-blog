--- 
title: 'Certified Kubernetes Administration - 59'
subtitle: 'k8s / Kubectx & Kuben : CommandLine Utility'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubectx와 Kubens - 커맨드 라인 유틸리티

Kubernetes 클러스터에서 여러 네임스페이스 및 컨텍스트를 자주 전환해야 하는 경우가 많습니다. 이 작업을 kubectl 명령어만으로 수행하면 혼란스러울 수 있습니다. 이를 해결하기 위해 `kubectx`와 `kubens`라는 유틸리티를 사용할 수 있습니다.

### Kubectx

`kubectx`는 여러 컨텍스트 간 전환을 쉽게 해줍니다. 이는 특히 멀티 클러스터 환경에서 컨텍스트를 전환할 때 유용합니다.

- **설치 방법**:
  ```sh
  sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
  sudo ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx
  ```

- **사용법**:
  
  - 모든 컨텍스트를 나열:
    ```sh
    kubectx
    ```
  
  - 새로운 컨텍스트로 전환:
    ```sh
    kubectx <context_name>
    ```
  
  - 이전 컨텍스트로 전환:
    ```sh
    kubectx -
    ```
  
  - 현재 컨텍스트 보기:
    ```sh
    kubectx -c
    ```

### Kubens

`kubens`는 네임스페이스 간 전환을 쉽게 해줍니다.

- **설치 방법**:
  ```sh
  sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
  sudo ln -s /opt/kubectx/kubens /usr/local/bin/kubens
  ```

- **사용법**:
  
  - 새로운 네임스페이스로 전환:
    ```sh
    kubens <new_namespace>
    ```
  
  - 이전 네임스페이스로 전환:
    ```sh
    kubens -
    ```
