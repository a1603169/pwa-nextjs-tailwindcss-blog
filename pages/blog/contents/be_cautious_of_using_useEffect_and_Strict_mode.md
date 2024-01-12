---
title: '로컬에서 useEffect가 두 번씩 사용되는 에러(Strict mode 세팅)'
subtitle: '왜! 블로그의 댓글 기능이 왜 두 번씩 보이는건가...?'
date: '2024-01-01'
tags: ['FE', 'JavaScript', 'React', 'NextJS']
---

이번에 블로그 댓글기능을 만들어 내가 잘못된 지식에 대한 피드백을 받는 등 다양한 소통을 하고 싶었다.
라이브러리는 Utterances를 사용하였다.


### 문제 코드 

useEffect에 

```javascript
// Add Utterances comments

useEffect(() => {

const anchor = document.getElementById('comments');

// Check if the element exists in the DOM

if (anchor) {

const script = document.createElement('script');

script.src = 'https://utteranc.es/client.js';

script.setAttribute('repo', 'a1603169/seunghun_bang-portfolio'); // replace with your repo

script.setAttribute('issue-term', 'pathname');

script.setAttribute('theme', 'github-light');

script.crossOrigin = 'anonymous';

script.async = true;

anchor.appendChild(script);

}

}, []);
```

이런식으로 작용했고 의존성배열을 `[]` 로 사용하여, 처음 화면 자체가 렌더링 될 때 한 번만 실행되면 되겠다고 예상 하였지만 그렇지 못하였다.

<img class="blogImage" src="/blog/error_of_comments.png">

`로컬`에서 이런식으로 커맨트가 두 개씩 작성하는 란이 보이기 시작해서 어딘가에서 `두 번씩 렌더링`이 되고 있구나 하고 다른 useEffect들도 console을 찍어보니 `똑같이 두 번의 콘솔`을 찍고 있었다.


### 문제 원인

문제의 원인은 생각보다 단순했다.

```javascript
/** @type {import('next').NextConfig} */

const nextConfig = {

reactStrictMode: true,

}

  

module.exports = nextConfig
```

React의 Strict 모드에서 `useEffect`가 두 번씩 실행되는 것은 개발 환경에서만 발생하는 현상이라고 한다. 
Strict 모드는 개발 중에 부주의한 사이드 이펙트를 발견하고 경고하기 위해 설계되었기 때문에 이 모드에서는 마운트, 언마운트, 업데이트 주기를 두 번씩 실행하여 잠재적인 문제를 찾아낼 수 있다.

`useEffect`가 두 번 실행되는 주요 이유는 다음과 같다:

1. **부주의한 사이드 이펙트 탐지**: React는 개발 모드에서 컴포넌트의 마운트와 언마운트를 두 번씩 실행하여, 사이드 이펙트가 예상대로 작동하는지 확인한다. 이는 `useEffect` 내부에 있는 코드가 부수 효과(side effects)를 안전하게 다루고 있는지 검증하기 위함이다.
    
2. **상태 업데이트 문제 예방**: 컴포넌트의 상태가 변경될 때 예상치 못한 방식으로 렌더링되는 문제를 조기에 발견할 수 있다. `useEffect` 내에서 상태를 변경할 때, 이러한 변경이 예상대로 일어나는지 두 번 실행함으로써 검증할 수 있다.
    
3. **메모리 누수 방지**: 컴포넌트가 언마운트될 때 정리(clean-up) 작업이 제대로 이루어지는지 확인한다. 만약 `useEffect`의 반환값으로 클린업 함수를 제공했다면, 이 함수는 컴포넌트가 언마운트될 때마다 호출됩니다. Strict 모드에서는 이 과정을 두 번 테스트하여, 메모리 누수 가능성을 줄일 수 있다!
    

`개발 모드`에서만 발생하는 이 현상은 `프로덕션 빌드`에서는 나타나지 않는다. 따라서, `useEffect`가 두 번 실행되는 것을 보고 불필요하게 걱정할 필요는 없을 것이다.