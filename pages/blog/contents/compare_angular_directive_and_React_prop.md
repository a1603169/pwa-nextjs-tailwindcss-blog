---
title: 'Angular의 디렉티브를 React개념으로 이해해보자'
subtitle: 'Angular에서 디렉티브(Directives)는 DOM 요소의 모양, 동작 또는 레이아웃을 조작하는데 사용되는 특수한 토큰입니다. 이들은 HTML 태그에 속성으로 추가되어, 해당 태그의 동작을 Angular의 로직으로 확장하거나 변경합니다.'
date: '2023-12-18'
tags: ['JavaScript', 'Angular', 'React','FE']
---

Angular에서 디렉티브(Directives)는 DOM 요소의 모양, 동작 또는 레이아웃을 조작하는데 사용되는 특수한 토큰입니다. 이들은 HTML 태그에 속성으로 추가되어, 해당 태그의 동작을 Angular의 로직으로 확장하거나 변경합니다.

React와 Angular는 서로 다른 접근 방식을 가지고 있기 때문에 정확한 1:1 비교는 어렵지만, Angular의 디렉티브를 React의 개념에 대입해보자면, 디렉티브는 React에서 컴포넌트와 함께 사용되는 Props와 유사한 역할을 합니다.

### Angular 디렉티브와 React Props의 비교:

1. **디렉티브 (Directives in Angular)**:
   - Angular의 디렉티브는 HTML 요소의 행동을 변경하거나 확장합니다.
   - 예를 들어, `*ngFor`와 `*ngIf` 같은 구조적 디렉티브는 DOM을 조건에 따라 추가하거나 제거합니다.
   - 속성 디렉티브는 요소의 모양이나 행동을 변경합니다 (예: `ngStyle`, `ngClass`).

2. **Props (in React)**:
   - React의 Props는 컴포넌트에 데이터를 전달하는 방법입니다.
   - Props를 사용하여 컴포넌트의 내용, 스타일, 행동 등을 조정할 수 있습니다.
   - Props는 부모 컴포넌트로부터 데이터를 받아 자식 컴포넌트에서 사용합니다.

### 핵심 차이점:

- Angular의 디렉티브는 주로 DOM 요소 자체의 동작을 변경하거나 확장하는데 집중합니다.
- React의 Props는 데이터를 컴포넌트에 전달하고, 이를 기반으로 컴포넌트의 렌더링 또는 동작을 조절합니다.

결론적으로, Angular의 디렉티브는 DOM 조작에 좀 더 직접적으로 사용되며, React의 Props는 데이터 전달 및 컴포넌트 기반의 UI 구축에 중점을 둡니다.

<br/>

Angular에서 디렉티브를 활용하는 간단한 예시를 제공하겠습니다. 여기서는 기본적인 구조적 디렉티브인 `*ngIf`와 `*ngFor`, 그리고 사용자 정의 디렉티브를 만들어보겠습니다.

### 1. `*ngIf`와 `*ngFor` 디렉티브 사용하기

`*ngIf`는 특정 조건이 참일 때만 요소를 DOM에 추가합니다. `*ngFor`는 배열의 각 항목에 대해 반복하여 요소를 생성합니다.

`app.component.html` 파일에서:

```html
<h2 *ngIf="showTitle">Todo List</h2>
<ul>
  <li *ngFor="let todo of todos">
    {{ todo }}
  </li>
</ul>
```

`app.component.ts` 파일에서:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTitle = true;
  todos = ['Task 1', 'Task 2', 'Task 3'];
}
```

### 2. 사용자 정의 디렉티브 생성하기

사용자 정의 디렉티브를 만들어 요소의 배경색을 변경해 보겠습니다.

먼저, 디렉티브를 생성합니다:

```bash
ng generate directive highlight
```

생성된 `highlight.directive.ts` 파일에서:

```typescript
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }
}
```

이제 이 디렉티브를 사용하여 특정 요소의 배경색을 변경할 수 있습니다.

`app.component.html`에 디렉티브 적용하기:

```html
<p [appHighlight]="'lightblue'">Highlighted text in light blue</p>
<p [appHighlight]="'green'">Highlighted text in green</p>
```

이 예시에서 `*ngIf`와 `*ngFor`는 Angular에서 제공하는 내장 디렉티브이며, `appHighlight`는 사용자가 정의한 디렉티브입니다. 이러한 디렉티브들을 통해 동적인 UI와 상호작용을 구현할 수 있습니다.

Angular CLI의 `ng generate directive` 명령어는 새로운 사용자 정의 디렉티브를 생성할 때 사용됩니다. 이 명령은 프로젝트에 새로운 디렉티브를 추가하고, 필요한 초기 설정을 자동으로 구성해줍니다. 

매번 새로운 사용자 정의 디렉티브를 만들 때마다 `ng generate directive` 명령어를 사용해야 하는지 여부는, 당신이 개발하고자 하는 기능에 따라 달라집니다:

1. **새로운 사용자 정의 디렉티브가 필요한 경우**: 새로운 기능이나 스타일을 요소에 적용하고자 할 때, 새로운 디렉티브를 만들기 위해 이 명령어를 사용합니다. 예를 들어, 특정 상황에 따라 요소의 스타일을 바꾸는 디렉티브나, DOM 조작을 수행하는 디렉티브 등이 이에 해당합니다.

2. **기존 디렉티브를 재사용하는 경우**: 만약 기존에 생성한 사용자 정의 디렉티브가 필요한 기능을 이미 수행한다면, 해당 디렉티브를 다시 사용할 수 있으며, 새로 생성할 필요가 없습니다.

3. **Angular 내장 디렉티브 사용**: `*ngIf`, `*ngFor`, `ngClass`, `ngStyle`과 같은 Angular의 기본 제공 디렉티브는 이미 프레임워크에 포함되어 있으므로, 별도로 생성할 필요가 없습니다.

즉, 각기 다른 기능이나 행동을 요소에 적용하고자 할 때마다 새로운 디렉티브를 생성해야 합니다. 그러나 한 번 생성된 디렉티브는 재사용이 가능하므로, 유사한 기능이 필요할 경우 기존의 디렉티브를 활용하는 것이 좋습니다.

