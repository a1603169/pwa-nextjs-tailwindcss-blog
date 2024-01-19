---
title: 'Stack 이란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-01-19'
tags: [Algorithm, JavaScript, Data Structures]
---

<span class='blogLink'>[참고링크](https://github.com/a1603169/javascript-algorithms/blob/master/src/data-structures/stack/README.ko-KR.md)</span>

### 기본

**`스택(Stack)`** 은 컴퓨터 과학에서 자주 사용되는 기본적인 데이터 구조 중 하나입니다. 스택은 데이터를 `선형`으로 저장하는 구조로, **`후입선출(Last In, First Out - LIFO)`** 방식을 따릅니다. 즉, `가장 나중에 들어간 데이터가 가장 먼저 나오는 구조`입니다.


### 예제 코드 class

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    // 데이터를 스택에 추가
    push(element) {
        this.items.push(element);
    }

    // 스택에서 가장 위의 데이터를 제거하고 반환
    pop() {
        if (this.items.length == 0)
            return "Underflow"; // 스택이 비어있는 경우
        return this.items.pop();
    }

    // 스택의 가장 위에 있는 데이터를 확인
    peek() {
        return this.items[this.items.length - 1];
    }

    // 스택이 비어있는지 확인
    isEmpty() {
        return this.items.length == 0;
    }

    // 스택의 모든 요소를 출력
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

// 스택 사용 예시
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.printStack()); // 10 20
console.log(stack.peek());       // 20
console.log(stack.pop());        // 20
console.log(stack.printStack()); // 10
```

`push 메소드`를 사용하여 `배열의 끝에 데이터를 추가`하고, `pop 메소드`를 사용하여 배열의 `마지막 요소를 제거`하고 반환하는 간단한 예제 입니다.

또한 굳이 클래스를 사용하지 않고도 스택을 구현할 수 있습니다. 자바스크립트에서 배열은 스택의 기능을 수행하는 메서드들을 이미 내장하고 있기 때문에, 간단한 스택 구현에는 배열만으로 충분합니다.

예를 들어, 아래와 같은 방식으로 스택을 사용할 수 있습니다:


### 예제 코드 (내장 메소드)

```javascript
let stack = [];

// 스택에 데이터 추가
stack.push(1);
stack.push(2);
stack.push(3);

// 스택에서 데이터 제거 및 반환
console.log(stack.pop()); // 3

// 스택의 최상단 요소 확인
console.log(stack[stack.length - 1]); // 2

// 스택이 비어있는지 확인
console.log(stack.length === 0); // false

// 스택 출력
console.log(stack); // [1, 2]
```

`간단한 스택 구현이나 스택의 기본 동작`만 필요한 경우, 클래스를 사용하지 않고 `배열을 직접 사용하는 것이 더 간결하고 효율적`일 수 있습니다.