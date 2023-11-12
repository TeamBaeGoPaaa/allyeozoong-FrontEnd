## 팀명

배고파요

## 제출 타입 및 주제

E타입 - 청년을 위한 SW 💪

## 프로젝트 한 줄 설명

남에게 말하기 힘든 성 및 건강 관련 고민을 털어 놓고, 상담 받을 수 있는 인공지능 챗봇 헬스 케어 서비스 🤖

![](https://velog.velcdn.com/images/yooonwodyd/post/3e1d300e-3e0f-461e-b8b2-781628c36fb6/image.gif)

<img width="630" alt="image" src="https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/108808701/7c3335d0-bbd1-4866-92ae-98b6a995972e">

<img width="330" alt="image" src="https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/108808701/5f17f02b-585a-47ae-8b4e-ae18e0262f2c">


## 프로젝트에 활용된 기술

## 1. 백엔드 Spring Boot , 프론트엔드 (React + Vite) 활용 
```
  백엔드는 Spring Boot Framework, 프론트엔드는 React와 Vite를 활용하여 서비스를 개발하였습니다. 유저와 환자의 일대다 매핑을 통해 값을 가져옵니다..
  로그인 기능의 보안을 강화하기 위해 Spring security 를 적용하였으며 , 프런트의 경우 Esbuild, ESM, HMR 등을 활용하여 
  서버에 구동되는 시간, 번들링 속도, 코드 갱신 속도 등 다양한 방면에서의 속도를 높여줄 수 있는 빌드툴인
  Vite를 적용하였습니다.

```

## 2. 서버 배포
### 2-1. 백엔드 서버 SSL 인증서 적용

![image](https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/108808701/67a6b67d-b8d1-4c88-a146-2a08c3afa09b)

### 2-2. 프론트엔드 서버 vercel Build & Deployment
![vercel](https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/90898067/1a9871f3-fe52-4cdf-8765-135a6828bf42)

![vercel2](https://github.com/TeamBaeGoPaaa/allyeozoong-FrontEnd/assets/90898067/a0404f8d-a0ee-44ee-8e2f-47423ad77fd4)


```
  프론트엔드는 vercel , 백엔드는 centOS 서버를 대여받아 각각 배포하여 통신하는 구조로 웹 사이트를 구성하였습니다.
  이 때 https로 배포된 프론트 서버에서 http 프로토콜을 사용하는 백엔드 서버의 API 를 호출하면 Mixed Content 에러가 발생하기에
  이를 해결하기 위해 Let's Encrpty 기관으로부터 SSL 인증서를 발급받아 적용하였습니다.
```
## 3. GPT-3.5 turbo API  Fine-Tuning
```
  GPT-3.5 를 베이스 모델로  Fine-turning을 적용하였습니다. 이를 통해 User와 고민 상담을 진행하며 * 해당 대화에서 특정 증상과 해당 증상의 정도를 측정 * 하는 것이 가능합니다.
  크롤링을 통해 모은 데이터들을 전처리후 jsonl 타입으로 변경하는 과정을 거쳤습니다. 
  추가로 데이터 처리 및 다양한 예시를 학습 시킴에 따라 파인튜닝한 모델의 Training loss를 조금식 줄였습니다.
```

### 데이터셋

<img src="https://velog.velcdn.com/images/yooonwodyd/post/8cf6f82f-0ec8-4979-8f82-a9b5d03160ff/image.png"> 

### --version 1.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/0f95e1d1-863c-49dc-8cd9-9d5bd99e9ba0/image.png)
### --version 2.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/3a8003ca-dbc2-4b3b-b4ab-b33bedef8628/image.png)
### --version 3.0 ![](https://velog.velcdn.com/images/yooonwodyd/post/fe6dc4ab-6bf4-48f5-8a0c-81377ac423fe/image.png)
3.0에서 해결 방법 제시뿐만 아니라 상담 형태의 진행이 가능해짐
## 시연 영상
