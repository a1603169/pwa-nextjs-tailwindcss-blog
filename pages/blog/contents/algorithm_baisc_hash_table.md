---
title: 'Hash Table 이란 / What is Hash Table'
subtitle: '기본 알고리즘 & 데이타 구조 / Basic Algorithm & Data Structures'
date: '2024-01-28'
tags: [Algorithm, JavaScript, Data Structures]
---

<span class='blogLink'>[참고링크](https://github.com/a1603169/javascript-algorithms/tree/master/src/data-structures/hash-table)</span>

JavaScript에서 해시 테이블은 일반적으로 `객체(Object)` 또는 `Map`을 사용하여 구현됩니다. 여기서 각 **`키-값 쌍이 해시 테이블의 항목`** 으로 사용됩니다. 하지만, JavaScript의 내장 객체나 Map을 사용하는 것은 이미 해시 테이블의 기본 구현을 갖고 있습니다. 

### 기본 해시 테이블 구현
기본 해시 테이블은 다음과 같은 기능을 포함합니다:

- `해시 함수`: 키를 해시 테이블의 인덱스로 변환하는 함수
- `삽입`: 키-값 쌍을 해시 테이블에 저장
- `검색`: 주어진 키에 해당하는 값을 찾음
- `삭제`: 주어진 키에 해당하는 키-값 쌍을 해시 테이블에서 삭제

### 예제 코드 class

```javascript
class HashTable {
    constructor(size = 42) {
        this.buckets = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
        return index;
    }

    get(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) return null;

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1];
            }
        }

        return null;
    }

    remove(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) return null;

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index].splice(i, 1);
                return true;
            }
        }

        return false;
    }
}

// 사용 예시
const hashTable = new HashTable();
hashTable.set("name", "John");
hashTable.set("age", 30);
console.log(hashTable.get("name")); // 출력: John
console.log(hashTable.get("age")); // 출력: 30
hashTable.remove("name");
console.log(hashTable.get("name")); // 출력: null
```

### 예제 코드 

hash 메서드는 `키`를 해시 함수를 통해 `인덱스로 변환`하며, `set, get, remove` 메서드는 해시 테이블의 기본적인 동작을 구현합니다.