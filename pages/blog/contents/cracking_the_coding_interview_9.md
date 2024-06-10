---
title: 'Cracking the Coding Interview - 9'
subtitle: '배열과 문자열'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

배열과 문자열의 효율적인 사용과 이해는 매우 중요합니다. 이번 글에서는 해시테이블, ArrayList와 가변 크기 배열, 그리고 StringBuilder에 대해 다루겠습니다.

### 해시테이블

해시테이블은 키를 값에 매핑하는 데이터 구조로, 빠른 검색, 삽입, 삭제 연산을 제공합니다. 해시테이블은 해시 함수와 충돌 해결 기법을 통해 구현됩니다.

#### 연결리스트에 대한 구체적 설명

연결리스트는 노드의 집합으로 구성된 데이터 구조로, 각 노드는 데이터와 다음 노드를 가리키는 포인터를 포함합니다. 해시테이블의 충돌을 해결하기 위해 종종 연결리스트가 사용됩니다.

```javascript
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        let newNode = new ListNode(key, value);
        newNode.next = this.head;
        this.head = newNode;
    }

    find(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    delete(key) {
        let current = this.head;
        let prev = null;
        while (current && current.key !== key) {
            prev = current;
            current = current.next;
        }
        if (current) {
            if (prev) {
                prev.next = current.next;
            } else {
                this.head = current.next;
            }
        }
    }
}
```

#### 해시테이블과 맵 객체의 차이 구체적 설명 및 장단점

해시테이블과 맵 객체의 차이는 다음과 같습니다:

- **키 타입**: 

  - 해시테이블(객체)은 문자열과 심볼만 키로 사용할 수 있지만, 맵은 모든 데이터 타입을 키로 사용할 수 있습니다.

- **데이터 순서**: 

  - 해시테이블은 순서가 보장되지 않지만, 맵은 삽입된 순서대로 데이터가 유지됩니다.

- **프로토타입 체인**: 

  - 해시테이블은 프로토타입 체인의 영향을 받을 수 있지만, 맵은 그렇지 않습니다.

- **성능**: 

  - 맵은 대량의 데이터에 대해 일관된 성능을 제공합니다.

**장단점 비교**:

- **해시테이블 (객체)**

  - 장점:

    - 간단한 구문: `{ key: value }`
    - 대부분의 상황에서 충분히 빠른 성능 제공

  - 단점:

    - 키는 문자열 또는 심볼이어야 함
    - 객체 프로토타입 체인의 영향을 받을 수 있음
    - 데이터 순서가 보장되지 않음

- **맵 (Map)**

  - 장점:

    - 키로 모든 데이터 타입을 사용할 수 있음
    - 데이터 입력 순서가 보장됨
    - `size` 프로퍼티로 항목의 개수를 쉽게 알 수 있음
    - 성능이 객체보다 일관되게 빠름

  - 단점:

    - 문법이 객체보다 복잡함: `map.set(key, value)`

```javascript
// 해시테이블 (Object)
let obj = {};
obj['key1'] = 'value1';
console.log(obj['key1']);  // 출력: value1

// 맵 객체 (Map)
let map = new Map();
map.set('key1', 'value1');
console.log(map.get('key1'));  // 출력: value1
```

### ArrayList와 가변 크기 배열

ArrayList는 동적으로 크기를 조절할 수 있는 배열입니다. 대부분의 고급 프로그래밍 언어는 이러한 기능을 제공합니다. 자바스크립트의 배열은 기본적으로 가변 크기 배열입니다.

#### 배열과 리스트의 차이 구체적 설명

- **배열 (Array)**:
  - 고정된 크기를 가지며, 인덱스를 통해 빠르게 접근할 수 있습니다.
  - 연속된 메모리 공간에 저장되어 있어 접근 시간이 일정합니다.
  - 삽입과 삭제가 비효율적일 수 있습니다.

- **리스트 (Linked List)**:
  - 동적 크기를 가지며, 삽입과 삭제가 용이합니다.
  - 각 요소는 포인터로 연결되어 있어 연속되지 않은 메모리 공간에 저장됩니다.
  - 인덱스 접근이 비효율적입니다.

```javascript
// 자바스크립트에서의 배열
let arr = [1, 2, 3];
arr.push(4);  // 크기 자동 조절

// 연결 리스트
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}
```

#### 상환 입력 시간의 의미

상환 입력 시간은 여러 연산의 평균 시간을 나타내며, 어떤 연산은 느리지만, 전체적으로는 효율적인 성능을 보장합니다. 예를 들어, 자바스크립트 배열의 `push` 연산은 대부분 `O(1)`이지만, 배열의 크기가 가득 차면 크기를 두 배로 늘리면서 `O(n)`이 됩니다. 전체적으로는 상환 시간 `O(1)`을 가집니다.

### StringBuilder

자바스크립트는 문자열을 불변 객체로 취급하므로, 문자열을 조작할 때 새로운 문자열을 생성합니다. 이는 비효율적일 수 있으므로, StringBuilder와 유사한 패턴을 사용하여 성능을 개선할 수 있습니다.

```javascript
class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(str) {
        this.strings.push(str);
    }

    toString() {
        return this.strings.join('');
    }
}

let sb = new StringBuilder();
sb.append('Hello, ');
sb.append('world!');
console.log(sb.toString());  // 출력: Hello, world!
```

자바스크립트에서는 일반적으로 `+` 연산자나 `concat` 메서드를 사용하여 문자열을 연결합니다. 작은 문자열을 몇 번 연결하는 경우에는 성능 차이가 크지 않지만, 많은 문자열을 여러 번 연결하는 경우에는 StringBuilder 패턴을 사용하는 것이 효율적입니다.

```javascript
// + 연산자 사용
let str = 'Hello, ';
str += 'world!';
console.log(str);  // 출력: Hello, world!

// concat 메서드 사용
let str1 = 'Hello, ';
let str2 = str1.concat('world!');
console.log(str2);  // 출력: Hello, world!
```