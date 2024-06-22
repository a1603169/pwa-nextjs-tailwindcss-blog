--- 
title: 'Certified Kubernetes Administration - 38'
subtitle: 'k8s Self Healing Application'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Self-Healing Applications

1. **Self-Healing with ReplicaSets and Replication Controllers**
   
   - **ReplicaSets**와 **Replication Controllers**를 통해 셀프 힐링 애플리케이션 지원.
   
   - Replication Controller는 포드 내의 애플리케이션이 충돌할 경우 자동으로 포드를 재생성.
   
   - 항상 충분한 애플리케이션 복제본이 실행되도록 보장.

2. **Liveness와 Readiness Probes**
   
   - 포드 내에서 실행 중인 애플리케이션의 상태를 확인하고 필요한 조치를 취할 수 있도록 지원.
   
   - **Liveness Probes**: 애플리케이션이 충돌했는지 확인하고, 충돌 시 재시작.
   
   - **Readiness Probes**: 애플리케이션이 준비 상태인지 확인하고, 준비되지 않았을 때 트래픽을 차단.
   
   - 이러한 기능은 CKA 시험에는 필수적이지 않지만, CKAD 시험에서 다룸.

3. **내용 요약**
   
   - Kubernetes는 ReplicaSets와 Replication Controllers를 통해 셀프 힐링 애플리케이션을 지원.
   
   - Replication Controller는 포드 충돌 시 자동 재생성을 보장.
   
   - Liveness와 Readiness Probes를 통해 애플리케이션 상태를 모니터링하고, 필요한 경우 조치를 취함.
   
   - 이러한 기능은 CKAD 시험에서 상세히 다룸.