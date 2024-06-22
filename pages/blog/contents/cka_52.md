--- 
title: 'Certified Kubernetes Administration - 52'
subtitle: 'k8s / RBAC(Role-Based Access Control)'
date: '2024-06-22'
tags: [Kubernetes, Cloud]
---

### Kubernetes Role-Based Access Control (RBAC) 정리

1. **역할(Role) 생성**:
   
   - **Role 객체 정의**:
     
     - `apiVersion`: rbac.authorization.k8s.io/v1
     
     - `kind`: Role
     
     - `metadata.name`: developer (개발자를 위한 역할)
   
   - **Rules 섹션**:
     
     - `apiGroups`: Core 그룹의 경우 빈칸으로 둡니다.
     
     - `resources`: pods
     
     - `verbs`: list, get, create, delete
     
     - 여러 규칙 추가 가능 (예: config map 생성 권한 추가).

   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: Role
   metadata:
     name: developer
   rules:
   - apiGroups: [""]
     resources: ["pods"]
     verbs: ["list", "get", "create", "delete"]
   - apiGroups: [""]
     resources: ["configmaps"]
     verbs: ["create"]
   ```

   
   - **Role 생성**:
     
     - `kubectl create role -f <role-definition-file>`

2. **Role Binding 생성**:
   
   - **Role Binding 객체 정의**:
     
     - `metadata.name`: dev-user-to-developer-binding
     
     - `kind`: RoleBinding
     
     - `subjects`: 사용자 정보
     
     - `roleRef`: 역할 정보

   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: RoleBinding
   metadata:
     name: dev-user-to-developer-binding
   subjects:
   - kind: User
     name: dev-user
     apiGroup: rbac.authorization.k8s.io
   roleRef:
     kind: Role
     name: developer
     apiGroup: rbac.authorization.k8s.io
   ```

   
   - **Role Binding 생성**:
     
     - `kubectl create rolebinding -f <role-binding-definition-file>`

3. **Role 및 Role Binding 조회**:
   
   - **Roles 조회**:
     
     - `kubectl get roles`
   
   - **Role Bindings 조회**:
     
     - `kubectl get rolebindings`
   
   - **Role 세부 정보 조회**:
     
     - `kubectl describe role developer`
   
   - **Role Binding 세부 정보 조회**:
     
     - `kubectl describe rolebinding dev-user-to-developer-binding`

4. **권한 확인**:
   
   - **사용자 권한 확인**:
     
     - `kubectl auth can-i create deployments`
     
     - `kubectl auth can-i delete nodes`
   
   - **다른 사용자로 가장하여 권한 확인**:
     
     - `kubectl auth can-i create deployments --as=dev-user`
     
     - `kubectl auth can-i create pods --namespace=test --as=dev-user`

5. **자원 이름별로 접근 권한 제한**:
   
   - 특정 자원에 대한 접근 권한만 허용
   
   - 예시: 네임스페이스 내의 특정 pod들에 대한 접근 권한

   ```yaml
   rules:
   - apiGroups: [""]
     resources: ["pods"]
     verbs: ["list", "get"]
     resourceNames: ["blue-pod", "orange-pod"]
   ```
