---
title: 'Trie 란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-02-23'
tags: [Algorithm, JavaScript, Data Structures]
---

이전 시간까지 트리에 대해서 조금 공부를 해보았었는데, 그 안에는 이진 트리, 이진 탐색 트리 등 여러 종류의 트리가 있었습니다.
그 중에서 문자열의 특화된 트리 종류가 있어서 따로 정리를 해보겠습니다.

Trie는 문자열의 집합을 저장하는 트리 기반의 자료구조로, 주로 문자열 검색에 사용됩니다. 각 노드는 문자를 저장하고, 루트 노드에서 특정 노드까지의 경로는 그 노드에 도달하기 위해 거쳐온 문자들의 시퀀스를 나타냅니다. 이 구조는 특히 자동 완성, 사전 검색, 접두사 검색 등에 유용합니다.

### Trie의 기본적인 구조와 작동 원리
- **노드 구조**: 각 노드는 하나의 문자를 저장합니다. 루트 노드는 보통 비어 있습니다.
- **자식 노드**: 각 노드는 자식 노드를 가질 수 있으며, 이는 다음 문자를 나타냅니다.
- **키워드 검색**: 특정 문자열을 검색할 때, 루트에서 시작하여 각 문자에 해당하는 자식 노드를 순서대로 따라가면서 문자열이 존재하는지 확인합니다.
- **삽입**: 새로운 문자열을 삽입할 때는 문자열의 각 문자에 대해 자식 노드를 생성하거나 이동하면서 문자열을 구성합니다.
- **끝 표시**: 문자열의 끝을 나타내기 위해 특별한 마커(예: `*`)를 사용할 수 있습니다.

### 자바스크립트로 Trie 구현
자바스크립트로 Trie를 구현하기 위해 각 노드를 클래스로 정의하고, Trie 자체도 클래스로 구성할 수 있습니다. 여기서는 간단한 Trie 구현을 보여드리겠습니다.

```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // 문자열 삽입
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    // 문자열 검색
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    // 문자열이 Trie에 존재하는지 접두사로 확인
    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// 사용 예시
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.startsWith("he")); // true
console.log(trie.search("world")); // false
```

이 구현에서는 `TrieNode` 클래스가 각 노드를, `Trie` 클래스가 전체 Trie 구조를 나타냅니다. `insert` 메서드는 새로운 단어를 Trie에 추가하고, `search` 메서드는 단어가 Trie에 존재하는지 확인합니다. `startsWith` 메서드는 주어진 접두사로 시작하는 단어가 Trie에 있는지 확인합니다.

### Trie와 Tree의 차이점
- **목적**: 트리는 일반적인 데이터 구조와 관리를 위한 것이며, 트라이는 문자열 검색 및 처리를 위한 것입니다.
- **노드 구성**: 트리의 노드는 보통 하나의 데이터 값을 가지는 반면, 트라이의 노드는 경로상의 문자를 표현합니다.
- **효율성**: 트라이는 문자열 검색에 있어서 효율적이지만, 공간 사용이 많을 수 있으며, 일반 트리 구조는 보다 다양한 데이터 조작에 적합합니다.
- **구조**: 트라이는 각 노드가 여러 자식 노드를 가질 수 있지만, 일반적으로 그 자식들은 고유한 문자를 나타냅니다. 일반 트리에서는 노드의 값이 중복될 수도 있습니다.

