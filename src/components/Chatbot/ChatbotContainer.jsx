import './Chatbot.css'
import React, { useState,  useCallback, useRef, useEffect } from "react";   //useEffect, useRef
import axios from "axios";
import { CallGPT } from "../../api/gpt.js";
import profile from '../../img/profile.svg';
import InsertMessage from './InsertMessage.jsx';
import MessageList from './MessageList.jsx';

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

const ChatbotContainer = ({ riskFunction, frequFunction, useFunction }) => {
  // const [ riskFunction, freqFunction, userFunction ] = props;
  const [data, setData] = useState(dummyData); //GPT 답장
  const [isLoading, setIsLoading] = useState(false); //로딩 상태
  //const [userInput, setUserInput] = useState("");      //입력창
  const [ sender , setSender ] = useState([]);         //표시할 보낸메시지를 객체로 받기
  const [ reply, setReply ] = useState([]);            //표시할 받은메시지를 객체로 받기

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
      
      setData(JSON.parse(message));

      // data.answer.replace(/\\n\g, "<br />");
      // console.log("이거나와야함 : ", JSON.parse(message));
      // console.log(JSON.parse(message).answer.replace(/\\n/g, "<br />"));
      const abcd = JSON.parse(message).answer.replace(/\\n/g, "<br />");
      onInsert2(abcd);
    } catch(error) {
      console.error("API 호출 중 오류:", error);
    } finally {
      setIsLoading(false);  //가져왔으니 로딩 false
    }
  };

  //사용자 메시지 추가 코드
  const nextId = useRef(1);
  const onInsert = useCallback( (text) => {
    const question = {
        id: nextId.current,
        text,
    };
    setSender((sender)=>sender.concat(question));
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

  const submitText = () => {
    //위험도 데이터전송
    // props.propFunction(data?.risk);
    // props.propFunction(data?.risk * 10);

    const symptom = data?.related_symptom;
    const risk = data?.risk;
    //console.log("지피티 호출 완료");
    console.log(symptom, risk);

    //백엔드 데이터 받은 거 보고 넣기
    riskFunction(data?.risk);
    frequFunction(data?.related_symptom);  //임시
    userFunction(data?.risk);

    // try {
    //   console.log("백엔드호출중");
    //   const response = await axios.post(
    //     `https://allyeozoong.o-r.kr:8080/api/getFrequencyAndAges?symptom=${symptom}&age=10&lisk=${risk}`,
    //     {
    //       id: "user",
    //     }
    //   ); // 여러분이 사용하고자 하는 API 엔드포인트로 대체하세요.
    //   console.log("백엔드호출완");
    //   // const responseData = await response.json();
    //   console.log(response);

    //   // const backend_response_Frequency = response.data.Frequency;
    //   // const backend_response_ages = response.data.ages; //얘는 배열
    //   // const backend_response_name = response.data.name;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className = "chatbot_container">
          {/* <button onClick={handleClickAPICall}>GPT API call</button> */}
          {/* <div>data : {JSON.stringify(data)}</div> */}
          {/* <div>알려종 : {data}</div> */}
        <div className = "chatbot_intro">
          {/* 여기 */}
          <img src={profile} alt="profile" />
          <div className = "intro_message">
            <span className = "GPT_name">알려종</span>
            <div className = "intro_content">
              <div style={{ whiteSpace: 'pre-line' }}> {formattedAnswer}</div>
            </div>
            <div className = "Loading"> {isLoading ? "loading..." : ""}</div>
          </div>
          {/* 여기 */}
        </div>       

        {/* chatbot_sender는 스타일 없는 그냥 div */}
        <div className = "chatbot_sender">
            <InsertMessage onInsert = {onInsert} />
            <MessageList sends = {sender} reply = {reply} />
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
   </>
  );
};

export default ChatbotContainer;
