--- 
title: 'Certified Kubernetes Administration - 31'
subtitle: 'k8s Managing Application Logs'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 다양한 로깅 메커니즘


- **Docker에서의 로깅**:
  
  - Docker 컨테이너 `event-simulator` 실행: 랜덤 이벤트 생성, 웹 서버 시뮬레이션.
  
  - `-d` 옵션으로 백그라운드에서 실행 시 로그를 바로 볼 수 없음.
  
  - 로그 확인: `docker logs <컨테이너 ID>`.
  
  - 실시간 로그 확인: `docker logs -f <컨테이너 ID>`.


- **Kubernetes에서의 로깅**:
  
  - 동일한 Docker 이미지를 사용하여 포드를 생성.
  
  - 포드가 실행 중일 때, `kubectl logs <포드 이름>` 명령어로 로그 확인.
  
  - 실시간 로그 스트리밍: `kubectl logs -f <포드 이름>`.


- **다중 컨테이너 포드에서의 로깅**:
  
  - 포드에 여러 Docker 컨테이너가 있을 수 있음.
  
  - 예: 포드 정의 파일에 `image-processor`라는 추가 컨테이너 포함.
  
  - 다중 컨테이너 포드에서 로그 확인 시, 컨테이너 이름을 명시해야 함.
  
  - 예: `kubectl logs <포드 이름> -c <컨테이너 이름>`.
  
  - 명시하지 않으면 오류 발생.


- **기본 로깅 기능**:
  
  - Kubernetes 내에서 기본적인 로깅 기능 제공.
  
  - 애플리케이션 개발자가 Kubernetes에서 시작하는 데 필요한 기본 지식.
  
  - 인증 프로그램에서도 기본적인 로깅 기능만 필요.

### 요약


- Docker 컨테이너의 로그는 `docker logs` 명령어로 확인하며, `-f` 옵션으로 실시간 스트리밍 가능.

- Kubernetes에서는 `kubectl logs` 명령어로 포드 로그를 확인하며, 동일하게 `-f` 옵션으로 실시간 스트리밍 가능.

- 다중 컨테이너 포드에서 로그를 확인할 때는 `-c` 옵션을 사용하여 특정 컨테이너의 로그를 명시적으로 지정해야 함.

- Kubernetes의 기본 로깅 기능은 애플리케이션 개발자가 시작하는 데 충분하며, 인증 프로그램에서도 이를 다룸.