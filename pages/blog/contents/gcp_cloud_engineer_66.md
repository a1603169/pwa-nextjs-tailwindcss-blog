---
title: 'GCP Cloud Engineer - 66'
subtitle: 'Essential Cloud Infrastructure: Sacling and Automation - Kubernetes Object Management'
date: '2024-04-19'
tags: [Cloud, GCP, Kubernetes]
---

### **Kubernetes Object Management**

**YAML 파일을 통한 오브젝트 정의**

- ㅁ `manifest files`를 사용하여 Kubernetes가 생성 및 유지할 오브젝트를 정의

- ㅁ 일반적으로 YAML 또는 JSON 형식으로 작성

- ㅁ YAML은 인간이 읽기 쉽고 편집하기 적은 형식

**Manifest 파일 필수 필드**

- ㅁ `apiVersion`: 생성된 오브젝트의 Kubernetes Api 버전 설명

- ㅁ `Kind`: 원하는 오브젝트 유형 정의 (예: Pod)

- ㅁ `metadata`: 오브젝트 식별을 돕는 필드 (이름, 고유 ID, 선택적 네임스페이스)

**오브젝트의 고유 식별자**

- ㅁ Kubernetes가 생성하는 각 오브젝트는 고유한 ID 보유

- ㅁ `Names`는 알파벳, 하이픈, 마침표 등을 허용하고 최대 길이는 253자

**Labels**

- ㅁ 오브젝트에 태그를 부여하기 위한 `key-value` 쌍

- ㅁ 오브젝트를 `식별하고 조직화`하는 데 사용

- ㅁ 선택적으로 생성하거나 생성 후 레이블을 부여 가능

**네임스페이스**

- ㅁ 물리적 클러스터를 여러 개의 `네임스페이스`로 추상화

- ㅁ 리소스 네이밍 (Pods, Deployments, controllers 등)에 범위 제공

**리소스 할당과 네임스페이스**

- ㅁ `Pod를 스케줄링`할 때 컨테이너가 `충분한 리소스를 확보`하는 것이 중요

- ㅁ 네임스페이스는 리소스 소비에 대한 제한을 정의하며, 클러스터 전체에 적용 가능

**기본 네임스페이스**

- ㅁ `default` 네임스페이스: 네임스페이스를 지정하지 않은 오브젝트의 기본 범위

- ㅁ `kube-system` 네임스페이스: Kubernetes 시스템에서 생성한 오브젝트를 포함

- ㅁ `kube-public` 네임스페이스: 모든 사용자에게 공개 읽기 가능한 오브젝트 포함

**네임스페이스 적용**

- ㅁ 생성 시 명령줄 네임스페이스 플래그를 사용하여 네임스페이스 지정 가능

- ㅁ 리소스의 YAML 파일에 네임스페이스 지정 가능

- ㅁ YAML 파일에서 네임스페이스를 지정하면 유연성이 향상되며, 독립적 인스턴스를 만들기 쉬워짐