---
title: 'GCP Cloud Engineer - 4'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Pricing and Billing / Google Cloud Resource Hierarchy'
date: '2024-04-12'
tags: [Cloud, GCP]
---

### Pricing and Billing 

- ㅇ **Per Second Billing**: Google was the `first to offer` **`per second billing`** for services such as `Compute Engine`, `Google Kubernetes Engine`, `DataProc`, and `App Engine Flexible Environment VMs`.

- ㅇ **Sustained Use Discounts**: `Compute Engine offers discounts for VMs` that run for a `significant part of the month`, specifically **more than 25%**, with `additional discounts` for every extra minute.

- ㅇ **Custom VM Types**: `Allows fine-tuning(미세조정) of vCPU and memory` to **optimize costs** for specific workloads.

- ㅇ **Pricing Calculator**: An `online tool available` at cloud.google.com/products/calculator to `estimate costs`.

- ㅇ **Budget Controls**: `Allows setting budgets at the billing account or project level`, with options for fixed limits or percentages of previous month's spend.

- ㅇ **Alert Notifications**: `Notification alerts` when spending `approaches budget limits`, customizable at various percentages of the budget.

- ㅇ **Expenditure Monitoring**: `Visual tools in the Google Cloud console` to monitor spending by project or service.

- ㅇ **Quotas**: `Designed to prevent overconsumption of resources`, with **rate quotas(1)** `resetting after a specific time` and **allocation quotas(2)** `limiting the number of resources`.

### 가격 및 청구

- ㅇ **초 단위 과금**: 구글은 컴퓨트 엔진, 구글 쿠버네티스 엔진, 데이터프록, 앱 엔진 플렉서블 환경 VMs 등의 서비스에 대해 업계 최초로 초 단위 과금을 도입했습니다.

- ㅇ **지속 사용 할인**: 한 달의 상당 부분(25% 이상) 동안 가상 머신을 운영할 경우 할인을 제공하며, 추가 사용 분마다 할인이 적용됩니다.

- ㅇ **맞춤 VM 유형**: 애플리케이션에 최적화된 vCPU 및 메모리를 세밀하게 조정하여 비용을 최적화할 수 있습니다.

- ㅇ **가격 계산기**: cloud.google.com/products/calculator에서 비용을 추정할 수 있는 온라인 도구.

- ㅇ **예산 관리**: 결제 계정 또는 프로젝트 수준에서 예산을 설정할 수 있으며, 고정 한도 또는 전월 지출의 특정 비율로 설정 가능.

- ㅇ **알림 알림**: 예산 한도에 근접할 때 알림을 받을 수 있으며, 예산의 다양한 백분율에서 사용자 정의 가능.

- ㅇ **지출 모니터링**: 구글 클라우드 콘솔의 시각적 도구를 통해 프로젝트 또는 서비스별 지출을 모니터링할 수 있습니다.

- ㅇ **할당량**: 리소스 과소비를 방지하도록 설계된 할당량은 `특정 시간 후에 재설정되는 비율 할당량(1)`과 `리소스 수를 제한하는 할당 할당량(2)`이 있습니다.


-------------

### Google Cloud Resource Hierarchy

<img class='blogImage' src='/blog/gcrh.png'>

출처 : https://www.techtarget.com/searchcloudcomputing/tip/Break-down-the-Google-Cloud-resource-hierarchy

- ㅇ **Resource Hierarchy**: Google Cloud's structure includes **four levels**: `resources, projects, folders, and an organization node`, from bottom to top.

- ㅇ **Resources**: These are the **`base elements`** like `virtual machines`, `Cloud Storage buckets`, and `BigQuery tables`.

- ㅇ **Projects**: `Serve as containers for resources` and `enable the use of Google Cloud services`; each project is distinct within the organization.
  - ㅁ **Project ID**: A globally `unique identifier assigned by Google`, `immutable` once created. **`(Can be modified during creation!)`**
  - ㅁ **Project Name**: `User-created, not unique` and can be changed at any time.
  - ㅁ **Project Number**: A `unique number assigned by Google`, mainly used internally `to track resources` also `immutable`.
  
- ㅇ **Folders**: `Organize projects` and can `contain multiple projects` or other folders; `policies applied at the folder level` `and this can be inherit` to all contained projects. 

- ㅇ **Organization Node**: The `top-level element` that `encompasses(포함합니다) all projects and folders`; `policies and administrative roles` are managed at this level.

- ㅇ **Policy Management**: Policies can be `set at various levels` and are `inherited downwards`, `providing flexibility` and `control over access and operations`.

- ㅇ **Special Roles**: Include `organization policy administrators` and `project creators`, which help `manage access` and `control spending`.

- ㅇ **Google Workspace and Cloud Identity**: `Determines how organization nodes are created`, either `automatically through a Google Workspace domain` or `manually via Cloud Identity`.

### 구글 클라우드 리소스 구조

- ㅇ **리소스 계층 구조**: 구글 클라우드의 구조는 자원, 프로젝트, 폴더 및 조직 노드의 네 단계로 구성됩니다.

- ㅇ **자원**: 가상 머신, 클라우드 스토리지 버킷, 빅쿼리 테이블과 같은 기본 요소입니다.

- ㅇ **프로젝트**: 자원을 포함하는 컨테이너 역할을 하며, 구글 클라우드 서비스 사용을 가능하게 합니다; 각 프로젝트는 조직 내에서 독립적입니다.

- ㅇ **폴더**: 프로젝트를 조직하고 여러 프로젝트 또는 다른 폴더를 포함할 수 있습니다; 폴더 수준에서 적용된 정책은 모든 포함된 프로젝트에 상속됩니다.

- ㅇ **조직 노드**: 모든 프로젝트와 폴더를 포괄하는 최상위 요소; 정책 및 관리 역할은 이 수준에서 관리됩니다.

- ㅇ **정책 관리**: 다양한 수준에서 정책을 설정할 수 있으며, 하향식으로 상속되어 접근 및 운영에 대한 유연성과 제어를 제공합니다.

- ㅇ **특별 역할**: 조직 정책 관리자 및 프로젝트 생성자를 포함하여 접근 관리 및 지출 제어를 돕습니다.

- ㅇ **구글 워크스페이스 및 클라우드 아이덴티티**: 조직 노드 생성 방법을 결정하며, 구글 워크스페이스 도메인을 통해 자동으로 또는 클라우드 아이덴티티를 통해 수동으로 생성됩니다.