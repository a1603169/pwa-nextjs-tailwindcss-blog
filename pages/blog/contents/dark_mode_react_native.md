---
title: 'useColorScheme vs Appearance (React native)'
subtitle: '리액트 네이티브용 다크모드'
date: '2024-04-04'
tags: [React Native, React, JavaScript, FE]
---



### `useColorScheme`

#### 장점:

1. **간편** 하게 사용 가능: `useColorScheme` Hook은 함수 컴포넌트 내에서 쉽게 사용할 수 있습니다.
2. **표준 React Native API** : React Native의 기본 API 중 하나이므로 추가 라이브러리나 설정 없이 사용할 수 있습니다.

#### 단점:

1. iOS **13 이전 지원에 제한적** : `useColorScheme` Hook은 **iOS 13 이상과 Android 10 이상**에서만 지원됩니다. 이전 버전의 기기에서는 사용할 수 없습니다.
2. 앱 외관 설정 변경에 제한적: 다크 모드 및 라이트 모드에 대한 사용자 지정 설정을 변경하는 기능이 제한적일 수 있습니다.

### `Appearance`

#### 장점:

1. iOS **13 이전 버전 지원** : `Appearance` API는 **iOS 13 이전 버전 및 iOS 13 이상을 모두** 지원합니다.
2. 사용자 정의 설정 가능 : `Appearance` API를 사용하여 다크 모드와 라이트 모드에 대한 **사용자 지정 스타일 및 설정** 을 쉽게 구현할 수 있습니다.

#### 단점:

1. **Android 지원에 제한적** : `Appearance` API는 **주로 iOS에서 지원되며 Android에서는 사용이 제한적** 일 수 있습니다.
2. **조금 더 복잡한 설정** : `Appearance`를 사용하면 **조금 더 복잡한 설정**이 필요할 수 있으며, 앱 전체적인 모드를 관리하는 데 조금 더 많은 작업이 필요할 수 있습니다.

따라서 선택은 주로 앱의 대상 플랫폼과 요구 사항에 따라 달라집니다. iOS 13 이상만 지원해도 무방하고 간단한 구현을 원한다면 `useColorScheme`을 사용하는 것이 좋을 수 있습니다. 그러나 iOS 13 이전 버전을 지원하거나 더 복잡한 사용자 지정이 필요하다면 `Appearance` API를 사용하는 것이 더 적절할 수 있습니다.