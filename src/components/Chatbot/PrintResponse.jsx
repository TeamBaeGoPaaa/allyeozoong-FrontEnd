import "./Chatbot.css";
// import { useState } from "react";
import React, { useEffect } from "react";
// import { CallGPT } from "../../api/gpt.js";
import profile from "../../img/profile.svg";

// 새로고칠 때마다 GPT로 호출하면 돈이드니 더미데이터 활용해서 호출한 데이터 저장
// const dummyData = JSON.parse(
//   `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요!",
//   "related_symptom": "예시) 두통이 자주 있어요. 무슨 문제가 있을까요?",
//   "risk": "평소보다 심한 피로감이 있어요. 왜 그럴까요?" }`
// )

function PrintResponse({ response, submitText }) {
  const { id2, text2 } = response;

  function finallyClicked(clicked) {
      if(clicked === true) isClicked(true);
      else isClicked(false);
  }


  return (
    <>
      {/* <li id="chatbot_responseList_demo1">{text2}</li> */}

      <div className="chatbot_response">
        <img src={profile} alt="profile" />
        <div className="response_message">
          <span className="GPT_name">알려종</span>
          {/* <div className="response_content_demo2"> */}
          <li
            className="chatbot_responseList"
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            {text2}
          </li>
          {/* </div> */}
          {/* {data && ( */}
          <button
            className="showGraph"
            onClick={submitText}
            // style={{ display: !isLoading ? "block" : "none" }}
          >
            그래프 보기
          </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default PrintResponse;
