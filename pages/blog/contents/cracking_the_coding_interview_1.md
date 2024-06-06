---
title: 'Cracking the Coding Interview - 1'
subtitle: 'Big-O'
date: '2024-06-06'
tags: [Algorithm, CS, Data Structures]
---

### Big O란

Big O 표기법은 알고리즘의 효율성을 분석하는 데 사용되는 수학적 표기법으로, 입력 크기에 대한 함수의 성능을 설명합니다. 주로 시간 복잡도와 공간 복잡도를 표현하는 데 사용됩니다. Big O 표기법은 알고리즘의 `최악의 경우 성능`을 나타내며, 입력 크기 n이 커질수록 알고리즘이 얼마나 잘 동작하는지를 평가하는 데 도움을 줍니다.

### Big O 표기법의 주요 개념

1. **`시간 복잡도` (Time Complexity)**: 알고리즘이 입력 크기에 따라 실행되는 시간의 증가율을 나타냅니다.

2. **`공간 복잡도` (Space Complexity)**: 알고리즘이 입력 크기에 따라 사용하는 메모리의 증가율을 나타냅니다.

### Big O 표기법의 종류

1. **`O(1)` - 상수 시간 복잡도 (Constant Time Complexity)**: 입력 크기에 상관없이 알고리즘의 실행 시간이 일정합니다.
   
   - 예: 배열의 첫 번째 요소에 접근하는 경우
   ```javascript
   function getFirstElement(array) {
       return array[0];
   }
   ```

2. **`O(log n)` - 로그 시간 복잡도 (Logarithmic Time Complexity)**: 입력 크기가 커질수록 실행 시간이 느리게 증가합니다. 주로 이진 탐색 알고리즘에서 나타납니다.
   
   - 예: 이진 탐색
   ```javascript
   function binarySearch(array, target) {
       let left = 0;
       let right = array.length - 1;
       while (left <= right) {
           let mid = Math.floor((left + right) / 2);
           if (array[mid] === target) {
               return mid;
           } else if (array[mid] < target) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
       return -1;
   }
   ```

3. **`O(n)` - 선형 시간 복잡도 (Linear Time Complexity)**: 입력 크기에 비례하여 실행 시간이 증가합니다.
   
   - 예: 배열의 모든 요소를 순회하는 경우
   ```javascript
   function linearSearch(array, target) {
       for (let i = 0; i < array.length; i++) {
           if (array[i] === target) {
               return i;
           }
       }
       return -1;
   }
   ```

4. **`O(n log n)` - 선형 로그 시간 복잡도 (Linearithmic Time Complexity)**: 입력 크기에 로그를 곱한 시간만큼 실행 시간이 증가합니다. 주로 효율적인 정렬 알고리즘에서 나타납니다.
   
   - 예: 병합 정렬
   ```javascript
   function mergeSort(array) {
       if (array.length <= 1) {
           return array;
       }
       const mid = Math.floor(array.length / 2);
       const left = array.slice(0, mid);
       const right = array.slice(mid);
       return merge(mergeSort(left), mergeSort(right));
   }
   
   function merge(left, right) {
       let result = [];
       let leftIndex = 0;
       let rightIndex = 0;
       while (leftIndex < left.length && rightIndex < right.length) {
           if (left[leftIndex] < right[rightIndex]) {
               result.push(left[leftIndex]);
               leftIndex++;
           } else {
               result.push(right[rightIndex]);
               rightIndex++;
           }
       }
       return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   }
   ```

5. **`O(n^2)` - 이차 시간 복잡도 (Quadratic Time Complexity)**: 입력 크기의 제곱에 비례하여 실행 시간이 증가합니다. 주로 중첩된 반복문에서 나타납니다.
   
   - 예: 버블 정렬
   ```javascript
   function bubbleSort(array) {
       let n = array.length;
       for (let i = 0; i < n; i++) {
           for (let j = 0; j < n - 1; j++) {
               if (array[j] > array[j + 1]) {
                   [array[j], array[j + 1]] = [array[j + 1], array[j]];
               }
           }
       }
       return array;
   }
   ```

6. **`O(2^n)` - 지수 시간 복잡도 (Exponential Time Complexity)**: 입력 크기에 대한 지수 함수에 비례하여 실행 시간이 증가합니다. 주로 재귀적 알고리즘에서 나타납니다.
   
   - 예: 피보나치 수열 (단순 재귀)
   ```javascript
   function fibonacci(n) {
       if (n <= 1) {
           return n;
       }
       return fibonacci(n - 1) + fibonacci(n - 2);
   }
   ```

### Big O 표기법의 특성

- **`최악의 경우` 분석**: Big O 표기법은 알고리즘의 최악의 경우 성능을 나타냅니다. 이는 알고리즘이 얼마나 효율적으로 동작하는지 보장하는 데 중요합니다.
  
- **`상수 계수 무시`**: Big O 표기법에서는 상수 계수를 무시합니다. 예를 들어, O(2n)과 O(n)은 동일하게 O(n)으로 표기됩니다.
  
- **`가장 높은 차수`만 고려**: Big O 표기법에서는 가장 높은 차수만 고려합니다. 예를 들어, O(n^2 + n)은 O(n^2)으로 표기됩니다.

### 결론

Big O 표기법은 알고리즘의 시간 복잡도와 공간 복잡도를 이해하고 비교하는 데 중요한 도구입니다. `알고리즘의 효율성`을 평가하고 `최적의 알고리즘을 선택하는 데 큰 도움`이 됩니다. 각 시간 복잡도에 대한 이해를 통해 다양한 상황에서 적합한 알고리즘을 선택하고 구현할 수 있습니다.