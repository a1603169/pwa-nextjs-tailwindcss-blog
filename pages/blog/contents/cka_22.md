--- 
title: 'Certified Kubernetes Administration - 22'
subtitle: 'k8s Taints and Tolerations'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes의 Taints와 Tolerations


- **Taints와 Tolerations 개념**:
  
  - **Taints**: 노드에 설정하여 특정 포드가 해당 노드에 스케줄링되지 않도록 함.
  
  - **Tolerations**: 포드에 설정하여 특정 taint를 견디게 함.


- **비유 설명**:
  
  - 사람(노드)에 방충제(taint)를 뿌려 특정 벌레(포드)가 접근하지 못하게 함.
  
  - 일부 벌레는 방충제를 견딜 수 있어 접근 가능.


- **Kubernetes에서의 사용 예**:
  
  - 노드 1에 전용 리소스가 있는 경우, 해당 노드에 특정 포드만 배치.
  
  - 노드에 taint를 설정하여 기본적으로 모든 포드를 배치하지 않도록 함.
  
  - 특정 포드(D)가 이 taint를 견디도록 toleration 설정.


### **명령어 사용**:
  
  - `kubectl taint nodes` 명령어로 노드에 taint 설정.
  
  - 예시: `kubectl taint nodes node1 app=blue:NoSchedule`.


- **taint 효과**:
  
  - **NoSchedule**: 포드가 노드에 스케줄링되지 않음.
  
  - **PreferNoSchedule**: 가능하면 포드를 노드에 스케줄링하지 않으려 함.
  
  - **NoExecute**: 새로운 포드는 스케줄링되지 않으며, 기존 포드는 퇴출됨.


- **예시**:
  
  - 노드 1에 `app=blue:NoSchedule` taint 설정.
  
  - 포드 D에 toleration 설정: `app=blue, effect=NoSchedule`.
  
  - 스케줄러가 포드 A, B, C를 노드 1에 배치하려 하지만, taint로 인해 다른 노드에 배치됨.
  
  - 포드 D는 toleration을 가지고 있어 노드 1에 배치됨.


- **NoExecute 예시**:
  
  - 노드 1에 `app=blue:NoExecute` taint 설정.
  
  - 포드 C는 노드 1에서 퇴출되고, 포드 D는 toleration으로 인해 계속 실행됨.


- **중요 사항**:
  
  - Taints와 tolerations는 노드가 특정 포드를 수락하도록 제한할 뿐, 특정 노드에 포드를 배치하도록 지시하지 않음.
  
  - 특정 노드에 포드를 제한적으로 배치하려면 노드 어피니티(node affinity) 사용.


- **마스터 노드**:
  
  - 클러스터 설정 시, 마스터 노드에 기본적으로 taint가 설정되어 포드가 스케줄링되지 않음.
  
  - `kubectl describe node` 명령어로 마스터 노드의 taint 확인 가능.