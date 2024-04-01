---
title: "Java ORM 표준 JPA 프로그래밍 스터디 - 6"
subtitle: "JPA 스터디"
date: "2024-04-01="
tags: [Java, Spring, JPA]
---

### 데이터베이스 방언 교체 

JPA에서 데이터베이스 방언을 교체하려면, persistence.xml 파일이나 Spring Boot의 application.properties 파일에서 데이터베이스 방언 설정을 변경하면 됩니다.

예를 들어, MySQL에서 PostgreSQL로 방언을 교체하려면 다음과 같이 설정을 변경할 수 있습니다:

#### persistence.xml:

```xml
<persistence-unit name="myPU">
    <properties>
        <!-- Other properties -->
        <!-- ... -->
        <!-- 원래 MySQL -->
        <!-- <property name="hibernate.dialect" value="org.hibernate.dialect.MySQLDialect"/> -->
        <!-- PostgresSQL 교체하기 -->
        <property name="hibernate.dialect" value="org.hibernate.dialect.PostgreSQLDialect"/>
    </properties>
</persistence-unit>
```

#### application.properties (Spring Boot Config): 

```conf
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
```

이 설정은 Hibernate가 사용하는 SQL 문법과 함수를 데이터베이스에 맞게 조정합니다. 각 데이터베이스 제품은 SQL 표준을 다르게 구현하므로, 이 설정은 JPA가 특정 데이터베이스에 맞게 동작하도록 합니다.

### 설정 완료 후 앱 시작

설정이 끝나고 jpa로 개발을 시작하려 했을 떄의 예시 코드 설명 

```java
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Application {

    public static void main(String[] args) {
        // Create EntityManagerFactory
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");

        // Create EntityManager
        EntityManager em = emf.createEntityManager();

        // Begin transaction
        EntityTransaction tx = em.getTransaction();

        try {
            // Get the api to begin transaction
            tx.begin();
            // Business logic
            // ...

            // Commit transaction
            tx.commit();
        } catch (Exception e) {
            // Rollback transaction if something goes wrong
            tx.rollback();
        } finally {
            // Close EntityManager
            em.close();
        }

        // Close EntityManagerFactory
        emf.close();
    }

}
```

해당 예시 코드는 3가지로 설명이 가능합니다.

1. **엔티티 매니저 설정**
2. **트랜잭션 관리**
3. **비즈니스 로직**

이 과정에 대해서 구체적으로 알아보겠습니다.

### 엔티티 `매니저 팩토리` 설정

JPA의 config인 **persistence.xml** 설정의 클래스를 사용하여 `JPA를 사용`할 수 있게 Entity Manager Factory를 생성합니다. 

```java
    // Create EntityManagerFactory
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");
```

이런식으로 **myPU** 인 영속성 유닛(persistence-unit)을 찾아서 Entity Manager Factory를 생성합니다.

persistenance.xml의 설정 정보를 따라 `JPA 동작을 위한 기반 개체`를 만들고, JPA 구현체에 따라서는 `데이터베이스 커넥션 풀`도 생성합니다.

이러한 과정에서 `발생하는 비용은 굉장히 크며`, Entity Manager Factory를 생성하는 과정은 앱 `전체에서 딱 한 번만 생성하고 공유`되어야 합니다.

#### 영속성 유닛?

영속성 유닛(Persistence Unit)은 **`JPA에서 데이터베이스 연결과 관련된 설정 정보를 그룹화하는 논리적인 개념`** 입니다. 이 설정 정보에는 데이터베이스 연결 정보, 엔티티 클래스, 트랜잭션 타입, 등등이 포함됩니다.

영속성 유닛은 `persistence.xml 파일에 정의`되며, `Persistence.createEntityManagerFactory() 메서드`에 영속성 유닛의 `이름을 인자로 전달`하여 EntityManagerFactory를 생성할 때 사용됩니다.

```xml
<persistence>
    <persistence-unit name="myPU">
        <class>com.example.MyEntity</class>
        <properties>
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/mydb"/>
            <property name="javax.persistence.jdbc.user" value="user"/>
            <property name="javax.persistence.jdbc.password" value="password"/>
            <!-- Other properties -->
        </properties>
    </persistence-unit>
</persistence>
```

이 코드에서 `myPU라는 이름의 영속성 유닛`이 정의되어 있습니다. 이 영속성 유닛은 `MyEntity 클래스를 포함`하며, `MySQL 데이터베이스에 연결하는 데 필요한 정보를 포함`하고 있습니다. 이 영속성 유닛을 사용하여 EntityManagerFactory를 생성하면, 이 설정에 따라 `데이터베이스 연결이 설정`됩니다.

### 엔티티 `매니저` 설정

```java
    // Create EntityManager
    EntityManager em = emf.createEntityManager();
```


Entity Manager Factory 에서 Entity Manager를 생성합니다. 

JPA의 대부분의 기능을 제공하는 매니저를 통해서 DB에 등록/수정/삭제/조회할 수 있습니다. 

내부에서는 DB Connection을 유지하며 통신합니다. (가상의 DB라고 생각할 수 있습니다)

이렇듯 Entity Manager는 DB Connection과 관련이 있으므로, **`스레드간에 공유하거나 재사용하면 안됩니다.`**

#### 왜 공유/재사용하면 안되는지 ?

1. **스레드 안전하지 않습니다:** 
   
   EntityManager는 `스레드 안전(thread-safe)`하지 않습니다. 즉, 여러 스레드에서 동시에 EntityManager를 사용하면 `예기치 않은 문제가 발생`할 수 있습니다.

2. **영속성 컨텍스트가 공유됩니다:** 
   
   EntityManager를 `공유하면 영속성 컨텍스트도 공유`됩니다. 이는 `각 스레드가 독립적으로 엔티티를 관리`할 수 없게 만듭니다. 예를 들어, 한 스레드에서 엔티티를 변경하면 다른 스레드에서도 그 변경이 반영됩니다. 파생되는 문제는 `데이터 불일치(A 스레드 변경 커밋 X -> B 스레드 반영 X 이런식으로 헷갈리게 됩니다)`, `동시성 문제(동시에 같은 엔티티 변경)`

#### 스레드 안전(Thread-Safety)?

스레드 안전(Thread-Safety)은 멀티 스레드 프로그래밍에서 `어떤 함수나 변수, 혹은 객체`가 여러 스레드로부터 `동시에 접근이 이루어져도 프로그램의 실행에 문제가 없음`을 의미합니다.

스레드 안전한 코드는 여러 스레드가 동시에 접근하더라도 각 스레드에서 예상한 대로 동작하며, 이러한 속성은 **`동시성 문제를 방지하는 데 중요`** 합니다.

스레드 안전을 보장하기 위해선 보통 **동기화(synchronization)** 기법을 사용합니다. 동기화는 한 번에 하나의 스레드만이 특정 코드에 접근할 수 있도록 제한하는 것을 의미합니다. 이는 공유 자원에 대한 동시 접근을 제어하고, 데이터 불일치 문제를 방지하는 데 도움이 됩니다. 

### 엔티티 매니저 & 매니저 팩토리 종료

```java
    // Close EntityManager
    em.close();

    // Close EntityManagerFactory
    emf.close();
```

DB 커넥션이 있는 Manager와 생성비용이 큰 ManagerFactory는 사용이 끝나면 `close()`메서드를 호출하여 리소스를 해제하여야 합니다.

**1**. DB 연결 지속을 종료하여 시스템 성능 부정적 영향을 최소화

**2**. 시스템 리소스 효율적 관리 + 시스템 성능 유지 

### 트랜잭션 관리

JPA는 데이터의 일관성을 보장하기 위해서 항상 트랜잭션 안에서 데이터를 변경해야합니다. 없이 데이터를 변경하면 예외가 발생합니다.

#### 트랜잭션이란?

JPA에서 **`트랜잭션`** 은 **데이터베이스 작업의 단위** 를 의미합니다. 트랜잭션은 **여러 데이터베이스 작업을 하나의 논리적인 작업 단위** 로 묶습니다. 트랜잭션 내의 모든 작업은 모두 성공하거나 모두 실패해야 합니다. 이를 **트랜잭션의 원자성(Atomicity)** 이라고 합니다.

1. **원자성(Atomicity):** 트랜잭션 내의 모든 작업은 모두 성공하거나 모두 실패해야 합니다. 일부만 성공하거나 실패하는 상황은 허용되지 않습니다.

2. **일관성(Consistency):** 트랜잭션은 데이터베이스의 일관성을 유지해야 합니다. 즉, 트랜잭션의 실행이 완료된 후에도 데이터베이스의 모든 규칙이 유지되어야 합니다.

3. **독립성(Isolation):** 동시에 실행되는 트랜잭션들은 서로에게 영향을 미치지 않아야 합니다.

4. **지속성(Durability):** 트랜잭션이 성공적으로 완료되면, 그 결과는 영구적으로 반영되어야 합니다.

#### 트랜잭션 작동 방식

트랜잭션을 시작하려면 **Entity Manager** 에서 `트랜잭션 api`를 받아와야한다. 

```java
  // Begin transaction
        EntityTransaction tx = em.getTransaction();

        try {
            // Get the api to begin transaction
            tx.begin();
            // Business logic
            // ...

            // Commit transaction
            tx.commit();
        } catch (Exception e) {
            // Rollback transaction if something goes wrong
            tx.rollback();
```

1. **비즈니스 로직이 정상** -> `Commit`

2. **비즈니스 로직이 예외 발생** -> `Rollback`

### 비즈니스 로직

```java
// ...past jpa codes
  try {
        // Create a new member
        Member member = new Member();
        member.setId(1L);
        member.setName("John Doe");
        member.setAge(25)
        // Persist the member
        em.persist(member);

        // Update the member
        member.setName("Jane Doe");
        member.setAge(35)

        // Find the member
        Member foundMember = em.find(Member.class, 1L);
        System.out.println("Found member: " + foundMember.getName());


        // Find all members
        TypedQuery<Member> query = em.createQuery("SELECT m FROM Member m", Member.class);
        List<Member> members = query.getResultList();
        for (Member member : members) {
            System.out.println("Member: " + member.getName());
        }

        // Remove the member
        em.remove(member);
  }
// ... Continue
```

**비즈니스 로직** 의 작업들(등록, 수정, 삭제, 조회)은 `모두 엔티티 매니저를 통해 수행`됩니다.

#### 등록 

`persist()` 메소드에 저장할 엔티티를 넘겨주면 됩니다. JPA는 회원 엔티티의 매핑 정보(Annotation)를 분석해서 하기와 같은 SQL을 DB에 전달합니다.

```SQL
INSERT INTO MEMBER (ID, NAME, AGE) VALUES ('1', 'John Doe', 25)
```

#### 수정

**em.update()** 와 같은 코드가 아닌 단순히 `setAge()`와 같은 메서드로 JPA는 어떤 엔티티가 변경되었는지 추적이 가능합니다. 

생성되는 SQL은 하기와 같습니다.
```SQL
UPDATE MEMBER
    SET AGE = 35, NAME='Jane Doe'
WHERE ID='1'
```

#### 삭제
`remove()` 메서드를 통해 JPA는 위의 예시들과 동일한 방식으로 DELETE SQL을 생성하여 실행합니다.

#### 한 멤버 찾기(Find a member)

조회할 `엔티티 타입`과 `@id`로 테이블의 기본 키와 매핑하여 엔티티 하나를 조회할 수 있습니다.

```SQL
SELECT * FROM MEMBER WHERE ID='1'
```

### JPQL

아직 설명 안한 `Find All members`의 메서드를 같이 설명해보겠습니다.

JPA를 사용하면 엔티티 객체 중심적으로 개발할 수 있고 데이터베이스 처리에 대해 JPA 맡기면서 코드가 줄어들고 깔끔한 객체지향적 구조를 가져갈 수 있습니다.

하지만 **`검색 쿼리`** 에 대해서는 적용방식을 달리해야합니다.

JPA는 엔티티 객체로 개발을 하는데 그 말은 객체에 대해서 검색을 할 때, 테이블이 아닌 엔티티 객체가 필요하다는 것 입니다.

그 과정에 소모되는 과정은

**1**. **데이터베이스의 모든 데이터를 불러온다**

**2**. **엔티티로 객체로 변경한다**

와 같으며 사실상 불가능합니다.

이러한 복잡한 문제들을 우리는 `JPQL(JPA + SQL)`을 통해서 해결할 수 있습니다.

```java
// Find all members
    TypedQuery<Member> query = em.createQuery("SELECT m FROM Member m", Member.class);

    List<Member> members = query.getResultList();

    for (Member member : members) {
        System.out.println("Member: " + member.getName());
    }
```

#### JPQL vs SQL 차이점

**1**. **JPQL** 은 `엔티티 객체`를 대상(클래스 + 필드)으로 쿼리합니다. 

**2**. **SQL** 은 `데이터베이스 테이블`을 대상으로 쿼리합니다.

#### 작동방식

**1**. **em.createQuery(JPQL, return type)** 을 통해 쿼리 객체 생성

**2**. **getResultList()** 메소드 호출

**3**. JPA가 JPQL을 분석하여 **적절한 SQL** 생성.

