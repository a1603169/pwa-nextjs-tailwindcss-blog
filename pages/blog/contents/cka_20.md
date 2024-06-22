--- 
title: 'Certified Kubernetes Administration - 20'
subtitle: 'k8s Schedulering'
date: '2024-06-21'
tags: [Kubernetes, Cloud]
---
### Kubernetes 클러스터에서 스케줄러 없이 수동으로 Pod 스케줄링하기

1. **Pod 정의 파일 시작하기**:
   
   - Pod에는 기본적으로 설정되지 않은 `Node Name` 필드가 있음.
   
   - Pod 매니페스트 파일 생성 시 일반적으로 이 필드를 지정하지 않음.
   
   - Kubernetes는 이 필드를 자동으로 추가함.

2. **스케줄러의 역할**:
   
   - 스케줄러는 `Node Name` 필드가 설정되지 않은 Pod를 찾아 스케줄링 후보로 삼음.
   
   - 스케줄링 알고리즘을 실행하여 적절한 노드를 식별함.
   
   - 식별된 노드에 Pod를 스케줄링하고, `Node Name` 속성을 노드 이름으로 설정함.
   
   - 이를 바인딩 객체를 생성하여 수행함.

3. **스케줄러가 없으면**:
   
   - 스케줄러가 없으면 Pod는 계속 대기 상태에 머무름.

4. **수동으로 Pod 스케줄링하기**:
   
   - Pod 생성 시, Pod 명세 파일에 `Node Name` 필드를 노드 이름으로 설정함으로써 쉽게 수동 스케줄링 가능.
   
   - Pod 생성 시에만 `Node Name`을 지정할 수 있음.

5. **이미 생성된 Pod에 노드 할당하기**:
   
   - 이미 생성된 Pod의 `Node Name` 속성은 수정할 수 없음.
   
   - 기존 Pod에 노드를 할당하려면 바인딩

   객체를 생성하고, 해당 객체를 Pod의 바인딩 API에 POST 요청을 통해 전송함으로써 수행 가능.
   
   - 바인딩 객체에는 타겟 노드의 이름을 지정.
   
   - 바인딩 객체 데이터를 JSON 형식으로 변환하여 POST 요청에 포함.

6. **YAML 파일의 JSON 변환**:
   
   - YAML 파일을 JSON 형식으로 변환하여 바인딩 객체를 생성.
