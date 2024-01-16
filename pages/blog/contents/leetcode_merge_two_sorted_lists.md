---
title: 'Merge Two Sorted Lists (Leetcode)'
subtitle: 'Algorithm 공부 Leetcode'
date: '2024-01-16'
tags: [Algorithm, JavaScript, LeetCode]
---

<span class=`blogLink`>[리트코드 링크](https://leetcode.com/problems/merge-two-sorted-lists/)</span>

### 문제

----

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

<img class='blogImage' src='/blog/leetcode_list_1.jpeg'>

**`Example 1:`**

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

**`Example 2:`**

Input: list1 = [], list2 = []
Output: []

**`Example 3:`**

Input: list1 = [], list2 = [0]
Output: [0]
 

**`Constraints:`**

The number of nodes in both lists is in the range [0, 50].

`-100 <= Node.val <= 100`

`Both` list1 and list2 are sorted in `non-decreasing` order.


----

### 접근

리스트는 생소하다고 느꼈지만, 수도코드 처럼 생각을 해보았을때, **`서로를 순회`** 하며 다음 값을 i, j=0 같은 `인덱스를 외부에서 돌려주는 것과 비슷`하게 해주면 되겠다라고 생각을 하였습니다.

----

### 정답 (틀림)

```javascript
function mergeTwoLists(list1, list2) {
    let temp = new ListNode();
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            temp.next = list1.val
            list1 = list1.next
        } else {
            temp.next = list2.val
            list2 = list2.next
        }
        temp=temp.next
    }
    temp.next = list1 === null ? list2 : list1
    return temp.next
}
```

null이 될 때까지 while을 돌리고 남은 것들은 이후로 붙여주기 -> sorted된 list기 때문에 그냥 붙여주면 됩니다.


----

### 문제점

주된 문제점은 temp.next에 직접 값을 할당하려고 시도하는 것과 temp 포인터의 업데이트 방식입니다. 이러한 구현은 링크드 리스트의 병합 과정에서 오류를 일으킬 수 있습니다.

문제의 구체적인 부분은 다음과 같습니다:

잘못된 노드 할당:

```javascript
temp.next = list1.val; // 잘못된 할당
temp.next = list2.val; // 잘못된 할당
```

여기서 temp.next에 list1.val 또는 list2.val을 직접 할당하려고 시도합니다. temp.next는 ListNode 객체의 참조(다른 노드를 가리키는 포인터)가 되어야 합니다. 그러나 이 코드는 temp.next에 단순한 숫자 값을 할당하려고 하고 있어, 이는 링크드 리스트의 노드 구조에 부합하지 않습니다.

포인터 업데이트 오류:


```javascript
temp = temp.next; // 잘못된 포인터 업데이트
```

이 줄에서는 temp 포인터를 업데이트하려고 합니다. 하지만 앞서 temp.next에 숫자 값을 할당했기 때문에, temp는 이제

숫자 값을 가리키게 되고, 이는 ListNode 객체가 아닙니다. 따라서 다음 반복에서 temp.next에 접근하려고 할 때 오류가 발생합니다.

병합 리스트의 시작점 문제:

```javascript
return temp.next; // 잘못된 반환 값
```

이 함수는 temp.next를 반환하고 있지만, temp는 병합 과정에서 계속해서 업데이트되므로, `최종적으로 반환되는 값`은 병합된 리스트의 `실제 시작 부분이 아닙니다`. 병합된 리스트의 시작 부분을 유지하기 위해서는 `별도의 dummy 노드가 필요`합니다.

----

### 정답 (올바른 정답)

```javascript
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let temp = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        temp = temp.next;
    }

    // 남은 노드들을 연결
    temp.next = list1 === null ? list2 : list1;

    // 병합된 리스트의 시작 부분인 dummy.next를 반환
    return dummy.next;
}
```

### 개선된 코드의 설명

ListNode 객체를 적절히 생성하고, temp를 올바르게 업데이트하여 병합된 리스트를 구축합니다. 마지막에는 dummy.next를 반환하여 병합된 리스트의 실제 시작 부분을 제공합니다.

----

### 궁금했던 점(dummy가 왜 필요한지)

```javascript
let temp = dummy; 
```

코드는 dummy 노드를 사용하여 병합된 링크드 리스트를 구축하는데 있어서 중요한 역할을 합니다. 이 코드는 temp 변수를 사용하여 리스트를 순차적으로 구축하면서, 동시에 dummy 노드는 병합된 리스트의 **`시작 지점을 유지`**합니다. 이렇게 하는 이유는 다음과 같습니다:

**병합 리스트의 시작 지점 유지**: dummy 노드는 병합된 리스트의 시작 지점을 나타내는 임시 노드로, 실제 데이터를 포함하지 않습니다. 병합 과정에서 이 노드는 변경되지 않으며, 항상 병합된 리스트의 시작 지점을 가리킵니다.

**현재 위치 추적**: temp 변수는 현재 병합 과정에서 어디에 위치해 있는지를 추적합니다. 병합 과정에서 temp는 새로운 노드를 리스트에 추가할 때마다 업데이트되어 리스트의 마지막 노드를 가리키게 됩니다. 이렇게 함으로써, 새 노드를 효율적으로 추가할 수 있습니다.

**원활한 노드 추가**: temp를 사용하면, 각 단계에서 새로운 노드를 추가하고 temp를 업데이트하는 과정이 매우 간단해집니다. temp.next = new ListNode(...)로 새 노드를 추가하고, temp = temp.next로 다음 노드로 이동합니다.

**안전한 반환**: 함수의 마지막에서 dummy.next를 반환함으로써, 실제 데이터가 시작되는 병합된 리스트의 첫 번째 노드를 안전하게 반환할 수 있습니다. dummy 노드는 변경되지 않았기 때문에, 항상 올바른 시작 지점을 가리키고 있습니다.

이러한 방식은 코드의 가독성을 높이고, 병합된 리스트를 효율적으로 구축하는 데 도움을 줍니다.


-----

### **느낀점**

리스트에 대해서 조금 더 익숙해질 필요가 있다고 생각이 듭니다.
접근법 자체는 괜찮았지만, 데이터 구조에 대해서 아직은 조금 부족하다고 반성하게 되었습니다.


