---
title: 'Neetcode - Valid Anagram'
subtitle: 'Leetcode day 2 for basic'
date: '2025-03-22'
tags: [LeetCode, Neetcode, JavaScript]
---

<span class='blogLink'>[니트코드 링크](https://neetcode.io/problems/is-anagram)</span>

### 문제

----
주어진 두 개의 문자열 `s`와 `t`가 아나그램(Anagram)인지 판별하는 문제입니다. 아나그램이란, 문자의 순서는 다르지만 같은 문자와 개수로 이루어진 단어를 의미합니다.

#### **예제**
```javascript
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```

----

### 접근

----
1. 문자열의 길이가 다르면 무조건 `false` 반환.
2. `Map` 객체를 사용하여 `s`의 각 문자의 개수를 저장.
3. `t`의 각 문자를 `Map`에서 하나씩 감소시키면서 개수를 체크.
4. 최종적으로 모든 문자의 개수가 `0`이면 `true`, 그렇지 않으면 `false` 반환.

----

### 정답 (맞음)

```javascript
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var map_s = new Map();
        
        for(let i = 0; i < s.length; i++){
            if(!map_s.has(s[i])){
                map_s.set(s[i], 1)
            } else {
                map_s.set(s[i], map_s.get(s[i]) + 1)
            }
        }
        
        for(let j = 0; j < t.length; j++){
            if(!map_s.has(t[j])){
                return false
            } else {
                map_s.set(t[j], map_s.get(t[j]) - 1)
            }     
        }

        for(let [key, val] of map_s){
            if(val !== 0) return false;
        } 
        return true;
    }
}
```

----

### 문제점

----
1. `Map`을 사용하기 때문에 공간 복잡도가 `O(N)`으로 증가.
2. `for` 루프 두 개를 사용하여 최적화의 여지가 있음.
3. `Map`을 사용하지 않고 더 빠르게 처리할 방법이 있을까?

----

### 정답 (더 나은 성능)

```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    
    return count.every(val => val === 0);
};
```

### 개선된 코드의 설명

----
1. `Map` 대신 **고정된 크기의 배열**을 사용하여 공간 복잡도를 `O(1)`로 줄임.
2. `charCodeAt(0) - 97`을 사용하여 알파벳 문자 인덱스를 계산.
3. `s`에서 증가, `t`에서 감소하면서 같은 루프에서 비교하여 **O(N)으로 최적화**.
4. `count.every(val => val === 0)`를 사용하여 모든 값이 `0`인지 확인하여 결과 반환.

----

### 궁금했던 점(메서드 차이)

-----
1. `Map`을 사용한 방법과 배열을 사용한 방법 중 어떤 것이 더 나을까?
2. `charCodeAt()`을 활용하는 것이 직접적인 비교보다 빠를까?
3. `every()` 메서드를 사용하면 성능에 큰 영향이 있을까?

----

### 내 접근법 vs 최적화 접근법 `차이`

#### **내 접근법**
----
- `Map`을 사용하여 문자 개수를 저장하고 비교.
- `s`에서 개수를 증가시키고, `t`에서 감소시키는 방식.
- 공간 복잡도 `O(N)`, 시간 복잡도 `O(N)`.  

#### **최적화 접근법**
----
- 고정된 크기의 배열 (`Array(26)`)을 사용하여 공간 복잡도를 `O(1)`로 감소.
- `s`에서 증가, `t`에서 감소하면서 단일 루프에서 처리.
- 시간 복잡도 `O(N)`, 공간 복잡도 `O(1)`.

#### **차이점 요약**
- `Map`을 사용하면 유니코드 문자도 처리할 수 있지만, 문제에서 영어 소문자만 주어진다면 배열을 쓰는 것이 훨씬 효율적.
- `Map`은 해시 테이블을 사용하므로 **추가적인 해싱 비용**이 발생할 수 있음.
- 배열을 사용하면 **메모리 사용량이 고정**되어 최적의 성능을 보장할 수 있음.

**결론**: 영어 소문자만 주어지는 경우라면 **배열을 사용하는 방식이 더 빠르고 효율적**. 하지만 범용적으로 사용하려면 `Map`을 고려할 수도 있음.

