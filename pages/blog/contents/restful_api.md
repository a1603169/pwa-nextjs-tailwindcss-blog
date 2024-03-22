---
title: 'Restful한 API 설계란'
subtitle: 'Restful API 아키텍쳐의 설계'
date: '2024-03-21'
tags: [BE, FE]
---

RESTful API 설계는 웹 서비스를 구축할 때 중요한 부분 중 하나입니다. REST(Representational State Transfer)는 웹의 기본 프로토콜인 HTTP를 사용하여 클라이언트와 서버 간의 통신을 설계하는 아키텍처 스타일입니다. RESTful API를 설계할 때는 `명확하고 직관적인 엔드포인트와 메서드`를 정의하여, `사용자가 기대하는 바와 일치`하도록 만들어야 합니다. 다음은 RESTful API 설계 시 고려해야 할 몇 가지 주요 원칙입니다.

### 1. 자원(Resource)의 식별

- API에서 다루는 모든 것은 자원(Resource)이며, 각 자원은 고유한 URI(Uniform Resource Identifier)로 식별되어야 합니다.
- 자원을 나타내는 URI는 명사를 사용하여 표현하는 것이 좋습니다. 예를 들어, 사용자 정보에 접근하는 경우 `/users`와 같은 형태를 사용합니다.

### 2. 표준 HTTP 메서드의 사용

- RESTful API는 표준 HTTP 메서드를 사용하여 자원에 대한 CRUD(Create, Read, Update, Delete) 작업을 수행합니다.
- 주로 사용되는 HTTP 메서드는 `GET`(읽기), `POST`(생성), `PUT`(갱신), `DELETE`(삭제)입니다.
- `GET` 메서드는 서버에서 자원을 조회할 때 사용되며, 부작용(side effect)이 없어야 합니다.

### 3. 자원 상태의 표현

- 클라이언트가 서버와 통신할 때 전송하는 자원의 상태(데이터)는 JSON, XML 같은 형식을 통해 표현됩니다.
- JSON은 가독성이 높고 사용이 간편하여 널리 사용되는 포맷입니다.

### 4. 상태 코드의 적절한 사용

- API 응답에는 HTTP 상태 코드를 포함하여 요청의 성공 여부와 그 이유를 명시해야 합니다.
- 예를 들어, 성공적인 GET 요청은 `200 OK`, 새로운 자원 생성은 `201 Created`, 잘못된 요청은 `400 Bad Request`, 권한 없는 접근은 `401 Unauthorized`와 같은 상태 코드를 반환합니다.

### 5. RESTful API 설계 예시

#### 사용자 정보 조회

- **목적**: 특정 사용자의 정보를 조회
- **URI**: `/users/{id}`
- **메서드**: `GET`
- **응답 예**:
    ```json
    {
        "id": 1,
        "name": "홍길동",
        "email": "hong@example.com"
    }
    ```

#### 새로운 사용자 생성

- **목적**: 새로운 사용자 생성
- **URI**: `/users`
- **메서드**: `POST`
- **요청 본문 예**:
    ```json
    {
        "name": "이순신",
        "email": "lee@example.com"
    }
    ```
- **응답 예**:
    ```json
    {
        "id": 2,
        "name": "이순신",
        "email": "lee@example.com"
    }
    ```

RESTful API를 설계할 때는 이러한 원칙을 지키면서도, API를 사용하는 사용자의 관점에서 가장 직관적이고 편리한 방법을 고민해야 합니다. 효율적인 API는 개발자가 시스템을 쉽게 이해하고 사용할 수 있게 하며, 최종적으로 더 나은 사용자 경험을 제공합니다.