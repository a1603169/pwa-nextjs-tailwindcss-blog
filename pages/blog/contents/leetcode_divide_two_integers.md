---
title: 'Divide two integers'
subtitle: 'Algorithm 공부 Leetcode'
date: '2024-01-22'
tags: [Algorithm, JavaScript, LeetCode]
---

<span class='blogLink'>[리트코드 링크](https://leetcode.com/problems/divide-two-integers/description/)</span>

### 문제

----
알고리즘문제

Given two integers **`dividend`** and **`divisor`**, divide two integers *``without using multiplication, division, and mod operator``*.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [`−2**31`, `2**31 − 1`]. For this problem, if the quotient is strictly greater than `2**31 - 1`, then return `2**31 - 1`, and if the quotient is strictly less than `-2**31`, then return `-2**31`.

 

**Example 1:**

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = `3.33333..` which is truncated to `3`.

**Example 2:**

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = `-2.33333..` which is truncated to `-2`.
 

**Constraints:**

`-2**31` <= dividend, divisor <= `2**31 - 1`
divisor != 0

----

### 접근

하나씩 예외를 제외 시켜버리면 되겠다. 범위 안에 잘 맞춰서 넣으면 되겠다.

----

### 정답 (반만 맞음)

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let pre_result = dividend/divisor;
    // Exceptions
    if(pre_result === 0) return 0;
    if(pre_result > 2**31-1) return 2**31-1;
    if(pre_result < (-2)**31) return (-2)**31;
    if(divisor === 1 || divisor === -1) return pre_result;

    if(dividend%divisor === 0){
        return pre_result
    }
    else {
        if(pre_result < 0) return Math.floor(pre_result)+1;
        else return Math.floor(pre_result);
    }
};
```


----

### 문제점

조건을 맞추지 못하였다.

- *``without using multiplication, division, and mod operator``*.

이라는 곱하기 / 나누기 / 나머지 연산자를 사용하면 안되었는데... 
이걸 사용을 못한다 하니까 접근을 어떻게 해야하는지 몰랐었습니다.

----

### 정답 (맞음)

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = -(2 ** 31);

    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }

    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0;
    while (dividend >= divisor) {
        let temp = divisor, multiple = 1;
        while (dividend >= temp << 1 && temp << 1 > 0) {
            temp <<= 1;
            multiple <<= 1;
        }
        dividend -= temp;
        result += multiple;
    }

    return sign * result;
};
```


### 개선된 코드의 설명

비트 조작과 반복문을 사용하여 나눗셈을 수행할 수 있습니다. 주어진 제약 사항에 따라, 곱셈, 나눗셈, 모듈러 연산자를 사용하지 않고 두 정수를 나누는 것이 목표입니다. 결과가 32비트 정수 범위를 벗어나면 적절한 최대값 또는 최소값을 반환해야 합니다.

#### 알고리즘 설명

- `예외 처리`: 결과가 32비트 정수 범위를 벗어나는 경우를 처리합니다.
- `부호 처리`: 두 수의 부호를 고려하여 결과의 부호를 결정합니다.
- `비트 조작을 사용한 나눗셈`: 나눗셈을 수행하는 동안 비트 쉬프트 연산을 사용하여 피제수(dividend)를 줄이고 결과를 계산합니다.

----

### 내 접근법 vs 최적화 접근법 `차이`

<img className='blogImage' src='/blog/divide_two_wrong.png'>

#### **내 접근법**

접근 자체에서 조건이 틀렸다. 조건을 무시하지말고 생각해보자

----



<img className='blogImage' src='/blog/divide_two_answer.png'>

#### **최적화 접근법**

조건에 맞춰서 루프를 잘 돌렸다.


