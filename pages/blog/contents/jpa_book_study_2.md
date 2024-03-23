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

SQL에서는 상속을 `직접적으로 표현할 수 없습니다.` 대신, 각각의 테이블을 만들고 `JOIN을 사용하여 관계`를 표현하던 혹은
`슈퍼타입 서브타입 관계`를 표현하여 `객체 상속과 가장 유사한 형태`로 테이블을 설계할 수는 있다.
그리고 그 `조회된 결과를 객체로 저장하는 방식`으로 나아갑니다. (소모 비용이 굉장히 큼)


1. `슈퍼타입-서브타입 관계`: 이 관계는 `객체 지향 프로그래밍의 상속 개념과 유사`합니다. 슈퍼타입은 `공통의 속성`을 가지고 있고, 서브타입은 `슈퍼타입의 속성을 상속`받아 `추가적인 속성`을 가질 수 있습니다. 이 관계는 `"is-a" 관계`로, 예를 들어 `"Dog is an Animal"`과 같이 표현할 수 있습니다.

2. `JOIN 관계`: 이 관계는 관계형 데이터베이스에서 `두 테이블 간의 관계를 표현`하는 데 사용됩니다. JOIN 연산을 사용하면 `두 테이블의 행을 연결하여 새로운 결과 집합을 생성`할 수 있습니다. 이 관계는 `"has-a"` 관계로, 예를 들어 `"Order has a Customer"`과 같이 표현할 수 있습니다.



```sql

-- How to use JOIN for Inheritance
CREATE TABLE Animal (
    ID LONG PRIMARY KEY,
    NAME VARCHAR(255)
);

CREATE TABLE Dog (
    ID LONG PRIMARY KEY,
    BREED VARCHAR(255)
);
-- then
SELECT *
FROM Dog d
JOIN Animal a ON d.ID = a.ID
WHERE d.ID = ?


---------------

-- How to use Super and Sub type relationship for Inheritance

CREATE TABLE Animal (
    ID INT PRIMARY KEY,
    NAME VARCHAR(100)
);

CREATE TABLE Dog (
    ANIMAL_ID INT PRIMARY KEY REFERENCES Animal(ID),
    BREED VARCHAR(100)
);

CREATE TABLE Cat (
    ANIMAL_ID INT PRIMARY KEY REFERENCES Animal(ID),
    COLOR VARCHAR(100)
);
```

이걸 객체 모델 코드로서는

```java

abstract class Animal {
  Long id;
  String name;
}

class Dog extends Animal {
  String dogBreed;
  String color;
}

class Cat extends Animal {
  String catBreed;
  String color;
}
```

이런식으로 됩니다.

JDBC API로 코드를 완성하려면 부모용 Insert 자식용 Insert 필요하며, DTYPE 설정도 필요하다. 소모 비용 굉장히 높습니다.

- *DTYPE* : DTYPE은 JPA에서 단일 테이블 상속 전략을 사용할 때, 각 행이 어떤 서브타입에 속하는지를 나타내는 역할을 하는 컬럼입니다. 이 컬럼은 디스크리미네이터(차별/식별) 컬럼이라고도 부릅니다. 단일 테이블 상속 전략에서는 `슈퍼타입과 모든 서브타입에 대한 데이터가 하나의 테이블에 저장`됩니다. 디스크리미네이터 컬럼은 이 테이블의 `각 행이 어떤 서브타입의 인스턴스인지를 나타내는 역할`을 합니다.


더 쉬운 방법은 JPA에서는 `@Inheritance` 어노테이션을 사용하여 상속을 표현할 수 있습니다.

이 어노테이션은 클래스 간의 상속 관계를 데이터베이스 스키마에 매핑하는 방법을 정의합니다. 

JPA는 세 가지 상속 전략을 제공합니다:

1. `단일 테이블 전략 (InheritanceType.SINGLE_TABLE)`: 이 전략을 사용하면, 상위 클래스와 모든 하위 클래스에 대한 데이터가 단일 테이블에 저장됩니다. 이 테이블에는 각 하위 클래스의 속성을 나타내는 컬럼들이 포함되며, 특정 행이 어떤 하위 클래스의 인스턴스인지를 나타내는 디스크리미네이터 컬럼이 추가됩니다.

2. `조인 전략 (InheritanceType.JOINED)`: 이 전략을 사용하면, 상위 클래스와 각 하위 클래스에 대한 데이터가 각각의 테이블에 저장됩니다. 하위 클래스의 테이블은 상위 클래스의 테이블과 JOIN을 통해 연결됩니다.

3. `테이블 당 클래스 전략 (InheritanceType.TABLE_PER_CLASS)`: 이 전략을 사용하면, 각 하위 클래스에 대한 데이터가 각각의 테이블에 저장됩니다. 이 테이블에는 상위 클래스의 속성을 나타내는 컬럼들과 하위 클래스의 속성을 나타내는 컬럼들이 모두 포함됩니다.



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

객체 지향에서 좋은 연관관계 설명은 `참조`를 사용하는 것이다.

#### 객체 지향의 연관성과 테이블 연관성의 차이

- 방향성: 객체의 연관관계는 방향성을 가집니다. 즉, 한 객체에서 다른 객체로의 참조가 있을 때, 이 참조는 `한 방향`으로만 작동합니다. 반면에 테이블의 연관관계는 `양방향`입니다. 외래 키를 사용하여 두 테이블을 연결하면, 어느 쪽에서든 다른 쪽을 참조할 수 있습니다.

##### 객체 지향의 방향성 예시

animal.getDogName() 은 가능 하지만 반대 방향인 dog.getAnimal()는 불가능!
참조가 있어야합니다.

- 다중성: 객체의 연관관계는 다중성을 가질 수 있습니다. 즉, `한 객체가 여러 객체를 참조(1:1 / 1:N / N:1 / N:N)`할 수 있습니다. 반면에 테이블의 연관관계는 `외래 키를 통해 한 행이 다른 행`을 참조하므로, `1:1 또는 N:1 관계만 표현`할 수 있습니다.

##### 객체 지향의 연관성 예시

1. 1:1 관계: 한 객체가 다른 객체를 하나만 참조합니다. 예를 들어, User 객체와 Profile 객체 사이에 1:1 관계가 있을 수 있습니다.

2. 1:N 관계: 한 객체가 여러 객체를 참조합니다. 예를 들어, User 객체와 Order 객체 사이에 1:N 관계가 있을 수 있습니다.

3. N:1 관계: 여러 객체가 한 객체를 참조합니다. 예를 들어, Order 객체와 User 객체 사이에 N:1 관계가 있을 수 있습니다.

4. N:N 관계: 여러 객체가 여러 객체를 참조합니다. 예를 들어, Student 객체와 Course 객체 사이에 N:N 관계가 있을 수 있습니다.

JPA(해결방법)에서는 `@ManyToOne` 또는 `@OneToMany` 등의 어노테이션을 사용하여 연관성을 표현합니다.

```java
@Entity
public class Animal {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "animal")
    private List<Dog> dogs;
    // getters and setters
}

@Entity
public class Dog {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    // 이게 있으니 dog.getAnimal() 가능! JPA 의 해결방안의 예시임.
    @ManyToOne
    private Animal animal;
    // getters and setters
}
```

개발자가 중간에서 변화 역할을 잘해야함

**`객체는 외래 키 X But 참조 필요`**
**`테이블은 참조 X But 외래 키 필요`**


#### 데이터 타입 예시

SQL에서는 `제한된 데이터 타입`만 사용할 수 있습니다.

```sql
CREATE TABLE User (
    ID INT PRIMARY KEY,
    NAME VARCHAR(100),
    BIRTHDAY DATE
);
```
객체 지향 프로그래밍에서는 클래스를 사용하여 복잡한 데이터 타입을 쉽게 표현할 수 있습니다.

```java
public class User {
    private String name;
    private Birthday birthday;
    // getters and setters
}
```
이 User 클래스는 `name 필드와 birthday 필드`를 가지며, birthday 필드의 타입은 Birthday입니다. 이렇게 객체 지향 프로그래밍에서는 `클래스를 사용하여 복잡한 데이터 타입을 쉽게 표현`할 수 있습니다.

객체 지향적인 표현 방식은 `관계형 데이터베이스와는 잘 맞지 않습니다`. 관계형 데이터베이스에서는 `테이블의 각 컬럼이 기본 데이터 타입`을 가지며, `사용자 정의 데이터 타입을 직접 지원하지 않습니다`.

이러한 패러다임의 불일치를 해결하기 위해, JPA에서는 `@Embeddable`과 `@Embedded` 어노테이션을 사용하여 사용자 정의 타입을 만들 수 있습니다.
이 어노테이션들을 사용하면 사용자 정의 데이터 타입을 관계형 데이터베이스에 매핑할 수 있습니다.

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