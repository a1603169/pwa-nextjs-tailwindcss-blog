---
title: '3 Sum 세 개의 합 0인 것 구하기 (Leetcode)'
subtitle: 'Algorithm 공부 Leetcode'
date: '2024-01-12'
tags: [Algorithm, JavaScript, LeetCode]
---


<span class="blogLink">[리트코드 링크](https://leetcode.com/problems/3sum/)</span>

### 문제 

---- 

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j, i != k,` and `j != k,` and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

 

**Example 1:**

Input:` nums = [-1,0,1,2,-1,-4]`

Output: `[[-1,-1,2],[-1,0,1]]`

Explanation: 

`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.`

`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.`

`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.`

The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`

Notice that the order of the output and the order of the triplets does not matter.


**Example 2:**

Input: `nums = [0,1,1]`

Output: `[]`

Explanation: The only possible triplet does not sum up to 0.


**Example 3:**

Input: `nums = [0,0,0]`

Output: `[[0,0,0]]`

Explanation: The only possible triplet sums up to 0.
 

**Constraints:**

`3 <= nums.length <= 3000`

`-105 <= nums[i] <= 105`

----

### 접근

아직 배열 내의 간단한 filter / indexOf 이런 메소드에 익숙하지 않을 뿐더러, 절대로 `3개의 루프`를 돌리면 안될거라고 생각은 하고 있었다....
i,j,k 3배열을 돈다면 문제점이 ***`시간 복잡도 (n^3)`*** 가 말도 안되게 높아지게 된다. 순회해야하는데 아직 `해결 방법의 흐름을 잡지 못하였다`. 익숙하지 않은 탓이 크다.

`이중 배열의 sort방법/중복제거`도 좀 미리 알아두었으면 좋았다고 생각이든다. 구글링했다.

### 정답 (틀림)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    if(nums.length === 3 && nums[0] + nums[1] + nums[2] !== 0){
        return []
    }
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            for(let k=2; k<nums.length; k++){
                if(i !== j && j!== k && i !== k){
                    if (nums[i] + nums[j] + nums[k] === 0){
                        if(i < j && j < k && i < k) {
                            result.push([nums[i],nums[j],nums[k]].sort((a,b) => a-b))
                        } 
                    } 
                }
            }
        }
    }
    if(result.length === 0) {
        return []
    }
    else {
        return [...new Set(result.join('|').split('|'))].map(v=>v.split(',')).map(v=>v.map(a=>+a))
        // 이중배열의 sort방법 및 중복제거
    }
};
```

result 배열을 만들어놓고, 예외를 위한 코드 위쪽의 `if` 와 마지막에 `if`가 있다. 하지만 당연히 특수 케이스 정리에 대한 건 조금 부족했다.

내 방식의 가장 큰 문제를 물어보니,

### 문제점

1. **시간 복잡도**: 현재 구현은 세 개의 중첩 루프를 사용하고 있어, 시간 복잡도가 \(O(n^3)\)입니다. 이는 입력 배열의 크기에 따라 비효율적으로 실행 시간이 증가합니다. 대규모 배열에서는 매우 느릴 수 있습니다.

2. **중복된 결과**: 같은 조합의 숫자가 결과 배열에 여러 번 추가될 수 있습니다. 이는 중복 제거 로직(`[...new Set(result.join('|').split('|'))]`)으로 처리하려고 하지만, 이 방식은 비효율적이고 복잡합니다.

3. **정렬**: 각 숫자 셋트를 정렬하는 것은 필요하지만, 결과 배열 전체에서 중복을 제거하기 위해 사용한 문자열 변환과 다시 배열로 변환하는 과정은 성능상 좋지 않습니다.

4. **인덱스 조건**: `i < j`, `j < k`, `i < k` 조건은 필요하지만, 루프의 시작 인덱스를 0, 1, 2로 고정하면 일부 조합을 놓칠 수 있습니다. 예를 들어, `i`는 0부터 시작하고, `j`는 `i+1`부터, `k`는 `j+1`부터 시작해야 합니다.

5. **특수 케이스 처리**: 배열 길이가 3이고 합이 0이 아닌 경우를 처리하는 로직은 필요하지만, 이보다 더 일반적인 경우(예: 배열 길이가 2 이하인 경우)의 처리가 누락되었습니다. (**`하지만 배열의 길이가 2인 경우는 초기 조건에서부터 아웃이지만, 그런 부분을 신경 안썼으니 다음 부터는 잘 확인하자`**)





6. **결과 배열 정리**: 결과 배열을 최종적으로 정리하는 방법이 복잡하고 비효율적입니다. 더 간결하고 효율적인 방법을 사용할 수 있습니다.

### 개선된 접근 방법

1. `배열을 먼저 정렬`합니다.
   
2. ***`두 포인터 방식`*** 을 사용하여 `중첩 루프의 수를 줄입니다`. 예를 들어, 하나의 루프에서 `nums[i]`를 고정하고, 다른 두 포인터(`left`, `right`)를 이용하여 나머지 두 숫자를 찾습니다.
   
3. 중복된 조합을 피하기 위해 `동일한 값에 대한 처리를 추가`합니다.



### 정답 (해답)

이 방식은 배열을 먼저 정렬한 다음, 각 숫자에 대해 남은 배열에서 두 포인터(하나는 숫자 바로 다음에, 다른 하나는 배열의 끝에 위치)를 사용하여 합이 0이 되는 두 수를 찾습니다.

```javascript
var threeSum = function(nums) {
    var result = [];
    nums.sort((a, b) => a - b); // 배열을 먼저 정렬합니다.

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // 중복된 값 건너뛰기
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // 중복된 값 건너뛰기
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // 합이 0보다 작으면 left 포인터를 오른쪽으로 이동
            } else {
                right--; // 합이 0보다 크면 right 포인터를 왼쪽으로 이동
            }
        }
    }

    return result;
};
```


1. **배열 정렬**: 배열을 오름차순으로 정렬합니다.
2. **외부 루프**: 첫 번째 숫자를 고정시키고 나머지 배열을 탐색합니다.
3. **중복 제거**: 같은 숫자를 연속해서 사용하지 않도록 합니다. 이렇게 하면 중복된 조합을 건너뛸 수 있습니다.
4. **투 포인터 탐색**: 남은 배열에서 두 포인터를 사용하여 합이 0이 되는 두 수를 찾습니다.
5. **합 조정**: 세 수의 합이 0보다 작으면 `left` 포인터를 오른쪽으로, 0보다 크면 `right` 포인터를 왼쪽으로 이동시킵니다.

이 방법은 `O(n^2)`의 시간 복잡도를 가지며, 중첩된 루프를 사용하는 방식보다 효율적입니다.


### 궁금했던 점(시간복잡도 더 줄이기?)

`threeSum` 문제의 경우, 세 개의 숫자를 찾아야 하므로 최적의 알고리즘도 기본적으로 \(O(n^2)\)의 시간 복잡도를 가질 수밖에 없습니다. 이는 두 개의 숫자의 합으로 특정 값(이 경우는 세 번째 숫자의 음수 값)을 찾는 문제와 유사하며, 이는 일반적으로 \(O(n)\)의 시간 복잡도를 가집니다.

`threeSum` 문제에서 주어진 각 숫자에 대해, 나머지 숫자들 중에서 두 숫자의 합이 첫 번째 숫자의 음수가 되는 쌍을 찾는 것이 필요합니다. 이를 위해 배열을 한 번 순회하면서 (\(O(n)\)), 각 숫자에 대해 투 포인터 방식으로 나머지 배열을 순회합니다 (\(O(n)\)). 따라서 전체 알고리즘의 시간 복잡도는 \(O(n^2)\)가 됩니다.

### 시간 복잡도를 줄이는 방법

1. **더 효율적인 알고리즘 없음**: `threeSum`과 같은 문제는 더 낮은 시간 복잡도로 해결할 수 있는 알고리즘이 현재로서는 알려져 있지 않습니다. \(O(n^2)\)은 이 문제에 대한 알려진 최적의 시간 복잡도입니다.

2. **코드 최적화**: 시간 복잡도를 수학적으로 더 줄일 수는 없지만, 코드의 효율성을 개선하는 몇 가지 방법이 있습니다. 예를 들어, 불필요한 계산을 줄이거나, 중복 계산을 방지하는 등의 방법이 있습니다.

3. **휴리스틱 방법**: 특정 경우에 대한 가정을 통해 일부 입력에 대해서는 더 빠르게 동작할 수 있는 휴리스틱 방법을 사용할 수 있습니다. 하지만 이는 문제의 모든 경우에 대해 최적화되는 것은 아닙니다.

결론적으로, `threeSum` 문제는 \(O(n^2)\) 시간 복잡도를 가진 알고리즘으로 효율적으로 해결할 수 있으며, 이는 현재로서는 이 문제를 해결할 수 있는 최적의 방법으로 간주됩니다.


### 느낀점

문제를 보고 어떤 접근 방식을 써야하는지에 대한 감이 안오면, 이상한 접근 혹은 시간복잡도 따윈 상관도 안하는 문제의 의도와 멀어지는 접근이 되는 것 같다.
`투 포인터` 꼭 기억해두고 나중에 문제 해결을 위해 배열을 순회할 일이 생기면, 꼭 사용해야겠다.

