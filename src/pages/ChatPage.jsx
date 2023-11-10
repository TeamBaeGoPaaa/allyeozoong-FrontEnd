import { useState } from "react";
import "./ChatPage.css";
import Header from "../components/header/header.jsx";
import Stat from "../components/Stat/Stat";
import AgeStat from "../components/Stat/ageStat.jsx";
import Chatbotgpt from "../components/Chatbot/Chatbotgpt.jsx";

function ChatPage() {

  const [data, setData] = useState(0);
  const highFunction = (dangerData) => {
    setData(dangerData);
  };

  const danger = [
    {
      id: "remainder",
      value: 100-data,
    },
    {
      id: "percentage",
      value: data,
    },
  ];

  const frequency = [
    {
      id: "remainder",
      value: 20,
    },
    {
      id: "percentage",
      value: 80,
    },
  ];

  const age = [
    {
      id: "20",
      value: 3,
    },
    {
      id: "40",
      value: 8,
    },
    {
      id: "30",
      value: 2,
    },
  ];

  let temp = 0;
  let maxAge = "";
  for(let i in age){
    if (temp < age[i].value) {
      temp = age[i].value;
      maxAge = age[i].id; 
    }
  }


  return (
    <>
      
      <div className="header">
        <Header />
      </div>

      <div className="body">
        <div className="chatbot">
          <Chatbotgpt propFunction={highFunction} />
        </div>
        <div className="Card">
          <Stat
            title="질병 위험도"
            pre="해당 증상의 잠재적 위험도는 약 "
            statData={`${data}%`}
            post=" 입니다."
            chartData={danger}
          />
          <Stat
            title="빈도"
            pre="약 "
            statData={`${frequency[0].value}%`}
            post=" 의 사용자가 해당 증상에 대해 질문했던 경험이 있습니다."
            chartData={frequency}
          />
          <AgeStat
            title="연령대"
            pre="해당 증상에 대한 질문은 "
            statData={`${maxAge}대`}
            post=" 에서 가장 많았습니다."
            chartData={age}
          />

        </div>
      </div>
    </>
  );
}

export default ChatPage;
