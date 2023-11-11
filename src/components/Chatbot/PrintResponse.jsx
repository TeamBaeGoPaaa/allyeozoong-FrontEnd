import './Chatbot.css'
import { useState } from "react";
import React, { useEffect } from 'react';
import { CallGPT } from "../../api/gpt.js";
import profile from '../../img/profile.svg'


// 새로고칠 때마다 GPT로 호출하면 돈이드니 더미데이터 활용해서 호출한 데이터 저장
// const dummyData = JSON.parse(
//   `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요!",
//   "related_symptom": "예시) 두통이 자주 있어요. 무슨 문제가 있을까요?",
//   "risk": "평소보다 심한 피로감이 있어요. 왜 그럴까요?" }`
// )

function PrintResponse({send}) {
  return (
    <>
      <li id = "chatbot_sendList">
        <div>
          <div id="chatbot_sendmessage">{send}</div>
        </div>
      </li>
    </>
  );
}

export default PrintResponse;