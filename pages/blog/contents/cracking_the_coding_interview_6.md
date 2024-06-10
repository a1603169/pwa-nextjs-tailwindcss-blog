---
title: 'Cracking the Coding Interview - 6'
subtitle: '단순화 & 일반화 / 초기 사례부터 확장하기'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

코딩 인터뷰를 준비할 때, 다양한 문제를 효과적으로 해결하기 위해 다양한 접근법이 필요합니다. 이번 글에서는 **단순화** & **일반화**, **초기 사례로부터 확장하기**, 그리고 **자료구조 브레인스토밍** 접근법에 대해 알아보겠습니다.

## 단순화 & 일반화 예시

단순화와 일반화는 문제를 풀기 위해 문제의 복잡성을 줄이고, 해결 가능한 형태로 변형한 후, 점차 원래 문제로 확장해 나가는 방법입니다.

### 자료형과 같은 제약조건 단순화

예를 들어, 주어진 문자열에서 중복된 문자를 제거하는 문제를 생각해봅시다. 제약 조건이 없다고 가정하고 문제를 단순화할 수 있습니다. 이 경우, 가장 간단한 방법으로는 배열을 이용해 문자의 출현 여부를 체크할 수 있습니다.

```javascript
function removeDuplicates(str) {
    let seen = new Array(256).fill(false);
    let result = '';
    for (let char of str) {
        if (!seen[char.charCodeAt(0)]) {
            seen[char.charCodeAt(0)] = true;
            result += char;
        }
    }
    return result;
}
```

이제, 이 방법을 일반화하여 더 복잡한 문제를 해결해봅시다. 문자열 대신 단어의 출현 빈도를 세는 문제를 생각해봅시다. 여기서 해시테이블을 사용할 수 있습니다.

```javascript
function wordFrequency(sentence) {
    let words = sentence.split(' ');
    let frequency = {};
    for (let word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
}
```

### 해시 테이블 vs 맵 객체 (JavaScript)

해시 테이블과 자바스크립트의 맵 객체는 몇 가지 중요한 차이점이 있습니다:

- **키 타입**: 객체는 문자열과 심볼만 키로 사용할 수 있지만, 맵은 모든 데이터 타입을 키로 사용할 수 있습니다.
- **데이터 순서**: 객체는 순서가 보장되지 않지만, 맵은 삽입된 순서대로 데이터가 유지됩니다.
- **프로토타입 체인**: 객체는 프로토타입 체인의 영향을 받을 수 있지만, 맵은 그렇지 않습니다.
- **성능**: 맵은 대량의 데이터에 대해 일관된 성능을 제공합니다.

```javascript
// 해시 테이블 (Object)
let obj = {};
obj['key1'] = 'value1';
console.log(obj['key1']);  // 출력: value1

// 맵 객체 (Map)
let map = new Map();
map.set('key1', 'value1');
console.log(map.get('key1'));  // 출력: value1
```

## 초기 사례로부터 확장하기

초기 사례로부터 확장하기는 문제를 간단한 예제로 시작하여 점차 더 복잡한 문제로 확장해 나가는 방법입니다. 예를 들어, 피보나치 수열을 구하는 재귀 알고리즘을 생각해봅시다.

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

이 알고리즘은 간단한 초기 사례를 통해 재귀적으로 문제를 해결합니다. 이제 메모이제이션을 추가하여 성능을 개선해봅시다.

```javascript
function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
```

이와 같이 초기 사례로부터 확장하여 점진적으로 문제를 해결해 나갈 수 있습니다.

## 자료구조 브레인스토밍

자료구조 브레인스토밍은 주어진 문제에 가장 적합한 자료구조를 선택하는 과정을 포함합니다. 예를 들어, 새로운 숫자가 입력될 때마다 중간값을 구하는 문제를 생각해봅시다.

### 배열을 사용한 중간값 구하기

```javascript
class MedianFinder {
    constructor() {
        this.nums = [];
    }

    addNum(num) {
        this.nums.push(num);
        this.nums.sort((a, b) => a - b);
    }

    findMedian() {
        const len = this.nums.length;
        if (len % 2 === 0) {
            return (this.nums[len / 2 - 1] + this.nums[len / 2]) / 2;
        } else {
            return this.nums[Math.floor(len / 2)];
        }
    }
}
```

**장점:**
- 간단한 구현
- 정렬된 배열을 이용하여 빠르게 중간값을 찾을 수 있음

**단점:**
- 새로운 요소가 추가될 때마다 정렬해야 하므로 비효율적
- 삽입 연산이 느림

### 연결 리스트를 사용한 중간값 구하기

```javascript
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MedianFinder {
    constructor() {
        this.head = null;
    }

    addNum(num) {
        if (!this.head || num < this.head.val) {
            this.head = new ListNode(num, this.head);
        } else {
            let current = this.head;
            while (current.next && current.next.val < num) {
                current = current.next;
            }
            current.next = new ListNode(num, current.next);
        }
    }

    findMedian() {
        let slow = this.head, fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.val;
    }
}
```

**장점:**
- 중간값을 찾기 위한 이터레이션이 효율적
- 동적 메모리 할당으로 유연한 크기 조절

**단점:**
- 삽입 시 정렬을 유지하는 것이 복잡
- 중간값을 찾기 위해 리스트를 순회해야 하므로 비효율적

### 힙을 사용한 중간값 구하기

```javascript
class MaxHeap {
    // 구현 생략
}

class MinHeap {
    // 구현 생략
}

class MedianFinder {
    constructor() {
        this.low = new MaxHeap();
        this.high = new MinHeap();
    }

    addNum(num) {
        this.low.insert(num);
        this.high.insert(this.low.extractMax());
        if (this.low.size() < this.high.size()) {
            this.low.insert(this.high.extractMin());
        }
    }

    findMedian() {
        if (this.low.size() > this.high.size()) {
            return this.low.peek();
        } else {
            return (this.low.peek() + this.high.peek()) / 2;
        }
    }
}
```

**장점:**
- 삽입과 삭제가 효율적 (`O(log n)`)
- 두 힙을 이용하여 중간값을 빠르게 찾을 수 있음

**단점:**
- 구현이 복잡
- 메모리 사용량이 큼

### 이진 탐색 트리를 사용한 중간값 구하기

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        // 구현 생략
    }

    findMedian() {
        // 구현 생략
    }
}
```

**장점:**
- 정렬된 상태를 유지하며 삽입, 삭제가 가능
- 중위 순회를 통해 중간값을 쉽게 찾을 수 있음

**단점:**
- 균형을 유지하기 위한 추가 작업 필요
- 구현이 복잡

이와 같이 배열, 연결 리스트, 이진 트리, 힙 등 다양한 자료구조를 활용하여 문제를 해결할 수 있습니다. 각 자료구조의 장단점을 고려하여 최적의 방법을 선택하는 것이 중요합니다.