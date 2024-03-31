---
title: "Java ORM 표준 JPA 프로그래밍 스터디 - 5"
subtitle: "JPA 스터디"
date: "2024-03-25"
tags: [Java, Spring, JPA]
---

### 메이븐(Maven) 이란

메이븐(Maven)은 자바 프로젝트의 빌드를 자동화하고, 프로젝트의 정보를 관리하는 도구입니다. 

`라이브러리 의존성 관리, 프로젝트 빌드, 테스트, 배포` 등의 작업을 쉽게 할 수 있게 도와줍니다. **XML 형식의 pom.xml** 파일을 통해 프로젝트 설정을 관리하며, 이 파일에 프로젝트가 필요로 하는 라이브러리와 플러그인 정보를 명시하면 메이븐이 **자동으로 다운로드 및 설치** 해줍니다.

> 단순히 생각했을때, 라이브러리를 관리해주는 도구라고 생각하면 편함.

### JPA에서 필요한 라이브러리

- 1. 1.JPA
  
- 2. 2.하이버네이트(Hibernate-Entitymanger)

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>jpa-hibernate-example</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <!-- JPA API -->
        <dependency>
            <groupId>javax.persistence</groupId>
            <artifactId>javax.persistence-api</artifactId>
            <version>2.2</version>
        </dependency>

        <!-- Hibernate EntityManager -->
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-entitymanager</artifactId>
            <version>5.4.30.Final</version>
        </dependency>
    </dependencies>
</project>
```

이런식이다.

### 객체 매핑 시작

#### 회원 테이블 간단 SQL

```sql
CREATE TABLE MEMBER (
  ID VARCHAR(255) NOT NULL, -- ID/PK
  NAME VARCHAR(255),
  AGE INTEGER,
  PRIMARY KEY (ID)
)
```

#### 회원 테이블 간단 class

```java
import javax.persistence.*;

@Entity
@Table(name = "MEMBER") // Table을 나타내는 어노테이션
public class Member {

    @Id // PK를 나타내는 어노테이션
    @Column(name = "ID") // 각 칼럼 어노테이션
    private String id;

    @Column(name = "NAME") // 각 칼럼 어노테이션
    private String name;

    // @Column(name = "AGE") // 각 칼럼 어노테이션
    private Integer age;

    // getters and setters... 이후에
}
```

결과론 적으론 이런식으로 구현 가능

### 어노테이션(Annotation)의 의미

#### `@Entity`

이 클래스를 테이블과 매핑한다고 JPA에게 알려주는 어노테이션. (엔티티 클래스)

#### `@Table` 

엔티티 클래스에 매핑할 테이블 정보를 알려주는 어노테이션. Mapping 한다 (Member Entity -> Member Table)
어노테이션 생략시, 클래스 이름을 테이블 이름(엔티티 이름)으로 매핑한다.

#### `ID`

엔티티 클래스의 필드를 테이블의 기본키(PK)에 매핑함.

#### `Column`

필드를 컬럼에 매핑한다. name 속성을 통해 매핑한다.
(e.g. Member Entity username 필드 -> Member Table Name 컬럼에 매핑.)

#### `매핑 정보가 없는 필드`

age 같은 경우에는 `생략`이 되더라도, `필드명을 사용해서 컬럼명으로 매핑`이된다. (대소문자 구분하는 DB를 사용하면 명시적으로 `@Column (name="AGE")` 해줘야함)

### persistence.xml 이란

persistence.xml 파일은 JPA(Java Persistence API) 설정을 위한 `핵심 파일`입니다. 이 파일은 JPA 프로젝트의 `META-INF 디렉토리에 위치해야 합니다`.

persistence.xml 파일은 다음과 같은 정보를 포함합니다:

-  **`<persistence-unit>`** : JPA 설정의 단위를 정의합니다. 각각의 persistence unit은 고유한 이름을 가지며, 이 이름을 통해 EntityManagerFactory를 생성할 수 있습니다.
  
- **`<provider>`** : JPA 구현체의 클래스 이름을 지정합니다. 예를 들어, 하이버네이트를 사용하면 org.hibernate.jpa.HibernatePersistenceProvider를 지정합니다.

- **`<class>`** : 엔티티 클래스의 이름을 지정합니다. 이 클래스들은 JPA에 의해 관리됩니다.

- **`<properties>`** : 데이터베이스 연결과 관련된 설정을 포함합니다. 예를 들어, JDBC 드라이버, 데이터베이스 URL, 사용자 이름, 비밀번호 등을 지정할 수 있습니다.

```xml
<!-- xmins에 version과 함께 명시해놓으면 됩니다 -->
<persistence 
  xmlns="http://xmlns.jcp.org/xml/ns/persistence"
  version="2.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence
             http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">

    <!-- 영속성 유닛! 연결할 데이터베이스 하나당 1:1 하나의 영속성 유닛 -->
    <persistence-unit name="myPersistenceUnit" transaction-type="RESOURCE_LOCAL">
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
        <class>com.example.Member</class>

        <properties>
            <!-- JDBC 드라이버 -->
            <property name="javax.persistence.jdbc.driver" value="com.mysql.jdbc.Driver"/>
            <!-- MySQL을 예시로 들었음 (접속 URL) -->
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/mydb"/> 
            <!-- DB 접속 아이디 -->
            <property name="javax.persistence.jdbc.user" value="username"/>
            <!-- DB 접속 패스워드 -->
            <property name="javax.persistence.jdbc.password" value="password"/>

            
          <!-- Hibernate properties -->
            <!-- 가장 중요한 방언설정!! -->
            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQL5Dialect"/>
            <!--  SQL 쿼리를 콘솔에 출력할지 여부를 결정 -->
            <property name="hibernate.show_sql" value="true"/>
            <!-- 하이버네이트는 시작할 때 데이터베이스 스키마를 엔티티 클래스와 일치하도록 업데이트합니다. -->
            <property name="hibernate.hbm2ddl.auto" value="update"/>
        </properties>
    </persistence-unit>

</persistence>
```
  
persistence.xml 파일을 통해 JPA 설정을 중앙화하고, 데이터베이스 연결과 관련된 설정을 쉽게 관리할 수 있습니다.


### pom.xml vs persistence.xml

`pom.xml`은 `Maven 프로젝트의 설정 파일`입니다. 이 파일은 프로젝트의 빌드 설정, 의존성 관리, 플러그인 설정 등을 관리합니다. 

예를 들어, 프로젝트가 사용하는 라이브러리와 그 버전을 명시하면 Maven이 이를 자동으로 다운로드하고 관리합니다. 또한, 빌드 과정에서 필요한 플러그인 설정도 이 파일에서 관리합니다.

> **pom.xml**는 프로젝트의 빌드 설정, 의존성 관리, 플러그인 설정 등

반면, `persistence.xml`은 `JPA(Java Persistence API) 설정 파일`입니다. 이 파일은 데이터베이스 연결 설정, 엔티티 클래스, 트랜잭션 타입, JPA 구현체 등 JPA 관련 설정을 관리합니다. 

예를 들어, 데이터베이스 연결 정보(JDBC 드라이버, URL, 사용자 이름, 비밀번호 등)와 JPA 구현체(예: 하이버네이트)를 지정하고, JPA가 관리할 엔티티 클래스를 명시합니다.

> **persistence.xml**는 데이터베이스 연결 설정, 엔티티 클래스, 트랜잭션 타입, JPA 구현체 등 JPA 관련 설정 등

### 데이터베이스 방언


JPA가 특정 데이터베이스에 맞게 쿼리를 생성하기 위해 사용하는 설정입니다. SQL 표준은 있지만, `각 데이터베이스 벤더는 자신들만의 고유한 기능(데이터베이스 방언)`을 제공하고, 동일한 기능도 SQL 표준과는 다르게 동작하기도 합니다. 이런 차이점을 극복하기 위해 JPA는 데이터베이스 방언을 사용합니다.

JPA는 특정 데이터베이스에 종속적이지 않은 기술이다. 그러므로 `다른 데이터베이스로 쉽게 교체할 수 있다.`

예를 들어, 하이버네이트를 사용하는 경우 MySQL, Oracle, PostgreSQL 등 각각의 데이터베이스에 맞는 방언 클래스를 제공합니다. 이 방언 클래스를 설정하면, 하이버네이트는 해당 데이터베이스에 맞는 적절한 SQL 쿼리를 생성합니다.

방언 설정은 persistence.xml 파일의 `<properties>` 섹션에서 `hibernate.dialect` 속성을 사용하여 수행됩니다. 예를 들어, **`MySQL 5.7`**을 사용하는 경우 다음과 같이 설정할 수 있습니다:

```xml
<!-- MySQL57Dialect!!! -->
<property name="hibernate.dialect" value="org.hibernate.dialect.MySQL57Dialect"/>
```

이 설정을 통해 JPA는 애플리케이션에서 사용하는 데이터베이스의 특성을 이해하고, 적절한 SQL 쿼리를 생성할 수 있습니다.