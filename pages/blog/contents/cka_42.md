--- 
title: 'Certified Kubernetes Administration - 42'
subtitle: 'k8s Backup and Restore'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### 쿠버네티스 백업 및 복원 방법

- **백업 대상**
  
  - etcd 클러스터: 모든 클러스터 관련 정보 저장
  
  - 퍼시스턴트 스토리지: 애플리케이션이 설정된 경우 백업 필요


- **리소스 구성 백업**
  
  - 선언적 접근법: 객체 정의 파일을 만들어 kubectl apply 명령어로 실행. 이는 구성 파일을 폴더에 저장하여 재사용하거나 공유 가능.
  
  - 소스 코드 저장소에 저장: 팀이 유지 관리할 수 있으며, 적절한 백업 솔루션 설정 필요.
  
  - 명령어 접근법: kubectl을 사용하여 명령어로 객체 생성 (네임스페이스, 시크릿, 컨피그맵 등).


- **백업 방법**
  
  - **Kube API 서버 쿼리**
    
    - kubectl get all 명령어를 사용하여 모든 네임스페이스의 모든 리소스를 YAML 형식으로 출력하여 파일로 저장.
    
    - 자동화 도구 사용: Ark(현재 Velero)와 같은 도구는 Kubernetes API를 사용하여 백업 수행 가능.
  
  - **etcd 백업**
    
    - etcd 클러스터는 클러스터 상태에 대한 정보를 저장.
    
    - 데이터 디렉터리: 백업 도구로 설정된 디렉터리를 백업.
    
    - 스냅샷 명령어: etcdctl snapshot save 명령어로 스냅샷 생성. snapshot.db 파일로 생성됨.
    
    - 스냅샷 상태 확인: etcdctl snapshot status 명령어 사용.


- **etcd 복원**
  
  - Kube API 서버 서비스 중지.
  
  - etcdctl snapshot restore 명령어로 스냅샷 복원. 새로운 데이터 디렉터리가 생성됨.
  
  - etcd 설정 파일에서 새로운 데이터 디렉터리 사용하도록 구성.
  
  - 서비스 데몬 재로드 후 etcd 서비스 재시작.
  
  - Kube API 서버 서비스 시작.
  
  - 인증을 위한 인증서 파일과 etcd 클러스터의 엔드포인트 및 CS 인증서, etcd 서버 인증서, 키를 지정해야 함.


- **관리형 쿠버네티스 환경**
  
  - 관리형 환경에서는 etcd 클러스터에 접근할 수 없을 수 있음.
  
  - 이 경우 Kube API 서버를 쿼리하여 백업하는 것이 더 나은 방법.

### 요약

- **백업 대상**
  
  - etcd 클러스터와 퍼시스턴트 스토리지

- **리소스 구성 백업**
  
  - 선언적 접근법: 객체 정의 파일을 사용
  
  - 소스 코드 저장소에 저장하여 팀이 유지 관리
  
  - 명령어 접근법: kubectl 명령어로 객체 생성

- **백업 방법**
  
  - Kube API 서버 쿼리: kubectl get all 명령어 사용
  
  - 자동화 도구: Velero 등 사용
  
  - etcd 백업: etcdctl snapshot save 명령어 사용

- **etcd 복원**
  
  - Kube API 서버 서비스 중지 후 etcdctl snapshot restore 명령어 사용
  
  - etcd 설정 파일 수정 및 서비스 재시작
  
  - 인증서 파일과 클러스터 엔드포인트 지정 필요

- **관리형 쿠버네티스 환경**
  
  - etcd 클러스터 접근 불가 시 Kube API 서버 쿼리하여 백업