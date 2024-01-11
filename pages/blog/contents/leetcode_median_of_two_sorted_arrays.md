---
title: 'Median of Two Sorted Array (Leetcode)'
subtitle: 'Algorithm 공부'
date: '2024-01-11'
tags: [Algorithm, JavaScript]
---

<span class="blogLink">[리트코드 링크](https://leetcode.com/problems/median-of-two-sorted-arrays/)</span>

### 문제

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

**Example 1:**

**Input:** nums1 = [1,3], nums2 = [2]
**Output:** 2.00000
**Explanation:** merged array = [1,2,3] and median is 2.

**Example 2:**

**Input:** nums1 = [1,2], nums2 = [3,4]
**Output:** 2.50000
**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

**Constraints:**

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-106 <= nums1[i], nums2[i] <= 106`

----

### 접근

간단하게 생각했다. 결국 두 숫자 배열을 합쳐야하고 ***`중간값`*** 을 찾아야한다.

**Median** 이라는 것은
합친 배열의 길이가 `홀수`일 경우는 중간값이 명확하지만, `짝수` 일 경우는 중간이 되는 두 값의 평균값을 찾으면 된다. (인덱스 +1 해주면 된다라고 판단된다)

끝난 것 같다. 
그대로 구현만 하면될 것이다.


### 정답 

```javascript
var getOneSortedArray = function (n1,n2){

return n1.concat(n2).sort((a,b) => a-b)

}

var findMedianSortedArrays = function(nums1, nums2) {

var arr = getOneSortedArray(nums1,nums2);

if(arr.length === 0) return 0;

return arr.length % 2 === 0 ? (arr[(arr.length/2)-1]+arr[(arr.length/2)])/2 : arr[Math.floor((arr.length)/2)]

}
```

일단 별도의 함수를 만들어야 한다.

중간값을 찾기 위해서는 일단 합쳐준 이후 정렬을 해야한다.
`[1,2,3] + [4,6,10]` 과 같이 정렬되있는 상태로 합쳐진다면 정말 좋겠지만, 
`[3,2,1] + [10,2,29]` 라면 정렬이 안되있다면 이따 중간값을 구할 때 명확하지않는 값이 되어 버리니 정렬을 해줘야한다.

고로 `getOneSortedArray` 라는 별도의 함수를 만들고 변수를 넣어준 값 -> 두 배열이 순서에 맞아진, 우리가 구해야하는 배열

`if문`의 사용으로 특이 예시로 중간 값이 `undefined` 가 되는 것을 미리 선언해 주고,

`arr.length % 2 === 0` 을 통해 확실한 `홀짝구분` 을 해준다. `삼항 조건 연산자`로 홀수 케이스와 짝수 케이스를 나누어서 계산을 해주고 리턴해주면 끝이다.


### 최고의 방법? 


새로운 병합 배열을 만드는 대신에, 두 배열을 `순회` 한다면 배열 크기에 비례하는 `추가 공간이 필요 없기` 때문에 `메모리 사용량`을 크게 줄일 수 있다.

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let halfLength = Math.floor(totalLength / 2);
    let isEven = totalLength % 2 === 0;
    
    let i = 0, j = 0;
    let current, previous;

    // 배열을 실제로 병합하지 않고 순회합니다
    for (let k = 0; k <= halfLength; k++) {
        previous = current;
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
    }

    // 배열의 결합 길이에 따라 중앙값을 반환합니다
    return isEven ? (current + previous) / 2 : current;
};
```

### 내 접근법 vs 최적화 접근법 차이

**내 접근법**
기존의 시간 복잡도는 두 배열을 `연결(concat)` 하는데 `O(m+n)`이 된다. m,n -> `두 배열의 길이`
거기에 연결된 배열을 `정렬(sort)` 하는데는 `log(m+n)` 이 걸리니
총 걸리는 시간 복잡도는 `O(m+n)*log(m+n)` 이 될 것이다.

공간 복잡도는 두 배열을 합치기 때문에, 그 크기의 합인 `O(m+n)` 이 된다.

**최적화 접근법**
이 구현 방법은 시간 복잡도가 `O(log(min(m, n)))`이고 공간 복잡도는 `O(1)`이다. 
여기서 m과 n은 각각 nums1과 nums2의 길이가 된다. 
이전 구현 방법과 비교할 때 병합 배열을 저장하기 위한 추가 공간이 필요하지 않기 때문에 메모리 사용 측면에서 더 효율적으로 보인다.




