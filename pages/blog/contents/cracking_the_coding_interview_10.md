---
title: 'Cracking the Coding Interview - 10'
subtitle: '연결 리스트'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

### 참고 링크 

과거 글 입니다

<span class='blogLink'>[LinkedList (1)](algorithm_basic_linked_list-1)</span>


<span class='blogLink'>[LinkedList (2)](algorithm_basic_linked_list-2)</span>

### 예제 문제

연결 리스트(Linked List)는 노드(Node)의 집합으로 구성된 데이터 구조로, 각 노드는 데이터와 다음 노드를 가리키는 포인터를 포함합니다. 연결 리스트의 기본적인 동작과 관련된 예제 문제를 살펴보겠습니다.

#### 문제: 단일 연결 리스트에서 주어진 값을 가진 노드를 삭제하는 함수를 작성하세요.

다음은 단일 연결 리스트에서 특정 값을 가진 노드를 삭제하는 함수입니다.

### 해설

#### 노드 클래스 정의

먼저, 연결 리스트의 노드를 정의하는 클래스를 만듭니다.

```javascript
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

#### 연결 리스트 클래스 정의

그 다음, 연결 리스트를 정의하는 클래스를 만듭니다.

```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }

    // 노드를 리스트 끝에 추가하는 메서드
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

    // 특정 값을 가진 노드를 삭제하는 메서드
    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // 리스트를 출력하는 메서드
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log('null');
    }
}
```

#### 예제 사용법

이제, 위의 클래스들을 사용하여 단일 연결 리스트에서 특정 값을 가진 노드를 삭제하는 방법을 살펴보겠습니다.

```javascript
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log('원래 리스트:');
list.printList();

console.log('노드 3 삭제 후:');
list.delete(3);
list.printList();

console.log('노드 1 삭제 후:');
list.delete(1);
list.printList();

console.log('노드 5 삭제 후:');
list.delete(5);
list.printList();
```

### 해설

1. **노드 클래스**: `ListNode` 클래스는 연결 리스트의 노드를 나타냅니다. 각 노드는 값(`value`)과 다음 노드를 가리키는 포인터(`next`)를 가집니다.
2. **연결 리스트 클래스**: `LinkedList` 클래스는 연결 리스트를 관리합니다. `append` 메서드는 리스트 끝에 새 노드를 추가하며, `delete` 메서드는 특정 값을 가진 노드를 삭제합니다. `printList` 메서드는 리스트를 출력합니다.
3. **삭제 연산**: `delete` 메서드는 세 가지 경우를 처리합니다:
   - 리스트가 비어 있는 경우.
   - 삭제할 노드가 첫 번째 노드인 경우.
   - 그 외의 경우: 삭제할 노드의 이전 노드가 다음 노드를 가리키도록 링크를 변경합니다.

이 예제와 해설을 통해 연결 리스트의 기본 개념과 동작을 이해할 수 있습니다. 코딩 인터뷰 준비에 도움이 되길 바랍니다.