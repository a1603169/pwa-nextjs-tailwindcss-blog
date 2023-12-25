---
title: '프록시 객체란'
subtitle: '자바스크립트의 "프록시 객체(Proxy Object)"는 객체의 기본 동작을 사용자 정의 방식으로 재정의할 수 있게 하는 고급 기능입니다.'
date: '2023-12-22'
tags: ['JavaScript','FE']
---

자바스크립트의 "프록시 객체(Proxy Object)"는 객체의 기본 동작을 사용자 정의 방식으로 재정의할 수 있게 하는 고급 기능입니다. 이를 통해 객체의 속성 접근, 할당, 열거, 함수 호출 등의 기본 동작을 가로채고, 사용자 정의 동작을 실행할 수 있습니다.

### 프록시 객체의 기능

1. **속성 접근 및 할당 가로채기:** 객체의 특정 속성에 접근하거나 값을 할당할 때, 사용자 정의 동작을 실행할 수 있습니다.
2. **함수 호출 가로채기:** 객체의 메서드(함수) 호출을 가로채어 사용자 정의 동작을 삽입할 수 있습니다.
3. **속성 열거 조작:** `for...in` 루프나 `Object.keys()` 같은 열거 작업에 대한 사용자 정의 동작을 정의할 수 있습니다.
4. **속성 삭제 가로채기:** `delete` 연산자로 속성을 삭제할 때의 동작을 사용자 정의할 수 있습니다.
5. **기타 트랩:** `getOwnPropertyDescriptor`, `defineProperty`, `has` 등의 객체 관련 연산에 대한 트랩을 설정할 수 있습니다.

### 프록시 객체 생성

프록시 객체는 `new Proxy(target, handler)` 구문으로 생성됩니다.

- **`target`**: 프록시가 가로채는 대상 객체입니다.
- **`handler`**: '트랩'을 제공하는 객체로, 다양한 종류의 작업에 대해 사용자 정의 동작을 정의합니다.

### 예시

아래는 자바스크립트에서 프록시 객체를 사용하는 간단한 예시입니다.

```javascript
let target = {
  message1: "hello",
  message2: "everyone"
};

let handler = {
  get: function(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy.message1); // "hello"
console.log(proxy.message2); // "world" (가로채고 변경됨)
```

이 예시에서 `proxy` 객체는 `target` 객체에 대한 프록시입니다. `handler` 객체에 정의된 `get` 트랩은 `message2` 속성에 접근할 때 사용자 정의 동작을 수행합니다.

프록시 객체는 다양한 용도로 사용될 수 있으며, 특히 객체의 동작을 세밀하게 제어하거나, 객체 상호작용을 모니터링하는 데 유용합니다


-----

자바스크립트의 프록시(Proxy) 객체와 일반 객체의 주요 차이점은 프록시 객체가 기본 작동 방식을 사용자 정의할 수 있도록 해준다는 것입니다. 이는 일반 객체에는 없는 특별한 기능입니다. 

### 일반 객체

일반 객체는 자바스크립트에서 가장 기본적인 데이터 구조 중 하나입니다. 객체는 키와 값의 쌍으로 구성되며, 데이터 저장 및 접근, 함수를 메서드로 가질 수 있습니다. 

예시:

```javascript
let person = {
    name: "John",
    age: 30
};

console.log(person.name); // "John"
```

### 프록시 객체

프록시 객체는 다른 객체(대상 객체)에 대한 사용자 정의 동작을 정의할 수 있게 해줍니다. 프록시를 사용하면 객체의 기본 동작(속성 읽기, 속성 설정, 열거, 함수 호출 등)에 사용자 정의 동작을 추가할 수 있습니다.

프록시는 `new Proxy(target, handler)` 구문을 사용하여 생성됩니다. 여기서 `target`은 감싸고자 하는 객체이고, `handler`는 트랩(trap)을 제공하는 객체입니다. 트랩은 프로퍼티 접근이나 메서드 호출과 같은 작업을 가로채고 사용자 정의 동작을 실행하게 합니다.

예시:

```javascript
let person = {
    name: "John",
    age: 30
};

let handler = {
    get: function(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        } else {
            return `Property not found: ${prop}`;
        }
    }
};

let proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name); // "John"
console.log(proxyPerson.gender); // "Property not found: gender"
```

### 주요 차이점

- **사용자 정의 동작:** 프록시는 `get`, `set`, `deleteProperty`, `apply` 등의 트랩을 통해 기본 동작을 가로채고 사용자 정의 동작을 실행할 수 있습니다.
- **간접 참조:** 프록시는 대상 객체에 대한 간접적인 참조를 제공합니다. 이를 통해 대상 객체의 동작을 간접적으로 제어할 수 있습니다.
- **확장성:** 프록시는 유효성 검사, 로깅, 알림, 객체 가상화 등 다양한 고급 기능을 구현하는 데 유용합니다.

일반 객체는 이러한 유연성이나 간접적인 제어 기능이 없습니다. 일반 객체는 속성과 메서드를 직접적으로 다루는 반면, 프록시 객체는 추가적인 처리 레이어를 제공하여 보다 복잡한 동작을 가능하게 합니다.