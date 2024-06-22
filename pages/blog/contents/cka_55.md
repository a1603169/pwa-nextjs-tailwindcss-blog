--- 
title: 'Certified Kubernetes Administration - 55'
subtitle: 'k8s / Image Security'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes 이미지 보안

1. **이미지 명명법**:

   - 예: `nginx` 이미지는 실제로 `library/nginx`로 해석됩니다.

   - `library`는 Docker의 공식 이미지가 저장된 기본 계정입니다.

   - 사용자나 회사 이름으로 이미지를 생성하면, `library` 대신 해당 이름이 사용됩니다.

2. **이미지 저장소**:

   - 기본적으로 이미지는 Docker Hub (docker.io)에서 가져옵니다.

   - 다른 인기 있는 저장소로는 Google의 gcr.io가 있습니다.

   - 공용 이미지 외에도 내부 사설 저장소를 통해 이미지를 관리할 수 있습니다.

   - AWS, Azure, GCP 등 클라우드 서비스 제공업체는 기본적으로 사설 저장소를 제공합니다.

   - 이러한 저장소에서 저장소를 비공개로 설정하여 인증된 사용자만 접근할 수 있도록 할 수 있습니다.

3. **Docker 명령어를 사용한 비공개 이미지 사용**:

   - 비공개 이미지 사용 시, 먼저 `docker login` 명령어로 저장소에 로그인합니다.

   - 이후 비공개 저장소의 이미지를 사용하여 애플리케이션을 실행합니다.

4. **Kubernetes에서 비공개 이미지 사용**:

   - Pod 정의 파일에서 이미지 이름을 비공개 저장소의 전체 경로로 대체합니다.

   - Kubernetes가 비공개 저장소에 접근할 수 있도록 자격 증명을 전달하는 방법:

     - Docker 런타임에 자격 증명을 전달하기 위해 비밀 객체(Secret)를 생성합니다.

     - 비밀 객체의 유형은 `docker-registry`로 설정하고 이름은 `regcred`로 지정합니다.

     - 비밀 객체에 저장소 서버 이름, 사용자 이름, 비밀번호, 이메일 주소를 지정합니다.

     - 생성한 비밀 객체를 Pod 정의 파일의 `imagePullSecrets` 섹션에 지정합니다.
     
     - Pod가 생성되면, Kubernetes 또는 워커 노드의 kubelet이 비밀 객체의 자격 증명을 사용하여 이미지를 가져옵니다.

5. **예시 명령어 및 정의 파일**:

   - 비밀 객체 생성:
     ```bash
     kubectl create secret docker-registry regcred \
       --docker-server=<your-registry-server> \
       --docker-username=<your-username> \
       --docker-password=<your-password> \
       --docker-email=<your-email>
     ```

   - Pod 정의 파일에서 `imagePullSecrets` 섹션 추가:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: mypod
     spec:
       containers:
       - name: mycontainer
         image: <your-registry-server>/your-image:tag
       imagePullSecrets:
       - name: regcred
     ```

### 요약
Kubernetes에서 이미지를 보안하는 방법은 비공개 저장소를 사용하고, 자격 증명을 비밀 객체로 관리하여 이미지를 안전하게 가져오는 것입니다. 이를 통해 Kubernetes 클러스터에서 보안성을 유지할 수 있습니다.