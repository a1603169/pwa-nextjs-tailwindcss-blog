---
title: '앵귤러에서 제공하는 바인딩(Bind)'
date: '2023-12-22'
tags: ['JavaScript', 'Angular','FE']
---

Angular에서 제공하는 다양한 유형의 바인딩은 애플리케이션의 UI와 데이터를 효과적으로 연결하고 동기화하는 데 중요한 역할을 합니다. 다음은 Angular에서 자주 사용되는 주요 바인딩 유형들과 각각의 특징입니다.

### 1. 양방향 데이터 바인딩 (Two-way Binding):

- `[(ngModel)]`을 사용하여 구현합니다.
- 폼 요소의 값과 컴포넌트의 프로퍼티가 서로 동기화됩니다.
- 예: `<input [(ngModel)]="username">`는 `username` 프로퍼티와 `<input>` 요소의 값을 양방향으로 연결합니다.

### 2. 속성 바인딩 (Property Binding):

- `[속성명]="표현식"` 구문을 사용합니다.
- 컴포넌트의 프로퍼티 값이나 표현식의 결과를 HTML 요소의 속성에 바인딩합니다.
- 예: `<img [src]="userImage">`는 `userImage` 프로퍼티의 값을 `<img>`의 `src` 속성에 바인딩합니다.

### 3. 이벤트 바인딩 (Event Binding):

- `(이벤트명)="핸들러"` 구문을 사용합니다.
- HTML 요소의 이벤트를 컴포넌트의 메서드에 바인딩합니다.
- 예: `<button (click)="save()">Save</button>`는 버튼 클릭 이벤트를 `save()` 메서드에 바인딩합니다.

### 4. 인터폴레이션 (Interpolation):

- `{{표현식}}` 구문을 사용합니다.
- 컴포넌트의 프로퍼티나 표현식의 값을 HTML 템플릿에 삽입합니다.
- 예: `<div>{{greeting}}</div>`는 `greeting` 프로퍼티의 값을 `<div>` 안에 표시합니다.

### 5. 스타일 바인딩 (Style Binding):

- `[style.스타일속성명]="표현식"` 구문을 사용합니다.
- 컴포넌트의 값에 따라 HTML 요소의 스타일을 동적으로 변경합니다.
- 예: `<div [style.color]="isSpecial ? 'red' : 'green'">Text</div>`는 `isSpecial`의 값에 따라 텍스트 색상을 변경합니다.

### 6. 클래스 바인딩 (Class Binding):

- `[class.클래스명]="조건식"` 구문을 사용합니다.
- 조건에 따라 HTML 요소에 CSS 클래스를 동적으로 추가하거나 제거합니다.
- 예: `<div [class.special]="isSpecial">Content</div>`는 `isSpecial`이 참일 때 `<div>`에 `special` 클래스를 추가합니다.

이러한 바인딩 방식들은 Angular의 핵심 기능으로, 선언적으로 UI와 비즈니스 로직을 연결하는 데 사용됩니다. 이를 통해 개발자는 보다 효율적으로 동적인 웹 애플리케이션을 구축할 수 있습니다.