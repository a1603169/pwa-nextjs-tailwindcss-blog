---
title: 'JavaScript의 Map, Set, Object 차이와 메서드 정리'
subtitle: '자료구조별 장단점 및 사용법 총정리'
date: '2025-05-01'
tags: [JavaScript, Data Structures]
---

JavaScript에서 자주 사용하는 대표적인 자료구조인 `Object`, `Map`, `Set`은 모두 key-value 저장 혹은 값 저장에 사용되지만, 그 구조와 목적, 메서드에서 차이가 큽니다. 알고리즘 문제를 풀거나 웹 애플리케이션을 구현할 때 각각의 자료구조를 적절히 선택하는 것이 중요합니다. 이 글에서는 세 가지 자료구조의 **차이점, 장단점, 주요 메서드**를 예제와 함께 정리합니다.

---

### 1. Object

#### 특징
- key-value 형태로 데이터를 저장
- key는 **문자열 또는 Symbol**만 가능
- JSON 구조와 호환이 좋음
- `for...in`, `Object.keys()`, `Object.entries()` 등을 통해 순회

#### 장점
- 간단하고 직관적인 문법
- JSON과의 호환성

#### 단점
- key 타입 제한 (객체 사용 불가)
- 순서 보장 불확실
- `.size` 없음 (길이 확인은 `Object.keys().length` 사용)

#### 주요 메서드 예시
```js
const obj = { a: 1 };
obj["b"] = 2;
delete obj["a"];
console.log("b" in obj); // true
console.log(Object.entries(obj)); // [['b', 2]]
```

---

### 2. Map

#### 특징
- key-value 구조
- **key에 모든 타입 사용 가능 (객체, 함수, 숫자 등)**
- 삽입 순서 유지
- 반복과 조작에 특화된 메서드 제공 (`set`, `get`, `has`, `delete`, `clear`)

#### 장점
- 다양한 key 타입 사용 가능
- 삽입 순서 보장
- `.size` 속성 제공

#### 단점
- 문법이 다소 복잡 (`.set()`, `.get()`)

#### 주요 메서드 예시
```js
const map = new Map();
map.set('x', 100);
map.set({}, 'objectKey');
console.log(map.get('x')); // 100
console.log(map.size); // 2
map.delete('x');
map.clear();
```

---

### 3. Set

#### 특징
- **중복 없는 값들만 저장**
- 값 자체가 key 역할
- 삽입 순서 유지
- `.add()`, `.has()`, `.delete()`, `.clear()` 제공

#### 장점
- 중복 제거 자동 처리
- 빠른 포함 여부 검사
- 순서 보장

#### 단점
- key-value 저장 불가 (값만 저장)

#### 주요 메서드 예시
```js
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // 중복 무시
console.log(set.has(1)); // true
set.delete(2);
set.clear();
```

---

### 4. 비교 요약표

| 항목        | Object                      | Map                          | Set                         |
|-------------|-----------------------------|------------------------------|-----------------------------|
| 구조        | key → value                 | key → value                  | 값만 저장                   |
| 키 타입     | 문자열, Symbol              | **모든 타입 가능**           | 값 자체가 key               |
| 순서 보장   | ❌ 불확실                   | ✅ 삽입 순서 유지            | ✅ 삽입 순서 유지            |
| 중복 허용   | 키 중복 ❌                  | 키 중복 ❌                   | **값 중복 ❌**               |
| 크기 확인   | `Object.keys().length`      | `.size`                      | `.size`                     |
| 존재 확인   | `'key' in obj`              | `.has(key)`                  | `.has(value)`               |
| 추가        | `obj[key] = val`            | `.set(key, val)`             | `.add(val)`                 |
| 삭제        | `delete obj[key]`           | `.delete(key)`               | `.delete(val)`              |
| 전체 삭제   | `{}` 재할당 필요            | `.clear()`                   | `.clear()`                  |
| 반복 방법   | `for...in`, `Object.keys()` | `for...of`, `.forEach()`     | `for...of`, `.forEach()`    |

---

각 자료구조는 목적에 따라 잘 골라서 사용해야 합니다. 예를 들어:
- `Object`: JSON 데이터 다룰 때, 간단한 구조 필요할 때
- `Map`: 다양한 키를 사용할 때, 반복이 많을 때
- `Set`: 유일한 값 목록 필요할 때, 빠른 검색이 필요할 때

알고리즘 문제를 풀거나 데이터 구조를 설계할 때 위 기준을 잘 기억해두면 효율적입니다.
