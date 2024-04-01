---
title: 'AWS Solution Architechture Associate 시험준비 - 2'
subtitle: 'IAM (feat. MFA)'
date: '2024-03-22'
tags: [Cloud, CS]
---


### IAM User & Groups

`사용자를 구분하여 권한을 나눠줌` / `글로벌`한 서비스

- Root Account : 짱짱쎈 전체 권한 다 가진 디폴트 생성된 계정

- Users : Organization 안에 있는 사람들 - 그룹화 가능

- Groups : Users를 포함하는 그룹

```bash
// Example -> Group : Users
Dev : A, B, C
Design : C, D, E
Operations : A, E 
```

이런식으로 역할 그룹 겹치는 거 가능함.

### IAM Permissions

- `JSON 문서`로 유저와 그룹에게 권한부여 가능
- **`최소한의 권한`** 만 주는 것이 좋음! `필요이상 권한 -> 위험성 UP`

```json
// S3 버킷에 대한 특정 권한을 부여하는 JSON 예시
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::examplebucket/*"
      ]
    }
  ]
}
```


### IAM Policies 

IAM policies 문서에서 사용되는 주요 요소 (Statement, id, Version 이외)

참고로 `Statement`는 필수임.

- `Sid (Statement ID)`: 정책 문서 내의 개별 권한 문장을 식별하는 선택적 식별자입니다. Sid는 정책 문서 내에서 유일해야 하며, 주로 문장을 참조하거나 문장을 필터링하는 데 사용됩니다.

- `Effect`: 권한 문장이 허용("Allow") 또는 거부("Deny")하는 작업을 지정합니다. "Allow"는 지정된 작업을 허용하고, "Deny"는 지정된 작업을 거부합니다.

- `Principal`: 권한 문장이 적용되는 AWS 사용자, 그룹, 역할 또는 서비스를 지정합니다. IAM 정책에서는 이 요소가 일반적으로 생략되며, 대신 정책이 연결된 IAM 항목이 주체가 됩니다. S3 버킷 정책, SNS 주제 정책 등에서 주로 사용됩니다.

- `Action`: 권한 문장이 적용되는 AWS 서비스의 작업을 지정합니다. 작업은 서비스 접두사와 작업 이름으로 구성된 문자열입니다. 예를 들어, "s3:PutObject"는 Amazon S3의 PutObject 작업을 나타냅니다.

- `Resource`: 권한 문장이 적용되는 AWS 리소스를 지정합니다. 리소스는 Amazon Resource Name (ARN)으로 지정됩니다.

- `Condition`: 권한 문장이 적용되는 조건을 지정합니다. 조건은 조건 연산자와 조건 키, 조건 값으로 구성됩니다. 예를 들어, 특정 IP 주소 범위에서만 작업을 허용하는 조건을 지정할 수 있습니다.

이런것들이 있다라고 넘어가면 됨.

### MFA (Multi Factor Authentication)

추가 보안책 중의 하나.

`Root Accounts`와 `IAM users`를 보호하고 싶을 때 사용 가능함.

MFA = 비번 + 추가 보안기기 -> `넥슨 로그인` 생각하면 편함 (OTP 느낌)

- Virtual MFA device: Google Authenticator / Authy -> 앱 개념
  
- Universal 2nd Factore (U2F) Security Key: `YubiKey` 등 -> USB 처럼 생김 혹은 은행에서 쓰는것 처럼 생긴 것도 있음.






