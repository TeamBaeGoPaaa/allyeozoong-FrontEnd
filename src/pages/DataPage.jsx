import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DataPage.css";
import Header from "../components/header/header.jsx";
import HealthData from "../components/healthData/healthData.jsx"
//import Stat from "../components/Stat/Stat.jsx";
//import ChatbotContainer from "../components/Chatbot/ChatbotContainer.jsx";
// import SendMessage from "../components/TodoCreate/SendMessage.jsx";

function DataPage() {
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

  const symptom = "소화불량 및 가려움증";

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
      value: 100 - 56.87,
    },
    {
      id: "percentage",
      value: 56.87,
    },
  ];

  //const age = ages;
  const age = [
    {
        id: 20,
        value: 4,
    },
    {
        id: 30,
        value: 2,
    },
    {
        id: 40,
        value: 8
    },
]

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

      <div className="healthData_body">
      <h2 className = "healthData_symptom" style={{display: 'block'}}>{symptom}</h2>
        <div className = "healthData_List" style={{display: 'flex'}}>
            {<HealthData className="healthData_ListItem"
              title="질병 위험도"
              statData={`${data}단계`}
              chartData={danger}
            />}
            {<HealthData className="healthData_ListItem"
              title="빈도"
              statData={`${freq}%`}
              chartData={frequency}
            />}
            {<HealthData className="healthData_ListItem"
              title="연령대"
              statData={`${maxAge}대`}
              chartData={age}
            />}
        </div>
      </div>
    </>
  );
}

export default DataPage;
