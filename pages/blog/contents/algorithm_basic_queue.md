---
title: 'Queue 란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-01-16'
tags: [Algorithm, JavaScript, Data Structure]
---

<span class="blogLink">[참고링크](https://github.com/a1603169/javascript-algorithms/blob/master/src/data-structures/queue/README.ko-KR.md)</span>

자바스크립트에서 큐(Queue)를 구현하는 방법은 여러 가지가 있지만, 가장 간단하고 일반적인 방법은 배열을 사용하는 것입니다. 큐는 `FIFO(First-In-First-Out) 구조`를 가지며, 배열을 사용하면 `push` 메서드로 큐의 뒤쪽에 요소를 추가하고, `shift` 메서드로 큐의 앞쪽에서 요소를 제거할 수 있습니다.

다음은 자바스크립트로 간단한 큐를 구현하는 예시입니다:

```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    // 큐에 요소 추가
    enqueue(element) {
        this.items.push(element);
    }

    // 큐에서 요소 제거하고 반환
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // 큐가 비어 있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐의 맨 앞에 있는 요소 확인
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // 큐의 모든 요소 출력
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// 큐 사용 예시
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); // 1 2 3
console.log(queue.dequeue());    // 1
console.log(queue.front());      // 2
console.log(queue.printQueue()); // 2 3
```

이 구현에서는 큐를 클래스로 정의하고, `enqueue`, `dequeue`, `isEmpty`, `front`, `printQueue` 등의 메서드를 제공합니다. 

- `enqueue`: 큐의 뒤에 새로운 요소를 추가합니다.

- `dequeue`: 큐에서 첫 번째 요소를 제거하고 반환합니다.

- `isEmpty`: 큐가 비어 있는지 확인합니다.

- `front`: 큐의 첫 번째 요소를 반환하지만 제거하지는 않습니다.

- `printQueue`: 큐의 모든 요소를 문자열로 반환합니다.