---
title: 'Neetcode - Is Palindrome'
subtitle: 'Neetcode day 5 for basic'
date: '2025-04-06'
tags: [LeetCode, Neetcode, JavaScript]
---

<span class='blogLink'>[니트코드 링크](https://neetcode.io/problems/is-palindrome)</span>

### 문제

----

주어진 문자열 `s`가 대소문자 구분 없이, 영숫자만 고려했을 때 **앞에서 읽어도 뒤에서 읽어도 같은지** 확인하는 문제이다.

#### **예제**

```javascript
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false
```

----

### 내 첫 접근 (Map으로 빈도수 확인)

----

1. 알파벳/숫자만 남기고, 소문자로 변환

2. `Map` 객체로 문자 등장 횟수 카운트

3. 홀수 개수의 문자가 1개 이상이면 `false`, 아니면 `true` 반환

```javascript
class Solution {
    isPalindrome(s) {
        let mapObj = new Map();
        if (s.length === 1) return true;
        let nospace_s = s.toLowerCase().replace(/[^a-z0-9]/gmi, "");

        for (let char of nospace_s) {
            if (!mapObj.has(char)) mapObj.set(char, 1);
            else mapObj.set(char, mapObj.get(char) + 1);
        }

        let oddCount = 0;
        for (let [, val] of mapObj) {
            if (val % 2 !== 0) oddCount++;
        }

        return oddCount <= 1;
    }
}
```

> ❗ 하지만 이 접근은 "모든 문자가 짝수여야 한다"는 **회문(Palindrome)의 조건**에 맞지 않음.
> 회문은 "양 끝 문자부터 하나씩 비교"해야 맞는 구조.

----

### 최적화 접근법 (Two Pointer)

----

1. 문자열을 소문자로 변환하고, 알파벳/숫자만 남긴다.

2. 좌측과 우측 포인터를 사용해 한 문자씩 비교하며 이동

3. 중간까지 일치하면 `true`, 중간 전에 틀리면 `false`

```javascript
function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
```

----

### 문제점

----

- 처음 접근은 "회문"의 개념을 **빈도수**로 해결하려다 보니, 방향성이 조금 어긋남.

- 회문은 문자 개수보다는 **문자의 배치(위치)**가 더 중요함.

- 따라서 "두 포인터 방식"이 더 직관적이고 성능도 더 나음.

----

### 궁금했던 점

----

1. 회문에서 꼭 투 포인터를 써야 하나? → 성능상 제일 빠름. `O(N)` 시간, `O(1)` 공간.

2. 정규식에서 `/[^a-z0-9]/g`의 의미는? → 알파벳 소문자와 숫자를 제외한 모든 문자 제거.

3. `Map`과 객체 `{}`는 언제 구분해서 써야 하나? → 키 종류가 다양할 때는 `Map`이 더 안정적.

----

### 내 접근법 vs 투 포인터 방식 비교

#### **내 접근 (Map + 빈도수 체크)**

- `Map`을 활용해 문자 빈도수를 체크

- 로직은 나쁘지 않지만, 회문이라는 문제의 특성에는 적합하지 않음

- 특정 문자들이 홀수여도 중간값이면 허용되니까 오판할 수 있음

#### **최적화 접근 (Two Pointer)**

- 불필요한 자료구조 없이 좌우에서 문자 비교

- 가장 직관적이고 성능도 좋은 방식

- 시간복잡도 `O(N)`, 공간복잡도 `O(1)`

----

**결론**: 문자 등장 빈도수보다 **위치 기반 비교가 정확한 판단 기준!**  
투 포인터 방식이 깔끔하고 빠름. 앞으로 회문 문제는 이 방식으로 접근하면 좋을 것 같다. ✨

