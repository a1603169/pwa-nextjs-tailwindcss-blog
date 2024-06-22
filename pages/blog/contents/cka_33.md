--- 
title: 'Certified Kubernetes Administration - 33'
subtitle: 'k8s/Linux Commands'
date: '2024-06-22'
tags: [Kubernetes, Cloud, Linux]
---

### Docker의 명령어와 인수


- **컨테이너 실행**:
  
  - `docker run ubuntu`: Ubuntu 컨테이너 실행 후 즉시 종료.
  
  - 컨테이너는 특정 작업이나 프로세스를 실행하기 위해 설계됨.
  
  - 프로세스가 종료되면 컨테이너도 종료.


- **CMD 명령어**:
  
  - Dockerfile의 CMD는 컨테이너가 시작될 때 실행되는 프로그램을 정의.
  
  - 예: NGINX 이미지는 `nginx` 명령어, MySQL 이미지는 `mysqld` 명령어 실행.


- **기본 명령어 변경**:
  
  - 기본 명령어를 변경하려면 Dockerfile에서 CMD를 수정.
  
  - 예: `CMD ["sleep", "5"]`로 설정하여 기본적으로 5초 동안 sleep.


- **엔트리포인트(ENTRYPOINT)**:
  
  - ENTRYPOINT는 CMD와 비슷하지만, 명령줄 인수를 추가로 지정할 수 있음.
  
  - ENTRYPOINT와 CMD를 함께 사용하여 기본 명령어와 인수를 설정 가능.
  
  - ENTRYPOINT는 CMD와 달리, 명령줄에서 인수를 추가로 받아 실행.


- **명령어 덮어쓰기**:
  
  - `docker run --entrypoint` 옵션을 사용하여 ENTRYPOINT를 덮어쓰기 가능.

### Kubernetes의 명령어와 인수


- **Pod 정의 파일**:
  
  - 컨테이너에서 사용하는 이미지와 실행될 명령어, 인수 등을 정의.
  
  - 예: `ubuntu-sleeper` 이미지를 사용하는 Pod 정의 파일.


- **args 필드**:
  
  - Docker의 CMD 명령어를 덮어쓰는 데 사용.
  
  - 예: `args: ["10"]`로 설정하여 10초 동안 sleep.


- **command 필드**:
  
  - Docker의 ENTRYPOINT 명령어를 덮어쓰는 데 사용.
  
  - 예: `command: ["sleep", "10"]`로 설정하여 sleep 명령어를 10초 동안 실행.


- **요약**:
  
  - Docker의 CMD는 Kubernetes의 args 필드에 의해 덮어써짐.
  
  - Docker의 ENTRYPOINT는 Kubernetes의 command 필드에 의해 덮어써짐.

### 요약


- Docker에서 컨테이너는 특정 작업이나 프로세스를 실행하기 위해 설계됨.

- Dockerfile의 CMD와 ENTRYPOINT 명령어를 사용하여 기본 명령어와 인수를 설정할 수 있음.

- Kubernetes에서 Pod 정의 파일의 command와 args 필드를 사용하여 Docker의 ENTRYPOINT와 CMD 명령어를 덮어쓸 수 있음.

- 명령어와 인수의 차이점을 이해하고, 이를 활용하여 컨테이너 실행을 제어할 수 있음.