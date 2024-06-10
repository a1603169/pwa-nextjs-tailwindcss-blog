---
title: 'Cracking the Coding Interview - 8'
subtitle: '적절한 코드의 재사용 / 모듈화 / 유연한 코드 / 오류 검사'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

깨끗하고 효율적인 코드를 작성하는 것은 매우 중요합니다. 이를 위해 적절한 코드의 `재사용`, `모듈화`, `유연한 코드 작성`, 그리고 `철저한 오류 검사`가 필요합니다. 이번 글에서는 이러한 개념을 예시와 함께 살펴보겠습니다.

### 적절한 코드의 재사용

코드 재사용은 중복을 줄이고 유지 보수성을 높이는 데 도움이 됩니다. 예를 들어, 배열에서 중복된 요소를 제거하는 함수를 생각해봅시다.

```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));  // 출력: [1, 2, 3, 4, 5]
```

위 함수는 Set 객체를 이용하여 배열의 중복을 제거합니다. 이 함수를 여러 곳에서 재사용함으로써 중복 코드를 줄일 수 있습니다.

### 모듈화

모듈화는 코드를 기능별로 분리하여 독립적인 단위로 만드는 과정입니다. 이를 통해 코드의 가독성과 유지 보수성이 향상됩니다. 예를 들어, 배열 관련 유틸리티 함수를 모듈화할 수 있습니다.

```javascript
// arrayUtils.js
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

export function findMax(arr) {
    return Math.max(...arr);
}

// main.js
import { removeDuplicates, findMax } from './arrayUtils.js';

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));  // 출력: [1, 2, 3, 4, 5]
console.log(findMax(numbers));  // 출력: 5
```

이와 같이 코드를 모듈화하면 필요할 때마다 해당 기능을 쉽게 가져와 사용할 수 있습니다.

### 유연한 코드

유연한 코드는 다양한 상황에서도 잘 동작하며, 재사용성과 확장성이 뛰어납니다. 예를 들어, 배열을 정렬하는 함수를 작성할 때, 정렬 기준을 파라미터로 받을 수 있습니다.

```javascript
function sortArray(arr, compareFunction) {
    return arr.sort(compareFunction);
}

let numbers = [5, 3, 8, 1, 2];
console.log(sortArray(numbers, (a, b) => a - b));  // 오름차순 정렬: [1, 2, 3, 5, 8]
console.log(sortArray(numbers, (a, b) => b - a));  // 내림차순 정렬: [8, 5, 3, 2, 1]
```

이와 같이 유연한 코드를 작성하면 다양한 요구사항을 쉽게 충족할 수 있습니다.

### 오류 검사

철저한 오류 검사는 프로그램의 안정성을 높이는 데 중요합니다. 입력 값의 유효성을 검사하고, 예외 상황에 대해 적절히 대응해야 합니다.

```javascript
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // 출력: 5
    console.log(divide(10, 0));  // 오류 발생: Division by zero is not allowed
} catch (error) {
    console.error(error.message);
}
```

이와 같이 오류 검사를 철저히 하면 예외 상황에 대한 처리가 용이해지고, 프로그램의 신뢰성이 높아집니다.

### 결론

적절한 코드의 재사용, 모듈화, 유연한 코드 작성, 그리고 철저한 오류 검사는 깨끗하고 유지 보수 가능한 코드를 작성하는 데 중요한 요소입니다.