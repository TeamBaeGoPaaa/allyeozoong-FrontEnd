import "./Chatbotgpt.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { CallGPT } from "../../api/gpt.js";
import profile from "../../img/profile.svg";
import axios from "axios";

// 새로고칠 때마다 GPT로 호출하면 돈이드니 더미데이터 활용해서 호출한 데이터 저장
// const dummyData = JSON.parse(
//   `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요!",
//   "related_symptom": "예시) 두통이 자주 있어요. 무슨 문제가 있을까요?",
//   "risk": "평소보다 심한 피로감이 있어요. 왜 그럴까요?" }`
// );
const dummyData = JSON.parse(
  `{ "answer": "안녕하세요, \\n 건강비서 알려종입니다. \\n\\n 고객님이 갖고 계신 건강 고민을 저한테 알려주세요! \\n\\n\\n예시) 두통이 자주 있어요. 무슨 문제가 있을까요?  \\n\\n 평소보다 심한 피로감이 있어요. 왜 그럴까요?", 
  "related_symptom": "", 
  "risk": "" }`
);

function Chatbotgpt(props) {
  const [data, setData] = useState(dummyData); //데이터 기본 값에 더비데이터 넣는다.
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const formattedAnswer = data.answer.replace(/\\n/g, "<br />");

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true); // message 가져오는 동안 로딩

      // message로 받을 때 string이다.
      const message = await CallGPT({
        prompt: `${userInput}`,
      }); // CallGPT에서 message를 리턴 받는다.
      setData(JSON.parse(message)); // JSON으로 파싱을 해야 객체로 참조할 수 있다.
    } catch (error) {
      console.error("API 호출 중 오류:", error);
    } finally {
      setIsLoading(false); // 가져왔으니 로딩 false
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    //console.log(">> userInput", userInput);
    if (userInput.trim() === "") {
      return;
    }

    const newChat = { type: "user", content: userInput };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newChat]);

    setUserInput("");
  };

  useEffect(() => {
    setChatHistory([]);
  }, []);

  const submitText = async () => {
    props.propFunction(data?.risk * 10);

    const symptom = data?.related_symptom;
    const risk = data?.risk;
    // console.log("지피티 호출 완료");
    console.log(symptom, risk);
    try {
      console.log("백엔드호출중");
      const response = await axios.post(
        `https://allyeozoong.o-r.kr:8080/api/getFrequencyAndAges?symptom=${symptom}&age=10&lisk=${risk}`,
        {
          id: "user",
        }
      ); // 여러분이 사용하고자 하는 API 엔드포인트로 대체하세요.
      console.log("백엔드호출완");
      // const responseData = await response.json();
      console.log(response);

      const backend_response_Frequency = response.data.Frequency;
      const backend_response_ages = response.data.ages; //얘는 배열
      const backend_response_name = response.data.name;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="chatbot_container">
        {/* <button onClick={handleClickAPICall}>GPT API call</button> */}
        {/* <div>data : {JSON.stringify(data)}</div> */}
        {/* <div>알려종 : {data}</div> */}
        <div className="chatbot_response">
          <img src={profile} alt="profile" />
          <div className="response_message">
            <span id="allyeozoong">알려종</span>
            <div className="response_content">
              <div style={{ whiteSpace: "pre-line" }}> {formattedAnswer}</div>
              {/* <div> {data?.related_symptom} </div> */}
              {/* <div> {data?.risk} </div> */}
            </div>

            {data && (
              <button
                id="showGraph"
                onClick={submitText}
                style={{ display: !isLoading ? "block" : "none" }}
              >
                그래프 보기
              </button>
            )}
          </div>
        </div>

        <div> {isLoading ? "loading..." : ""}</div>

        {/* <div id = "chatbot_sendmessage"> */}

        <div id="chatbot_sendmessage">
          {/* chatHistory를 매핑하여 각 메시지를 별도의 상자에 표시합니다. */}
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-box ${chat.type}`}>
              {chat.content}
            </div>
          ))}
        </div>

        <div id="chatbot_inputArea">
          <textarea onChange={handleUserInput} value={userInput}></textarea>
          <button
            onClick={() => {
              handleSubmit();
              handleClickAPICall();
              console.log("dddd");
            }}
          >
            전송
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbotgpt;
