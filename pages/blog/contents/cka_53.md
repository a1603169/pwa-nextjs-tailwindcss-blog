--- 
title: 'Certified Kubernetes Administration - 53'
subtitle: 'k8s / Cluter Roles & Role Bindings'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes Cluster Roles 및 Cluster Role Bindings 정리

1. **클러스터 역할(Cluster Roles) 및 클러스터 역할 바인딩(Cluster Role Bindings) 소개**:

   - 클러스터 역할 및 바인딩은 네임스페이스 범위가 아닌 클러스터 전체에 걸친 자원에 대한 접근 권한을 관리합니다.

   - 클러스터 범위의 자원에는 노드, 지속적 볼륨 등이 포함됩니다.

   - 네임스페이스가 지정되지 않은 경우, 기본 네임스페이스에 생성되며, 클러스터 범위의 자원은 네임스페이스와 관련이 없습니다.

2. **클러스터 역할(Cluster Roles) 생성**:

   - 클러스터 관리자 역할 예시:

   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     name: cluster-admin
   rules:
   - apiGroups: [""]
     resources: ["nodes"]
     verbs: ["list", "get", "create", "delete"]
   ```

   - 클러스터 역할 생성 명령어:
     ```bash
     kubectl create clusterrole -f <cluster-role-definition-file>
     ```

3. **클러스터 역할 바인딩(Cluster Role Bindings) 생성**:

   - 클러스터 역할 바인딩 예시:

   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     name: cluster-admin-binding
   subjects:
   - kind: User
     name: cluster-admin
     apiGroup: rbac.authorization.k8s.io
   roleRef:
     kind: ClusterRole
     name: cluster-admin
     apiGroup: rbac.authorization.k8s.io
   ```

   - 클러스터 역할 바인딩 생성 명령어:
     ```bash
     kubectl create clusterrolebinding -f <cluster-role-binding-definition-file>
     ```

4. **클러스터 역할 및 바인딩 조회**:

   - 클러스터 역할 조회:
     ```bash
     kubectl get clusterroles
     ```

   - 클러스터 역할 바인딩 조회:
     ```bash
     kubectl get clusterrolebindings
     ```

   - 클러스터 역할 세부 정보 조회:
     ```bash
     kubectl describe clusterrole cluster-admin
     ```

   - 클러스터 역할 바인딩 세부 정보 조회:
     ```bash
     kubectl describe clusterrolebinding cluster-admin-binding
     ```

5. **실습 예제**:

   - **Michelle 사용자를 위한 노드 접근 권한 설정**:

     - 클러스터 역할 생성:
       ```bash
       kubectl create clusterrole michelle-role --verb=get,list,watch --resource=nodes
       ```

     - 클러스터 역할 바인딩 생성:
       ```bash
       kubectl create clusterrolebinding michelle-role-binding --clusterrole=michelle-role --user=michelle
       ```

     - 권한 테스트:
       ```bash
       kubectl get nodes --as=michelle
       ```

   - **Michelle 사용자의 스토리지 관리 역할 설정**:

     - 클러스터 역할 생성:
       ```bash
       kubectl create clusterrole storage-admin --verb=get,list,create,watch --resource=persistentvolumes,storageclasses
       ```

     - 클러스터 역할 바인딩 생성:
       ```bash
       kubectl create clusterrolebinding michelle-storage-admin --clusterrole=storage-admin --user=michelle
       ```

     - 권한 테스트:
       ```bash
       kubectl get storageclasses --as=michelle
       ```
