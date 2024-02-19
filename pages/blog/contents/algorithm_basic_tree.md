---
title: '트리(Tree)란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-02-19'
tags: [Algorithm, JavaScript, Data Structures]
---

자료구조 중 "트리(Tree)"와 관련된 개념들입니다. 

자료구조의 트리는 계층적 관계를 표현하는 데 사용되며, 이진 트리, 이진 탐색 트리, 트리 순회 방법, 그리고 JavaScript를 사용한 트리 구현에 대해 알아보겠습니다.

### 1. 트리(Tree)
- **정의**: 트리는 노드들과 노드들을 연결하는 에지(간선)들로 구성된 계층적인 자료구조입니다.
- **특징**: 한 개의 루트 노드를 가지며, 루트 노드는 0개 이상의 자식 노드를 가질 수 있습니다. 트리는 순환 구조를 갖지 않습니다.
- **용도**: 조직도, 파일 시스템 등 계층적 구조를 표현할 때 사용됩니다.

### 2. 이진 트리(Binary Tree)
- **정의**: 이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조입니다.
- **종류**: 
  - **완전 이진 트리(Complete Binary Tree)**: 마지막 레벨을 제외하고 모든 레벨이 노드로 채워져 있으며, 마지막 레벨은 왼쪽부터 차례대로 채워져 있는 트리입니다.
  - **포화 이진 트리(Full Binary Tree)**: 모든 레벨이 노드로 완전히 채워진 트리입니다.
  - **편향 이진 트리(Skewed Binary Tree)**: 왼쪽이나 오른쪽 방향으로만 자식 노드를 갖는 트리입니다.

### 3. 이진 탐색 트리(Binary Search Tree, BST)
- **정의**: 이진 탐색 트리는 이진 트리의 한 종류로, 모든 노드가 다음과 같은 특정 순서를 따릅니다:
  - 왼쪽 자식 노드 < 노드 < 오른쪽 자식 노드
- **특징**: 중위 순회를 통해 정렬된 순서를 얻을 수 있습니다.
- **용도**: 탐색, 정렬에 효율적입니다.

### 4. 트리 순회(Tree Traversal)
- **종류**:
  - **전위 순회(Pre-order Traversal)**: 루트 -> 왼쪽 -> 오른쪽 순으로 순회합니다.
  - **중위 순회(In-order Traversal)**: 왼쪽 -> 루트 -> 오른쪽 순으로 순회합니다.
  - **후위 순회(Post-order Traversal)**: 왼쪽 -> 오른쪽 -> 루트 순으로 순회합니다.
  - **레벨 순회(Level-order Traversal, 너비 우선 탐색)**: 같은 레벨의 노드들을 왼쪽에서 오른쪽으로 순회합니다.

### 5. JavaScript를 사용한 트리 구현



```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 이진 탐색 트리에 노드 삽입
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {


      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // 이진 탐색 트리에서 노드 찾기
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // 트리 순회 코드 

  // 중위 순회
  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // 전위 순회
  // 전위 순회는 루트 -> 왼쪽 자식 -> 오른쪽 자식 순으로 노드를 방문합니다.
  preOrderTraversal(node) {
    if (node) {
      console.log(node.value); // 루트 노드 방문
      this.preOrderTraversal(node.left); // 왼쪽 서브트리 순회
      this.preOrderTraversal(node.right); // 오른쪽 서브트리 순회
    }
  }

  // 후위 순회
  // 후위 순회는 왼쪽 자식 -> 오른쪽 자식 -> 루트 순으로 노드를 방문합니다.
  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left); // 왼쪽 서브트리 순회
      this.postOrderTraversal(node.right); // 오른쪽 서브트리 순회
      console.log(node.value); // 루트 노드 방문
    }
  }

  // 레벨 순회
  // 레벨 순회는 트리의 각 레벨을 왼쪽에서 오른쪽으로 방문합니다. 이를 위해 큐(Queue) 자료구조를 사용합니다.
  levelOrderTraversal() {
    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }



}

// 사용 예
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
// 중위 순회
console.log("In-order Traversal:");
bst.inOrderTraversal(bst.root);

// 전위 순회
console.log("Pre-order Traversal:");
bst.preOrderTraversal(bst.root);

// 후위 순회
console.log("Post-order Traversal:");
bst.postOrderTraversal(bst.root);

// 레벨 순회
console.log("Level-order Traversal:");
bst.levelOrderTraversal();
```
