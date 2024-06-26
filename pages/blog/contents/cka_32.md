--- 
title: 'Certified Kubernetes Administration - 32'
subtitle: 'k8s Rolling Updates and Rollbacks'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes에서 배포의 업데이트 및 롤백

- **롤아웃 및 버전 관리**:
  
  - 배포를 처음 생성하면 롤아웃이 트리거되고 새로운 배포 리비전이 생성됨 (예: 리비전 1).
  
  - 애플리케이션을 업그레이드할 때마다 새로운 롤아웃이 트리거되고 새로운 배포 리비전이 생성됨 (예: 리비전 2).
  
  - 이를 통해 배포의 변경 사항을 추적하고 필요 시 이전 버전으로 롤백 가능.


- **롤아웃 상태 확인**:
  
  - 롤아웃 상태 보기: `kubectl rollout status <배포 이름>`
  
  - 롤아웃 리비전 및 역사 보기: `kubectl rollout history <배포 이름>`


- **배포 전략**:

  1. **재생성(Recreate) 전략**:
     
     - 모든 인스턴스를 종료하고 새 버전을 배포.
     
     - 애플리케이션이 다운타임 동안 사용자에게 접근 불가능.
  2. **롤링 업데이트(Rolling Update) 전략**:
     
     - 하나씩 구 버전을 종료하고 신 버전을 배포.
     
     - 애플리케이션이 다운되지 않고 원활하게 업그레이드.
     
     - 기본 배포 전략.


- **배포 업데이트 방법**:
  
  - 배포 정의 파일을 수정하고 `kubectl apply` 명령어로 변경 사항 적용.
  
  - `kubectl set image` 명령어로 애플리케이션 이미지 업데이트 가능.
  
  - 두 방법은 차이가 있으며, 정의 파일을 사용할 때 주의 필요.


- **업데이트 및 롤백 명령어**:
  
  - 배포 상세 정보 보기: `kubectl describe deployment <배포 이름>`
  
  - 롤아웃 상태 보기: `kubectl rollout status <배포 이름>`
  
  - 이미지 업데이트: `kubectl set image <배포 이름> <컨테이너 이름>=<이미지>`
  
  - 롤백: `kubectl rollout undo <배포 이름>`


- **배포 하위 구조**:
  
  - 새로운 배포 생성 시, 자동으로 레플리카셋 생성 및 포드 배포.
  
  - 업그레이드 시, 새로운 레플리카셋 생성 및 포드 배포, 기존 포드는 롤링 업데이트 전략에 따라 단계적으로 제거.


- **롤백 시나리오**:
  
  - 업그레이드 후 문제가 발생하면 이전 리비전으로 롤백 가능.
  
  - 롤백 전후 레플리카셋 상태 비교: `kubectl get replica sets`
  
  - 롤백 전: 새로운 레플리카셋에 포드, 이전 레플리카셋에 포드 없음.
  
  - 롤백 후: 이전 레플리카셋에 포드, 새로운 레플리카셋에 포드 없음.


- **주요 명령어 요약**:
  
  - 배포 생성: `kubectl create <배포 정의 파일>`
  
  - 배포 목록 보기: `kubectl get deployments`
  
  - 배포 업데이트: `kubectl apply <배포 정의 파일>`, `kubectl set image <배포 이름> <컨테이너 이름>=<이미지>`
  
  - 롤아웃 상태 보기: `kubectl rollout status <배포 이름>`
  
  - 롤백: `kubectl rollout undo <배포 이름>`

### 요약

- Kubernetes에서 배포는 롤아웃 및 리비전을 통해 버전을 관리하고, 문제 발생 시 이전 버전으로 롤백할 수 있음.

- 기본 배포 전략은 롤링 업데이트로, 애플리케이션 다운타임을 최소화함.

- 배포를 업데이트하고 롤백하는 명령어를 통해 Kubernetes 배포를 효율적으로 관리 가능.