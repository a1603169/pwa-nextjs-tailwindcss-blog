---
title: "Java ORM 표준 JPA 프로그래밍 스터디 - 3"
subtitle: "JPA 스터디"
date: "2024-03-23"
tags: [Java, Spring, JPA]
---

### 객체 그래프 탐색

JPA는 객체 지향 프로그래밍의 개념을 관계형 데이터베이스에 매핑하는 기술입니다. 이를 통해 개발자는 객체 지향적인 방식으로 데이터를 다룰 수 있습니다. 이러한 객체 지향적인 접근 방식 중 하나가 바로 객체 그래프 탐색입니다.

객체 그래프 탐색이란 한 객체에서 시작하여 연관된 객체를 참조를 통해 탐색하는 것을 말합니다. 예를 들어, Order 객체가 User 객체를 참조하고 있고, User 객체가 Profile 객체를 참조하고 있다면, Order 객체에서 시작하여 User 객체와 Profile 객체를 차례대로 탐색할 수 있습니다.

```java
Order order = ...;
User user = order.getUser();
Profile profile = user.getProfile();
```

이렇게 객체 그래프를 탐색하면, 관련된 객체를 쉽게 조회할 수 있습니다. 이는 객체 지향 프로그래밍의 장점 중 하나입니다.

그러나 이러한 객체 그래프 탐색은 JPA에서 `"지연 로딩(Lazy Loading)"`과 `"즉시 로딩(Eager Loading)"`이라는 두 가지 전략을 통해 제어됩니다. 지연 로딩은 객체가 `실제로 사용될 때까지 로딩을 지연하는 전략`이며, 즉시 로딩은 객체 그래프의 `모든 객체를 즉시 로딩하는 전략`입니다. 이 두 전략은 `@ManyToOne, @OneToMany, @OneToOne, @ManyToMany 어노테이션의 fetch 속성을 통해 설정`할 수 있습니다. 이를 통해 개발자는 필요에 따라 성능과 데이터 접근성 사이의 균형을 맞출 수 있습니다.

### 객체 그래프 탐색 예시

```java
// Lazy Loading Example
// 연관된 엔티티를 실제로 사용할 때까지 로딩을 지연합니다. 이는 성능 최적화에 도움이 될 수 있습니다.
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders;
    // getters and setters
}
```


```java
// Eager Loading Example
// 연관된 엔티티를 즉시 로딩합니다. 이는 데이터 접근성을 높이지만, 필요하지 않은 데이터까지 로딩할 수 있으므로 성능에 영향을 줄 수 있습니다.
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Order> orders;
    // getters and setters
}
```

### 비교 

데이터 베이스는 값을 조회할 때, 로우 기준이라는데 객체 기준으로는 인스턴스가 다르기 대문에 동일성 비교에 실패한다

#### 예시

```sql
SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE id = 1;
```

위의 두 쿼리는 같은 users 테이블의 같은 로우(id = 1)를 조회하지만, 각 쿼리의 결과는 별개의 결과 세트입니다. 즉, 두 결과 세트는 동일한 데이터를 나타내지만, 동일성(identity)은 가지지 않습니다.


```java
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    // getters and setters
}

// JPA를 사용하여 User 엔티티를 두 번 조회합니다.
User user1 = entityManager.find(User.class, 1L);
User user2 = entityManager.find(User.class, 1L);

// user1과 user2는 같은 데이터베이스 행을 나타내지만, 다른 인스턴스입니다.
System.out.println(user1 == user2); // false
```

이러한 경우, `equals() 메소드를 오버라이드하여 동등성 비교를 수행하면 true`를 얻을 수 있습니다. 이는 equals() 메소드가 객체의 상태를 비교하기 때문입니다.

