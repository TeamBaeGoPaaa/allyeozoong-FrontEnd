import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DataPage.css";
import Header from "../components/header/header.jsx";
import HealthData from "../components/healthData/healthData.jsx";
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
      value: 100 - 72.45,
    },
    {
      id: "percentage",
      value: 72.45,
    },
  ];

  const frequency_1 = [
    {
      id: "remainder",
      value: 100 - 23.51,
    },
    {
      id: "percentage",
      value: 23.51,
    },
  ];

  const frequency_2 = [
    {
      id: "remainder",
      value: 100 - 82.31,
    },
    {
      id: "percentage",
      value: 82.31,
    },
  ];

  const frequency_3 = [
    {
      id: "remainder",
      value: 100 - 52.82,
    },
    {
      id: "percentage",
      value: 52.82,
    },
  ];
  //const age = ages;
  const age = [
    {
      id: 10,
      value: 52,
    },
    {
      id: 20,
      value: 78,
    },
    {
      id: 30,
      value: 8,
    },
  ];

  const age_1 = [
    {
      id: 20,
      value: 18,
    },
    {
      id: 30,
      value: 9,
    },
    {
      id: 40,
      value: 48,
    },
  ];

  const age_2 = [
    {
      id: 20,
      value: 92,
    },
    {
      id: 30,
      value: 60,
    },
    {
      id: 40,
      value: 32,
    },
    {
      id: 50,
      value: 31,
    },
    {
      id: 60,
      value: 31,
    },
  ];

  const age_3 = [
    {
      id: 30,
      value: 13,
    },
    {
      id: 40,
      value: 22,
    },
    {
      id: 50,
      value: 82,
    },
    {
      id: 60,
      value: 73,
    },
    {
      id: 70,
      value: 8,
    },
  ];

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
        <h2 className="healthData_symptom" style={{ display: "block" }}>
          대인관계 문제
        </h2>
        <div className="healthData_List" style={{ display: "flex" }}>
          {
            <HealthData
              className="healthData_ListItem"
              title="질병 위험도"
              statData={`${1}단계`}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="빈도"
              statData={`${72.4}%`}
              chartData={frequency}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="연령대"
              statData={`${20}대`}
              chartData={age}
            />
          }
        </div>
      </div>

      <div className="healthData_body">
        <h2 className="healthData_symptom" style={{ display: "block" }}>
          소화불량 및 위부통증
        </h2>
        <div className="healthData_List" style={{ display: "flex" }}>
          {
            <HealthData
              className="healthData_ListItem"
              title="질병 위험도"
              statData={`${5}단계`}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="빈도"
              statData={`${23.51}%`}
              chartData={frequency_1}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="연령대"
              statData={`${40}대`}
              chartData={age_1}
            />
          }
        </div>
      </div>

      <div className="healthData_body">
        <h2 className="healthData_symptom" style={{ display: "block" }}>
          자아존중감
        </h2>
        <div className="healthData_List" style={{ display: "flex" }}>
          {
            <HealthData
              className="healthData_ListItem"
              title="질병 위험도"
              statData={`${5}단계`}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="빈도"
              statData={`${22.31}%`}
              chartData={frequency_2}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="연령대"
              statData={`${20}대`}
              chartData={age_2}
            />
          }
        </div>
      </div>

      <div className="healthData_body">
        <h2 className="healthData_symptom" style={{ display: "block" }}>
          월경 불규칙, 체중 감소
        </h2>
        <div className="healthData_List" style={{ display: "flex" }}>
          {
            <HealthData
              className="healthData_ListItem"
              title="질병 위험도"
              statData={`${8}단계`}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="빈도"
              statData={`${52.82}%`}
              chartData={frequency_3}
            />
          }
          {
            <HealthData
              className="healthData_ListItem"
              title="연령대"
              statData={`${50}대`}
              chartData={age_3}
            />
          }
        </div>
      </div>
    </>
  );
}

export default DataPage;
