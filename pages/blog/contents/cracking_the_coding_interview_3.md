---
title: 'Cracking the Coding Interview - 3'
subtitle: 'log N 수행시간'
date: '2024-06-07'
tags: [Algorithm, CS, Data Structures]
---

### 로그 시간 복잡도 (O(log N))

로그 시간 복잡도는 알고리즘의 수행 시간이 입력 크기 N에 대한 로그 함수에 비례하는 경우를 의미합니다. 이는 입력 크기가 증가할 때 수행 시간이 비교적 천천히 증가하는 알고리즘을 나타내며, 매우 효율적인 알고리즘으로 간주됩니다. 일반적으로 이진 탐색과 같은 알고리즘에서 나타납니다.

### 로그 함수 개요

- **log₂(N)**: 이진 로그, 기저(base)가 2인 로그 함수.
- **log₁₀(N)**: 상용 로그, 기저가 10인 로그 함수.
- **ln(N)**: 자연 로그, 기저가 e(자연 상수)인 로그 함수.

컴퓨터 과학에서 로그 시간 복잡도는 주로 이진 로그(log₂)를 사용합니다. 기저가 무엇이든 로그 함수의 시간 복잡도는 O(log N)으로 표현되며, 기저는 상수로 취급하여 시간 복잡도 분석에서 중요하지 않습니다.

### 로그 시간 복잡도의 예

1. **이진 탐색 (Binary Search)**:
   - 정렬된 배열에서 특정 값을 찾을 때 사용합니다.
   - 배열의 중간 값을 기준으로 비교하여 탐색 범위를 절반으로 줄여가며 값을 찾습니다.

**이진 탐색 예시 코드 (Python)**:
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# 사용 예시
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
print(binary_search(arr, target)) # 출력: 6
```

2. **균형 이진 트리 (Balanced Binary Search Tree)**:
   - 예: AVL 트리, 레드-블랙 트리.
   - 삽입, 삭제, 검색 연산의 시간 복잡도는 O(log N)입니다.

**균형 이진 트리의 삽입 예시 코드 (Python, AVL 트리)**:
```python
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return TreeNode(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=" ")
        inorder_traversal(root.right)

# 사용 예시
root = None
keys = [20, 10, 30, 5, 15, 25, 35]

for key in keys:
    root = insert(root, key)

inorder_traversal(root) # 출력: 5 10 15 20 25 30 35
```

3. **힙 (Heap)**:
   - 힙 자료구조에서 삽입 및 삭제 연산의 시간 복잡도는 O(log N)입니다.
   - 예: 우선순위 큐.

**힙의 삽입 예시 코드 (Python)**:
```python
import heapq

heap = []

# 요소 삽입 (heapq를 사용한 최소 힙)
heapq.heappush(heap, 10)
heapq.heappush(heap, 30)
heapq.heappush(heap, 20)

print(heap) # 출력: [10, 30, 20]

# 요소 삭제
print(heapq.heappop(heap)) # 출력: 10
print(heap) # 출력: [20, 30]
```

### 로그 시간 복잡도의 이해

로그 시간 복잡도는 매우 효율적인 알고리즘의 성능을 나타내며, 다음과 같은 상황에서 유용합니다:

1. **대규모 데이터셋**: 입력 크기가 매우 큰 경우에도 효율적으로 동작합니다.
2. **반복적인 절반 나누기**: 이진 탐색처럼 반복적으로 탐색 범위를 절반으로 줄이는 알고리즘에서 주로 나타납니다.

### 로그 시간 복잡도의 시각적 이해

- O(log N) 시간 복잡도의 알고리즘은 입력 크기 N이 커질수록 수행 시간이 매우 천천히 증가합니다.
- 예를 들어, 입력 크기 N이 2배로 증가할 때마다 수행 시간이 1씩 증가한다고 할 수 있습니다.

### 결론

로그 시간 복잡도는 알고리즘 성능을 평가할 때 매우 중요한 개념입니다. 이진 탐색, 균형 이진 트리, 힙과 같은 알고리즘과 자료구조에서 주로 나타나며, 대규모 데이터셋에서도 효율적으로 동작합니다. 로그 시간 복잡도를 이해하고 활용하는 것은 알고리즘 설계와 최적화에 매우 유용합니다.