// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import doctor from "../../img/의사이미지.svg";
// import "../../App.css";
import "./onboarding.css";

function OnBoarding(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const loginState = props.loginState;
  const location = useLocation();

  // console.log(props);
  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    }
  }, []);

  // const notLogin = () => {
  //   alert("로그인을 해주세요!");
  // };

  const handleChatPage = () => {
    if (loginState) {
      navigate("/ChatPage", { state: { user: true } });
    } else {
      alert("로그인 후 이용가능합니다.");
    }
  };

  return (
    <>
      <div className="onboarding-background">
        <div className="text">
          <span className="topText">
            진짜 나다운 건강 관리를 위한 나만의 건강비서
          </span>
          <h1 className="serviceName">Allyeozoong</h1>
          <div className="bottomText">
            <div className="verticalLine"></div>
            <span className="onboarding_description">
              처음 겪어보는 증상인데 큰 병이면 어떡하지? 이런 고민을 남들도
              할까?
              <br />
              털어놓지 못했던, 잘 몰라서 고민이었던 나의 건강을 Allyeozoong에게
              상담해보세요.
            </span>
          </div>
          <button onClick={handleChatPage} className="btn">
            상담챗봇 바로가기
          </button>
        </div>
        <img id="image" src={doctor} alt="doctor" />
      </div>
      <div className="bar"></div>
    </>
  );
}

export default OnBoarding;
