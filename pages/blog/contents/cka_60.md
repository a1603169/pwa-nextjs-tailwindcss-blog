--- 
title: 'Certified Kubernetes Administration - 60'
subtitle: 'k8s / Docker Stroage Drivers and File Systems'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Docker가 데이터를 저장하는 방식

Docker가 설치되면 `/var/lib/docker/` 경로에 여러 폴더가 생성됩니다. 이 폴더들은 Docker가 이미지를 저장하고 컨테이너가 실행되는 데 사용되는 모든 데이터를 저장하는 기본 경로입니다.

- `containers`: 컨테이너 관련 파일

- `image`: 이미지 관련 파일

- `volumes`: Docker 볼륨

### Docker의 계층적 아키텍처

Docker는 이미지를 계층 구조로 빌드합니다. Dockerfile의 각 명령은 새로운 레이어를 생성합니다. 예를 들어, Ubuntu 이미지를 베이스로 하고, APT 패키지, Python 패키지, 소스 코드, 엔트리 포인트를 추가하는 순서로 이미지를 빌드합니다. 

이러한 레이어 구조는 동일한 베이스 이미지를 사용하는 다른 애플리케이션이 동일한 레이어를 재사용함으로써 빌드 시간을 단축하고 디스크 공간을 절약할 수 있게 합니다.

### 이미지와 컨테이너의 파일 시스템

- **이미지 레이어**: 읽기 전용 (read-only)

- **컨테이너 레이어**: 쓰기 가능 (writeable)

컨테이너가 실행되면, 이미지 레이어 위에 쓰기 가능한 레이어가 추가됩니다. 이 쓰기 가능한 레이어는 컨테이너가 살아있는 동안에만 유지되며, 컨테이너가 삭제되면 함께 삭제됩니다.

### Copy-on-Write 메커니즘

컨테이너 내부에서 파일을 수정하려고 할 때, Docker는 해당 파일을 쓰기 가능한 레이어로 복사하고, 수정은 이 복사본에서 이루어집니다. 이를 "Copy-on-Write"라고 합니다.

### 데이터 지속성

컨테이너가 삭제되면 컨테이너 레이어의 데이터도 함께 삭제됩니다. 데이터를 지속시키려면 Docker 볼륨을 사용합니다.

- **볼륨 생성**: `docker volume create <volume_name>`

- **볼륨 마운트**: `docker run -v <volume_name>:<container_path> <image_name>`

볼륨을 미리 생성하지 않고 컨테이너 실행 시 볼륨 이름을 지정하면, Docker가 자동으로 볼륨을 생성합니다.

### Bind Mounts

이미 Docker 호스트에 존재하는 특정 경로를 마운트할 수도 있습니다.

- **바인드 마운트**: `docker run -v <host_path>:<container_path> <image_name>`

### `-v`와 `--mount` 옵션

`-v` 옵션은 간결하지만, `--mount` 옵션은 더 명확하고 키-값 형식으로 매개변수를 지정할 수 있습니다.

- **예시**: `docker run --mount type=bind,source=<host_path>,target=<container_path> <image_name>`

### 스토리지 드라이버

Docker는 계층 구조를 유지하고 파일 시스템을 관리하기 위해 스토리지 드라이버를 사용합니다. 주요 드라이버로는 AUFS, BTRFS, ZFS, device mapper, overlay, overlay2가 있습니다. 각 운영 체제에 따라 기본 스토리지 드라이버가 다릅니다.

- Ubuntu: AUFS

- Fedora, CentOS: device mapper
