---
title: '비동기란 - 2 (Async/Await)'
subtitle: 'Async & Await에 대한 이해'
date: '2024-03-15'
tags: [JavaScript, General, CS]
---


### Async/Await 걔념

`Async/Await`는 JavaScript에서 비동기 프로그래밍을 더 간결하고 이해하기 쉽게 만드는 문법입니다. 이는 Promise를 기반으로 하며, 비동기 코드를 마치 동기 코드처럼 작성할 수 있게 해줍니다.

- **`Async`** : async 키워드는 함수 앞에 사용됩니다. async 함수는 항상 Promise를 반환합니다. 만약 async 함수가 값을 반환하면, 이 값은 `Promise가 이행된 값으로 감싸집니다`. async 함수 내에서 발생한 예외는 거부된 `Promise를 반환`합니다.
  
- **`Await`** : await 키워드는 `async 함수 내에서만 사용`됩니다. await는 `Promise가 이행되거나 거부될 때까지 함수의 실행을 일시 중지`합니다. Promise가 이행되면, await는 이행된 값을 반환합니다. Promise가 거부되면, await는 예외를 발생시킵니다.

Async/Await는 비동기 코드를 동기적인 방식으로 작성할 수 있게 해주므로, 코드의 가독성을 향상시키고 비동기 로직을 더 쉽게 이해하고 디버그할 수 있게 합니다.


### 예시 코드

```javascript
async function fetchUser() {
  // Wait for response
  let response = await fetch('https://api.github.com/users/johndoe');
  let user = await response.json();
  return user;
}

fetchUser().then(alert); // User object

// Real world Example
async function fetchGitHubUser(username) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.error(`GitHub 사용자 정보를 가져오는 데 실패했습니다: ${error}`);
  }
}

fetchGitHubUser('octocat');
```