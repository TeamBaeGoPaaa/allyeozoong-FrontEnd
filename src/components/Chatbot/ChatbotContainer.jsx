import './Chatbot.css'
import React, { useState,  useCallback, useRef, useEffect } from "react";   //useEffect, useRef
import { CallGPT } from "../../api/gpt.js";
import { FaPaperPlane } from 'react-icons/fa';
import profile from '../../img/profile.svg';
import InsertMessage from './InsertMessage.jsx';
import MessageList from './MessageList.jsx';

const dummyData = JSON.parse(
  `{ "answer": "안녕하세요, \\n 건강비서 알려종입니다😊👨‍⚕️ \\n\\n 고객님이 갖고 계신 건강 고민을 저한테 알려주세요! \\n\\n\\n예시) 두통이 자주 있어요. 무슨 문제가 있을까요?  \\n\\n 평소보다 심한 피로감이 있어요. 왜 그런지 모르겠어요.", 
  "related_symptom": "", 
  "risk": "" }`
);

const ChatbotContainer = ({props}) => {
  const [data, setData] = useState(dummyData);          //GPT 답장 
  const [isLoading, setIsLoading] = useState(false);    //로딩 상태
  //const [userInput, setUserInput] = useState("");      //입력창
  const [ sender , setSender ] = useState([]);         //표시할 메시지를 객체로 받기

   const formattedAnswer = data.answer.replace(/\\n/g, "<br />");

//   GPT 메시지 받기 코드
//   const handleClickAPICall = async () => {
//     try {
//       setIsLoading(true); // message 가져오는 동안 로딩

//       // message로 받을 때 string이다.
//       const message = await CallGPT({
//         prompt: `${userInput}`,
//       }); // CallGPT에서 message를 리턴 받는다.
      
//       setData(JSON.parse(message)); // JSON으로 파싱을 해야 객체로 참조할 수 있다.
//       //setSentMessages([...sentMessages, userInput]);
//     } catch (error) {
//       console.error("API 호출 중 오류:", error);
//     } finally {
//       setIsLoading(false); // 가져왔으니 로딩 false
//     }
//   };


  //사용자 메시지 추가 코드
  const nextId = useRef(1);
  const onInsert = useCallback( (text) => {
    const question = {
        id: nextId.current,
        text,
    };
    setSender((sender)=>sender.concat(question));
    nextId.current++;
  }, []);

 
  console.log(sender);

  // let value;
  // sender.forEach((item, index) => {
  //   Object.keys(item).forEach(key => {
  //     value = item[key];
  //   });
  // });

  const submitText = () => {       //위험도 데이터전송
    props.propFunction(data?.risk);
  }

  return (
    <>
      <div className = "chatbot_container">
          {/* <button onClick={handleClickAPICall}>GPT API call</button> */}
          {/* <div>data : {JSON.stringify(data)}</div> */}
          {/* <div>알려종 : {data}</div> */}
        <div className = "chatbot_response">
          <img src={profile} alt="profile" />
          <div className = "response_message">
            <span id = "allyeozoong">알려종</span>
            <div className = "response_content">
              <div style={{ whiteSpace: 'pre-line' }}> {formattedAnswer}</div>
              <div> {data?.related_symptom} </div>
              <div> {data?.risk} </div>
            </div>
          </div>
        </div>       

        <div> {isLoading ? "loading..." : ""}</div>

        <div className = "sender_message">
            <InsertMessage onInsert = {onInsert} />
            <MessageList sends = {sender} />
        </div>
          
      </div>
      
    </>
  );
}

export default ChatbotContainer;
