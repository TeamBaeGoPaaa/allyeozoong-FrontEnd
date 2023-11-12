import "./Chatbot.css";
import "../../pages/ChatPage.css";
import React, { useState, useCallback, useRef, useEffect } from "react"; //useEffect, useRef
import axios from "axios";
import { CallGPT } from "../../api/gpt.js";
import profile from "../../img/profile.svg";
import InsertMessage from "./InsertMessage.jsx";
import MessageList from "./MessageList.jsx";
import loading from "../../img/loading.gif";

const dummyData = JSON.parse(
  `{ "answer": "더미데이터", 
  "related_symptom": "", 
  "risk": "" }`
);

const intro = JSON.parse(
  `{ "answer": "안녕하세요, \\n 건강비서 알려종입니다😊👨‍⚕️ \\n\\n 고객님이 갖고 계신 건강 고민을 저한테 알려주세요! \\n\\n\\n예시) 두통이 자주 있어요. 무슨 문제가 있을까요?  \\n\\n 평소보다 심한 피로감이 있어요. 왜 그런지 모르겠어요.", 
  "related_symptom": "", 
  "risk": "" }`
);

const ChatbotContainer = ({
  riskFunction,
  nameFunction,
  freqFunction,
  agesFunction,
}) => {
  // const [ riskFunction, freqFunction, userFunction ] = props;
  const [data, setData] = useState(dummyData); //GPT 답장
  const [isLoading, setIsLoading] = useState(false); //로딩 상태
  //const [userInput, setUserInput] = useState("");      //입력창
  const [sender, setSender] = useState([]); //표시할 보낸메시지를 객체로 받기
  const [reply, setReply] = useState([]); //표시할 받은메시지를 객체로 받기

  const formattedAnswer = intro.answer.replace(/\\n/g, "<br />");
  // console.log(formattedAnswer);

  // GPT 메시지 받기 코드
  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true); // message 가져오는 동안 로딩

      // message로 받을 때 string이다.
      const message = await CallGPT({
        prompt: `${userInput}`,
      }); // CallGPT에서 message를 리턴 받는다.

      // content에서 증상과 위험도를 추출
      console.log(message);
      // console.log(typeof message);
      const matchResult = message.match(/증상: (.+), 위험도: (\d+)/);
      // console.log(matchResult);

      const answer = message.split("증상: ")[0];
      const related_symptom = matchResult[1];
      const risk = matchResult[2];

      const result = {
        answer: answer,
        related_symptom: related_symptom,
        risk: risk,
      };

      console.log(result);

      // console.log(matchResult);
      // const matchmessage = {answer: }

      // answer
      // Sympty
      // risk
      setData(result);

      // data.answer.replace(/\\n\g, "<br />");
      // console.log("이거나와야함 : ", JSON.parse(message));
      // console.log(JSON.parse(message).answer.replace(/\\n/g, "<br />"));
      const abcd = result.answer.replace(/\\n/g, "<br />");
      onInsert2(abcd);
    } catch (error) {
      console.error("API 호출 중 오류:", error);
    } finally {
      setIsLoading(false); //가져왔으니 로딩 false
    }
  };

  //사용자 메시지 추가 코드
  const nextId = useRef(1);
  const onInsert = useCallback((text) => {
    const question = {
      id: nextId.current,
      text,
    };
    setSender((sender) => sender.concat(question));
    nextId.current++;
    handleClickAPICall(question.text);
  }, []);

  //사용자 메시지에 대해 답장 추가 코드
  const nextId2 = useRef(1);
  const onInsert2 = useCallback((text2) => {
    const question2 = {
      id2: nextId2.current,
      text2,
    };
    setReply((reply) => reply.concat(question2));
    nextId2.current++;
    console.log("답장 : ", question2.text2);
  });

  // 이걸로 값 확인하기########################
  // console.log(sender);
  // console.log(reply);

  // let value;
  // sender.forEach((item, index) => {
  //   Object.keys(item).forEach(key => {
  //     value = item[key];
  //   });
  // });

  const submitText = async () => {
    const symptom = data?.related_symptom;
    const risk = data?.risk;
    const age = [10, 10, 10, 20, 20, 20, 30, 30, 40, 50, 60];
    const age_index = Math.floor(Math.random() * age.length);
    const user_age = age[age_index];

    console.log(symptom, risk, user_age);

    try {
      console.log("백엔드호출중");
      const response = await axios.post(
        `https://allyeozoong.o-r.kr:8080/api/getFrequencyAndAges?symptom=${symptom}&age=${user_age}&lisk=${risk}`
      ); // 여러분이 사용하고자 하는 API 엔드포인트로 대체하세요.
      console.log("백엔드호출완");
      // console.log(response);
      // console.log(response.data?.name);
      // console.log(response.data?.Frequency);
      // console.log(response.data?.ages);

      riskFunction(data?.risk);
      nameFunction(response.data?.name);
      freqFunction(response.data?.Frequency);
      agesFunction(response.data?.ages);
    } catch (error) {
      console.log(error);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const clickedFunction = (clicked) => {
    setIsClicked(clicked);
  };

  if (isClicked == true) submitText();

  return (
    <>
      <div className="chatbot_outContainer">
        <div className="chatbot_container">
          {/* <button onClick={handleClickAPICall}>GPT API call</button> */}
          {/* <div>data : {JSON.stringify(data)}</div> */}
          {/* <div>알려종 : {data}</div> */}
          <div className="chatbot_intro">
            {/* 여기 */}
            <img src={profile} alt="profile" />
            <div className="intro_message">
              <span className="GPT_name">알려종</span>
              <div className="intro_content">
                <div style={{ whiteSpace: "pre-line" }}> {formattedAnswer}</div>
              </div>
              {/* <div className="Loading"> {isLoading ? "loading..." : ""}</div> */}
              {isLoading ? (
                <img src={loading} alt="loading" className="loading-position" />
              ) : (
                ""
              )}
            </div>
            {/* 여기 */}
          </div>
          {/* chatbot_sender는 스타일 없는 그냥 div */}
          <div className="chatbot_sender">
            {/* <InsertMessage onInsert={onInsert} /> */}
            <MessageList sends={sender} reply={reply} submitText={submitText} />
            {/* {data && (
              <button
                id="showGraph"
                onClick={submitText}
                style={{ display: !isLoading ? "block" : "none" }}
              >
                그래프 보기
              </button>
            )} */}
          </div>
        </div>
        <InsertMessage onInsert={onInsert} />
      </div>
    </>
  );
};

export default ChatbotContainer;
