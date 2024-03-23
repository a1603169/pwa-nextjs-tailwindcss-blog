---
title: "Java ORM 표준 JPA 프로그래밍 스터디 - 2"
subtitle: "JPA 스터디"
date: "2024-03-23"
tags: [Java, Spring, JPA]
---

### 패러다임의 불일치

"패러다임의 불일치"는 객체 지향 프로그래밍과 관계형 데이터베이스 사이에 존재하는 근본적인 문제를 가리킵니다. 객체 지향 프로그래밍은 상태와 행동을 가진 객체를 중심으로 프로그래밍하는 반면, 관계형 데이터베이스는 테이블과 행을 중심으로 데이터를 저장하고 조작합니다. 이 두 시스템 사이에는 몇 가지 주요한 불일치 문제가 있습니다:

- 상속: 객체 지향 프로그래밍에서는 `클래스 간에 상속 관계`를 가질 수 있지만, 관계형 데이터베이스에서는 이를 `직접적으로 표현할 방법이 없습니다`.

- 연관성: 객체 지향 프로그래밍에서는 `객체 간에 연관 관계`를 가질 수 있지만, 관계형 데이터베이스에서는 `외래 키를 사용하여 간접적으로만 표현`할 수 있습니다.

- 데이터 타입: 객체 지향 프로그래밍에서는 `사용자 정의 타입`을 만들 수 있지만, 관계형 데이터베이스에서는 `제한된 데이터 타입`만 사용할 수 있습니다.

JPA(Java Persistence API)는 이러한 패러다임의 불일치 **`문제를 해결하기 위해 만들어진 ORM(Object-Relational Mapping) 프레임워크`** 입니다. JPA를 사용하면 개발자는 SQL 쿼리를 직접 작성하지 않고, 대신 **`객체 지향적인 방법으로 데이터베이스와 상호작용`** 할 수 있습니다. 이로써 상속, 연관성, 데이터 타입 등의 패러다임 불일치 문제를 해결할 수 있습니다.

### 불일치 상속/연관성/데이터타입 예시

#### 상속 예시

SQL에서는 상속을 `직접적으로 표현할 수 없습니다.` 대신, 각각의 테이블을 만들고 `JOIN을 사용하여 관계를 표현`해야 합니다.
그리고 그 `조회된 결과를 객체로 저장하는 방식`으로 나아갑니다. (소모 비용이 굉장히 큼)

```sql
CREATE TABLE Animal (
    ID LONG PRIMARY KEY,
    NAME VARCHAR(255)
);

CREATE TABLE Dog (
    ID LONG PRIMARY KEY,
    BREED VARCHAR(255)
);
-----
SELECT *
FROM Dog d
JOIN Animal a ON d.ID = a.ID
WHERE d.ID = ?
```

반면에 JPA에서는 `@Inheritance` 어노테이션을 사용하여 상속을 표현할 수 있습니다.

```java
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Animal {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    // getters and setters
}

@Entity
public class Dog extends Animal {
    private String breed;
    // getters and setters
}
```

#### 연관성 예시

SQL에서는 `외래 키`를 사용하여 `연관성`을 표현합니다.

```sql
CREATE TABLE Order (
    ID INT PRIMARY KEY,
    USER_ID INT REFERENCES User(ID)
);
```

JPA에서는 `@ManyToOne` 또는 `@OneToMany` 등의 어노테이션을 사용하여 연관성을 표현합니다.

```java
@Entity
public class Order {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;
    // getters and setters
}
```

#### 데이터 타입 예시

SQL에서는 `제한된 데이터 타입`만 사용할 수 있습니다.

```sql
CREATE TABLE User (
    ID INT PRIMARY KEY,
    NAME VARCHAR(100),
    BIRTHDAY DATE
);
```


JPA에서는 `@Embeddable`과 `@Embedded` 어노테이션을 사용하여 사용자 정의 타입을 만들 수 있습니다.

```java
@Embeddable
public class Birthday {
    private int year;
    private int month;
    private int day;
    // getters and setters
}

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @Embedded
    private Birthday birthday;
    // getters and setters
}
```