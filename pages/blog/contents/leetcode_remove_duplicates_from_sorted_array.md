---
title: '정돈된 배열에서 중복 값 제거(Leetcode)'
subtitle: 'Algorithm 공부 Leetcode (remove-duplicates-from-sorted-array)'
date: '2024-04-07'
tags: [Algorithm, JavaScript, LeetCode]
---

<span class='blogLink'>[리트코드 링크](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)</span>

### 문제

----

#### **Remove Duplicates from Sorted Array**

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **`in-place`** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same.** Then return the number of unique elements in `nums`.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

- **Change the array nums** such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
  
- Return **`k`** .

**Custom Judge:**

The judge will test your solution with the following code:

```java
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.


**Example 1:**

**Input:** `nums = [1,1,2]`

**Output:** `2, nums = [1,2,_]`

**Explanation:**

Your function should `return k = 2`, with the `first two elements` of nums being 1 and 2 respectively.

It does not matter what you leave beyond the returned k (hence they are underscores).

**Example 2:**

**Input:** `nums = [0,0,1,1,1,2,2,3,3,4]`

**Output:** `5, nums = [0,1,2,3,4,_,_,_,_,_]`

**Explanation:** 

Your function should `return k = 5`, with the `first five elements` of nums being 0, 1, 2, 3, and 4 respectively.

It does not matter what you leave beyond the returned k (hence they are underscores).
 

**Constraints:**

`1 <= nums.length <= 3 * 104`

`-100 <= nums[i] <= 100`

nums is **`sorted`** in **non-decreasing order**.


----

### 접근

보자마자 Map객체를 사용한 해시테이블 접근을 하여 답을 리턴하면 된다고 생각했지만.. 문제의 

**1.** Remove duplicates `in-place` in the array nums. 

**2.** Return the new length of the array after removing duplicates.

**3.** It's important to note that you should not be creating a new array for the output; instead, you modify the input array nums directly due to the in-place requirement.

중요한 조건을 빼먹었다! Assertion도 고로 통과할 수 없었다.

#### In-Place 란


**"In-place"**

컴퓨터 과학에서 데이터 구조를 변경하거나 알고리즘을 수행할 때 `추가적인 메모리를 거의 또는 전혀 사용하지 않고`, 

`주어진 데이터 구조 내에서 직접적으로 변경`을 가하는 방식을 의미합니다. 

즉, 입력으로 주어진 데이터 구조 자체를 수정하여 결과를 도출하며, 이 과정에서 필요한 추가 메모리는 입력의 크기와 무관한 상수 크기(constant space)만을 요구합니다. 이는 알고리즘이나 함수가 공간 복잡도 측면에서 효율적이라는 것을 의미합니다.

##### In-Place 작업의 예시

**정렬 알고리즘:** 여러 정렬 알고리즘(예: 버블 정렬, 삽입 정렬, 퀵 정렬 등)은 배열을 정렬할 때 추가적인 배열을 생성하지 않고 주어진 배열 내에서 원소들을 교환(swap)하는 방식으로 작동합니다.

**배열에서 중복 제거:** 주어진 배열에서 중복된 원소를 제거하고, 유니크한 원소들만 남기는 작업을 추가 배열을 사용하지 않고 원래의 배열 내에서 수행합니다.

##### In-Place 작업의 특징

**메모리 효율성:** 추가적인 데이터 구조를 생성하지 않기 때문에 메모리 사용량이 적습니다. 

이는 특히 메모리 자원이 제한적인 환경에서 중요할 수 있습니다.

**원본 데이터 변경:** In-place 알고리즘은 원본 데이터를 변경합니다. 

이는 데이터의 원본 상태를 유지해야 하는 경우에는 단점이 될 수 있습니다. 

때로는 원본 데이터의 복사본을 만들고 작업하는 것이 바람직할 수 있습니다.

#### In-Place vs. Out-of-Place

**반대**로 **`"Out-of-place"`** 작업은 추가적인 메모리를 사용하여 입력 데이터의 수정 없이 새로운 데이터 구조에 결과를 구성하는 방식을 말합니다. 

이 방법은 `원본 데이터를 보존할 수 있다는 장점`이 있지만, `더 많은 메모리를 요구하는 단점`이 있습니다.

예를 들어, 배열을 정렬할 때 새로운 배열에 정렬된 요소를 하나씩 추가하는 방식은 Out-of-Place 작업입니다. 

이 경우, 원본 배열은 변경되지 않으며, 정렬된 데이터는 새로운 배열에 저장됩니다.

> 이 이론을 보았을 때 나는 out-of-place 방식으로 접근했었는데 틀리지는 않은 접근법이였지만 문제의 요구사항에 적합하지 못하였다.


----

### 정답 (틀림)

```javascript
// Out of place
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var mapObj = new Map();
    var arr = []
    for(let x of nums){
        console.log(x)
        if(!mapObj.has(x)) {
            mapObj.set(x, 1)
        }
        else {
            mapObj.set(x, mapObj.get(x)+1);
        }
    }  
    for([key, val] of mapObj){
        arr.push(key);
    }
    return nums = arr 
};
```

----

### 문제점

요구사항 불충족

----

### 정답

투 포인터를 사용하면 되었다.

```javascript
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;

    let i = 0; // Pointer for the next unique element position
    for (let j = 1; j < nums.length; j++) {
        // If the current element is not equal to the previous (unique), update the position i
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j]; // Move the next unique element to the position i
        }
    }
    // Return the length of the unique part of the array
    return i + 1;
};
```


### 개선된 코드의 설명


네, 맞습니다. 이 문제는 "정렬된 배열에서 중복 제거"를 위해 투 포인터 기법을 사용하는 것이 일반적인 해결 방법 중 하나입니다. 투 포인터 기법은 배열이나 리스트를 순회할 때 두 개의 포인터를 사용하는 방법으로, 여기서는 다음과 같이 작동합니다:

1. **첫 번째 포인터(`i`)** 는 '최신' 유니크한 요소의 위치를 가리킵니다. 즉, 배열의 시작 부분부터 중복 없이 정렬된 부분의 마지막 인덱스를 나타냅니다.
2. **두 번째 포인터(`j`)** 는 배열을 순회하면서 각 요소를 검사하는 역할을 합니다. `j`는 항상 `i`보다 크거나 같으며, 배열의 끝까지 이동합니다.

#### 동작 원리

- 배열 `nums`의 각 요소를 순차적으로 검사하면서, 현재 요소(`nums[j]`)가 이전에 발견된 유니크한 요소(`nums[i]`)와 다를 때, 유니크한 요소의 개수를 나타내는 포인터 `i`를 하나 증가시키고, `nums[j]`를 `nums[i]` 위치로 이동시킵니다. 이 과정은 배열의 모든 중복을 제거하고, 유니크한 요소만 남게 합니다.
- 순회가 끝나면 `i + 1`이 유니크한 요소들의 총 개수가 됩니다. (`i`는 유니크한 요소의 인덱스를 나타내므로, 길이를 구하기 위해서는 1을 더해야 합니다.)

#### 예시

예를 들어, `nums = [1, 1, 2]`인 경우, 처음에 `i`와 `j`는 각각 0과 1로 시작합니다. `nums[j]`가 `nums[i]`와 다르면(즉, 새로운 유니크한 요소를 발견했으면), `i`를 1 증가시키고 `nums[j]`의 값을 `nums[i]`에 할당합니다. 이 과정을 배열 끝까지 반복합니다.

이 방법을 사용하면 추가 배열을 생성하지 않고 주어진 배열 내에서 중복을 제거할 수 있으며, 문제의 요구사항인 "in-place"로 해결할 수 있습니다. 

----

### 궁금했던 점(메서드 차이)

없음

