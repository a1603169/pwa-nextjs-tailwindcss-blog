---
title: '자료구조 (feat. JavaScript)'
date: '2023-12-22'
tags: ['JavaScript', 'FE', 'BE']
---

JavaScript에서 자료 구조는 데이터를 효율적으로 접근하고 수정하기 위해 데이터를 조직하고 저장하는 데 사용됩니다. 다음은 JavaScript의 기본적인 자료 구조들입니다:

1. **배열(Array)**: 배열은 아이템들의 순서가 있는 컬렉션을 저장하는 데 사용됩니다. 숫자, 문자열, 객체 등 어떤 데이터 타입도 포함할 수 있습니다. JavaScript의 배열은 동적으로 크기가 변할 수 있습니다.

   ```javascript
   let fruits = ['apple', 'banana', 'cherry'];
   ```

2. **객체(Object)**: 객체는 키-값 쌍의 컬렉션으로, 키는 문자열(또는 Symbol)이고 값은 어떤 것이든 될 수 있습니다. 다양한 키가 있는 컬렉션과 더 복잡한 엔티티를 저장하는 데 사용됩니다.

   ```javascript
   let person = {
     name: 'Alice',
     age: 25
   };
   ```

3. **집합(Set)**: 집합은 각 값이 유일해야 하는 값의 컬렉션입니다. 중복 없는 리스트를 만들고 싶을 때 유용합니다.

   ```javascript
   let numbers = new Set([1, 2, 3, 4, 4, 5]); // 4는 한 번만 추가됨
   ```

4. **맵(Map)**: 맵은 키-값 쌍의 컬렉션으로, 키는 어떤 데이터 타입이든 될 수 있습니다. 맵은 키의 원래 삽입 순서를 기억하는 것이 객체와의 주된 차이점입니다.

   ```javascript
   let map = new Map();
   map.set('name', 'Alice');
   map.set('age', 25);
   ```

5. **타입 배열(Typed Arrays)**: 타입 배열은 원시 이진 데이터에 접근하는 메커니즘을 제공하는 일련의 배열과 유사한 뷰입니다. 파일이나 이진 프로토콜과 같은 이진 데이터 스트림을 다룰 때 유용합니다.

   ```javascript
   let buffer = new ArrayBuffer(16); // 16바이트의 버퍼를 생성
   let view = new Int32Array(buffer); // 버퍼를 32비트 정수 배열로 보기
   ```

6. **스택(Stacks)과 큐(Queues)**: JavaScript에는 스택이나 큐 클래스가 내장되어 있지 않지만, 배열과 push/pop 메소드를 사용하여 스택을, push/shift 메소드를 사용하여 큐를 쉽게 구현할 수 있습니다.

   ```javascript
   // 스택
   let stack = [];
   stack.push(1); // 요소 추가
   stack.pop();   // 요소 제거
   
   // 큐
   let queue = [];
   queue.push(1); // enqueue(대기열에 추가)
   queue.shift(); // dequeue(대기열에서 제거)
   ```

7. **연결 리스트(LinkedLists), 트리(Trees), 그래프(Graphs)**: 이들은 더 복잡한 자료 구조로, JavaScript에서 기본적으로 지원되지 않습니다. 객체와 포인터(다른 객체에 대한 참조)를 사용하여 구현할 수 있습니다.

JavaScript의 자료 구조는 다재다능하며 다양한 문제를 해결하는 데 사용될 수 있습니다. 특정 작업에 대한 자료 구조를 선택할 때는 필요한 작업을 고려하고 그 작업을 가장 효율적으로 수행할 수 있는 자료 구조를 선택하십시오.