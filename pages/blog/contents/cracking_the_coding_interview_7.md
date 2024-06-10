---
title: 'Cracking the Coding Interview - 7'
subtitle: '최선의 수행 시간 Best Conceivable Runtime (BCR)'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

문제를 해결하기 위한 최선의 수행 시간(Best Conceivable Runtime, BCR)을 이해하고 활용하는 것은 매우 중요합니다. BCR은 문제를 해결할 수 있는 최선의 경우를 나타내며, 이를 통해 알고리즘의 효율성을 평가하고 개선할 수 있습니다.

### BCR이란?

BCR은 주어진 문제를 해결하는 데 필요한 이론적으로 최선의 시간 복잡도를 의미합니다. 이는 최적의 알고리즘을 설계하는 데 중요한 기준이 되며, 알고리즘의 최선의 성능을 평가하는 데 사용됩니다.

### BCR 사용법에 관한 예제

다음 예제에서는 정렬된 배열 두 개가 주어졌을 때 공통으로 들어 있는 원소 개수를 찾는 문제를 다룹니다.

#### 문제: 정렬된 배열 두 개가 주어졌을 때 공통으로 들어 있는 원소 개수 찾기

예를 들어, 배열 `A`와 `B`가 주어졌다고 합시다.
- A = [1, 2, 3, 4, 5]
- B = [3, 4, 5, 6, 7]

두 배열에서 공통으로 들어 있는 원소는 [3, 4, 5]이며, 그 개수는 3입니다.

#### 무식한 방법 (Brute Force)

먼저, 가장 단순한 접근법인 무식한 방법을 살펴보겠습니다. 이 방법은 각 원소를 비교하여 공통 원소를 찾는 방식입니다.

```javascript
function countCommonElements(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
```

이 접근법의 시간 복잡도는 `O(n * m)`으로, 두 배열의 크기가 클 경우 매우 비효율적입니다. 공간 복잡도는 `O(1)`로 추가적인 메모리를 거의 사용하지 않습니다.

#### 최적화 방법: 이진 탐색 사용

배열이 정렬되어 있다는 특성을 활용하여, 이진 탐색을 통해 더 효율적으로 공통 원소를 찾을 수 있습니다.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

function countCommonElementsOptimized(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (binarySearch(B, A[i])) {
            count++;
        }
    }
    return count;
}
```

이 접근법의 시간 복잡도는 `O(n log m)`으로, 무식한 방법에 비해 훨씬 효율적입니다. 공간 복잡도는 `O(1)`로 추가적인 메모리를 거의 사용하지 않습니다.

#### 최적화 방법: 해시 테이블 사용

해시 테이블을 이용하여 두 배열의 공통 원소를 빠르게 찾을 수도 있습니다.

```javascript
function countCommonElementsHash(A, B) {
    let setA = new Set(A);
    let count = 0;
    for (let element of B) {
        if (setA.has(element)) {
            count++;
        }
    }
    return count;
}
```

이 방법의 시간 복잡도는 `O(n + m)`으로, 매우 효율적입니다. 그러나 공간 복잡도는 `O(n)`으로, 배열 `A`의 모든 원소를 저장하기 위한 추가적인 메모리가 필요합니다.

### 결론

BCR을 이해하고 이를 기준으로 알고리즘을 설계하면 문제를 더욱 효율적으로 해결할 수 있습니다. 정렬된 배열에서 공통 원소를 찾는 문제를 통해 무식한 방법, 이진 탐색, 해시 테이블을 사용한 최적화 방법을 비교해 보았습니다. 각 접근법의 시간 복잡도와 공간 복잡도를 분석하고 최적의 방법을 선택함으로써 더 나은 성능을 얻을 수 있습니다.