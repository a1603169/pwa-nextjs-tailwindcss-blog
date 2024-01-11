---
title: 'Vercel Analytics를 적용해보기'
subtitle: 'Google Analytics VS Vercel Analytics'
date: '2024-01-11'
tags: [general, BE, Deploy]
---

### 차이점 Google Analytics VS Vercel Analytics

**`Vercel Analytics`**는 다음과 같은 특징으로 알려져 있습니다:

- **실시간 데이터:** 웹사이트의 성능에 대한 즉각적인 통찰을 제공하여 실시간 캠페인이나 이벤트를 모니터링하는 데 유용합니다.
- **서버리스 아키텍처:** Vercel의 서버리스 플랫폼의 일부로, 서버리스 인프라와 원활하게 통합됩니다.
- **개발자 친화적:** 개발자의 요구에 맞춘 커스텀 이벤트 추적과 API 접근과 같은 기능을 포함합니다.
- **데이터 소유권 및 프라이버시:** 사용자는 자신의 데이터를 완전히 통제할 수 있으며 Vercel은 제3자와 데이터를 공유하지 않습니다.
- **사용자 인터페이스:** 간단하고 직관적으로 설계되어 탐색과 이해가 쉽습니다.
- **첫 번째 파티 분석:** 프라이버시 친화적인 접근 방식을 사용하여 사용자를 식별하며, 쿠키 추적이나 제3자 스크립트가 필요하지 않습니다.
- **커스텀 이벤트 추적:** Pro 및 Enterprise 사용자를 위해 특정 조치들을 추적할 수 있습니다.

**`Google Analytics`**는 다음과 같은 특징을 갖고 있습니다:

- **널리 사용됨:** 다양한 산업 분야에서 신뢰받는 가장 널리 사용되는 웹 분석 플랫폼입니다.
- **구글 제품과의 통합:** 구글 애즈 및 구글 서치 콘솔과 같은 다른 구글 서비스와의 원활한 통합을 제공합니다.
- **고급 보고:** 맞춤 보고서 및 데이터 시각화를 포함한 광범위한 보고 옵션을 제공하여 더 깊은 통찰력을 제공합니다.
- **거의 실시간 분석:** 거의 실시간 데이터를 제공하지만 Vercel Analytics에 비해 약간의 지연이 있을 수 있습니다.
- **개발자 도구:** Google Analytics도 개발자를 위한 도구를 제공하지만 Vercel의 제공하는 것만큼 전문적이지는 않을 수 있습니다.
- **복잡한 인터페이스:** 포괄적인 기능 세트로 인해 초보자에게는 인터페이스가 압도적일 수 있습니다.

요약하자면, Vercel Analytics와 Google Analytics 중 어느 것을 선택할지는 특정한 요구 사항에 따라 달라집니다:

- 실시간 데이터가 필요하고, 개발자 친화적인 기능을 중시하며, 데이터 프라이버시에 대한 우려가 있는 경우 Vercel Analytics가 더 적합할 수 있습니다.
- 널리 사용되는 플랫폼을 찾고 있으며 고급 보고 기능과 다른 구글 제품과의 강력한 통합을 원하는 경우 Google Analytics가 더 나은 선택일 수 있습니다.

------------
### 배포해보기 

[vercel](https://vercel.com)에서 본인의 `배포된 프로젝트`로 들어가, `Analytics`를 클릭합니다.
그리고 Analytics를 `활성화` 해주면 간단하게 적용됩니다.

터미널에서

```bash
npm install @vercel/analytics
pnpm add @vercel/analytics
yarn add @vercel/analytics
```

다운로드 후,

본인의 App.tsx 혹은 최상위 컴포넌트에

```javascript
import "@/styles/reset.css";

import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from "next/app";

import WebLayout from "@/components/WebLayout";

import Head from "next/head";

  

export default function App({ Component, pageProps }: AppProps) {

  

return (

<>

<Head>....</Head>

<WebLayout>

<Component {...pageProps} className="relative" />

<Analytics />

</WebLayout>

</>

);
}
```

이런식으로 넣어주기만 하면


### 결과

<img class="blogImage" src="/blog/deploy_vercel_1.png">

<img class="blogImage" src="/blog/deploy_vercel_2.png">


이렇게 분석할 수 있는 간단한 그래프를 볼 수 있습니다.

