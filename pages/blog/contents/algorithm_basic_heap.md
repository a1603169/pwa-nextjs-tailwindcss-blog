---
title: 'Heap 이란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-02-04'
tags: [Algorithm, JavaScript, Data Structures]

---

<img class='blogImage' src='/blog/heap_example.png'>

<span class='blogLink'>[참고링크](https://github.com/a1603169/javascript-algorithms/blob/master/src/data-structures/heap/README.ko-KR.md)</span>

### 기본

힙(Heap)은 컴퓨터 과학에서 널리 사용되는 데이터 구조 중 하나로, 주로 `우선 순위 큐(priority queue)의 구현`에 사용됩니다. 힙은 `완전 이진 트리(complete binary tree)`의 한 형태로, `각 노드가 자식 노드보다 크거나 같은`(최대 힙) 또는 `작거나 같은`(최소 힙) 특성을 가집니다.

힙의 주요 특징과 작동 원리는 다음과 같습니다:

1. **완전 이진 트리**: 힙은 완전 이진 트리입니다. 이는 모든 레벨이 완전히 채워져 있으며, 마지막 레벨은 왼쪽부터 차례대로 채워진다는 것을 의미합니다.

2. **힙 속성**: 
   - **최대 힙(Max-Heap)**: 각 노드의 값은 그 자식 노드들의 값보다 크거나 같습니다. 따라서, 트리의 루트는 전체 트리에서 가장 큰 값을 가집니다.
   - **최소 힙(Min-Heap)**: 각 노드의 값은 그 자식 노드들의 값보다 작거나 같습니다. 여기서, 트리의 루트는 전체 트리에서 가장 작은 값을 가집니다.

3. **효율적인 연산**: 힙은 원소의 추가(삽입)와 삭제(최대 또는 최소 원소 제거)를 빠르게 처리할 수 있습니다. 이러한 연산들은 보통 O(log n) 시간 복잡도를 가집니다.

4. **물리적 구현**: 힙은 주로 배열을 사용하여 구현됩니다. 이진 트리의 특성을 사용하여, 부모 노드와 자식 노드 간의 관계를 배열 인덱스를 통해 쉽게 찾을 수 있습니다.

5. **용도**: 힙은 데이터의 최대값 또는 최소값에 빠르게 접근해야 할 때 유용합니다. 예를 들어, 우선 순위가 높은 작업을 먼저 처리하는 스케줄러, 데이터 스트림의 k개의 최대 또는 최소 요소를 찾는 문제 등에 활용됩니다.

힙의 일반적인 사용 사례는 힙 정렬(Heap Sort)입니다. 힙 정렬은 최대 힙이나 최소 힙의 특성을 이용하여 배열을 정렬하는 효율적인 방법입니다.

### 예시 코드 class

```javascript
// 최소 힙 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    insert(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while (this.heap[parentIndex] > this.heap[currentIndex]) {
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    remove() {
        const smallest = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify(0);
        }
        return smallest;
    }

    heapify(index) {
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);
        let smallest = index;

        if (this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapify(smallest);
        }
    }
}

// 사용 예시
const minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(3);
minHeap.insert(10);
console.log(minHeap.heap); // 힙의 상태를 출력
console.log(minHeap.remove()); // 최소값(루트)을 제거하고 반환
console.log(minHeap.heap); // 힙의 상태를 다시 출력
```


### 예시 코드 function

```javascript
let heap = [];

function getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
}

function getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
}

function getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
}

function swap(index1, index2) {
    const temp = heap[index1];
    heap[index1] = heap[index2];
    heap[index2] = temp;
}

function heapifyUp() {
    let index = heap.length - 1;
    while (getParentIndex(index) >= 0 && heap[getParentIndex(index)] > heap[index]) {
        swap(getParentIndex(index), index);
        index = getParentIndex(index);
    }
}

function heapifyDown() {
    let index = 0;
    while (getLeftChildIndex(index) < heap.length) {
        let smallerChildIndex = getLeftChildIndex(index);
        if (getRightChildIndex(index) < heap.length && heap[getRightChildIndex(index)] < heap[smallerChildIndex]) {
            smallerChildIndex = getRightChildIndex(index);
        }

        if (heap[index] < heap[smallerChildIndex]) {
            break;
        } else {
            swap(index, smallerChildIndex);
        }
        index = smallerChildIndex;
    }
}

function insert(value) {
    heap.push(value);
    heapifyUp();
}

function remove() {
    const smallest = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    heapifyDown();
    return smallest;
}

// 사용 예시
insert(12);
insert(3);
insert(10);
console.log(heap); // 힙의 상태를 출력
console.log(remove()); // 최소값(루트)을 제거하고 반환
console.log(heap); // 힙의 상태를 다시 출력
```


### 특징

- `getLeftChildIndex`, `getRightChildIndex`, `getParentIndex`: 이 함수들은 주어진 인덱스에 대한 왼쪽 자식, 오른쪽 자식, 부모 노드의 인덱스를 계산합니다.
  
- `swap`: 배열 내의 두 요소의 위치를 교환합니다.
  
- `heapifyUp`: 힙에 새로운 요소를 추가한 후, 힙 속성을 유지하기 위해 필요한 경우 요소를 상위 노드로 이동시킵니다.
  
- `heapifyDown`: 힙에서 요소를 제거한 후, 힙 속성을 유지하기 위해 필요한 경우 요소를 하위 노드로 이동시킵니다.
  
- `insert`: 힙에 새로운 요소를 추가합니다.
  
- `remove`: 힙에서 최소 요소를 제거하고 반환합니다.


이 코드는 최소 힙을 만들고, 새로운 요소를 삽입하고, 최소 요소(루트)를 제거하는 기본적인 기능을 구현합니다. 여기서 `insert 메소드`는 **새로운 요소를 추가** 하고 **힙 속성을 유지** 하기 위해 **상향 조정(up-heapify)** 을 수행합니다. `remove 메소드`는 힙에서 **최소값을 제거** 하고, 힙의 **마지막 요소를 루트로 옮긴 후** , 힙 속성을 유지하기 위해 **하향 조정(down-heapify)** 을 수행합니다.



