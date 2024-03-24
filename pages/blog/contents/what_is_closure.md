---
title: '클로저(Closrue)란'
subtitle: 'JavaScript Basic'
date: '2024-03-24'
tags: [JavaScript, FE, React]
---

클로저(Closure)는 프로그래밍 언어의 함수가 정의될 때의 환경을 기억하는 함수를 말합니다. 클로저는 일반적으로 다음 두 가지 주요 특징을 가집니다:

1. **외부 변수 참조**: 클로저는 자신이 생성될 때의 환경(스코프)에 있는 변수들에 접근할 수 있습니다. 이는 함수가 정의된 스코프 안에 있는 변수들을 함수가 실행될 때에도 계속해서 참조하고 사용할 수 있음을 의미합니다.

2. **스코프 보존**: 클로저는 자신이 정의될 때의 스코프를 실행 시에도 유지합니다. 따라서, 함수가 실행될 때 그 함수 내부에서 필요한 외부 변수들은 그 함수가 처음 정의될 때의 값들을 계속해서 참조할 수 있습니다.

클로저의 사용 예시로는 **`데이터 은닉`** , **`고차 함수에서의 콜백 함수`** , **`함수를 통한 상태 유지`** 등이 있습니다. 예를 들어, JavaScript에서 클로저를 사용하는 간단한 예시를 보여드리겠습니다:

```javascript
function makeCounter() {
    let count = 0; // `makeCounter` 함수 스코프 내의 지역 변수

    return function() {
        return count++; // 내부 함수(클로저)가 외부 함수의 `count` 변수를 참조
    };
}

const counter = makeCounter(); // `makeCounter` 호출 시, 내부 함수(클로저) 반환
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

위의 예시에서 `makeCounter` 함수는 내부 함수를 반환합니다. 이 내부 함수는 `makeCounter`의 지역 변수 `count`를 참조하는 클로저입니다. `makeCounter` 함수가 실행될 때마다 새로운 클로저가 생성되며, 각 클로저는 자신만의 독립적인 `count` 변수의 참조를 가지고 있습니다. 이를 통해 `counter` 함수를 호출할 때마다 `count` 값이 유지되며 순차적으로 증가하는 것을 볼 수 있습니다.

클로저는 다양한 프로그래밍 언어에서 중요한 개념으로, 함수형 프로그래밍에서 특히 강력한 도구로 사용됩니다.