---
title: 'React Deep Dive - 2'
subtitle: 'React Deep Dive book 1.2 함수'
date: '2024-03-28'
tags: [React, FE, JavaScript]
---

리액트에서 우리가 가장 많이 사용하는 함수는 **`화살표 함수`** 가 있습니다..

실제로 스스로에게 **"화살표 함수와 일반 함수의 차이점을 설명해보세요"** 라는 질문을 했을 때, 잘 생각이 나질 않았습니다.

### 함수란?

- **정의**: 작업을 수행하거나 값을 계산하는 등의 과정을 하나의 블록으로 실행 단위로 만들어 놓은 것

- **구성**: 매개변수, `return` 을 통한 반한값

### 함수를 정의하는 4가지 방법

#### 함수 선언문

```javascript
// Simple function statement
const sum => function(a, b){
  return a + b
}

// Expression
sum(10, 24) // 34
```

선언문은 표현식이 아닙니다. **(표현식 = 무언가 값을 산출하는 구문)**
`전자의 함수 선언`은 어떠한 값도 표현되지 않았으므로 표현식이 아닌 `일반 문`으로 분류 됩니다. 

`후자`는 값이 나온 `표현식`으로 사용됩니다.

#### 함수 표현식

##### `일급 객체란?`

**다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체**를 의미합니다. 

> 함수에 **매개변수, 반환값, 할당**이 가능하다는 것

##### Function 생성자

**`권장X / 실제 코딩에서 사용되지 X 방법`** 

##### 화살표 함수

```javascript
const sum (a, b) => {
  return a+b;
}

const sum (a, b) => a+b;
```

다른 함수 생성과 다른 점이 있습니다.

- **constructor** 사용이 안됩니다 -> 생성자 함수 불가능

```javascript
const Car = (name) => {
  this.name = name;
}

// Uncaught TypeError: Car is not a constructor
const myCar = new Car('NONONO');
```

- **argument** 사용이 안됩니다.

> **매개변수(Parameter)**: 함수 정의에서 사용되며, 함수가 작동하는데 필요한 입력을 나타냅니다. 예를 들어, function add(x, y) {...}에서 x와 y는 매개변수입니다. 

> **인자(Argument)**: 함수를 호출할 때 전달하는 실제 값입니다. 예를 들어, add(1, 2)에서 1과 2는 인자입니다. 

따라서, 매개변수는 함수의 입력을 정의하는 반면, 인자는 그 입력에 대한 실제 값을 나타냅니다.

- **this 바인딩**: 클래스 컴포넌트에서 이벤트 바인딩할 메서드 선언 시 화살표 함수로 했을 때와 일반 함수가 다름

> **this**: 자신이 속한 객체나 자신이 생성할 인스턴스를 가르키는 값

this는 함수를 정의할 때 결정되는 것이 아니라, 함수가 어떻게 호출되느냐에 따라 동적으로 결정됩니다. 즉 `일반 함수의 this는 전역 객체`가 됩니다.

`화살표 함수는` 함수 자체의 바인딩을 갖지 않고 `this 참조 시 상위 스코프의 this`를 따르게 됩니다.

```javascript
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, World!' };
  }

  // 일반 함수: this는 전역 객체를 참조합니다.
  showMessage() {
    alert(this.state.message); // 'this' is undefined
  }

  // 화살표 함수: this는 상위 스코프의 this를 참조합니다.
  showMessageArrow = () => {
    alert(this.state.message); // 'this' refers to the component instance
  }

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Show message (normal function)</button>
        <button onClick={this.showMessageArrow}>Show message (arrow function)</button>
      </div>
    );
  }
}

export default MyComponent;
```

위 코드에서 showMessage는 일반 함수로 정의되어 있어서, 이 함수에서 this는 전역 객체를 참조하게 됩니다. 따라서 this.state.message는 undefined가 됩니다.

반면에 showMessageArrow는 화살표 함수로 정의되어 있어서, 이 함수에서 this는 상위 스코프의 this를 참조하게 됩니다. 따라서 this.state.message는 컴포넌트의 상태를 정상적으로 참조할 수 있습니다.

바벨에서는의 예시를 들어보자면

```javascript
'use strict';

var _createClass = function () { 
  function defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) { 
      var descriptor = props[i]; 
      descriptor.enumerable = descriptor.enumerable || false; 
      descriptor.configurable = true; 
      if ("value" in descriptor) descriptor.writable = true; 
      Object.defineProperty(target, descriptor.key, descriptor); 
    } 
  } 
  return function (Constructor, protoProps, staticProps) { 
    if (protoProps) defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) defineProperties(Constructor, staticProps); 
    return Constructor; 
  }; 
}();

function _classCallCheck(instance, Constructor) { 
  if (!(instance instanceof Constructor)) { 
    throw new TypeError("Cannot call a class as a function"); 
  } 
}

var MyClass = function () {
  function MyClass() {
    var _this = this;

    _classCallCheck(this, MyClass);

    this.name = 'MyClass';

    this.arrowFunction = function () {
      return _this.name;
    };
  }

  _createClass(MyClass, [{
    key: 'regularFunction',
    value: function regularFunction() {
      return this.name;
    }
  }]);

  return MyClass;
}();

var myInstance = new MyClass();

var regularFunction = myInstance.regularFunction;
console.log(regularFunction()); // undefined

var arrowFunction = myInstance.arrowFunction;
console.log(arrowFunction()); // 'MyClass'
```

ES5로 변환된 코드에서도 this의 차이점이 동일하게 나타납니다. `일반 함수에서 this`는 `호출 시점`에 결정되므로 `undefined`가 출력되고, 

`화살표 함수에서 this`는 함수가 `정의된 시점의 스코프`를 가리키므로 `'MyClass'가 출력`됩니다.


#### 함수 선언문 vs 함수 표현식 (차이점)

> **호이스팅** 여부 (함수 선언문이 마치 코드 맨 앞단에서 작성된 것처럼 작동하는 JS의 특징)

```javascript
hello() // output: hello

function hello() {
  console.log('hello');
}

hello() // output: hello
```

이런식으로 일반 함수로 작성된 함수 선언문은 호이스팅이 되어 **`함수에 대한 선언을 미리 메모리의 등록이 되었습니다. (코드 순서 상관없이)`**.

**`반대로!`**

```javascript
console.log(typeof hello === 'undefined') // true

hello() // Uncaught TypeError: hello is not a function

var hello = function() {
  console.log('hello');
}

hello() // hello
```

함수와 다르게 일단 변수는, `런타임 이전에 undefined`로 초기화되고 `런타임 시점에 함수가 할당`됩니다.


> **함수 선언문**: 자유롭게 함수를 호출하고 싶을 때는 혹은 명시적으로 함수를 구별하고 싶다면 (호이스팅 활용)

> **함수 표현식을 함수 변수에 할당**: 호이스팅 작용이 안되고 확실하게 선언과 호출을 구분

둘 중에 어떤 것이 좋다고는 할 수 없지만, 작성법을 **`일관성 있게 사용`** 하는 것으로 충분합니다.

 


