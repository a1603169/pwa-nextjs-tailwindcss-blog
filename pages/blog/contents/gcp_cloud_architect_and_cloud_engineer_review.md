---
title: 'Google Cloud 자격증 리뷰'
subtitle: 'Cloud Architect & Cloud Engineer'
date: '2024-06-06'
tags: [GCP, Life, Cloud]
---

자격증은 자고로 길게 끌게 아니다라는 조언을 듣고 빠르게 2달정도로 준비를 했습니다.

준비한 자격증은 Associate Cloud Engineer와 Professional Cloud Architect 였습니다.

그 과정에 대해서 리뷰를 해보려고 합니다.

### 준비이유

개발자를 하면서 저는 단순하게 무언가를 구현하려고 했지 어떤 방식으로 어떻게 작동하는 지에 대한 궁금증이 없었고, 그 기반이 되는 CS과정에 대한 코스를 들어본 적이 없었습니다.

회사에서 협업 중인 다른 회사팀이 작업하던 `Azure 서버에 MySQL을 올리면서 PDO(PHP Data Objects)이 움직이지 않는 이유`를 찾아내야 했던 적이 있는데 

그 과정에서 해결 방안이 

- 가상 머신에 RAM의 스펙을 올려야 했습니다.
- PHP 버전과 OpenSSL 버전 맞지 않았습니다. 암호화 SHA-256 파라미터,  MySQL 버전 등 맞춰야 했습니다.
- 버전을 업데이트를 해주려하니 로그도 뜨지않고 그냥 안됨 -> 가상 머신을 끄고 재설정이 필요했습니다.
- etc..

SSH를 통한 가상머신을 접근... Public 키를 생성해서 등록... CACertificate.pem 등 여러가지를 배운 좋은 경험이라고 생각함과 동시에 아직 많이 부족한 부분이 많이 있구나라고 느낀 바가 있었습니다.

AWS는 회사에 이미 다루는 사람이 많고(공부한적도 있음 / 자격증 없음..) Azure는 자격증은 없지만 회사에서 프로젝트를 진행하고 있으니 다른 메이저 쪽의 자격증을 공부하고 싶다고 느꼈습니다.

멘토를 봐주시는 분께 추천을 받아서 GCP PCA를 목표로 순서대로 공부하게 되었습니다.
### 기간

`4월 12일 ~ 5월 10일` - Associate Cloud Engineer 

`5월 11일 ~ 5월 24일` - Professional Cloud Architect

생각보다 짧은 시간이긴 하지만, 길게 끌 필요가 없다고 생각해서 `두 달` 안으로 끝내보자고 마음을 먹었습니다.

오히려 처음에 GCP ACE를 공부할 때 기초적인 부분을 흝어야하기 때문에 시간이 더 많이 들었습니다.

### 공부과정

회사 다니면서 점심시간에 퇴근 후에 시간을 투자했습니다. 공부에 사용했던 건 딱 세 가지로 충분했습니다.

- `Coursera 무료 강의`
- `Dump 기출 문제집`
- `Youtube`

#### Coursera

빨리 끝내고 싶다라는 목표가 있었기 때문에 코세라를 2주 컷으로 달렸던 것 같습니다. 블로그에서 강의 들을 정리하면서 핸드폰으로 들고 다니면서 적당히 본 것 같습니다.

<span class='blogLink'>[GCP 강의 모음](https://www.coursera.org/professional-certificates/gcp-cloud-architect)</span> 이걸 보면서 정리를 했고 PCA로 만들어놓은 핸드폰을 보면서 외우고 다니기 보다는 계속 읽어보면서 개념 들을 잡는 것을 목표로 삼았습니다. (영어로 나와있지만, 한국어 강의 들도 댓글에 추가해놨으니 확인해주세요.)

강의의 내용이 방대하니 모든 것을 외우기 보단 익숙해지는 것을 목표로 잡으시면 좋을 것 같습니다.

#### Dump 기출 문제집

아마 검색하시면 <span class='blogLink'>[ExamTopics](https://www.examtopics.com)</span> 이라는 웹사이트가 나올텐데 반값으로 <span class='blogLink'>[SecExams](https://secexams.com)</span> 이라는 웹사이트가 있습니다. 참고하시면 좋을 것 같습니다.

다른 사이트가 더 싼 곳도 있을 수 있겠지만, 제가 아는 바로는 두 번째 웹사이트가 굉장히 저렴하게 느껴졌습니다. (첫번째 웹사이트가 너무 비쌌어요...)

문제 퀄리티는 믿으셔도 되고 사이트 정답이 올바르지 않기 때문에 저는 GPT와 코멘트에서 제일 like를 받은 것을 기준으로 판단해주시는게 좋습니다.

해설지 만들어 두시고, 한 삼회독 정도 돌리면 괜찮을겁니다 :)

#### Youtube

Cloud Architect에서 
<span class='blogLink'>[Case Study](https://cloud.google.com/learn/certification/guides/professional-cloud-architect)</span> 라는 문제 들이 있습니다. 그 케이스 스터디가 체감상 한 10~15문제 나오는 느낌이기 때문에 관련되서 디테일하게 분석해주었던 영상은 챙겨보았습니다.

### 끝으로

써놓고 보니 크게 팁이랄건 없지만, 크게 걱정하시면서 난이도가 이러면 어쩌지... 이건 또 뭐지... 하면서 걱정하실 필요는 없을 것 같습니다. 

기간에 대해서는 넉넉잡아서 3달이면 정말 여유롭게 통과하실 수 있으니 다들 파이팅 입니다.