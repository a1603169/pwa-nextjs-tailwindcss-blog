---
title: '그래프(Graph)란'
subtitle: '기본 알고리즘 지식 / 데이터 구조'
date: '2024-03-24'
tags: [Algorithm, JavaScript, Data Structures]
---

데이터 구조에서의 그래프는 여러 정점(vertices)들이 간선(edges)으로 연결된 구조를 의미합니다. 그래프는 다양한 형태의 네트워크 모델링에 사용되며, 예를 들어 소셜 네트워크, 도로망, 인터넷 등을 모델링할 때 사용됩니다.

### 정점(Vertex)
정점은 그래프의 기본 단위로, 위치나 교차점 등을 나타냅니다. 예를 들어, 소셜 네트워크에서는 한 사람을 정점으로 볼 수 있고, 도시 간 도로망에서는 도시들이 정점이 됩니다.

### 간선(Edge)
간선은 두 정점을 연결하는 선으로, 두 정점 간의 관계를 나타냅니다. 간선에는 방향이 있을 수도 있고 없을 수도 있습니다. 예를 들어, 페이스북의 친구 관계는 방향이 없는 관계이므로 무방향 간선으로 모델링할 수 있고, 트위터의 팔로우 관계는 방향이 있는 관계이므로 방향 간선으로 모델링할 수 있습니다.

### 방향 그래프(Directed Graph)
방향 그래프에서는 간선이 방향성을 가집니다. 즉, 간선(A, B)는 정점 A에서 정점 B로의 관계를 나타내며, B에서 A로의 관계와는 다를 수 있습니다.

### 무방향 그래프(Undirected Graph)
무방향 그래프에서는 간선에 방향성이 없습니다. 간선(A, B)는 정점 A와 정점 B가 서로 연결되어 있음을 나타내며, A에서 B로의 관계와 B에서 A로의 관계가 동일합니다.

### 예시 코드
JavaScript로 간단한 무방향 그래프와 방향 그래프를 구현하는 예시 코드를 보여드리겠습니다.

```javascript
// 무방향 그래프 구현
class UndirectedGraph {
    constructor() {
        this.edges = {};
    }

    addVertex(vertex) {
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1); // 무방향 그래프는 양방향 연결
    }
}

// 방향 그래프 구현
class DirectedGraph {
    constructor() {
        this.edges = {};
    }

    addVertex(vertex) {
        this.edges[vertex] = [];
    }

    addEdge(originVertex, destinationVertex) {
        this.edges[originVertex].push(destinationVertex); // 방향 그래프는 한 방향으로만 연결
    }
}

// 예시 사용
const undirected = new UndirectedGraph();
undirected.addVertex("A");
undirected.addVertex("B");
undirected.addEdge("A", "B");

const directed = new DirectedGraph();
directed.addVertex("A");
directed.addVertex("B");
directed.addEdge("A", "B");

console.log(undirected);
console.log(directed);
```

이 코드에서 `UndirectedGraph` 클래스는 무방향 그래프를, `DirectedGraph` 클래스는 방향 그래프를 각각 구현합니다. 각 클래스는 정점을 추가하는 `addVertex` 메서드와, 간선을 추가하는 `addEdge` 메서드를 가지고 있습니다. 방향 그래프에서 `addEdge`는 한 방향으로만 연결을 추가하는 반면, 무방향 그래프에서는 양 방향으로 연결을 추가합니다. 이 차이점이 방향 그래프와 무방향 그래프의 핵심적인 차이입니다.

```javascript
// 예를 들어, 다음과 같이 무방향 그래프와 방향 그래프에 간선을 추가할 수 있습니다.
undirected.addEdge("A", "C"); // A와 C가 서로 연결됨
directed.addEdge("B", "C"); // B에서 C로의 단방향 연결만 생성

console.log(undirected);
console.log(directed);
```

무방향 그래프에서는 `A`와 `C`가 서로 연결되어 있으므로, `A`의 인접 리스트에는 `C`가 포함되고, `C`의 인접 리스트에는 `A`가 포함됩니다. 반면, 방향 그래프에서 `B`에서 `C`로의 간선을 추가하면, `B`의 인접 리스트에는 `C`가 포함되지만, `C`의 인접 리스트에는 `B`가 포함되지 않습니다. 이는 `C`에서 `B`로의 직접적인 연결이 없기 때문입니다.

이 예시 코드와 설명을 통해, 정점과 간선으로 구성되는 그래프의 기본적인 구조와, 방향 그래프와 무방향 그래프의 차이점을 이해할 수 있습니다. 그래프는 데이터를 모델링하고 복잡한 관계를 표현하는 데 매우 유용한 데이터 구조입니다.

### 이 그래프들의 구현

그래프를 구현하는 방법은 주로 두 가지입니다: `인접 리스트(adjacency list)와 인접 행렬(adjacency matrix)`.

1. **`인접 리스트`** : 각 노드에 대해 이웃하는 노드의 리스트를 저장하는 방법입니다. 이 방법은 `공간 효율성이 높고, 노드와 간선의 수에 비례하는 메모리를 사용`합니다.

```javascript
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    // Add vertex
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Add edge
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    // Print the graph
    printGraph() {
        for (let [key, value] of this.adjList) {
            console.log(`${key} -> ${value.join(', ')}`);
        }
    }
}

let graph = new Graph(5);
let vertices = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'C');

graph.printGraph();
```


2. **`인접 행렬`** : 2차원 배열을 사용하여 `노드 간의 연결을 표현하는 방법`입니다. 이 방법은 노드 간의 연결을 확인하는 데 O(1)의 시간이 걸리지만, `노드의 수의 제곱에 비례하는 메모리를 사용`합니다.

```javascript
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array(vertices).fill(null).map(() => Array(vertices).fill(0));
    }

    // Add edge
    addEdge(v, w) {
        this.adjMatrix[v][w] = 1;
        this.adjMatrix[w][v] = 1;
    }

    // Print the graph
    printGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log(this.adjMatrix[i].join(' '));
        }
    }
}

let graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(3, 4);
graph.addEdge(4, 2);

graph.printGraph();
```

이 두 가지 방법 중 어떤 것을 사용할지는 그래프의 특성과 사용 사례에 따라 달라집니다. `인접 리스트는 공간 효율성이 높고, 희소 그래프(sparse graph)`에 적합합니다. 반면에 `인접 행렬은 노드 간의 연결을 빠르게 확인`할 수 있으며, `밀집 그래프(dense graph)`에 적합합니다.


### 인접 행렬의 메모리 (방향/무방향 그래프)

방향 그래프와 무방향 그래프 `모두 인접 행렬을 사용하여 표현`할 수 있습니다. 그러나 메모리 사용량의 관점에서 보면, 두 그래프 타입 사이에는 명확한 차이가 있습니다.

`무방향 그래프의 경우, 인접 행렬은 항상 대칭적`입니다. 즉, i번째 행과 j번째 열의 값은 항상 j번째 행과 i번째 열의 값과 같습니다. 따라서 무방향 그래프의 인접 행렬은 실제로 `절반만 저장해도 충분`합니다. 이는 메모리 사용량을 절약할 수 있습니다.

반면, `방향 그래프의 경우, 인접 행렬은 대칭적이지 않을 수 있습니다`. 즉, i번째 행과 j번째 열의 값은 j번째 행과 i번째 열의 값과 다를 수 있습니다. 따라서 방향 그래프의 인접 행렬은 `모든 값을 저장`해야 합니다.

결론적으로, `메모리 사용량의 관점`에서 보면, `무방향 그래프가 방향 그래프보다 인접 행렬을 사용할 때 더 효율적일 수 있습니다`. 그러나 이는 `그래프의 크기와 밀도, 그리고 구현 방식에 따라 달라질 수 있습니다`.