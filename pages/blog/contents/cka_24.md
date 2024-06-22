--- 
title: 'Certified Kubernetes Administration - 24'
subtitle: 'k8s taints tolerations and node affinity to allocate nodes and pods'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### taints와 tolerations, 그리고 node affinity를 사용한 노드 및 포드 배치

- **목표**:

  - 세 개의 노드(blue, red, green)에 각각 동일한 색상의 포드를 배치.

  - 다른 팀의 포드가 우리의 노드에 배치되지 않도록 하고, 우리의 포드가 그들의 노드에 배치되지 않도록 함.

- **taints와 tolerations 사용**:

  - 노드에 해당 색상으로 taint 적용 (예: blue 노드에 `color=blue:NoSchedule`).

  - 포드에 해당 색상을 toleration으로 설정 (예: blue 포드에 `color=blue` toleration 추가).

  - 포드가 생성될 때, 노드는 올바른 toleration을 가진 포드만 수락.

  - 하지만, 다른 taint나 toleration이 설정되지 않은 노드로 포드가 배치될 수 있음.

- **node affinity 사용**:

  - 노드에 해당 색상으로 라벨 추가 (예: blue 노드에 `color=blue` 라벨 추가).

  - 포드에 node affinity 규칙 추가 (예: blue 포드에 `color=blue` 라벨과 일치하는 노드 선택).

  - 포드가 올바른 노드에 배치되지만, 다른 포드가 우리의 노드에 배치될 수 있음.

- **taints와 tolerations, node affinity 결합 사용**:

  - **taints와 tolerations**: 다른 팀의 포드가 우리의 노드에 배치되지 않도록 방지.

  - **node affinity**: 우리의 포드가 다른 팀의 노드에 배치되지 않도록 방지.

  - 이 두 가지 방법을 결합하여 특정 포드를 특정 노드에 완전히 전용할 수 있음.

### 요약

1. **taints와 tolerations**:

   - 노드에 taint를 적용하여 특정 포드만 해당 노드에 배치되도록 함.

   - 포드에 toleration을 설정하여 특정 노드의 taint를 견디게 함.

   - 그러나 포드가 다른 taint가 없는 노드로 배치될 가능성이 있음.

2. **node affinity**:

   - 노드에 라벨을 추가하여 특정 포드를 해당 노드에 배치되도록 함.

   - 포드에 node affinity 규칙을 추가하여 특정 노드를 선택.

   - 그러나 다른 포드가 우리의 노드에 배치될 가능성이 있음.

3. **결합 사용**:

   - taints와 tolerations을 사용하여 다른 팀의 포드가 우리의 노드에 배치되지 않도록 함.

   - node affinity를 사용하여 우리의 포드가 다른 팀의 노드에 배치되지 않도록 함.

   - 이 두 가지 방법을 결합하여 특정 포드를 특정 노드에 완전히 전용할 수 있음.