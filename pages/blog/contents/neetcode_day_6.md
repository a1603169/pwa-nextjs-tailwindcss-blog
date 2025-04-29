---
title: 'Neetcode - Valid Parentheses'
subtitle: 'Neetcode day 6 for basic'
date: '2025-04-29'
tags: [LeetCode, Neetcode, JavaScript]
---

<span class='blogLink'>[니트코드 링크](https://neetcode.io/problems/validate-parentheses)</span>

### 문제

----

주어진 문자열 `s`가 괄호 문자 `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'` 로만 구성되어 있을 때,  
**괄호의 짝이 올바른지** 확인하는 문제이다.

#### **예제**

```javascript
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

Input: "([)]"
Output: false

Input: "{[]}"
Output: true
```

----

### 최적화 접근법 (Stack)

----

1. 열린 괄호 `'('`, `'{'`, `'['`를 만나면 **stack**에 push한다.

2. 닫힌 괄호 `')'`, `'}'`, `']'`를 만나면
   - stack이 비어 있으면 바로 `false` 반환
   - stack의 마지막 값을 꺼내(pop)서 현재 닫힌 괄호와 매칭되는지 확인
   - 매칭이 안되면 `false` 반환

3. 문자열을 끝까지 확인한 후
   - stack이 비어 있으면 `true`
   - stack에 값이 남아있으면 `false`

```javascript
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
```

----

### 문제점

----

- 괄호 문자열의 유효성은 단순히 개수만 맞는다고 해결되지 않는다.

- **열린 괄호의 순서**와 **닫힌 괄호의 순서**까지 정확히 맞아야 한다.

- 따라서 열린 괄호를 저장하고, 닫힌 괄호가 올 때 매칭을 체크하는 **stack** 방식이 필수적이다.

----

### 궁금했던 점

----

1. 빈 문자열 `""`은 유효한가? → 네, 빈 문자열은 "모든 괄호가 맞는다"고 볼 수 있으므로 `true`.

2. 왜 stack.length === 0을 먼저 체크하나? → 닫힌 괄호가 먼저 등장할 때, (열린 괄호 없이) 잘못된 케이스를 즉시 탐지하기 위해.

3. 다른 자료구조(배열 말고)를 쓸 수는 없나? → 핵심은 **후입선출(LIFO)** 구조이기 때문에 Stack이 가장 적합하다.

----

### 최적화 접근 정리

----

#### **Stack 기반 풀이**

- 열린 괄호는 **stack에 push**
- 닫힌 괄호는 **stack.pop()과 매칭 비교**
- 스택이 비어 있는 상태에서 닫힌 괄호를 만나면 → `false`
- 모든 순회를 마친 후 스택이 비어있으면 → `true`

- 시간복잡도: `O(N)`
- 공간복잡도: `O(N)`

----

**결론**: 괄호 문제는 **스택을 이용한 짝 맞추기**가 핵심!  
닫히는 괄호를 만났을 때 바로 체크하는 습관을 들이면 오류 없이 풀 수 있다. ✨
