--- 
title: 'Certified Kubernetes Administration - 43'
subtitle: 'k8s ETCDCTL'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### ETCDCTL 사용하기

- **ETCDCTL 개요**
  
  - etcdctl은 etcd를 위한 명령줄 클라이언트입니다.
  
  - 모든 Kubernetes 실습 랩에서는 etcd 키-값 데이터베이스가 마스터 노드에서 정적 파드로 배포됩니다. 사용된 버전은 v3입니다.
  
  - 백업 및 복원 작업을 위해 etcdctl을 사용할 때는 ETCDCTL_API를 3으로 설정해야 합니다.
  
  - 이는 etcdctl 클라이언트를 사용하기 전에 변수 ETCDCTL_API를 내보내어 설정할 수 있습니다:
    ```sh
    export ETCDCTL_API=3
    ```

- **마스터 노드에서**

  - etcdctl을 사용하여 작업을 수행하려면 먼저 마스터 노드에서 명령을 실행해야 합니다.

- **서브 커맨드 옵션 확인**
  
  - 특정 서브 커맨드에 대한 모든 옵션을 보려면 -h 또는 --help 플래그를 사용하십시오.
  
  - 예를 들어, etcd의 스냅샷을 찍으려면 다음을 사용하십시오:
    ```sh
    etcdctl snapshot save -h
    ```
  
  - 필수 글로벌 옵션을 주의 깊게 확인하십시오.


- **TLS-Enabled ETCD 데이터베이스**
  
  - ETCD 데이터베이스가 TLS-Enabled 상태이므로 다음 옵션이 필수입니다:
    
    - **--cacert**: TLS-Enabled 보안 서버의 인증서를 이 CA 번들을 사용하여 검증합니다.
    
    - **--cert**: 이 TLS 인증서 파일을 사용하여 보안 클라이언트를 식별합니다.
    
    - **--endpoints**: 기본값은 [127.0.0.1:2379]입니다. ETCD가 마스터 노드에서 실행되며 localhost 2379에 노출됩니다.
    
    - **--key**: 이 TLS 키 파일을 사용하여 보안 클라이언트를 식별합니다.


- **스냅샷 복원 옵션 확인**
  
  - 백업을 복원하기 위한 모든 사용 가능한 옵션을 보려면 다음을 사용하십시오:
    ```sh
    etcdctl snapshot restore -h
    ```
  
  - etcdctl 명령줄 도구 사용법 및 -h 플래그와 함께 작업하는 방법에 대한 자세한 설명은 백업 및 복원 실습의 솔루션 비디오를 참조하십시오.

### 요약

- **ETCDCTL 개요**
  
  - etcdctl은 etcd를 위한 명령줄 클라이언트
  
  - ETCDCTL_API를 3으로 설정 필요
  
  - 설정 명령어: `export ETCDCTL_API=3`

- **서브 커맨드 옵션 확인**
  
  - `-h` 또는 `--help` 플래그 사용
  
  - 예시: `etcdctl snapshot save -h`

- **TLS-Enabled ETCD 데이터베이스**
  
  - 필수 옵션:
    
    - `--cacert`: CA 번들을 사용하여 인증서 검증
    
    - `--cert`: TLS 인증서 파일 사용
    
    - `--endpoints`: 기본값 [127.0.0.1:2379]
    
    - `--key`: TLS 키 파일 사용

- **스냅샷 복원 옵션 확인**
  
  - 명령어: `etcdctl snapshot restore -h`
  
  - 자세한 내용은 백업 및 복원 실습 비디오 참조