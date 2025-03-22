---
title: 'LeetCode - find-The-Difference'
subtitle: 'Leetcode day 2 for basic'
date: '2025-03-11'
tags: [LeetCode, JavaScript]
---

<span class='blogLink'>[리트코드 링크](https://leetcode.com/problems/find-the-difference/?envType=study-plan-v2&envId=programming-skills)</span>


### 정답 (맞음)

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // Using Map Object and if I don't have one add one and assign 1
    var obj_s = new Map();
    var obj_t = new Map();
    // put the value by looping it - 1
    for (let x of s){
        if(!obj_s.has(x)){
            obj_s.set(x, 1)
        } else {
            obj_s.set(x, obj_s.get(x)+1);
        }
    }
    // put the value by looping it - 2
    for (let x of t){
        if(!obj_t.has(x)){
            obj_t.set(x, 1)
        } else {
            obj_t.set(x, obj_t.get(x)+1);
        }
    }
    // gotta choose longer one to loop and check
    for(let [key, value] of obj_t){
        if(!obj_s.has(key)){
            return key;
        }
        else {
            if(value === obj_s.get(key)){
                 continue;
                }
            else {
                return key
            }
        }
    }
};
```

---

### 정답 (더 나은 성능)

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCode = 0;

    for (let char of s) {
        charCode ^= char.charCodeAt(0);
    }

    for (let char of t) {
        charCode ^= char.charCodeAt(0);
    }

    return String.fromCharCode(charCode);
};
```

---

### **변경된 사항 및 이점**

1. **비트 연산(`XOR`)을 활용한 성능 최적화**  
   - `XOR` 연산(`^`)을 이용하여 기존의 `Map` 객체를 사용한 방식보다 공간 복잡도를 줄였습니다.  
   - 같은 문자는 `XOR` 연산 시 상쇄되므로, 추가된 문자만 남게 됨.  

2. **공간 복잡도 감소**  
   - 기존 코드에서는 `Map`을 사용하여 추가적인 공간(O(N))을 사용했으나, 최적화 코드에서는 `O(1)`(상수 공간)만 필요함.  

3. **시간 복잡도 유지 (O(N))**  
   - 기존 코드와 동일하게 문자열의 길이만큼 순회하는 구조이므로 `O(N)`의 시간 복잡도를 유지.  

4. **코드 가독성 향상**  
   - `if-else` 블록 없이 단순히 `XOR` 연산만 수행하여 코드가 더 깔끔해짐.

### **XOR(배타적 논리합, Exclusive OR) 연산이란?**
XOR 연산(`^`)은 두 개의 비트가 다를 때 `1`을, 같을 때 `0`을 반환하는 논리 연산입니다.

| A | B | A ⊕ B (XOR) |
|---|---|------------|
| 0 | 0 | 0          |
| 0 | 1 | 1          |
| 1 | 0 | 1          |
| 1 | 1 | 0          |

즉, 같은 값이면 `0`, 다른 값이면 `1`이 되는 연산입니다.

---

### **XOR 연산의 특징**
1. **자기 자신과 XOR하면 0이 됨**  
   ```
   A ^ A = 0
   ```
   - 예: `5 ^ 5 = 0`
   - 동일한 숫자를 두 번 XOR하면 사라짐.

2. **0과 XOR하면 자기 자신이 됨**  
   ```
   A ^ 0 = A
   ```
   - 예: `7 ^ 0 = 7`

3. **순서에 상관없이 연산 가능 (교환 법칙, 결합 법칙 성립)**  
   ```
   A ^ B ^ C = C ^ A ^ B
   ```
   - 예: `2 ^ 3 ^ 4 = 4 ^ 3 ^ 2`

---

### **XOR을 활용한 최적화 로직**

```javascript
var findTheDifference = function(s, t) {
    let charCode = 0;

    for (let char of s) {
        charCode ^= char.charCodeAt(0);
    }

    for (let char of t) {
        charCode ^= char.charCodeAt(0);
    }

    return String.fromCharCode(charCode);
};
```
#### **왜 이 코드가 동작할까?**
1. `s`와 `t`의 모든 문자에 대해 `XOR`을 수행.
2. `s`에는 없는 `t`의 추가된 문자만 남고, 나머지는 `A ^ A = 0` 특성에 의해 사라짐.
3. 남은 값은 추가된 문자 하나의 ASCII 코드 값이므로, `String.fromCharCode()`로 변환하여 반환.

#### **예제 실행 과정 (`s = "abcd", t = "abcde"`)**
1. 초기 `charCode = 0`
2. `s`의 문자 XOR 수행:
   ```
   charCode ^= 'a'  (97)
   charCode ^= 'b'  (98)
   charCode ^= 'c'  (99)
   charCode ^= 'd'  (100)
   ```
3. `t`의 문자 XOR 수행:
   ```
   charCode ^= 'a'  (97) → 상쇄 (0)
   charCode ^= 'b'  (98) → 상쇄 (0)
   charCode ^= 'c'  (99) → 상쇄 (0)
   charCode ^= 'd'  (100) → 상쇄 (0)
   charCode ^= 'e'  (101) → 남음
   ```
4. 결과적으로 `charCode = 101`, 즉 `'e'`가 반환됨.

이처럼 **XOR 연산을 이용하면 O(N) 시간 복잡도로 추가된 문자를 찾을 수 있으며, O(1) 공간만 사용하여 효율적인 코드 구현이 가능**합니다. 🚀

