---
title: 'GCP Cloud Engineer - 19'
subtitle: 'Google Cloud Fundamentals: Core Infrastructure - Prompt Engineering'
date: '2024-04-14'
tags: [Cloud, GCP]
---

### Prompt Engineering


- ㅇ **Generative AI**: A `subset(하위집합) of AI` capable of `creating text, images`, and `other data` using `generative models`, often `in response to prompts`. It has become significantly popular since 2021.

- ㅇ **Large Language Models (LLMs)**: `Sophisticated AI models` trained on `extensive datasets` capable of `generating human-like text or images`. They are specifically designed to process and generate language-based outputs.

- ㅇ **Prompt Engineering**: The practice of `crafting specific instructions` or `questions` to elicit(이끌리다) the `desired response from AI models`, particularly `LLMs`.

- ㅇ **Application of Generative AI in Google Cloud**: Illustrated through the scenario of `Sasha`, a cloud architect who uses generative AI to create prototype designs for network architectures, leveraging tools like `Gemini` within Google Cloud.

- ㅇ **Training of LLMs**: Involves `pre-training on a large dataset` to `understand language patterns` and `fine-tuning on a specific dataset` for `detailed tasks.`

- ㅇ **Challenges with LLMs**: Includes issues like `hallucinations`, where the `model generates incorrect or nonsensical responses` due to `training limitations` or `lack of context`.

- ㅇ **Prompt Categories**: Includes `zero-shot`, `one-shot`, `few-shot`, and `role prompts`, each providing `different levels of context and examples` to aid the `model's response accuracy`.

- ㅇ **Best Practices in Prompt Engineering**: `Emphasizes` the importance of `detailed, clear, and concise instructions`, `defining boundaries`, and `adopting a persona` to enhance the `relevancy and accuracy of responses` from AI models.

### 프롬프트 엔지니어링

- ㅇ **생성적 AI**: 프롬프트에 응답하여 텍스트, 이미지 및 기타 데이터를 생성할 수 있는 생성 모델을 사용하는 인공 지능의 하위 집합입니다. 2021년 이후 크게 인기를 끌고 있습니다.

- ㅇ **대규모 언어 모델 (LLMs)**: 방대한 데이터 세트에 대해 훈련된 정교한 AI 모델로, 인간과 유사한 텍스트 또는 이미지를 생성할 수 있습니다. 특히 언어 기반 출력을 처리하고 생성하도록 설계되었습니다.

- ㅇ **프롬프트 엔지니어링**: 특히 LLM과 같은 AI 모델로부터 원하는 반응을 유도하기 위해 특정 지시사항이나 질문을 만드는 실습입니다.

- ㅇ **구글 클라우드에서의 생성적 AI 응용**: 네트워크 아키텍처의 프로토타입 디자인을 생성하기 위해 생성적 AI를 사용하는 클라우드 아키텍트인 Sasha의 시나리오를 통해 설명됩니다.

- ㅇ **LLM의 훈련**: 대규모 데이터 세트에서 사전 훈련을 통해 언어 패턴을 이해하고 특정 데이터 세트에서 세부 작업을 위해 미세 조정하는 과정을 포함합니다.

- ㅇ **LLM의 도전 과제**: 훈련 제한이나 맥락 부족으로 인해 모델이 잘못되거나 무의미한 반응을 생성하는 환각과 같은 문제를 포함합니다.

- ㅇ **프롬프트 카테고리**: 맥락과 예시의 다른 수준을 제공하여 모델의 반응 정확도를 돕는 제로샷, 원샷, 퓨샷 및 롤 프롬프트를 포함합니다.

- ㅇ **프롬프트 엔지니어링의 모범 사례**: AI 모델에서 응답의 관련성과 정확성을 향상시키기 위해 자세하고 명확하며 간결한 지침의 중요성, 경계 정의 및 페르소나 채택을 강조합니다.

--------

### 모르는 단어

#### Hallucination

"Hallucinations"는 일반적으로 사람이 실제로 존재하지 않는 것을 느끼는 경험을 의미합니다. 이는 보기, 듣기, 느끼기, 맛보기, 냄새 맡기 등 다양한 감각을 통해 발생할 수 있습니다.

AI와 관련하여 "hallucinations"는 때때로 AI 시스템이 데이터에서 패턴을 잘못 해석하거나, 존재하지 않는 패턴을 "보는" 현상을 설명하는 데 사용됩니다. 예를 들어, 이미지 인식 시스템이 없는 객체를 "보거나", 자연어 처리 시스템이 문맥에서 벗어난 단어나 구를 "이해하는" 경우 등이 있습니다.

이러한 "hallucinations"는 AI 시스템의 오류를 일으키거나, 시스템의 성능을 저하시키는 원인이 될 수 있습니다. 따라서 AI 모델을 훈련하고 검증할 때 이러한 현상을 주의 깊게 관찰하고, 필요한 경우 모델을 수정하거나 데이터를 추가로 제공하여 이를 방지하려는 노력이 필요합니다.