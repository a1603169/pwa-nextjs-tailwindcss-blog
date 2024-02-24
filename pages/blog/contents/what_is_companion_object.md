---
title: 'Companion Object 란'
subtitle: 'Kotlin에서만 있는 특별한 객체'
date: '2024-02-16'
tags: [Kotlin, BE]
---

코틀린의 `companion object`는 해당 클래스에 대해 단 하나만 존재하는 싱글톤 객체를 정의하는 특성입니다. 이는 자바의 `static` 멤버와 유사한 역할을 하지만, 몇 가지 중요한 차이점이 있습니다.

### 코틀린의 `Companion Object`
- **싱글톤 패턴**: 각 클래스에 대해 하나의 인스턴스만 존재합니다.
- **객체로 접근**: `Companion Object`는 실제 객체처럼 다뤄집니다. 이는 코틀린이 객체 지향 프로그래밍의 원칙을 따르기 때문입니다.
- **인터페이스 구현 가능**: `Companion Object`는 인터페이스를 구현할 수 있습니다.
- **확장 가능**: 확장 함수를 통해 `Companion Object`에 새로운 기능을 추가할 수 있습니다.
- **이름 생략 가능**: 이름을 생략할 수 있으며, 생략된 경우 `Companion`이라는 기본 이름을 사용합니다.

### 자바의 `Static` 멤버
- **클래스 레벨의 멤버**: `static` 키워드를 사용하여 클래스 레벨에서 정의됩니다.
- **인스턴스 생성 없이 접근 가능**: 클래스 이름을 통해 직접 접근할 수 있습니다.
- **인터페이스 구현 불가**: `static` 멤버는 인터페이스를 구현할 수 없습니다.
- **확장 불가능**: 자바의 `static` 멤버는 확장할 수 없습니다.

### 다른 언어와의 비교
- **C#의 `static` 클래스**: 자바의 `static`과 유사하게, C#에서는 클래스 레벨에서 `static` 멤버를 정의할 수 있으며, 이들은 클래스 이름을 통해 접근합니다.
- **Python의 클래스 변수와 메서드**: Python에서는 클래스 변수와 `@classmethod` 데코레이터를 사용한 클래스 메서드를 통해 유사한 기능을 구현할 수 있지만, 이들은 코틀린의 `companion object`처럼 싱글톤 패턴을 자동으로 제공하지 않습니다.
- **JavaScript의 정적 메서드와 속성**: JavaScript 클래스에서 `static` 키워드를 사용하여 정적 메서드와 속성을 정의할 수 있습니다. 이는 자바의 `static`과 유사한 방식이지만, JavaScript의 프로토타입 기반 상속과 다소 차이가 있습니다.

코틀린의 `companion object`는 다른 언어의 `static` 멤버와 유사한 기능을 제공하지만, 객체 지향적 특성과 확장성이라는 추가적인 이점을 제공합니다. 


코틀린에서 `companion object`와 `object`는 그럼 어떻게 다를까요? 
두가지 모두 싱글톤 패턴을 사용하여 객체를 정의합니다. 하지만 사용 목적과 접근 방식에서 몇 가지 중요한 차이가 있습니다.

### Companion Object 와 Object의 차이

#### Companion Object

- **클래스 내부 정의**: `companion object`는 클래스 내부에 정의되며, 이 클래스의 싱글톤 인스턴스를 제공합니다.
- **정적 멤버 접근처럼 사용**: 외부에서 클래스 이름을 통해 `companion object`의 멤버에 접근할 수 있습니다. 이는 자바의 정적 멤버(static members) 접근과 유사합니다.
- **클래스와 긴밀한 연관성**: `companion object`는 주로 클래스와 관련된 정적 메서드나 정적 필드(예: 팩토리 메서드, 유틸리티 함수, 상수 등)를 정의하는 데 사용됩니다.
- **클래스 인스턴스에 접근 불가**: `companion object` 내부에서는 외부 클래스의 인스턴스 멤버에 직접 접근할 수 없습니다.

#### Object

- **클래스 외부 정의**: `object`는 클래스 외부에 독립적으로 정의됩니다. 이는 자체적인 싱글톤 객체를 나타냅니다.
- **일반 객체처럼 사용**: `object`는 이름을 통해 직접 접근되며, 일반 클래스의 인스턴스처럼 사용할 수 있습니다.
- **일반적인 싱글톤 사용**: `object`는 전역적인 상태를 가진 싱글톤, 유틸리티 함수의 컬렉션, 관리 필요한 리소스 등을 정의하는 데 주로 사용됩니다.
- **클래스와의 연관성이 덜함**: `object`는 특정 클래스에 속하지 않기 때문에, 클래스의 인스턴스 멤버에 접근할 수 없습니다.

### 예시
```kotlin
class MyClass {
    companion object {
        fun create(): MyClass = MyClass()
    }
}

object MySingleton {
    fun doSomething() {
        println("Doing something")
    }
}

fun main() {
    val myClassInstance = MyClass.create() // MyClass의 Companion Object 사용
    MySingleton.doSomething() // MySingleton 객체 사용
}
```

이 예시에서, `MyClass.create()`는 `companion object`를 사용하여 `MyClass`의 인스턴스를 생성하는 팩토리 메서드로 사용되며, `MySingleton.doSomething()`은 독립적인 `object`를 사용하여 정의된 메서드입니다.

요약하자면, `companion object`는 클래스와 밀접하게 관련된 정적 멤버를 제공하는 반면, `object`는 독립적인 싱글톤 객체로 사용되어 다양한 목적(예: 유틸리티 함수, 전역 상태 관리)에 사용됩니다.