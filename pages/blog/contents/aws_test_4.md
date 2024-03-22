---
title: 'AWS 시험준비 - 4'
subtitle: 'Solution Architechture Associate'
date: '2024-03-22'
tags: [Cloud, CS]
---

### EC2 기본

- 인기 짱 많음
- Elastic Compute Cloud(탄력적 컴퓨팅 클라우드)의 줄임말 (Infrastructure as a Service)
- **`EC2의 메인기능들이 뭐임`**
  - Virutal Machine 빌려줌 (`EC2`)
  - Virtual Drive에 data 저장 (`EBS`)
  - 머신들에게 부하를 분산시킴 (`ELB`)
  - 서비스의 자동 스케일링 (`ASG`)
- Cloud의 기본을 알기위한 가장 근본적인 방법 -> EC2 이해하면 됨.

### EC2 설정 옵션들

- OS: Linux, Windows, MacOs
- CPU 
- RAM
- `Storage Space `
  - Network-attached (EBS & EFS) `네트워크 부착용 저장공간`
  - Hardware (EC2 Instance Store) `하드웨어`용
- Network card: Card의 스피드, Public IP 주소 (외부용)
- `Firewall` 규칙: `보안` 그룹
- Bootstrap script (첫 실행용 설정): `EC2 User Data`

이런게 있슴다라고 넘기기 ㄱ

### EC2 User Data란

- 아까 `첫 실행용 설정` : `Bootstrap Script` 입니당.
- 첫 스타트, 한번만 실행됨.
- 자동 부팅 관련 tasks에 사용됨
  - 업데이트 및 소프트웨어 설치
  - 인터넷에서 필요 파일 다운
  - 그냥 니가 생각할 수 있는 모든 것
- User Data Script는 `Root user`가 해야함. (`명령문도 sudo`)


