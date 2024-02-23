---
title: '트리(Tree)란 2'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-02-23'
tags: [Algorithm, JavaScript, Data Structures]
---

<span class='blogLink'>[이전 포스트](blog/algorithm_basic_tree_2)</span>

각각의 트리는 특정 유형의 문제를 해결하기 위해 고안된 자료구조입니다. 여기에는 각각의 트리의 개념과 특징에 대해 간략히 설명하고, 간단한 자바스크립트 구현을 제공합니다.

### 각 트리 별 특징 들

#### AVL Tree
AVL 트리는 자가 균형 이진 탐색 트리로, 노드의 삽입과 삭제 시 균형을 재조정하여 트리의 높이를 최소화합니다. 이는 탐색, 삽입, 삭제 연산을 O(log n) 시간에 수행할 수 있도록 합니다.

- **균형 조건**: 모든 노드에서 왼쪽과 오른쪽 자식 트리의 높이 차이가 최대 1입니다.
- **재균형**: 높이 차이가 1을 초과하면 회전을 수행하여 균형을 맞춥니다.
- **회전**: 단일 회전(single rotation)과 이중 회전(double rotation)이 있습니다.

#### Red-Black Tree
레드-블랙 트리도 자가 균형 이진 탐색 트리입니다. AVL 트리보다 덜 엄격한 균형 조건을 가지고 있으며, 재균형을 위해 색상 변경과 회전을 사용합니다.

- **색상**: 노드는 레드 또는 블랙입니다.
- **균형 조건**: 모든 경로에는 동일한 수의 블랙 노드가 있어야 합니다.
- **규칙**: 루트는 블랙이어야 하고, 레드 노드의 자식은 모두 블랙이어야 합니다.

#### Segment Tree
세그먼트 트리는 구간 쿼리(예: 최소값, 최대값, 합계 등)와 갱신을 로그 시간에 처리할 수 있는 트리 기반의 자료구조입니다.

- **구간 나누기**: 배열을 여러 구간으로 나누어 각 노드가 하나의 구간을 대표합니다.
- **쿼리 처리**: 구간의 합, 최소, 최대 값을 효율적으로 계산할 수 있습니다.
- **업데이트**: 배열의 값이 변경될 때 구간의 대표값을 빠르게 업데이트합니다.

#### Fenwick Tree (Binary Indexed Tree)
펜윅 트리는 구간 쿼리와 갱신을 처리할 수 있는 또 다른 자료구조입니다. 세그먼트 트리보다 구현이 간단하며, 더 적은 메모리를 사용합니다.

- **구간 합**: 누적 합(prefix sums)을 빠르게 계산하고 갱신할 수 있습니다.
- **업데이트**: 트리의 부분적인 구조를 업데이트하여 전체 구조를 유지합니다.
- **효율성**: O(log n) 시간에 쿼리와 갱신을 수행합니다.


### 구현

1. **AVL 트리 (Adelson-Velskii and Landis Tree)**
   AVL 트리는 균형 이진 탐색 트리로, 모든 노드에서 왼쪽과 오른쪽 하위 트리의 높이 차이가 최대 1을 유지합니다. 이를 통해 O(log N) 시간 복잡도로 탐색, 삽입, 삭제를 수행할 수 있습니다.

2. **레드-블랙 트리 (Red-Black Tree)**
   레드-블랙 트리도 AVL 트리처럼 균형 이진 탐색 트리입니다. 이 트리는 노드에 색상(빨강 또는 검정)을 지정하고, 특정 규칙을 유지하여 트리의 균형을 맞춥니다.

3. **세그먼트 트리 (Segment Tree)**
   세그먼트 트리는 구간 쿼리 및 업데이트를 효율적으로 처리할 수 있도록 설계된 데이터 구조입니다. 이는 구간 합, 최소값, 최대값 등을 빠르게 찾는 데 사용됩니다.

4. **펜윅 트리 (Fenwick Tree 또는 Binary Indexed Tree)**
   펜윅 트리는 세그먼트 트리보다 구현이 간단하면서도 구간 쿼리와 업데이트를 효율적으로 처리할 수 있는 데이터 구조입니다.

이제 각 데이터 구조에 대한 자바스크립트 구현을 차례대로 제공하겠습니다. 첫 번째로, AVL 트리의 기본 구현을 시작하겠습니다.

여기 AVL 트리를 자바스크립트로 구현한 코드입니다. 이 구현은 기본적인 삽입 및 트리 회전 기능을 포함합니다.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Height of a node
    height(node) {
        if (!node) return 0;
        return node.height;
    }

    // Right rotate
    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
    }

    // Left rotate
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    // Get Balance factor of node
    getBalance(node) {
        if (!node) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    // Insert a node
    insertNode(node, data) {
        if (!node) return new Node(data);

        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        let balance = this.getBalance(node);

        // Left Left Case
        if (balance > 1 && data < node.left.data) return this.rightRotate(node);

        // Right Right Case
        if (balance < -1 && data > node.right.data) return this.leftRotate(node);

        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Insert method
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }

    // Utility function to print the tree
    inOrderTraverse(node) {
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.data);
            this.inOrderTraverse(node.right);
        }
    }

    // Print the tree
    print() {
        this.inOrderTraverse(this.root);
    }
}
```

이 코드는 AVL 트리의 노드 삽입과 트리 회전을 처리합니다. 다음으로, 레드-블랙 트리의 구현을 제공하겠습니다.

이제 레드-블랙 트리의 자바스크립트 구현을 제공합니다. 이 구현은 기본적인 삽입, 회전, 그리고 삽입 후 균형 유지를 위한 조정 로직을 포함합니다.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.color = 'RED';
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            let parent = null;
            while (current) {
                parent = current;
                if (newNode.data < current.data) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            newNode.parent = parent;
            if (newNode.data < parent.data) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
        }
        this.fixInsert(newNode);
    }

    // Fix the tree after insertion
    fixInsert(node) {
        while (node !== this.root && node.parent.color === 'RED') {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.rightRotate(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = 'BLACK';
    }

    // Left rotate
    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left !== null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    // Right rotate
    rightRotate(x) {
        let y = x.left;
        x.left = y.right;
        if (y.right !== null) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    // Utility function to print the tree
    inOrderTraverse(node) {
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.data);
            this.inOrderTraverse(node.right);
        }
    }

    // Print the tree
    print() {
        this.inOrderTraverse(this.root);
    }
}
```

다음으로, 세그먼트 트리와 펜윅 트리의 자바스크립트 구현을 제공하겠습니다.

이제 세그먼트 트리와 펜윅 트리의 자바스크립트 구현을 제공합니다.

1. **세그먼트 트리 (Segment Tree)**

   ```javascript
   class SegmentTree {
       constructor(arr) {
           this.arr = arr;
           this.tree = new Array(4 * arr.length);
           this.build(0, 0, arr.length - 1);
       }

       build(node, start, end) {
           if (start === end) {
               this.tree[node] = this.arr[start];
           } else {
               let mid = Math.floor((start + end) / 2);
               this.build(2 * node + 1, start, mid);
               this.build(2 * node + 2, mid + 1, end);
               this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
           }
       }

       update(node, start, end, idx, val) {
           if (start === end) {
               this.arr[idx] = val;
               this.tree[node] = val;
           } else {
               let mid = Math.floor((start + end) / 2);
               if (start <= idx && idx <= mid) {
                   this.update(2 * node + 1, start, mid, idx, val);
               } else {
                   this.update(2 * node + 2, mid + 1, end, idx, val);
               }
               this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
           }
       }

       query(node, start, end, l, r) {
           if (r < start || end < l) {
               return 0;
           }
           if (l <= start && end <= r) {
               return this.tree[node];
           }
           let mid = Math.floor((start + end) / 2);
           let p1 = this.query(2 * node + 1, start, mid, l, r);
           let p2 = this.query(2 * node + 2, mid + 1, end, l, r);
           return p1 + p2;
       }
   }
   ```

2. **펜윅 트리 (Fenwick Tree 또는 Binary Indexed Tree)**

   ```javascript
   class FenwickTree {
       constructor(size) {
           this.tree = new Array(size + 1).fill(0);
       }

       update(index, value) {
           while (index < this.tree.length) {
               this.tree[index] += value;
               index += index & (-index);
           }
       }

       sum(index) {
           let total = 0;
           while (index > 0) {
               total += this.tree[index];
               index -= index & (-index);
           }
           return total;
       }

       rangeSum(left, right) {
           return this.sum(right) - this.sum(left - 1);
       }
   }
   ```

이 코드들은 각 데이터 구조의 기본적인 기능을 제공합니다. 세그먼트 트리는 구간 합 쿼리와 업데이트를, 펜윅 트리는 점 갱신과 구간 합 쿼리를 처리할 수 있습니다.
