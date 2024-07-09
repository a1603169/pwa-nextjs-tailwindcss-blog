---
title: 'Roman to Integer (Leetcode)'
subtitle: 'Algorithm 공부 Leetcode'
date: '2024-07-09'
tags: [Algorithm, JavaScript, LeetCode]
---


### 문제

<span class='blogLink'>[리트코드 링크](https://leetcode.com/problems/roman-to-integer/submissions/1315211358/)</span>

----

### 접근

자리 수의 값을 비교해야한다 === 배열 + 인덱스를 써야한다.
각 문자를 숫자로 변환시켜야한다 === Switch 썼다.

----

### 정답 (맞음)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let ansArr = [];
    for(let x of s){
        switch(x){
            case 'I':
                ansArr.push(1);
                break;
            case 'V':
                ansArr.push(5);
                break;
            case 'X':
                ansArr.push(10);
                break;
            case 'L':
                ansArr.push(50);
                break;
            case 'C':
                ansArr.push(100);
                break;
            case 'D':
                ansArr.push(500);
                break;
            case 'M':
                ansArr.push(1000);
                break;
            default:
                break;
        }   
    }
    for(let i=0; i<ansArr.length-1; i++){
        if(ansArr[i+1] > ansArr[i]) {
            answer+=(ansArr[i+1]-ansArr[i])
            i++
        }
        else answer+=ansArr[i]
        console.log(answer)
    }
    return answer
};
```



----

### 문제점

처음에 계속 `ansArr[i-1]` 를 사용했어서 비교가 어려웠습니다. 

큰 숫자가 작은 숫자의 뒤에 와야하는데 비교할 때 계속 이전 값들과 비교하니 조금 꼬여버린 느낌 + 퍼포먼스적으로 `switch` 보단 맵핑 + `for루프` 를 하나로 정리해야 했습니다.

----

### 정답 (더 나은 성능)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToNum = {
        I: 1, V:5, X:10, L:50, C:100, D:500, M:1000, A:0
    }
    var output = 0;
    var removeNum
    for(var i = 0; i < s.length; i++){
        if(removeNum){
            removeNum = false;
            //
        }
        else{
            removeNum = false;
            if(i === s.length-1){
                output+=romanToNum[s[i]]
            }
            else if(romanToNum[s[i]] < romanToNum[s[i+1]]){
                output+=romanToNum[s[i+1]] - romanToNum[s[i]];
                removeNum = true;
            }
            else{
                output+=romanToNum[s[i]]
            }
        }
        
    }
    return output;
};
```

### 개선된 코드의 설명

`boolean` 을 통한 관리 + 한 번의 `for루프` + `객체` 로 알파벳 + 상수들 정리해놓기

----

### 궁금했던 점(메서드 차이)

XX

-----

### 내 접근법 vs 최적화 접근법 `차이`

> 252 ms vs 140 ms

