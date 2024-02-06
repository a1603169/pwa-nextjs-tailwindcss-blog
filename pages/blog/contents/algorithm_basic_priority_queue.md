---
title: '우선 순위 큐란(Priority Queue)'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-02-06'
tags: [Algorithm, JavaScript, Data Structures]

---

<span class='blogLink'>[관련링크](https://github.com/a1603169/javascript-algorithms/blob/master/src/data-structures/priority-queue/README.ko-KR.md)</span>

### 기본

우선 순위 큐(Priority Queue)는 컴퓨터 과학에서 사용되는 추상 데이터 타입의 일종으로, 각 요소가 우선 순위와 함께 저장되는 큐를 말합니다. 이 자료구조에서는 우선 순위가 가장 높은 요소가 가장 먼저 제거됩니다.

`기본적인 큐(Queue)는 '선입선출'(FIFO: First-In, First-Out) 원칙`을 따르지만, 우선 순위 큐에서는 요소들이 순서대로 나가는 것이 아니라, `각 요소의 우선 순위에 따라` 나갑니다. 예를 들어, 우선 순위가 높은 데이터는 우선 순위가 낮은 데이터보다 먼저 큐에서 제거됩니다.

우선 순위 큐는 여러 상황에서 유용하게 사용됩니다. 

예를 들면:

- 작업 스케줄링: 운영 체제에서 프로세스나 스레드에 우선 순위를 할당하여, 우선 순위가 높은 작업을 먼저 처리합니다.

- 네트워크 트래픽 관리: 네트워크 패킷을 우선 순위에 따라 처리할 때 사용됩니다.

- 알고리즘: `다익스트라 알고리즘(Dijkstra's algorithm)`과 같은 그래프 알고리즘에서 최소 비용 경로를 찾는 데 사용됩니다.

우선 순위 큐는 `힙(Heap), 정렬된 배열, 정렬되지 않은 배열, 연결 리스트 등 다양한 방법`으로 구현할 수 있습니다. 그 중 `힙을 사용하는 것이 가장 일반적인`데, 이는 `삽입`과 `삭제` 모두에 대해 **`효율적인 시간 복잡도`** 를 제공하기 때문입니다.


------

### 예시 코드 (Heap)

```javascript

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this.heap = [];
        this.comparator = comparator;
    }

    get size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size == 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.size > 1) {
            [this.heap[0], this.heap[this.size - 1]] = [this.heap[this.size - 1], this.heap[0]];
        }
        const poppedValue = this.heap.pop();
        this.heapifyDown();
        return poppedValue;
    }

    heapifyUp() {
        let index = this.size - 1;
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.heap[index], this.heap[parentIndex])) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else break;
        }
    }

    heapifyDown() {
        let index = 0;
        const lastIndex = this.size - 1;
        while (true) {
            const leftIndex = (index << 1) + 1;
            const rightIndex = (index << 1) + 2;
            let nextIndex = index;

            if (leftIndex <= lastIndex && this.comparator(this.heap[leftIndex], this.heap[nextIndex])) {
                nextIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.heap[rightIndex], this.heap[nextIndex])) {
                nextIndex = rightIndex;
            }
            if (nextIndex !== index) {
                [this.heap[index], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[index]];
                index = nextIndex;
            } else break;
        }
    }
}


```

-------

### 디테일 설명

1. **생성자 (constructor)**:
   ```javascript
   constructor(comparator = (a, b) => a > b) {
       this.heap = [];
       this.comparator = comparator;
   }
   ```
   - `comparator`: 우선 순위를 비교하는 함수입니다. 기본적으로는 `a > b`를 사용하여 최대 힙을 구성합니다. 즉, 큰 값이 우선 순위가 높은 상태입니다.
   - `this.heap`: 내부적으로 힙을 저장하는 배열입니다.

2. **size 게터 (get size)**:
   ```javascript
   get size() {
       return this.heap.length;
   }
   ```
   - 큐의 현재 크기(힙에 저장된 요소의 수)를 반환합니다.

3. **isEmpty 메소드**:
   ```javascript
   isEmpty() {
       return this.size == 0;
   }
   ```
   - 큐가 비어 있는지 여부를 반환합니다.

4. **peek 메소드**:
   ```javascript
   peek() {
       return this.heap[0];
   }
   ```
   - 힙의 첫 번째 요소(우선 순위가 가장 높은 요소)를 반환하지만, 제거하지는 않습니다.

5. **push 메소드**:
   ```javascript
   push(value) {
       this.heap.push(value);
       this.heapifyUp();
   }
   ```
   - 새로운 값을 힙에 추가합니다.
   - `heapifyUp`을 호출하여 힙 속성을 유지합니다.

6. **pop 메소드**:
   ```javascript
   pop() {
       if (this.size > 1) {
           [this.heap[0], this.heap[this.size - 1]] = [this.heap[this.size - 1], this.heap[0]];
       }
       const poppedValue = this.heap.pop();
       this.heapifyDown();
       return poppedValue;
   }
   ```
   - 힙에서 가장 우선 순위가 높은 요소를 제거하고 반환합니다.
   - `heapifyDown`을 호출하여 힙 속성을 재정렬합니다.

7. **heapifyUp 메소드**:
   ```javascript
   heapifyUp() {
       let index = this.size - 1;
       while (index > 0) {
           const parentIndex = (index - 1) >> 1;
           if (this.comparator(this.heap[index], this.heap[parentIndex])) {
               [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
               index = parentIndex;
           } else break;
       }
   }
   ```
   - 새로 추가된 요소를 적절한 위치로 이동시킵니다.
   - 부모 노드와 비교하여 힙 속성을 만족할 때까지 위로 이동시킵니다.

8. **heapifyDown 메소드**:
   ```javascript
   heapifyDown() {
       let index = 0;
       const lastIndex = this.size - 1;
       while (true) {
           const leftIndex = (index << 1) + 1;
           const rightIndex = (index << 1) + 2;
           let nextIndex = index;

           if (leftIndex <= lastIndex && this.comparator(this.heap[leftIndex], this.heap[nextIndex])) {
               nextIndex = leftIndex;
           }
           if (rightIndex <= lastIndex && this.comparator(this.heap[rightIndex], this.heap[nextIndex])) {
               nextIndex = rightIndex;
           }
           if (nextIndex !== index) {
               [this.heap[index], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[index]];
               index = nextIndex;
           } else break;
       }
   }
   ```
   - 힙의 첫 번째 요소를 제거한 후, 남은 요소들을 재정렬합니다.
   - 자식 노드들과 비교하여 힙 속성을 만족할 때까지 아래로 이동시킵니다.

이러한 메소드들을 통해 우

선 순위 큐가 효율적으로 작동하도록 합니다. `push`와 `pop` 작업은 힙을 재정렬하는 `heapifyUp`과 `heapifyDown` 메소드를 사용하여 힙 속성을 유지합니다.




