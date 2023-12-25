---
title: '프로토 타입이란 in JS'
subtitle: '자바스크립트에서 프로토타입(Prototype)은 객체 지향 프로그래밍의 핵심 개념 중 하나로, 객체 간의 상속과 메서드 공유를 가능하게 합니다.'
date: '2023-12-22'
tags: ['JavaScript','FE']
---

자바스크립트에서 프로토타입(Prototype)은 객체 지향 프로그래밍의 핵심 개념 중 하나로, `객체 간의 상속과 메서드 공유를 가능`하게 합니다. 프로토타입은 모든 객체가 갖는 특수한 객체로, 다른 객체에서 상속된 메서드와 프로퍼티를 저장합니다. 이것은 `메모리를 효율적으로 사용하고 코드 재사용을 가능`하게 합니다.

프로토타입은 객체를 만들 때 원형이 되는 객체로, 모든 JavaScript 객체는 내부적으로 프로토타입을 가집니다. `프로토타입 체인(Prototype Chain)은 객체 간의 상속 관계`를 정의하며, 객체가 `어떤 메서드나 프로퍼티를 찾을 때 프로토타입 체인을 따라 상위 프로토타입까지 거슬러 올라가서 검색`합니다.

### 프로토타입의 중요한 역할:

1. **상속**: 객체는 자신의 프로토타입으로부터 메서드와 프로퍼티를 상속할 수 있습니다. 이를 통해 코드 재사용이 가능해집니다.

2. **메서드 및 프로퍼티 공유**: 프로토타입을 통해 모든 인스턴스는 동일한 메서드 및 프로퍼티를 공유합니다. 이로써 메모리 사용이 최적화되며, 변경이 필요할 때 한 번만 수정하면 모든 인스턴스에서 적용됩니다.

프로토타입은 `prototype` 속성을 통해 정의되며, 일반적으로 생성자 함수와 함께 사용됩니다. 예를 들어:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.greet(); // "Hello, my name is Alice"
person2.greet(); // "Hello, my name is Bob"
```

위의 코드에서 `Person.prototype`은 모든 `Person` 인스턴스가 공유하는 프로토타입 객체입니다. 이를 통해 `greet` 메서드가 모든 `Person` 인스턴스에서 사용 가능합니다.