---
title: '링크드 리스트란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-01-12'
tags: [Algorithm, JavaScript]
---

***`링크드 리스트(Linked List)`***는 `데이터 요소의 연속적인 컬렉션`으로, 각 요소가 `다음 요소의 참조(링크)를 포함하는 데이터 구조`입니다. 
`배열`과 비교했을 때, 링크드 리스트는 `동적 크기 조정이 가능하고, 요소의 삽입과 삭제가 간단`합니다. `반면, 특정 인덱스의 요소에 접근하는 데에는 더 많은 시간`이 걸립니다.

JavaScript에서 **`단일 연결 리스트(Singly Linked List)`**를 구현하는 방법을 살펴보겠습니다.

### 노드 클래스(Node Class)

링크드 리스트의 각 요소는 `노드(Node)`라고 합니다. 각 노드는 데이터와 다음 노드를 가리키는 참조를 가집니다.

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

### 링크드 리스트 클래스(Linked List Class)

링크드 리스트 자체는 노드의 시작점인 `헤드(Head)`를 가지며, 여러 유용한 메서드를 포함할 수 있습니다.

```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }

    // 링크드 리스트가 비어있는지 확인
    isEmpty() {
        return this.head === null;
    }

    // 링크드 리스트의 맨 앞에 새 노드 추가
    prepend(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // 링크드 리스트의 맨 뒤에 새 노드 추가
    append(data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // 링크드 리스트 출력
    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    // 특정 데이터를 가진 노드 찾기
    find(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // 특정 데이터를 가진 노드 삭제
    delete(data) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}
```

이것은 이렇게 사용될 수 있습니다.

```javascript
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.print();  // 0 -> 1 -> 2 -> null
console.log(list.find(1));  // ListNode { data: 1, next: ListNode { data: 2, next: null } }
list.delete(1);
list.print();  // 0 -> 2 -> null
```

위 코드는 기본적인 단일 연결 리스트를 구현하고, 몇 가지 주요 작업(삽입, 검색, 삭제)을 수행하는 방법을 보여줍니다. 링크드 리스트는 다양한 변형이 있으며, 각각 다른 특성과 사용 사례가 있습니다


그 예시로 `이중 연결 리스트`, `순환 연결 리스트`가 있습니다.

### 이중 연결 리스트(Doubly Linked List)

이중 연결 리스트에서는 각 노드가 이전 노드와 다음 노드를 모두 참조합니다. 이를 통해 `앞뒤로 탐색이 가능`해집니다.

#### 노드 클래스

```javascript
class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
```

#### 이중 연결 리스트 클래스

```javascript
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.data} <-> `;
            current = current.next;
        }
        console.log(result + 'null');
    }

    // 추가적인 메서드들 (예: 삭제, 검색 등)은 여기에 구현가능.
}
```

### 순환 연결 리스트(Circular Linked List)

순환 연결 리스트에서는 마지막 노드가 첫 번째 노드를 가리키게 됩니다.

#### 노드 클래스

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

#### 순환 연결 리스트 클래스

```javascript
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    print() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let result = '';
        do {
            result += `${current.data} -> `;
            current = current.next;
        } while (current !== this.head);
        console.log(result + `${this.head.data} (head node)`);
    }

    // 추가적인 메서드들 (예: 삭제, 검색 등)은 여기에 구현가능.
}
```

이 코드들은 각각 이중 연결 리스트와 순환 연결 리스트의 기본적인 구현을 보여줍니다. 


### 노드 클래스와 리스트 클래스를 왜 분리하는지? (개인적으로 궁금했던 것)

노드 클래스와 리스트 클래스를 분리하여 구현하는 이유는 주로 코드의 구조화, 책임 분리, 그리고 `재사용성`과 `유지보수`의 용이성 때문입니다. 이는 `객체지향 프로그래밍의 핵심 원칙 중 일부를 반영`하는 것입니다. 각각의 역할을 살펴보면 다음과 같습니다:

### 1. 노드 클래스(Node Class)의 역할과 목적

- **역할**: 개별 데이터 요소를 표현합니다. 링크드 리스트의 각 노드는 데이터와 다음 노드에 대한 참조(또는 이중 연결 리스트의 경우 이전 노드에 대한 참조도)를 가집니다.
- **목적**: 노드 자체의 구조를 정의합니다. 이는 링크드 리스트뿐만 아니라 다른 데이터 구조(예: 트리, 그래프)에서도 재사용될 수 있습니다.

### 2. 리스트 클래스(Linked List Class)의 역할과 목적

- **역할**: 전체 링크드 리스트의 구조와 동작을 관리합니다. 이 클래스는 리스트의 시작점인 헤드를 유지하고, 리스트에 노드를 추가, 삭제, 검색하는 등의 작업을 수행합니다.
- **목적**: 링크드 리스트의 고유한 로직과 동작을 관리합니다. 리스트의 길이, 순회, 특정 위치에 노드 추가/삭제 등의 작업을 이 클래스 내에서 처리합니다.

### 3. 이 둘을 분리 하는 것의 장점

- **책임 분리(Responsibility Separation)**: 코드가 각각의 `책임에 맞게 분리됨`으로써 더 읽기 쉽고 관리하기 쉬워집니다.
- **재사용성(Reusability)**: 노드 클래스는 `다른 자료 구조에서도 재사용`될 수 있으며, 리스트 클래스는 `다양한 형태의 링크드 리스트(예: 이중 링크드 리스트, 순환 링크드 리스트)에 적용`될 수 있습니다.
  
- **유지보수성(Maintainability)**: 각 클래스는 독립적으로 수정, 업데이트, 디버그될 수 있어, 큰 시스템에서 `유지보수성이 향상`됩니다.
- **확장성(Scalability)**: 새로운 기능이나 메서드를 추가할 때, `관련 클래스에만 집중하여 확장`할 수 있습니다.

객체지향 프로그래밍의 이러한 원칙들은 크고 복잡한 시스템에서 특히 유용하지만, 작은 프로젝트나 간단한 스크립트에서는 이러한 구조가 과도할 수 있습니다. 이 경우, 클래스를 사용하지 않고 함수와 객체를 사용하여 구현하는 절차적 방식을 선택할 수도 있습니다. 프로젝트의 규모, 복잡성, 팀의 선호도 등에 따라 적절한 접근 방식을 선택하는 것이 중요합니다.