# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## 팀명

배고파요

## 제출 타입 및 주제

E타입 - 청년을 위한 SW 💪

## 프로젝트 한 줄 설명

남에게 말하기 힘든 성 및 건강 관련 고민을 털어 놓고, 상담 받을 수 있는 챗봇 헬스 케어 서비스 🤖

## 프로젝트에 활용된 기술

## 1. 
```
```

## 2. 백엔드 서버 SSL 인증서 적용

![image](https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/108808701/67a6b67d-b8d1-4c88-a146-2a08c3afa09b)

```
  프론트엔드는 vercel , 백엔드는 centOS 서버를 대여받아 각각 배포하여 통신하는 구조로 웹 사이트를 구성하였습니다.
  이 때 https로 배포된 프론트 서버에서 http 프로토콜을 사용하는 백엔드 서버의 API 를 호출하면 Mixed Content 에러가 발생하기에
  이를 해결하기 위해 무료 인증서 사이트인 Let's Encrpty에서  SSL 인증서를 발급받아 적용하여 프론트와의 통신을 원할하게 조정해주었습니다. 
```
## 3. GPT-3.5 turbo API  Fine-Tuning
```
openAI 에서 제공하는 GPT-3.5 API를 적용하여 User의 고민을 상담해주는 챗봇을 구현하였습니다.
이때 단순히 API 적용하기만 하는 방식이 아니라, 보다 자연스럽고 서비스 기획 목적에 적합한 답변을 이끌어내기 위해
Fine-turning 을 적용하였습니다. 크롤링을 통해 만든 jsonl 데이터셋으로 GPT 모델을 훈련시키고 파라미터 값들을 조정하며 loss 값을 줄였습니다. 
```

### --version 1.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/0f95e1d1-863c-49dc-8cd9-9d5bd99e9ba0/image.png) 
### --version 2.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/3a8003ca-dbc2-4b3b-b4ab-b33bedef8628/image.png)
### --version 3.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/fe6dc4ab-6bf4-48f5-8a0c-81377ac423fe/image.png)
--version 3.0에서 사용자와의 대화에서 보다 정밀한 위험도 측정이 가능해짐.
## 시연 영상
