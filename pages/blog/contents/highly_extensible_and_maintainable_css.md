---
title: '유지보수 + 확장성을 생각하는 CSS 설계 방식이란'
subtitle: 'Extensible and maintainable CSS Architechture'
date: '2024-03-24'
tags: [FE, JavaScript]
---

보수성과 확장성이 높은 CSS 설계는 웹 개발 프로젝트의 유지보수를 용이하게 하고, 장기적으로 프로젝트 규모가 확장될 때도 효과적으로 대응할 수 있게 합니다. 이를 위해 알아야 할 핵심 지식과 전략은 다음과 같습니다:

### 1. 방법론적 접근

- **BEM (Block Element Modifier)**: 컴포넌트와 서브 컴포넌트를 명확하게 구분하여, 재사용성을 높이고 의존성을 낮춥니다. 예: `block__element--modifier`

- **OOCSS (Object-Oriented CSS)**: 구조와 스킨을 분리하여, CSS를 객체 지향적으로 접근합니다. 이는 코드 재사용과 페이지 로딩 시간 단축에 도움을 줍니다.

- **SMACSS (Scalable and Modular Architecture for CSS)**: 스타일 가이드를 통해 CSS를 여러 카테고리로 나누고, 규모가 큰 프로젝트에서도 CSS를 쉽게 관리할 수 있도록 합니다.

### 2. CSS 전처리기 사용

- **Sass, Less, Stylus**: 변수, 함수, 믹스인(mixins), 상속 등 프로그래밍적 기능을 CSS에 도입하여, CSS의 보수성과 확장성을 높입니다.

### 3. 컴포넌트 기반 설계

- 웹 컴포넌트나 프레임워크(예: React, Vue, Angular)와 함께 컴포넌트 기반의 아키텍처를 채택하여, UI를 재사용 가능한 부분으로 나누고 각각 독립적으로 스타일을 관리합니다.

### 4. CSS 변수 사용

- CSS 커스텀 속성(변수)을 사용하여 디자인 시스템을 구축합니다. 이를 통해 색상, 폰트 크기 등을 중앙에서 관리하여 일관성을 유지하고, 변경 사항을 쉽게 적용할 수 있습니다.

### 5. 반응형 디자인 전략

- 미디어 쿼리를 사용하여 다양한 화면 크기와 해상도에 맞는 유연한 레이아웃을 구현합니다. 이는 사용자 경험을 향상시키고, 모든 디바이스에서 일관된 디자인을 제공합니다.

### 6. 유틸리티 클래스 활용

- Tailwind CSS와 같은 유틸리티-퍼스트 CSS 프레임워크를 활용하여, 일반적인 스타일링 패턴을 유틸리티 클래스로 추상화합니다. 이러한 접근 방식은 마크업 내에서 빠르게 스타일을 적용할 수 있게 하여 개발 속도를 향상시킵니다.

### 7. CSS 아키텍처 도구와 라이브러리

- **CSS-in-JS**: JavaScript를 사용하여 스타일을 선언적으로 관리하며, 컴포넌트 스코프 CSS를 가능하게 합니다. 예를 들어, Styled Components, Emotion 등이 있습니다.

- **디자인 시스템**: Storybook, Pattern Lab과 같은 도구를 사용하여 UI 컴포넌트를 문서화하고, 일관된 스타일 가이드를 유지 관리합니다.

보수성과 확장성이 높은 CSS 설계를 위해서는 단순히 코드를 작성하는 것 이상의 전략적 접근이 필요합니다. 프로젝트의 초기 단계에서부터 이러한 원칙과 방법론을 적용하면, 시간이 지남에 따라 발생할 수 있는 복잡성과 관련 문제를 최소화할 수 있습니다. 이를 위해 추가적으로 고려해야 할 사항들은 다음과 같습니다:

### 8. 유지보수를 위한 문서화(귀찮더라도..)

- **스타일 가이드**: 프로젝트의 디자인 원칙, 색상 팔레트, 타이포그래피, 공간 규칙 등을 포함하는 문서를 작성하여, 개발자와 디자이너 모두가 일관된 디자인 언어를 사용하도록 합니다.

- **코드 주석**: 컴포넌트나 복잡한 스타일 블록에 대한 설명을 주석으로 추가하여, 다른 개발자들이 코드를 이해하고 수정하는 데 도움을 줍니다.

### 9. 성능 최적화 고려

- **CSS 압축과 최소화**: 프로덕션 환경에서 CSS 파일을 압축하고 최소화하여 로딩 시간을 줄입니다.

- **비동기 로딩 또는 코드 분할**: 필요에 따라 CSS를 분할하여 페이지의 로딩 속도를 향상시키고, 사용자에게 더 나은 경험을 제공합니다.

### 10. 접근성(Accessibility) 고려

- **색상 대비**: 충분한 색상 대비를 확보하여 콘텐츠의 가독성을 높입니다.
  
- **키보드 탐색**: 모든 인터랙티브 요소가 키보드만으로도 접근 가능하도록 스타일을 구성합니다.
  
- **미디어 쿼리를 사용한 반응형 디자인**: 다양한 장치와 화면 크기에 맞게 콘텐츠가 적절히 표시되도록 합니다.

### 11. 지속적 리팩토링

- 프로젝트의 발전과 함께 코드 베이스도 지속적으로 성장합니다. 시간이 지나면서 발견되는 코드의 문제점들을 정기적으로 리팩토링하여, 프로젝트의 건강을 유지하고 성능을 최적화합니다.

### 12. 팀 내 커뮤니케이션 강화

- 팀 내에서 일관된 코딩 컨벤션과 스타일 가이드를 공유하고 준수하는 문화를 형성합니다. 코드 리뷰와 페어 프로그래밍을 통해 팀원들 간의 지식을 공유하고, 프로젝트의 품질을 함께 높여갑니다.

보수성과 확장성이 높은 CSS 설계를 통해, 프로젝트는 시간이 지나도 관리 가능하고 확장 가능한 상태를 유지할 수 있습니다. 이는 더 나은 사용자 경험, 효율적인 개발 프로세스, 그리고 장기적으로 비용 절감을 의미합니다.