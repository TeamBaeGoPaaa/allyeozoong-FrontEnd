import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ChatPage.css";
import Header from "../components/header/header.jsx";
import Stat from "../components/Stat/Stat.jsx";
import ChatbotContainer from "../components/Chatbot/ChatbotContainer.jsx";
// import SendMessage from "../components/TodoCreate/SendMessage.jsx";

function ChatPage() {
  const [useLogin, setUserLogin] = useState();
  const location = useLocation();
  // console.log(useLogin);

  useEffect(() => {
    if (location.state) {
      // console.log(location.state);
      setUserLogin(location.state.user);
    }
  }, []);

  const [data, setData] = useState(0);
  const [name, setName] = useState();
  const [freq, setFreq] = useState(0);
  const [ages, setAges] = useState([]);

  const riskFunction = (dangerData) => {
    setData(dangerData);
    console.log(data);
  };

  const nameFunction = (nameData) => {
    setName(nameData);
    console.log(name);
  };

  const freqFunction = (freqData) => {
    setFreq(freqData);
    console.log(freq);
  };

  const agesFunction = (agesData) => {
    setAges(agesData);
    console.log(ages);
  };

  const danger = [
    {
      id: "remainder",
      value: 100 - data,
    },
    {
      id: "percentage",
      value: data,
    },
  ];

  const frequency = [
    {
      id: "remainder",
      value: 100 - freq,
    },
    {
      id: "percentage",
      value: freq,
    },
  ];

  const age = ages;

  let temp = 0;
  let maxAge = "";
  for (let i in age) {
    if (temp < age[i].value) {
      temp = age[i].value;
      maxAge = age[i].id;
    }
  }

  return (
    <>
      <div className="header">
        <Header loginState={useLogin} />
      </div>

      <div className="body">
        <div className="chatbot-board">
          {/* <SendMessage /> */}
          {/* <ChatbotContainer /> */}
          <ChatbotContainer
            riskFunction={riskFunction}
            nameFunction={nameFunction}
            freqFunction={freqFunction}
            agesFunction={agesFunction}
          />
          {/* <Chatbotgpt propFunction={highFunction} /> */}
        </div>

        {name && (
          <div className="Card">
            <Stat
              title="질병 위험도"
              pre="해당 증상의 잠재적 위험도는 약 "
              statData={`${data}단계`}
              post=" 입니다."
              chartData={danger}
            />
            <Stat
              title="빈도"
              pre="약 "
              statData={`${freq}%`}
              post=" 의 사용자가 해당 증상에 대해 질문했던 경험이 있습니다."
              chartData={frequency}
            />
            <Stat
              title="연령대"
              pre="해당 증상에 대한 질문은 "
              statData={`${maxAge}대`}
              post=" 에서 가장 많았습니다."
              chartData={age}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ChatPage;
