---
title: 'Cracking the Coding Interview - 5'
subtitle: 'BUD를 찾으라'
date: '2024-06-10'
tags: [Algorithm, CS, Data Structures]
---

BUD란 알고리즘의 최적화 및 문제풀이 기술입니다.

### BUD란 

- **Bottlenecks**
- **Unnecessary Work**
- **Duplicated Work**

BUD는 주어진 알고리즘이나 코드에서 병목 현상(Bottlenecks), 불필요한 작업(Unnecessary Work), 중복 작업(Duplicated Work)을 찾아 최적화하는 데 중점을 둡니다. 이를 통해 코드의 효율성을 높이고 실행 속도를 개선할 수 있습니다.

### Bottleneck 예제 및 해설

병목 현상은 알고리즘의 성능을 저하시키는 가장 큰 원인 중 하나입니다. 병목 현상을 해결하기 위해서는 성능을 저하시키는 부분을 찾아내고, 이를 최적화하는 것이 중요합니다.

#### 예제 (JavaScript)
```javascript
function findMax(arr) {
    let maxVal = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxVal) {
                maxVal = arr[i][j];
            }
        }
    }
    return maxVal;
}
```

#### 해설
위 코드에서 병목 현상은 중첩된 반복문입니다. `arr`의 크기가 커질수록 수행 시간이 기하급수적으로 증가합니다. 이를 최적화하기 위해 반복문을 단순화하거나 효율적인 탐색 알고리즘을 사용할 수 있습니다.

#### 최적화 (JavaScript)
```javascript
function findMax(arr) {
    return Math.max(...arr.flat());
}
```
여기서는 JavaScript의 `Math.max`와 `flat` 메서드를 사용하여 2차원 배열을 1차원 배열로 평탄화한 후, 그 중에서 최대값을 찾는 방식으로 병목 현상을 줄였습니다.

### Unnecessary Work 예제 및 해설

불필요한 작업은 코드의 실행 시간을 늘리고, 리소스를 낭비하게 만듭니다. 이를 제거함으로써 코드의 효율성을 높일 수 있습니다.

#### 예제 (JavaScript)
```javascript
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```

#### 해설
위 코드에서는 `n`이 소수인지 확인하기 위해 `2`부터 `n-1`까지의 모든 수를 검사합니다. 이는 많은 불필요한 작업을 포함합니다.

#### 최적화 (JavaScript)
```javascript
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
```
여기서는 `2`와 `3`을 먼저 검사하고, 이후 `6k ± 1` 형태의 수만 검사하여 불필요한 작업을 줄였습니다.

### Duplicated Work 예제 및 해설

중복 작업은 동일한 작업을 여러 번 반복함으로써 성능을 저하시키는 원인입니다. 이를 제거하면 코드의 실행 속도를 크게 개선할 수 있습니다.

#### 예제 (JavaScript)
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

#### 해설
위 코드에서 피보나치 수열을 계산할 때 중복 계산이 발생합니다. 예를 들어, `fibonacci(5)`를 계산할 때 `fibonacci(3)`이 두 번 계산됩니다.

#### 최적화 (JavaScript)
```javascript
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
```
여기서는 메모이제이션(Memoization)을 사용하여 중복 계산을 피했습니다. 이미 계산된 값은 `memo` 객체에 저장하여, 이후에 다시 계산하지 않고 바로 값을 가져옵니다.

BUD 기법을 사용하여 알고리즘의 성능을 개선할 수 있습니다. 병목 현상, 불필요한 작업, 중복 작업을 식별하고 제거함으로써 더 효율적인 코드를 작성할 수 있습니다. 이를 통해 인터뷰에서 문제 해결 능력을 극대화할 수 있습니다.