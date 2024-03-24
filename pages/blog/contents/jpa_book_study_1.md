---
title: "Java ORM 표준 JPA 프로그래밍 스터디 - 1"
subtitle: "JPA 스터디"
date: "2024-03-22"
tags: [Java, Spring, JPA]
---

### SQL을 직접 다룰 떄 발생하는 문제점

DB관리를 위해선 우리는 SQL을 사용한다.

자바로 작성된 앱은 **`JDBC API`** 를 사용하여 SQL을 DB로 전달함.

`DAO: Data Acess Object`

#### DAO Example

```java
import java.util.List;

public interface UserDao {
    User get(int id);
    List<User> getAll();
    void save(User user);
    void update(User user);
    void delete(User user);
}

public class UserDaoImpl implements UserDao {
    // 데이터베이스 연결 및 SQL 쿼리 실행을 위한 로직이 필요합니다.

    @Override
    public User get(int id) {
        // id를 기반으로 사용자를 조회하는 로직
    }

    @Override
    public List<User> getAll() {
        // 모든 사용자를 조회하는 로직
    }

    @Override
    public void save(User user) {
        // 새 사용자를 저장하는 로직
    }

    @Override
    public void update(User user) {
        // 기존 사용자 정보를 업데이트하는 로직
    }

    @Override
    public void delete(User user) {
        // 사용자를 삭제하는 로직
    }
}
```

개발 순서는

SQL 작성 -> JDBC API를 사용하여 SQL 실행 -> 조회 결과를 객체로 매핑함

#### Example of SQL & JDBC API & Mapping

```java
import java.sql.*;

public class JdbcExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String username = "myusername";
        String password = "mypassword";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            String sql = "SELECT * FROM users WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, 1); // id가 1인 사용자를 조회합니다.

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                User user = new User();
                user.setId(resultSet.getInt("id"));
                user.setName(resultSet.getString("name"));
                user.setEmail(resultSet.getString("email"));
                // 다른 필드를 매핑하는 코드...

                System.out.println(user);
            }
        } catch (SQLException e) {
            System.out.println("데이터베이스 연결 및 쿼리 실행에 실패했습니다.");
            e.printStackTrace();
        }
    }
}

class User {
    private int id;
    private String name;
    private String email;
    // 다른 필드...

    // getter와 setter 메서드...
}
```

### SQL 의존적인 개발은 지양하는 것이 좋다

이유로는 하기와 같습니다.

1. **데이터베이스 이식성**: SQL 쿼리는 데이터베이스 벤더마다 다르게 동작할 수 있습니다. 이로 인해 특정 데이터베이스에 의존적인 코드를 작성하게 되면, `다른 데이터베이스로 이전할 때 문제`가 발생할 수 있습니다.

2. **유지보수성**: SQL 쿼리가 코드에 직접 작성되어 있으면, `쿼리를 변경할 때마다 코드를 수정`해야 합니다. 이는 유지보수를 어렵게 만듭니다.

3. **테스트 용이성**: SQL 의존적인 코드는 `테스트하기 어렵습니다`. 특히, 통합 테스트를 수행할 때 데이터베이스 연결이 필요하므로 테스트 환경을 구성하는 것이 복잡해질 수 있습니다.

### 해결방법 === JPA

`JPA(Java Persistence API)`는 SQL 의존적인 개발 문제를 해결하기 위해 만들어진 **`ORM(Object-Relational Mapping)`** 프레임워크이다. 
JPA를 사용하면 개발자는 SQL 쿼리를 **직접 작성하지 `않고`**, 대신 `객체 지향적인 방법으로 데이터베이스와 상호작용`할 수 있습니다.

```java

// 조회기능! 객체와 매핑정보 확인 후 (적절한!) SELECT SQL 생성하여 DB에 전달
String memberId = 'hello this is ID';
Member member = jpa.find(User.class, id);

// 객체를 데이터베이스에 저장한다. 이 메소드가 객체와 매핑정보를 보고 적절한 Insert SQL을 생성하여 DB에 전달함.
String user = 'I am user';
Member member = jpa.persist(user);

// 객체를 수정하기. 별도의 메서드는 없지만, 조회 후 값을 변경함!

Member member = jpa.find(User.class, memberId);
member.setName('Name Changed');

// 관련 객체도 조회할 수 있다. 알아서 적절한 SELECT SQL을 발동

Member member = jpa.find(Member.class, memberId);
Team team = member.getTeam(); // 멤버의 팀 구하기!
```

