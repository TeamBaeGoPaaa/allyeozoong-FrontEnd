import { useState } from "react";
import { CallGPT } from "../../api/gpt.js";

// 새로고칠 때마다 GPT로 호출하면 돈이드니 더미데이터 활용해서 호출한 데이터 저장
// const dummyData = JSON.parse(
//   `{ "answer": "안녕하세요. 건강비서 알려종입니다. 고객님이 갖고 계신 건강 고민을 저한테 알려주세요!",
//   "related_symptom": "예시) 두통이 자주 있어요. 무슨 문제가 있을까요?",
//   "risk": "평소보다 심한 피로감이 있어요. 왜 그럴까요?" }`
// );
const dummyData = JSON.parse(
  `{ "title": "피부 가려움증과 발진에 대한 고민", "thumbnail": "https://source.unsplash.com/1600x900/?skin,rash", "summary": "피부에 가려움증과 발진이 있어요. 나에게 왜 이런 일이 벌어지는 걸까?", "emotional_content": "최근 피부에 가려움증과 발진이 나타나서 매우 당황스럽고 불편한 기분입니다. 왜 이런 일이 일어나는지에 대해 깊이 생각해 보았습니다. 아마도 내 몸에 무언가 문제가 있는 것 같아서 불안하고 걱정되는 기분입니다. 이런 상황에서 어떻게 대처해야 할지 막막하고 혼란스럽습니다. 그래서 이러한 감정들이 점점 커져가고 있습니다.", "emotional_result": "피부 가려움증과 발진은 신체적인 이상뿐만 아니라 정신적인 스트레스와 불안의 결과일 수 있습니다. 내부적인 감정이 외부에 반영되는 것일 수도 있습니다. 따라서 이러한 증상이 나타나는 것은 내 마음과 몸의 균형이 깨진 상태를 나타낼 수 있으며, 이를 해결하기 위해서는 내면의 감정과 신체적인 요인을 함께 고려해야 합니다.", "analysis": "피부 가려움증과 발진은 신체와 정신의 상호작용을 보여주는 사례입니다. 몸과 마음은 서로 연결되어 있으며, 불안과 스트레스와 같은 정신적인 요인이 신체적인 증상으로 나타날 수 있습니다. 이러한 상황에서는 자기 관찰과 자기 이해를 통해 내면의 감정과 스트레스 요인을 파악하고, 필요한 조치를 취해야 합니다. 마음이 편안해지면 몸도 건강해진다라는 유명한 속담이 있습니다. 이는 내면의 안정과 평화를 추구하는 것이 신체적인 건강에도 긍정적인 영향을 미칠 수 있다는 것을 의미합니다.", "action_list": ["신체적인 원인을 파악하기 위해 의사와 상담하기", "스트레스 관리 기술을 배우고 실천하기", "일상에서 피부 건강을 유지하기 위한 적절한 관리 및 습관 형성하기"] }`
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

      <div>isLoading : {isLoading ? "loading..." : "답장이 왔구나ㅏㅏ~."}</div>
    </>
  );
}

export default Chatbotgpt;
