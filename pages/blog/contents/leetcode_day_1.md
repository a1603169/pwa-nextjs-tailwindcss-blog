---
title: 'LeetCode - merge-strings-alternately'
subtitle: 'Leetcode day 1 for basic'
date: '2025-03-10'
tags: [LeetCode, JavaScript]
---

<span class='blogLink'>[리트코드 링크](https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=programming-skills)</span>


### 정답 (맞음/틀림)

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // alternating order -> Feels like two pointer
    // Giving one of the array as a standard - shorter one and make other increment - If same just word1
    // At the end add the rest if left into new answer variable
    var word1_longer = word1.length >= word2.length ? true : false;
    console.log(word1_longer)
    var pointer = 0;
    var answer = '';
    // Make a flag to distinguish the longer one so that it's easiler to add the rest
    if(word1_longer){
        while(pointer <= word2.length-1){
            answer+=word1[pointer];
            answer+=word2[pointer];
            pointer++;
        }
        for(let i=pointer; i<word1.length; i++){
            answer+=word1[i]
        }
    } else {
        while(pointer <= word1.length-1){
            answer+=word1[pointer];
            answer+=word2[pointer];
            pointer++;
        }
        for(let i=pointer; i<word2.length; i++){
            answer+=word2[i]
        }
    }
    return answer
};
```

---

### 정답 (더 나은 성능)

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = [];
    let i = 0, len1 = word1.length, len2 = word2.length;

    while (i < len1 || i < len2) {
        if (i < len1) answer.push(word1[i]);
        if (i < len2) answer.push(word2[i]);
        i++;
    }
    
    return answer.join('');
};
```

### 개선된 코드의 설명

현재 코드도 잘 작동하지만, 몇 가지 최적화를 적용하면 더 간결하고 효율적으로 만들 수 있습니다.  

### **개선점**

1. **불필요한 조건문 제거**  
   - `word1_longer` 플래그와 `if-else` 구문 없이 하나의 반복문으로 처리할 수 있습니다.  
2. **`while` 루프 하나로 해결**  
   - 두 단어를 동시에 처리하고, 한 쪽이 먼저 끝나면 나머지를 바로 추가하는 방식으로 개선할 수 있습니다.  
3. **문자열 연결 최적화**  
   - `+=` 연산자는 문자열을 새로 생성하므로, `Array.join('')`을 사용하면 성능이 더 좋을 수 있습니다.  


```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = [];
    let i = 0, len1 = word1.length, len2 = word2.length;

    while (i < len1 || i < len2) {
        if (i < len1) answer.push(word1[i]);
        if (i < len2) answer.push(word2[i]);
        i++;
    }
    
    return answer.join('');
};
```

---

### **변경된 사항 및 이점**

1. **단일 `while` 루프로 로직 단순화**  
   - 두 개의 `while`과 `for` 루프가 필요 없이 하나의 `while` 루프로 해결했습니다.  
   - 두 문자열의 길이에 상관없이 같은 방식으로 처리 가능.  

2. **배열을 이용해 문자열 연결 성능 최적화**  
   - `answer.push()`를 사용하여 배열에 추가 후 `join('')`으로 문자열을 만드는 방식이 성능적으로 유리합니다.  
   - `+=` 연산자는 반복할 때마다 새로운 문자열을 생성하므로, 긴 문자열일 경우 성능 차이가 발생할 수 있음.  

3. **코드 가독성 향상**  
   - `if-else` 대신 단순히 조건을 검사해서 `push()` 하는 방식으로 줄였기 때문에 코드가 더 깔끔해짐.  
  
4. **최적화** 
   
시간 복잡도(O(N))는 동일

두 코드 모두 단 한 번의 반복문을 사용하여 두 문자열을 순회하므로 O(N)입니다.
즉, word1.length + word2.length = N 이라고 하면, O(N) 입니다.
공간 복잡도 차이

기존 코드에서는 문자열 answer를 직접 +=로 누적 → 문자열은 불변(immutable)이므로 매번 새로운 문자열이 생성됨.
최적화 코드에서는 배열 answer[]에 값을 추가한 후 join('')을 사용 → 성능 개선 가능.
즉, 메모리 효율성 측면에서 배열 사용 후 join('')이 더 유리할 수 있음.

