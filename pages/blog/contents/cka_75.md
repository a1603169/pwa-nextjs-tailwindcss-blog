--- 
title: 'Certified Kubernetes Administration - 75'
subtitle: 'k8s / Ingress'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes Ingress 정리

### Ingress 개요

Ingress는 Kubernetes 클러스터 내의 여러 서비스에 대한 외부 접근을 관리하는 역할을 합니다. Ingress를 통해 URL 경로 기반의 라우팅, SSL/TLS 설정, 호스트 기반의 라우팅 등을 구성할 수 있습니다.

### Ingress와 서비스의 차이

- **서비스**: 클러스터 내부에서 파드 간의 통신을 관리합니다. `ClusterIP`, `NodePort`, `LoadBalancer` 등의 타입이 있으며, 외부 접근을 위해 `NodePort`나 `LoadBalancer`를 사용합니다.

- **Ingress**: 단일 진입점을 통해 여러 서비스로의 라우팅을 관리합니다. 일반적으로 L7 (애플리케이션 레벨) 로드 밸런서를 사용하여 URL 경로 기반의 라우팅을 지원합니다.

### Ingress 컨트롤러

Ingress 컨트롤러는 Ingress 리소스를 해석하고 적절한 라우팅 규칙을 설정하는 역할을 합니다. Kubernetes에는 기본적으로 
Ingress 컨트롤러가 포함되어 있지 않으므로, 직접 배포해야 합니다. 대표적인 Ingress 컨트롤러는 다음과 같습니다:

- **Nginx**: 가장 널리 사용되는 Ingress 컨트롤러 중 하나로, Kubernetes 프로젝트에서 공식 지원합니다.

- **GCE**: Google Cloud Platform에서 제공하는 L7 HTTP 로드 밸런서입니다.

- **Contour, HAProxy, Traefik, Istio**: 다양한 기능과 설정을 지원하는 다른 Ingress 컨트롤러들입니다.

### Ingress 설정 예시

1. **단일 백엔드 설정**
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: ingress-wear
   spec:
     rules:
     - host: myonlinestore.com
       http:
         paths:
         - path: /wear
           pathType: Prefix
           backend:
             service:
               name: wear-service
               port:
                 number: 80
   ```

2. **여러 경로 설정**
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: ingress-multiple
   spec:
     rules:
     - host: myonlinestore.com
       http:
         paths:
         - path: /wear
           pathType: Prefix
           backend:
             service:
               name: wear-service
               port:
                 number: 80
         - path: /watch
           pathType: Prefix
           backend:
             service:
               name: watch-service
               port:
                 number: 80
   ```

3. **호스트 기반 라우팅**
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: ingress-host-based
   spec:
     rules:
     - host: wear.myonlinestore.com
       http:
         paths:
         - path: /
           pathType: Prefix
           backend:
             service:
               name: wear-service
               port:
                 number: 80
     - host: watch.myonlinestore.com
       http:
         paths:
         - path: /
           pathType: Prefix
           backend:
             service:
               name: watch-service
               port:
                 number: 80
   ```

### Ingress 리소스 생성 명령

- **명령어 사용 예시**
  ```sh
  kubectl create ingress ingress-test --rule="wear.myonlinestore.com/wear*=wear-service:80"
  ```

### Ingress 리소스와 URL 리라이트

- URL 리라이트 옵션을 통해 사용자 요청 URL을 백엔드 서비스에 맞게 변환할 수 있습니다.
  ```yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: test-ingress
    namespace: critical-space
    annotations:
      nginx.ingress.kubernetes.io/rewrite-target: /
  spec:
    rules:
    - http:
        paths:
        - path: /pay
          pathType: Prefix
          backend:
            service:
              name: pay-service
              port:
                number: 8282
  ```

이러한 설정을 통해 Ingress를 사용하여 클러스터 내 다양한 서비스로의 접근을 효율적으로 관리할 수 있습니다. Ingress는 특히 대규모 애플리케이션에서 서비스 라우팅, SSL/TLS 설정, 로드 밸런싱 등을 단순화하는 데 유용합니다.