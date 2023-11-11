import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ChatPage.css";
import Header from "../components/header/header.jsx";
import Stat from "../components/Stat/Stat";
import AgeStat from "../components/Stat/ageStat.jsx";
import Chatbotgpt from "../components/Chatbot/Chatbotgpt.jsx";

function ChatPage() {
  const [useLogin, setUserLogin] = useState();
  const location = useLocation();
  console.log(useLogin);

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setUserLogin(location.state.user);
    }
  }, []);

  const danger = [
    {
      id: "remainder",
      value: 40,
    },
    {
      id: "percentage",
      value: 60,
    },
  ];

  const data = [
    {
      id: "remainder",
      value: 20,
      age: 40,
    },
    {
      id: "percentage",
      value: 80,
      age: {
        20: 1,
        40: 4,
        30: 1,
      },
    },
  ];

  const age = [
    {
      id: "20",
      value: 4,
    },
    {
      id: "40",
      value: 1,
    },
    {
      id: "30",
      value: 2,
    },
  ];

  return (
    <>
      <div className="header">
        <Header loginState={useLogin} />
      </div>

      <div className="body">
        <div className="chatbot">
          <Chatbotgpt />
        </div>
        <div className="Card">
          <Stat
            title="질병 위험도"
            pre="해당 증상의 잠재적 위험도는 약 "
            statData={`${danger[1].value}%`}
            post=" 입니다."
            chartData={danger}
          />
          <Stat
            title="빈도"
            pre="약 "
            statData={`${data[0].value}%`}
            post=" 의 사용자가 해당 증상에 대해 질문했던 경험이 있습니다."
            chartData={data}
          />
          <Stat
            title="연령대"
            pre="해당 증상에 대한 질문은 "
            statData={`${age[0].id}대`}
            post=" 에서 가장 많았습니다."
            chartData={age}
          />
          {/* <AgeStat
            title="연령대"
            pre="해당 증상에 대한 질문은  "
            statData={`${data[1].age}대`}
            post="에서 가장 많았습니다."
          /> */}
        </div>
      </div>
    </>
  );
}

export default ChatPage;
