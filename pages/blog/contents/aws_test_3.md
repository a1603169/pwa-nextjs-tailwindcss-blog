---
title: 'AWS 시험준비 - 3'
subtitle: 'Solution Architechture Associate'
date: '2024-03-22'
tags: [Cloud, CS]
---

### AWS 접근 방법

- AWS Management Console -> Password + MFA

- AWS Command Line Interface (CLI) -> Access Key 

- AWS Software Developer Kit (SDK) -> Access Key

세 가지가 있음.

`Access Key`는 `AWS Console에서 발급 가능`하고 각 유저들은 각 Access Key를 갖고 있음. `공유 ㄴㄴ`

Access Key ID(Username) + Secret Access Key(password) `공유하면 위험위험!`

### AWS SDK 란?

컴퓨터 언어로 이루어진 라이브러리 같은 것. 프로그래밍 적으로 접근 가능하게 해줌. 앱 내부에 embedded 되어 있음.

- SDKs : (JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, C++)

- Mobile SDKs : (Android, IOS, ...)

- IoT Device SDKs (Embedded C, Arduino, ...) 

이렇게 세 가지가 있어용 여러 언어로도 이루어져 있음.

### IAM Roles 

`유저가 AWS 서비스에 접근`하려면 이전 글에서 봤듯이 `IAM Role`을 설정 되어 있어야함. -> `권한`

예시: 
- EC2 인스턴스 역할

- Lambda 함수 역할

- CloudFormation 역할

`역할`이라고 읽고 `서비스 접근을 위한 권한이라고` 생각하면 됨.

### IAM 보안 도구 (로그인과 별도) (회사의 감사팀 같은것)

- IAM Credentials Report (계정): `모든 계정들의 유저들`의 다양한 권한 `상태를 보여주는 리포트`

- IAM Access Advisor (유저): `유저들에게 허용된 서비스 권한`들과 `언제 마지막으로 접근`했는지를 보여줌. 


**`계정 >>>> 유저`**
**`최소한의 권한 === 더 좋음!`**

### IAM 가이드라인 / 모범 사례

- 루트 유저 사용 지양

- 한 physical 유저에게 한 AWS 유저 할당

- 그룹단위 권한 관리

- 짱쎈 비밀번호 규칙

- MFA 사용 추천

- 역할을을 통해 AWS 서비스에 권한을 부여

- 프로그래밍 적인 접근을 위한 Access Keys 사용 

- 최소한의 권한부여를 위한 보안 도구 2개 사용(위에 있는거)

- 쉐어 금지

뭔가 당연한 이야기긴하지만 그래도 중요함.