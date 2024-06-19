---
title: 'Certified Kubernetes Administration - 3'
subtitle: 'Basic ETCD'
date: '2024-06-19'
tags: [Kubernetes, Cloud]
---

### Key-Value Store와 전통적인 데이터베이스의 차이


- **전통적 데이터베이스**:
  
  - SQL 또는 관계형 데이터베이스
  
  - 행과 열로 구성된 테이블 형태로 데이터 저장
  
  - 새 정보 추가 시 전체 테이블에 영향을 주며, 빈 셀이 많이 생김



- **Key-Value Store**:
  
  - 각 개체가 문서 또는 페이지 형태로 저장됨
  
  - 개체마다 독립적인 파일로 정보 저장
  
  - 다른 파일에 영향을 주지 않고 정보 추가 가능
  
  - JSON 또는 YAML 형식으로 복잡한 데이터 저장 가능

### ETCD란?

- 분산형, 신뢰성 있는 Key-Value Store

- 단순하고, 안전하며, 빠름

- 분산 시스템, 클러스터 모드, RAFT 프로토콜, 노드 수에 대한 최적 실습에 대해 후속 강의에서 다룰 예정

### ETCD 설치 및 기본 사용 방법

1. **설치**:
   
   - GitHub Releases 페이지에서 운영체제에 맞는 바이너리 다운로드 후 추출
   
   - ETCD 실행 파일 실행
   
   - 기본 포트 2379에서 서비스 시작

2. **기본 클라이언트 도구**:
   
   - ETCDCTL: ETCD용 명령줄 클라이언트
   
   - 키-값 저장: `./etcdctl set key1 value1`
   
   - 값 조회: `./etcdctl get key1`
   
   - 추가 옵션 확인: `etcdctl` 명령어 실행

### ETCD 버전 및 API 변화


- **버전 역사**:
  
  - v0.1: 2013년 8월 출시
  
  - v2.0: 2015년 2월 출시, RAFT 합의 알고리즘 재설계, 초당 10,000개 이상의 쓰기 지원
  
  - v3.0: 2017년 1월 출시, 최적화 및 성능 개선
  
  - 2018년 11월: CNCF에 프로젝트 인큐베이션



- **API 버전 변화**:
  
  - v2.0과 v3.0 간 API 버전 변경
  
  - ETCDCTL 명령어도 이에 따라 변경

### ETCDCTL 명령어 사용


- **버전 확인**: `etcdctl version` 명령어로 ETCDCTL 및 API 버전 확인
  
  - ETCDCTL 유틸리티 버전과 설정된 API 버전 확인 가능



- **API 버전 변경**:
  
  - API v3.0으로 변경: 환경 변수 설정 필요 (`ETCDCTL_API=3`)
  
  - 전체 세션에 대해 설정: `export ETCDCTL_API=3` 명령어 사용



- **명령어 예시**:
  
  - API v2.0:
    
    - 값 저장: `./etcdctl set key1 value1`
    
    - 값 조회: `./etcdctl get key1`
  
  - API v3.0:
    
    - 값 저장: `./etcdctl put key1 value1`
    
    - 값 조회: `./etcdctl get key1`
