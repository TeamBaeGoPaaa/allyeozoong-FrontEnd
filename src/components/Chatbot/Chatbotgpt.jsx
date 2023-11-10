import { useState } from "react";
import { CallGPT } from "../../api/gpt.js";

// 새로고칠 때마다 GPT로 호출하면 돈이드니 더미데이터 활용해서 호출한 데이터 저장
// const dummyData = JSON.parse(
//   `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요!",
//   "related_symptom": "예시) 두통이 자주 있어요. 무슨 문제가 있을까요?",
//   "risk": "평소보다 심한 피로감이 있어요. 왜 그럴까요?" }`
// );
const dummyData = JSON.parse(
  `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요! 예시) 두통이 자주 있어요. 무슨 문제가 있을까요?평소보다 심한 피로감이 있어요. 왜 그럴까요?", 
  "related_symptom": "", 
  "risk": "" }`
);

function Chatbotgpt() {
  const [data, setData] = useState(dummyData); //데이터 기본 값에 더비데이터 넣는다.
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true); // message 가져오는 동안 로딩

      // message로 받을 때 string이다.
      const message = await CallGPT({
        prompt: `${userInput}`,
      }); // CallGPT에서 message를 리턴 받는다.
      setData(JSON.parse(message)); // JSON으로 파싱을 해야 객체로 참조할 수 있다.
    } catch (error) {
    } finally {
      setIsLoading(false); // 가져왔으니 로딩 false
    }
  };

  const handleSubmit = () => {
    console.log(">> userInput", userInput);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // console.log(">>data", data);

  return (
    <>
      <textarea onChange={handleUserInput} value={userInput}></textarea>
      <button onClick={handleSubmit}>당신이 무엇을 입력했는지 보여주마</button>

      <button onClick={handleClickAPICall}>GPT API call</button>
      {/* <div>data : {JSON.stringify(data)}</div> */}
      {/* <div>알려종 : {data}</div> */}
      <div> {data?.answer}</div>
      <div> 관련 증상 : {data?.related_symptom} </div>
      <div> {data?.risk} </div>

      <div>isLoading : {isLoading ? "loading..." : "카톡왔다."}</div>
    </>
  );
}

export default Chatbotgpt;
