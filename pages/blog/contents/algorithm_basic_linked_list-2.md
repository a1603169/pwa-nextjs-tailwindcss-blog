---
title: '링크드 리스트란(Linked List) - 2'
subtitle: '기본 알고리즘 지식 / 데이터 구조 / 단일, 이중, 원형'
date: '2024-01-15'
tags: [Algorithm, JavaScript, Data Structures]
---


<span class="blogLink">[참고링크](https://github.com/a1603169/javascript-algorithms/blob/master/src/data-structures/doubly-linked-list/README.ko-KR.md)</span>

<span class="blogLink">[링크드 리스트란(Linked List) - 1 / 이전 포스트](algorithm_basic_linked_list-1)</span>


단일 연결 리스트(Singly Linked List), 이중 연결 리스트(Doubly Linked List), 원형 연결 리스트(Circular Linked List)는 모두 연결 리스트의 변형입니다. 이들의 주요 차이점은 `노드들이 어떻게 서로 연결되어 있는지`에 있습니다.

### 1. 단일 연결 리스트 (Singly Linked List)


- **구조**: 각 노드는 데이터를 저장하고 다음 노드를 가리키는 단일 포인터(`next`)를 갖습니다.

- **탐색**: 리스트의 `시작(헤드)에서 끝까지 순방향`으로만 탐색합니다.

- **장점**: 메모리 효율적임 (하나의 포인터만 저장).

- **단점**: 이전 노드로 돌아가거나 뒤에서 앞으로 탐색할 수 없음.


----

### 2. 이중 연결 리스트 (Doubly Linked List)


- **구조**: 각 노드는 데이터를 저장하고, 이전 노드를 가리키는 포인터(`prev`)와 다음 노드를 가리키는 포인터(`next`) 두 개를 갖습니다.

- **탐색**: 리스트의 `양방향으로 탐색`할 수 있습니다.

- **장점**: 양방향 탐색 가능, 이전 노드로 쉽게 돌아갈 수 있음.

- **단점**: 메모리 사용이 더 많음 (두 개의 포인터를 저장).

----

### 3. 원형 연결 리스트 (Circular Linked List)


- **구조**: 단일 또는 이중 연결 리스트와 유사하지만, 마지막 노드가 첫 번째 노드(헤드)를 가리킵니다.

- **탐색**: 순환 구조로 인해 `시작점에서 탐색을 시작하면 다시 시작점`으로 돌아올 수 있습니다.

- **장점**: 순환적인 탐색이 가능함.

- **단점**: 순환 구조로 인해 탐색 중 `무한 루프`에 빠질 위험이 있음.


-----

이제 각 리스트 유형의 `자바스크립트 코드 예시`와 간단한 `탐색 메소드`를 살펴보겠습니다.


----


### 단일 연결 리스트 예시 및 탐색

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 탐색 방법
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // 노드 추가
    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // 삭제
    remove(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
    // 길이 계산
    length() {
        return this.size;
    }

    // 인덱스로 노드 접근하는 법
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }
}
```

----

### 이중 연결 리스트 예시 및 탐색

```javascript
class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 탐색
     find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // 노드 추가
    append(data) {
        const newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.size++;
    }

    // 삭제
    remove(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                }

                this.size--;
                return current.data;
            }
            current = current.next;
        }
        return null;
    }

    // 길이 
    length() {
        return this.size;
    }

    // 인덱스를 통한 노드 접근
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }
}

```

----

### 원형 연결 리스트 예시 및 탐색

```javascript
class CircularListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 탐색
        find(data) {
        if (!this.head) return null;

        let current = this.head;
        do {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    // 노드 추가
    append(data) {
        const newNode = new CircularListNode(data);
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
        this.size++;
    }

    // 삭제
    remove(data) {
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        do {
            if (current.data === data) {
                if (current === this.head) {
                    // Removing the head
                    if (this.head.next === this.head) {
                        this.head = null;
                    } else {
                        this.head = this.head.next;
                        previous.next = this.head;
                    }
                } else {
                    // Removing a middle or last node
                    previous.next = current.next;
                }

                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    // 길이 확인
    length() {
        return this.size;
    }


    // 인덱스로 노드 접근
    getAt(index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;
        let count = 0;

        do {
            if (count === index) return current;
            count++;
            current = current.next;
        } while (current !== this.head);

        return null;
    }
}

```


### 실제 사용 예시

```javascript
// 단일 연결 리스트 예시
const sList = new SinglyLinkedList();
sList.append(1);
sList.append(2);
sList.append(3);
console.log(sList.getAt(1).data); // 2 출력
sList.remove(2);
console.log(sList.length()); // 2 출력
console.log(sList.find(2)); // 노드 { data: 2, next: {...} } 반환


// 이중 연결 리스트 예시
const dList = new DoublyLinkedList();
dList.append(1);
dList.append(2);
dList.append(3);
console.log(dList.getAt(1).data); // 2 출력
dList.remove(2);
console.log(dList.length()); // 2 출력
console.log(dList.find(2)); // 노드 { data: 2, prev: {...}, next: {...} } 반환


// 원형 연결 리스트 예시
const cList = new CircularLinkedList();
cList.append(1);
cList.append(2);
cList.append(3);
console.log(cList.getAt(1).data); // 2 출력
cList.remove(2);
console.log(cList.length()); // 2 출력
console.log(cList.find(2)); // 노드 { data: 2, next: {...} } 반환
