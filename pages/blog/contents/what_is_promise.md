---
title: '비동기란 - 1 (Promise)'
subtitle: 'Promise 객체에 대한 이해'
date: '2024-03-14'
tags: [JavaScript, General, CS]
---

### 비동기 연산이란 
비동기 연산이란, 결과가 `즉시 반환되지 않고 어느 시점에 완료되는 연산`을 말합니다. 예를 들어, 서버에서 데이터를 가져오는 작업이 비동기 연산에 해당합니다.

Promise 객체는 '**`대기(pending)`**', '**`이행(fulfilled)'`**, '**`거부(rejected)`**' 의 세 가지 상태를 가집니다.

### Promise 객체란
Promise는 JavaScript에서 비동기 연산을 표현하는 객체입니다. 

`대기(pending)`: 초기 상태, 이행 또는 거부되지 않음.
`이행(fulfilled)`: 연산이 성공적으로 완료됨.
`거부(rejected)`: 연산이 실패함.
Promise는 이행 또는 거부 상태가 되면, 그 상태가 영구적으로 고정되며 변경되지 않습니다.

Promise는 **`then`** , **`catch`** , **`finally`** 메서드를 제공하여, 비동기 연산이 완료된 후에 실행할 콜백 함수를 등록할 수 있습니다. 

- 1. `then 메서드`는 연산이 성공적으로 완료되었을 때 호출되는 콜백 함수를 등록합니다
- 2. `catch 메서드`는 연산이 실패했을 때 호출되는 콜백 함수를 등록합니다. 
- 3. `finally 메서드`는 연산의 성공 여부와 관계없이 항상 호출되는 콜백 함수를 등록합니다.

Promise는 비동기 프로그래밍을 더욱 쉽고 효율적으로 만들어주며, 콜백 지옥을 피할 수 있게 도와줍니다.

### 예시코드

```JavaScript
// Promise 객체 생성
let promise = new Promise((resolve, reject) => {
  let condition = true; // 이 조건은 실제 코드에서 비동기 연산의 결과에 따라 결정됩니다.

  if(condition) {
    resolve('연산 성공!'); // 연산이 성공하면 resolve 함수를 호출합니다.
  } else {
    reject('연산 실패...'); // 연산이 실패하면 reject 함수를 호출합니다.
  }
});

// Promise 객체 사용
promise
  .then((data) => {
    console.log(data); // 데이터 출력
  })
  .catch((error) => {
    console.error(error); // 오류 메시지 출력
  })
  .finally(() => {
    console.log('Promise 작업 완료');
  });


// Promise 체이닝 
let promiseChained = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1초 후에 Promise가 이행되고 값 1을 반환합니다.
});

promiseChained
  .then((value) => {
    console.log(value); // 1
    return new Promise((resolve, reject) => { // 새 Promise를 반환합니다.
      setTimeout(() => resolve(value + 1), 1000); // 1초 후에 Promise가 이행되고 값 2를 반환합니다.
    });
  })
  .then((value) => {
    console.log(value); // 2
    return value + 1; // 일반 값을 반환하면, 이 값으로 이행되는 Promise를 반환하는 것과 같습니다.
  })
  .then((value) => {
    console.log(value); // 3
  });
```