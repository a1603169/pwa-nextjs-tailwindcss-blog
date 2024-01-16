---
title: 'Class객체에서 constructor & this'
subtitle: '기초 JavaScript지식'
date: '2024-01-16'
tags: [JavaScript]
---

### 1. 클래스의 `constructor` 개념

클래스의 `constructor`는 클래스로부터 객체를 생성할 때 호출되는 특별한 메소드입니다. 이 메소드는 새 객체의 초기 상태를 설정하는 데 사용됩니다. 여기서 "상태"라 함은 객체가 가질 수 있는 데이터(속성)와 행동(메소드)을 의미합니다. 

#### `constructor` 특징

- 클래스에서 하나만 존재할 수 있으며, 클래스를 통해 객체가 생성될 때 자동으로 실행됩니다.

- 객체의 초기 속성 값을 설정하는 데 사용되며, 필요에 따라 인자를 받아 객체를 초기화할 수 있습니다.

- `constructor`는 선택적입니다. 명시적으로 정의하지 않으면, JavaScript는 기본 `constructor`를 제공합니다.

예를 들어:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```
여기서 `Person` 클래스에는 `name`과 `age`라는 두 속성이 있습니다. `new Person('Alice', 30)`을 호출하면, `constructor`가 실행되어 새 `Person` 객체의 `name`과 `age`가 설정됩니다.

### 2. `this` 키워드의 개념

`this` 키워드는 현재 객체의 인스턴스를 참조하는 데 사용됩니다. 클래스의 메소드 내에서 `this`를 사용하면, 그 메소드를 호출한 객체의 속성이나 메소드에 접근할 수 있습니다. 간단히 말해, `this`는 현재 객체 자신을 가리키는 포인터 또는 참조자라고 생각할 수 있습니다.

#### `this` 특징

- `this`는 메소드가 속한 객체의 현재 인스턴스를 가리킵니다.

- 클래스 내부에서 `this`를 사용하면, 해당 클래스로 생성된 객체의 속성이나 메소드에 접근할 수 있습니다.

- `constructor`와 일반 메소드 모두에서 `this`를 사용할 수 있습니다.

예를 들어:
```javascript
class Person {
    constructor(name, age) {
        this.name = name; // 현재 객체의 'name' 속성을 설정
        this.age = age;   // 현재 객체의 'age' 속성을 설정
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const alice = new Person('Alice', 30);
alice.greet(); // 'Hello, my name is Alice and I am 30 years old.' 출력
```

여기서 `alice` 객체의 `greet` 메소드를 호출할 때, `this.name`과 `this.age`는 `alice` 객체의 `name`과 `age` 속성을 참조합니다.

요약하자면, `constructor`는 클래스의 객체가 생성될 때 초기화를 위해 호출되는 특별한 메소드이고, `this`는 클래스의 메소드 내에서 현재 객체의 속성이나 다른 메소드에 접근할 때 사용되는 키워드입니다.

