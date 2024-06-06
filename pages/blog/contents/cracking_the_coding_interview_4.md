---
title: 'Cracking the Coding Interview - 4'
subtitle: '재귀 / 시간 복잡도'
date: '2024-06-07'
tags: [Algorithm, CS, Data Structures]
---

재귀 알고리즘의 시간 복잡도 분석에서 2의 승수 형태가 자주 등장합니다. 특히, 재귀 호출이 입력 크기를 절반씩 줄이는 방식인 경우, 시간 복잡도는 주로 로그 함수 또는 2의 승수 형태로 나타납니다. 이에 대해 좀 더 자세히 설명해드리겠습니다.

### 재귀 알고리즘의 시간 복잡도 분석: 2의 승수와 로그 함수

재귀 알고리즘의 시간 복잡도 분석에서는 종종 입력 크기를 절반씩 줄이는 구조를 많이 접하게 됩니다. 이러한 구조에서는 2의 승수 형태의 복잡도가 나타나며, 이로 인해 로그 함수가 시간 복잡도로 등장하게 됩니다.

#### 예시 1: 이진 탐색 (Binary Search)

이진 탐색은 입력 크기를 절반으로 줄이면서 값을 찾는 방식입니다. 이를 통해 로그 시간 복잡도를 갖습니다.

```python
def binary_search(arr, left, right, x):
    if right >= left:
        mid = (left + right) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, left, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, right, x)
    else:
        return -1
```

**재귀 방정식:**

- T(n) = T(n / 2) + O(1)

**기저 조건:**

- T(1) = O(1)

**풀이:**

- T(n) = T(n / 2) + O(1)
- T(n / 2) = T(n / 4) + O(1)
- T(n / 4) = T(n / 8) + O(1)
- ...
- T(n) = O(log n)

따라서, 이진 탐색의 시간 복잡도는 O(log n)입니다.

#### 예시 2: 병합 정렬 (Merge Sort)

병합 정렬은 입력 크기를 절반으로 나누고, 각 절반을 재귀적으로 정렬한 후 병합하는 방식입니다. 이를 통해 시간 복잡도가 O(n log n)으로 나타납니다.

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
```

**재귀 방정식:**

- T(n) = 2T(n / 2) + O(n)

**기저 조건:**

- T(1) = O(1)

**풀이 (마스터 정리 사용):**

- T(n) = aT(n / b) + f(n) 형태의 재귀 방정식에서 a = 2, b = 2, f(n) = O(n)입니다.
- 여기서 log_b(a) = log_2(2) = 1이고, f(n)이 O(n^log_b(a))와 동일한 경우 시간 복잡도는 O(n log n)입니다.

따라서, 병합 정렬의 시간 복잡도는 O(n log n)입니다.

#### 마스터 정리

마스터 정리는 특정 유형의 재귀 방정식을 해결하는 데 유용한 도구입니다. 마스터 정리를 사용하면 다음과 같이 시간 복잡도를 결정할 수 있습니다:

- **T(n) = aT(n / b) + f(n)** 형태의 재귀 방정식에서:
  1. **f(n) = O(n^c) where c < log_b(a)**: T(n) = O(n^log_b(a))
  2. **f(n) = O(n^c) where c = log_b(a)**: T(n) = O(n^log_b(a) log n)
  3. **f(n) = O(n^c) where c > log_b(a)**: T(n) = O(f(n))

### 결론

재귀 알고리즘의 시간 복잡도 분석에서 입력 크기를 절반으로 줄이는 구조를 갖는 경우, 시간 복잡도는 주로 로그 함수 또는 2의 승수 형태로 나타납니다. 이진 탐색과 병합 정렬이 대표적인 예로, 각각 O(log n)와 O(n log n)의 시간 복잡도를 가집니다. 이러한 분석을 통해 알고리즘의 효율성을 평가하고 최적화할 수 있습니다.