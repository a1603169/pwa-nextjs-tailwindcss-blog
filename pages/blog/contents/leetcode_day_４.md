---
title: 'Neetcode - Two Integer Sum'
subtitle: 'Leetcode day 4 for basic'
date: '2025-04-03'
tags: [LeetCode, Neetcode, JavaScript]
---

<span class='blogLink'>[니트코드 링크](https://neetcode.io/problems/two-integer-sum)</span>


요즘에 바빠서 알고리즘 공부를 하지를 못했다.. 지금이라도 천천히 해보려고 한다!

### 문제

----
주어진 배열 `nums`와 정수 `target`이 주어졌을 때, 두 숫자의 합이 `target`이 되는 인덱스를 찾아 반환하는 문제입니다. 반드시 정확히 하나의 해만 존재한다고 가정합니다.

#### **예제**
```javascript
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,2,4], target = 6
Output: [1,2]
```

----

### 접근

----
1. `Map` 객체를 사용하여 이전에 나온 숫자와 인덱스를 저장.
2. 현재 숫자의 보완 값(`target - nums[i]`)이 `Map`에 존재하는지 확인.
3. 존재하면 해당 인덱스와 현재 인덱스를 반환.
4. 존재하지 않으면 `Map`에 현재 숫자와 인덱스를 저장하고 계속 탐색.

----

### 정답 (맞음)

```javascript
// 내 접근
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapObj = new Map();
        // Put number and index with the index as key value in Map Object
        for(let i=0; i<nums.length; i++){
            mapObj.set(nums[i], i)
        }
        // Compare the index in the Map and use forloop to calculate the diff(target - nums[i])
        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i];
            if(mapObj.get(diff) !== undefined && mapObj.get(diff) !== i && mapObj.has(diff)){
                return [mapObj.get(diff), i]
            }
        }
        // if there is none
        return []
    }
}

----
// 이게 정답
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapObj = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            
            if (mapObj.has(diff)) {
                return [mapObj.get(diff), i];
            }
            
            mapObj.set(nums[i], i);
        }
        
        return [];
    }
}
```

----

### 문제점

----
1. `Map`을 사용하여 공간 복잡도가 `O(N)`이 됨.
2. 한 번의 `for` 루프를 사용하여 최적화되었지만, 혹시 더 개선할 방법이 있을까?

----

### 궁금했던 점 (최적화 가능성)

----
1. `Map`을 사용하지 않고 배열을 활용하는 방법은?
2. 특정 상황에서 `Map`을 사용하면 성능이 저하될 가능성이 있을까?
3. 다른 언어에서는 어떤 방식으로 최적화할 수 있을까?

----

### 내 접근법 vs 최적화 접근법 `차이`

#### **내 접근법**
----
- `Map`을 활용하여 숫자와 인덱스를 저장하며 탐색.
- 단일 `O(N)` 루프를 사용하여 효율적으로 처리.
- 공간 복잡도 `O(N)`, 시간 복잡도 `O(N)`.  

#### **최적화 가능성**
----
- 특정 상황에서 `Map` 대신 정렬 후 `Two Pointers` 기법을 사용할 수도 있음 (단, 정렬이 가능할 경우).
- `O(N log N)`이 되지만 공간 복잡도를 `O(1)`로 줄일 수 있음.

#### **차이점 요약**
- `Map`을 사용하면 **더 빠른 탐색(`O(1)`)이 가능하지만, 메모리를 추가적으로 사용**해야 함.
- 정렬을 활용하면 **공간은 줄일 수 있지만, 정렬 비용(`O(N log N)`)이 추가됨**.
- 문제에서 `정확히 하나의 해만 존재`한다고 가정하므로, `Map`을 사용하는 것이 가장 최적.

**결론**: `Map`을 사용한 현재 접근법이 **가장 빠르고 효율적**한 방법! 🚀
