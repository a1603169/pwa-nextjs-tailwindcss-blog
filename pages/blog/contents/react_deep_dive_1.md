---
title: 'React Deep Dive - 1'
subtitle: 'React Deep Dive book'
date: '2024-03-26'
tags: [React, FE, JavaScript]
---

React에 딥하게 들어가기 전 알아야할 지식들 

### JavaScript의 데이터 타입 : 원시타입(Primitive) vs 객체타입(Object/Reference)

#### 원시타입 

1. 객체가 아닌 다른 모든 타입
2. 메서드를 갖지않습니다.
3. 총 7개 (undefined, null, Boolean, Number, BigInt(number가 다룰 수 있는 숫자 크기 제한 극복 : ES2020), String, Symbol)

#### 객체타입

1. 앞의 7가지 원시타입 이외의 모든 것
2. 배열, 함수, 정규식, 클래스 등이 포함
3. 참조를 전달한다고 해서 `참조 타입(reference types)`으로도 불립니다.

#### 차이점

`값을 저장하는 방식의 차이에 있다.`

> 원시 타입은 불변 형태의 값으로 저장 - 변수 할당 시점에 메모리 영역 차지 후 저장

> 객체 타입은 프로퍼티를 삭제, 추가, 수정이 가능하므로 **값이 아닌 참조를 전달함**

#### 1번 예시코드

```javascript
// 원시 타입
let a = true;
let b = a;
console.log(a === b); // true
b = false; // a 와 b의 메모리가 다름.
console.log(a === b); // false

// 객체 타입
let obj1 = { value: true };
let obj2 = obj1;
console.log(obj1 === obj2); // true
obj2.value = false;
console.log(obj1 === obj2); // true -> 참조를 전달해서 그 값을 받기 때문에 결국 둘 다 바뀜.
```

### 비교 공식, `Object.is`

위에서 ==과 ===을 사용하며 비교를 해서 예시코드를 보여줬다면 그 외로 `Object.is`로도 비교가 가능합니다. (ES6)

Object.is() 메서드는 JavaScript에서 두 값이 동일한지 확인하는 메서드입니다. 이것은 두 개의 인수를 받으며, 인수 두 개가 동일한지 확인하고 **Boolean** 반환하는 메서드입니다.

Object.is()는 `=== 연산자와 유사하게 동작`하지만, 두 가지 주요한 차이점이 있습니다:

1. Object.is()는 `NaN과 NaN을 동일`하다고 판단합니다. 반면, === 연산자는 NaN과 NaN을 동일하지 않다고 판단합니다.

2. Object.is()는 `+0과 -0을 동일하지 않다`고 판단합니다. 반면, === 연산자는 +0과 -0을 동일하다고 판단합니다.
    
이러한 차이점 때문에, Object.is()는 `특수한 경우에 === 연산자보다 더 정확한 결과`를 제공할 수 있습니다.

### 리액트에서의 동등 비교

리액트에서 사용하는 동등 비교는 ==, === 연산자가 아닌 `Obejct.is` 입니다. ES6이기 때문에 이를 구현한 폴리필(Polyfill)과 함께 사용합니다. (얕은비교)
주로 `PureComponent`와 `React.memo`에서 **prop**이나 **state**의 변경을 감지하는 데 사용됩니다.

```javascript
// polyfill을 통한 objectIs 
function is(x:any, y:any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)
  )
}

const objectIs: (x: any, y: any) => boolean =
  typeof Object.is === 'function' ? Object.is : is

export default objectIs
```

그리고 또한 `shallowEqual` 이라는 함수와 같이 쓰이기도 합니다.

```javascript
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (!keysB.includes(keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
```
이 코드에서 `shallowEqual` 함수는 먼저 `Object.is()를 사용하여 두 객체가 동일한지 확인`합니다. 두 객체가 동일한 경우, 함수는 **`true`**를 반환합니다.

`그렇지 않은 경우`, 함수는 두 객체의 `프로퍼티를 비교`합니다. 먼저, 두 객체의 `프로퍼티 수가 동일한지 확인`합니다. 프로퍼티 수가 다른 경우, 함수는 **`false`**를 반환합니다.

`마지막으로`, 함수는 `각 프로퍼티가 동일`한지 확인합니다. 모든 프로퍼티가 동일한 경우, 함수는 true를 반환합니다. 그렇지 않은 경우, 함수는 false를 반환합니다.

Object.is로 수행하지 못하는 동등 비교를 이것을 보면 우리는 객체 간 얕은 비교를 한 번 더 수행하는 것을 알 수 있다.

```javascript
// 참조가 달라서 비교 불가
Object.is({ hello: 'world' }, { hello: 'world' }) // false

// 1 depth 까지는 가능한 shallowEqual
shallowEqual({ hello: 'world' }, { hello: 'world' }) // true

// 2 depth는 무리입니다.
shallowEqual({ hello: { hi: 'world'} }, { hello: { hi: 'world'} }) // false
```
JSX props 객체만 확인하면 되기 때문에 얕은 비교까지만 구현하면 됩니다.

#### Polyfill ???

Polyfill은 웹 개발에서 특정 기능이 지원되지 않는 브라우저에서 그 기능을 사용할 수 있도록 하는 코드 조각을 의미합니다.

예를 들어, 일부 브라우저는 `Array.prototype.includes` 메서드를 지원하지 않을 수 있습니다. 이 경우, 개발자는 `Array.prototype.includes` `메서드의 동작을 모방하는 코드를 작성`하여 이 메서드를 사용할 수 있게 만들 수 있습니다. 이렇게 작성된 코드를 Polyfill이라고 합니다.

Polyfill은 보통 웹 사이트가 구형 브라우저에서도 동일하게 동작하도록 하기 위해 사용됩니다. 이를 통해 개발자는 최신 JavaScript 기능을 사용하면서도, 구형 브라우저에서 웹 사이트가 제대로 동작하도록 할 수 있습니다.


