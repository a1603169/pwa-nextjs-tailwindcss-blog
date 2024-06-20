--- 
title: 'Certified Kubernetes Administration - 18'
subtitle: 'k8s certification tips'
date: '2024-06-20'
tags: [Kubernetes, Cloud]
---


### 인증 시험 팁 - `kubectl`을 사용한 명령형 명령어

정의 파일을 사용하는 선언형 방식으로 주로 작업하겠지만, 명령형 명령어는 일회성 작업을 빠르게 수행하고 정의 템플릿을 쉽게 생성할 수 있습니다. 이는 시험 중에 상당한 시간을 절약하는 데 도움이 될 것입니다.

아래 명령어를 사용하기 전에 두 가지 유용한 옵션에 익숙해지세요:


- **--dry-run**: 기본적으로 명령어가 실행되면 리소스가 생성됩니다. 단순히 명령어를 테스트하고 싶다면 `--dry-run=client` 옵션을 사용하세요. 이는 리소스를 생성하지 않고, 명령어가 올바른지 여부를 알려줍니다.

- **-o yaml**: 리소스 정의를 YAML 형식으로 화면에 출력합니다.

위의 두 옵션을 결합하여 리소스 정의 파일을 빠르게 생성한 후 필요에 따라 수정하고 리소스를 생성할 수 있습니다. 파일을 처음부터 생성하는 대신 이렇게 하는 것이 좋습니다.

### 파드 (POD)

- **NGINX 파드 생성**
  ```bash
  kubectl run nginx --image=nginx
  ```


- **파드 매니페스트 YAML 파일 생성 (-o yaml). 생성하지 않음 (--dry-run)**
  ```bash
  kubectl run nginx --image=nginx --dry-run=client -o yaml
  ```

### 디플로이먼트 (Deployment)

- **디플로이먼트 생성**
  ```bash
  kubectl create deployment --image=nginx nginx
  ```


- **디플로이먼트 YAML 파일 생성 (-o yaml). 생성하지 않음 (--dry-run)**
  ```bash
  kubectl create deployment --image=nginx nginx --dry-run=client -o yaml
  ```


- **4개의 복제본을 가진 디플로이먼트 생성**
  ```bash
  kubectl create deployment nginx --image=nginx --replicas=4
  ```


- **kubectl scale 명령어를 사용하여 디플로이먼트 확장**
  ```bash
  kubectl scale deployment nginx --replicas=4
  ```


- **YAML 정의 파일로 저장하고 수정**
  ```bash
  kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > nginx-deployment.yaml
  ```


- **YAML 파일을 수정하여 복제본 또는 기타 필드를 업데이트한 후 디플로이먼트 생성**

### 서비스 (Service)

- **redis 파드를 포트 6379에서 노출하는 ClusterIP 타입의 redis-service 생성**
  ```bash
  kubectl expose pod redis --port=6379 --name redis-service --dry-run=client -o yaml
  ```

  (이 명령어는 자동으로 파드의 레이블을 셀렉터로 사용합니다.)

  또는

  ```bash
  kubectl create service clusterip redis --tcp=6379:6379 --dry-run=client -o yaml
  ```

  (이 명령어는 파드의 레이블을 셀렉터로 사용하지 않고, 기본적으로 `app=redis` 셀렉터를 가정합니다. 따라서 파드에 다른 레이블이 설정되어 있다면 적합하지 않습니다. 파일을 생성한 후 셀렉터를 수정하여 서비스를 생성하세요.)


- **nginx 파드의 포트 80을 노드의 포트 30080에서 노출하는 NodePort 타입의 nginx 서비스 생성**
  ```bash
  kubectl expose pod nginx --type=NodePort --port=80 --name=nginx-service --dry-run=client -o yaml
  ```

  (이 명령어는 자동으로 파드의 레이블을 셀렉터로 사용하지만, 노드 포트를 지정할 수 없습니다. 정의 파일을 생성한 후 노드 포트를 수동으로 추가하여 서비스를 생성해야 합니다.)

  또는

  ```bash
  kubectl create service nodeport nginx --tcp=80:80 --node-port=30080 --dry-run=client -o yaml
  ```

  (이 명령어는 파드의 레이블을 셀렉터로 사용하지 않습니다.)

위 두 명령어는 각각의 단점이 있습니다. 하나는 셀렉터를 수락할 수 없고, 다른 하나는 노드 포트를 수락할 수 없습니다. `kubectl expose` 명령어를 사용하는 것이 좋습니다. 노드 포트를 지정해야 하는 경우, 동일한 명령어를 사용하여 정의 파일을 생성하고 노드 포트를 수동으로 입력한 후 서비스를 생성합니다.

### 참고 자료:

<span class='blogLink'>[Kubernetes 명령어 참조](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)</span>

<span class='blogLink'>[Kubernetes kubectl 규칙](https://kubernetes.io/docs/reference/kubectl/conventions/)</span>