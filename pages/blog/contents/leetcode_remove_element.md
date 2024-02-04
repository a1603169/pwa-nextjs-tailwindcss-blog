---
title: 'Remove element (Leetcode)'
subtitle: 'Algorithm 공부 Leetcode'
date: '2024-02-04'
tags: [Algorithm, JavaScript, LeetCode]
---

<span class=`blogLink`>[리트코드 링크](https://leetcode.com/problems/remove-element/description/)</span>

### 문제

Given an integer array nums and an integer val, remove all occurrences of val in nums **`in-place`** . The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

`Return k.`

**`Example 1:`**

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.

It does not matter what you leave beyond the returned k (hence they are underscores).

**`Example 2:`**

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.

Note that the five elements can be returned in `any order`.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

**`Constraints:`**

`0 <= nums.length <= 100`
`0 <= nums[i] <= 50`
`0 <= val <= 100`

**`Custom Judge:`**

The judge will test your solution with the following code:

```java
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

----

### 접근

새로운 배열 생성 -> 루프돌려서 2와 다른 것 푸쉬 후 끝
간단하다고 생각

----

### 정답 (틀림)

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = [];
    for(x of nums){
        if(x !== val) result.push(x);
    }
    return result
};
```


----

### 문제점

문제 조건 불충족함. `In-place algorithm` 이란 주어진 문제를 해결하는 동안 입력 데이터를 저장하는 데 `필요한 공간 외에 추가적인 공간을 거의 또는 전혀 사용하지 않는 알고리즘`을 말한다. 즉, 새로운 배열을 생성해서 접근하는 방식이 아닌 기존 배열을 수정하면서 가야한다는 점을 늦게 깨달았다.

----

### 올바른 정답

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
```


### 개선된 코드의 설명

`In-place` 라는 조건에 부합하다. 기존 조건을 충족하였으며 메모리 추가공간을 사용하지 않는다.

----

### 궁금했던 점(메서드 차이)

`In-place` 라는 조건은 구체적으로 어떤 곳에 사용되어야할까?

#### 큰 데이터 세트: 
데이터 세트가 매우 크고 추가 메모리를 사용할 수 없는 경우, "in-place" 알고리즘은 매우 유용합니다.

#### 메모리 제한: 
시스템에 사용 가능한 메모리가 제한적인 경우, "in-place" 알고리즘은 메모리 사용을 최소화하는 데 도움이 됩니다.

#### 실시간 시스템: 
실시간 시스템에서는 알고리즘이 가능한 한 빠르게 실행되어야 하며, 추가적인 메모리 할당은 시스템의 성능을 저하시킬 수 있습니다. 이러한 경우에도 "in-place" 알고리즘이 유용합니다.

라고 한다.

-----

### 내 접근법 vs 올바른 접근법 `차이`


#### **내 접근법**

조건을 확실하게 보지 않았다..

----

<img className='blogImage' src='/blog/remove_element_answer.png'>

#### **올바른 접근법**

조건을 충족하며 k를 리턴하기 위해 Loop 안에서 val을 찾을 때마다 따로 ++ 해준다.
그리고 추가적으로 배열을 생성하지 않는다.

