---
title: 'GCP Cloud Engineer - 34'
subtitle: 'Essential Google Cloud Infrastructure: Core Services (한국어) - 조직(Organization) / 역할(Role)'
date: '2024-04-16'
tags: [Cloud, GCP]
---

### Organization

- **조직 리소스의 역할과 관리**:
  
  - ㅁ 조직 리소스는 GCP 리소스 `계층 구조의 루트` 노드이며, 조직 관리자가 `모든 리소스의 관리 권한`을 가집니다.
  
  - ㅁ `프로젝트 생성자`는 `조직 내에서 새 프로젝트`를 만들 수 있으며, 이 권한은 `조직 수준에서 적용되어 모든 프로젝트에 상속`됩니다.



- **계정과의 연결**:
  
  - ㅁ 조직 리소스는 `G Suite` 또는 `Cloud ID` `계정과 연결`되어 있으며, 이 계정을 가진 사용자가 `GCP 프로젝트를 생성할 때 자동으로 프로비저닝`됩니다.
  
  - ㅁ `G Suite 또는 Cloud ID의 최고 관리자`와 `GCP 조직 관리자`는 조직 `리소스의 설정 및 수명 주기를 제어하는 중요한 역할`을 합니다.



- **최소 권한 원칙**:
  
  - ㅁ 조직 관리자는 필요한 경우 `추가 역할을 할당하여 권한을 확장할 수 있습니다`.
  
  - ㅁ `폴더 생성과 같은 작업은 기본적으로 포함(X)`되지 않으며, `추가 권한이 필요`합니다.



- **폴더의 역할**:
  
  - ㅁ 폴더는 `조직 내에서 추가 그룹화`를 제공하고, 다양한 `법인`, `부서`, `팀`을 모델링하는 데 사용됩니다.
  
  - ㅁ 각 폴더는 프로젝트와 `다른 폴더를 포함할 수 있으며`, `부서 관리자는 해당 부서의 모든 GCP 리소스에 대한 소유권`을 가질 수 있습니다.



- **리소스 관리와 역할 상속**:
  
  - ㅁ 조직 내의 뷰어 역할은 `모든 리소스에 대한 보기 권한을 제공`하며, 폴더 노드에 있는 역할은 `조직 노드의 역할을 모방`하지만 `특정 폴더 내 리소스에만 적용`됩니다.
  
  - ㅁ `생성자 역할은 새 프로젝트를 생성`하고, 프로젝트 `삭제자 역할은 프로젝트 관련 삭제 권한을 부여`합니다.
  

-------------


### Roles

- **역할의 유형**:
  
  - ㅇ **기본 역할**: 원래 Cloud 콘솔에서 사용할 수 있었던 역할로, `소유자, 편집자, 뷰어` 등의 광범위한 `액세스 수준을` 제공합니다.
    
    - ㅁ **소유자**: `모든 관리 액세스 권한`을 가집니다 (예: 구성원 추가 및 삭제, 프로젝트 삭제).
    
    - ㅁ **편집자**: `수정 및 삭제 액세스 권한`을 가지며, 애플리케이션 `배포 및 리소스 수정` 가능.
    
    - ㅁ **뷰어**: `읽기 전용` 액세스 권한을 가집니다.
    
    - ㅁ **결제 관리자**: `결제를 관리`할 수 있지만, `리소스 변경 권한(X)`은 없습니다.
  
  - ㅇ **사전 정의된 역할**: `특정 GCP 리소스`에 대한 `세부적인 액세스 권한`을 제공하며, `다른 리소스`에 대한 `무단 액세스를 방지`합니다.
  
    - ㅁ Compute 관리자 역할**은 모든 Compute Engine `리소스에 대한 전체 권한을 제공`합니다.
    
    - ㅁ **네트워크 관리자 역할**은 `네트워크 리소스` 생성, 수정, 삭제 가능하나 `일부 리소스에` 대한 접근은 `제한`됩니다.
    
    - ㅁ **스토리지 관리자 역할**은 `디스크 이미지 및 스냅샷` 생성, 수정, 삭제 가능합니다.
  
  - ㅇ **커스텀 역할**: 조직의 특정 요구에 맞게 `사용자 정의하여 세부적인 권한 설정이 가능`합니다.
    
    - ㅁ 예: **인스턴스 운영자 역할**을 정의하여 `Compute Engine 가상 머신`을 `시작 및 중지(O)`할 수 있지만 `재구성(X)`은 할 수 없도록 설정 가능.