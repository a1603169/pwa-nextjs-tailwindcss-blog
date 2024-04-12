---
title: 'GCP Cloud Engineer - 5'
subtitle: 'Introducting Google Cloud - Identity and Access Management(IAM) / Service Accounts'
date: '2024-04-12'
tags: [Cloud, GCP]
---

### Identity and Access Management(IAM)


- ㅇ **Identity and Access Management (IAM)**: Administrators can use `IAM to apply policies` that define who can do what and on which resources within an organization.

- ㅇ **Principals**: In IAM policies, `the "who" can be` a **Google account**, a **Google group**, a **service account**, or **a Cloud Identity domain**, and is known as a "principal."

- ㅇ **Roles and Permissions**: The `"can do what" part of an IAM policy` is defined by a `role`, which is a `collection of permissions`.

- ㅇ **Role Inheritance**: When a `role is assigned to a principal` for a specific element of the resource hierarchy, `the policy applies to that element and all elements below it.`

- ㅇ **Deny Rules**: `Deny rules can override allow policies` by `preventing` certain principals from `using certain permissions`, with `deny policies checked before allow policies.`

- ㅇ **Role Types**:

  <img class='blogImage' src='/blog/basic_iam_role.png'>

  - ㅁ **Basic Roles**: `Broad in scope(범위가 넓다)` and `affect all resources` in a **project**, **including roles like owner**, **editor**, **viewer**, and **billing administrator**.

  <img class='blogImage' src='/blog/predefined_role.png'>

  - ㅁ **Predefined Roles**: Specific to `Google Cloud services` and `define permissible actions` within a **service, project, folder, or organization**.

  <img class='blogImage' src='/blog/custom_role.png'>

  - ㅁ **Custom Roles**: `Allow for highly specific permission settings` using a **least-privilege model(최소 사전 모델)**, applicable `only at the project or organization level(O)`, not at the `folder level(X)`.

### 아이덴티티 및 액세스 관리(IAM)

- ㅇ **아이덴티티 및 액세스 관리 (IAM)**: 관리자는 IAM을 사용하여 조직 내에서 누가 어떤 리소스에서 무엇을 할 수 있는지 정의하는 정책을 적용할 수 있습니다.

- ㅇ **주체들**: IAM 정책에서 "누구"는 구글 계정, 구글 그룹, 서비스 계정 또는 클라우드 아이덴티티 도메인이 될 수 있으며, 이를 "주체"라고 합니다.

- ㅇ **역할 및 권한**: IAM 정책의 "할 수 있는 일" 부분은 권한의 집합인 역할로 정의됩니다.

- ㅇ **역할 상속**: 특정 리소스 계층 구조 요소에 대해 주체에게 역할이 할당되면 해당 정책은 그 요소 및 그 아래의 모든 요소에 적용됩니다.

- ㅇ **거부 규칙**: 거부 규칙은 허용 정책보다 먼저 검토되어 특정 주체가 특정 권한을 사용하지 못하도록 할 수 있습니다.

- ㅇ **역할 유형**:

  - ㅁ **기본 역할**: 범위가 넓고 프로젝트의 모든 자원에 영향을 미치며, 소유자, 편집자, 뷰어, 결제 관리자와 같은 역할을 포함합니다.

  - ㅁ **미리 정의된 역할**: 구글 클라우드 서비스에 특화되어 있으며, 서비스, 프로젝트, 폴더 또는 조직 내에서 허용되는 행동을 정의합니다.

  - ㅁ **맞춤 역할**: 최소 권한 모델을 사용하여 매우 구체적인 권한 설정을 허용하며, 프로젝트 또는 조직 수준에서만 적용 가능하고 폴더 수준에서는 적용할 수 없습니다.

--------


### Service Accounts


- ㅇ **Purpose of Service Accounts**: Service accounts are used to `grant permissions to resources` such as `virtual machines`, instead of `individuals(X)`, `ensuring secure and specific access` to other Google Cloud resources.

- ㅇ **Usage Scenario**: For instance, a service account can `enable a virtual machine running an application` to `store data` in Cloud Storage `without exposing that data` to the internet.

- ㅇ **Authentication**: Service accounts use `cryptographic keys(O)` rather than passwords for authentication(X), `enhancing security`.

- ㅇ **Role Assignment**: A service account with the `Compute Engine’s Instance Admin role can manage other VMs`, including **creating, modifying, and deleting** them as required by an application.

- ㅇ **Management of Service Accounts**: Service accounts can `be managed with specific permissions`. 

<img class='blogImage' src='/blog/service_account.png'>

- ㅇ For example:
  - ㅁ Alice could **manage Google accounts** that can `act as service accounts`.
  - ㅁ Bob could **be granted permissions** to view a `list of service accounts`.

- ㅇ **IAM Policies on Service Accounts**: As a resource, service accounts `can have their own IAM policies`. This allows `different roles to be assigned` to different `users` for `managing the service accounts`, 
- ㅇ such as:
  - ㅁ Editor role to Alice for managing the service account.
  - ㅁ Viewer role to Bob for viewing the service account.

- ㅇ **Flexible Access Control**: This setup `exemplifies(예시하다) the flexibility of Google Cloud's IAM`, allowing `detailed and controlled access management` according to organizational `needs`.

### 서비스 계정

- ㅇ **서비스 계정 목적**: 서비스 계정은 개인 대신 가상 머신과 같은 리소스에 권한을 부여하여 다른 Google Cloud 리소스에 안전하고 특정한 액세스를 제공합니다.

- ㅇ **사용 시나리오**: 예를 들어, 서비스 계정을 사용하면 애플리케이션을 실행하는 가상 머신이 Cloud Storage에 데이터를 저장할 수 있지만 해당 데이터를 인터넷에 노출시키지 않을 수 있습니다.

- ㅇ **인증**: 서비스 계정은 인증을 위해 암호 대신 암호화 키를 사용하여 보안을 강화합니다.

- ㅇ **역할 할당**: Compute Engine의 Instance Admin 역할이 할당된 서비스 계정은 해당 서비스 계정을 사용하는 가상 머신에서 다른 가상 머신을 생성, 수정 및 삭제할 수 있습니다.

- ㅇ **서비스 계정 관리**: 서비스 계정은 특정 권한으로 관리될 수 있습니다. 
  - 예를 들어:
  - Alice는 서비스 계정으로 작동할 수 있는 Google 계정을 관리할 수 있습니다.
  - Bob은 서비스 계정 목록을 볼 수 있는 권한을 부여받을 수 있습니다.

- ㅇ **서비스 계정에 대한 IAM 정책**: 서비스 계정은 자체 IAM 정책을 가질 수 있습니다. 이를 통해 서비스 계정을 관리하는 데 필요한 다른 사용자에게 다양한 역할을 할당할 수 있습니다. 
  - 예를 들어:
  - Alice에게는 서비스 계정을 관리하는 데 사용할 수 있는 편집자 역할을 할당할 수 있습니다.
  - Bob에게는 서비스 계정을 보는 데 사용할 수 있는 뷰어 역할을 부여할 수 있습니다.

- ㅇ **유연한 액세스 제어**: 이러한 설정은 Google Cloud의 IAM의 유연성을 보여주며 조직의 요구에 맞게 세부적이고 통제된 액세스 관리를 가능하게 합니다.
