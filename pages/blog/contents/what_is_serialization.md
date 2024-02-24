---
title: 'Serialization(직렬화) 이란'
subtitle: '객체의 상태나 데이터 전송 방법'
date: '2024-02-24'
tags: [Java, Spring, JavaScript, Kotlin, BE]
---

### Serialization 이란?

Serialization(직렬화)는 객체의 상태를 저장하거나 전송할 수 있는 형태로 변환하는 과정을 말합니다. 직렬화된 객체는 일반적으로 바이트 스트림, XML, JSON 등의 형태로 표현되며, 네트워크를 통한 전송이나 데이터 저장소에 저장하기 위해 사용됩니다. 직렬화의 반대 과정은 Deserialization(역직렬화)로, 저장되거나 전송된 데이터를 다시 원래의 객체 형태로 복원하는 과정을 의미합니다.


### JavaScript Serialization 예시

JavaScript에서는 주로 JSON 형식을 사용하여 객체를 직렬화합니다. `JSON.stringify()` 함수를 이용해 JavaScript 객체를 JSON 문자열로 변환할 수 있습니다.

```javascript
let user = {
    name: "John",
    age: 30
};

let serializedUser = JSON.stringify(user);
console.log(serializedUser); // {"name":"John","age":30}
```

### Java Spring Serialization 예시

Java에서는 `Serializable` 인터페이스를 구현하여 객체를 직렬화할 수 있습니다. Spring 프레임워크에서는 이러한 직렬화를 활용하여 객체를 HTTP 응답, 요청, RMI(Remote Method Invocation) 등에 사용합니다.

```java
import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;

    // Constructors, Getters, Setters
}
```

Java에서 객체를 직렬화하기 위해 `Serializable` 인터페이스를 구현하는 것은 표준 접근 방식입니다. Spring 프레임워크에서도 이 방식이 그대로 사용됩니다. 어노테이션을 직접적으로 사용하는 것은 아니지만, `Serializable` 인터페이스는 Java 직렬화 메커니즘에 필수적입니다.

```java
import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;

    // 기본 생성자, getter, setter
}
```

`transient` 키워드를 사용하여 특정 필드를 직렬화 과정에서 제외시킬 수도 있습니다.

```java
public class User implements Serializable {
    private String name;
    private transient int age; // 이 필드는 직렬화되지 않음

    // 기본 생성자, getter, setter
}
```

### Kotlin Serialization 예시

Kotlin에서는 `kotlinx.serialization` 라이브러리를 사용하여 객체를 직렬화하고 역직렬화합니다. 이 라이브러리는 객체를 JSON, XML 등의 형식으로 직렬화하기 위해 어노테이션을 사용합니다.

먼저, `kotlinx.serialization` 라이브러리를 프로젝트에 추가합니다.

```java
dependencies {
    implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:1.0.1"
}
```

그런 다음, `@Serializable` 어노테이션을 사용하여 직렬화가 가능한 클래스를 정의합니다.

```kotlin
import kotlinx.serialization.Serializable

@Serializable
data class User(val name: String, val age: Int)
```

이제 이 클래스의 인스턴스는 JSON으로 쉽게 직렬화될 수 있습니다.

```kotlin
import kotlinx.serialization.json.Json

fun main() {
    val user = User("John", 30)
    val jsonString = Json.encodeToString(User.serializer(), user)
    println(jsonString) // {"name":"John","age":30}
}
```

Java는 `Serializable` 인터페이스와 `transient` 키워드를 사용하며, Kotlin에서는 `kotlinx.serialization` 라이브러리와 `@Serializable` 어노테이션을 사용합니다. 이러한 도구들은 객체를 효율적으로 저장하거나 네트워크를 통해 전송할 수 있게 해줍니다.