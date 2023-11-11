import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // const [loginState, setUserLogin] = useState(false);
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
  const id = "admin";
  const password = "12345";
  const navigate = useNavigate();

  const handleUserId = (e) => {
    // console.log(e.target.value);
    setUserId(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleCheck = () => {
    if (userId == id && userPassword == password) {
      // alert("맞다");
      navigate("/", { state: { user: true } });
    } else {
      alert(
        "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <h2 className="active"> Log In </h2>
          {/* <h2 className="inactive underlineHover">Sign Up </h2> */}

          {/* <!-- Icon --> */}
          <div className="fadeIn first">
            <img src={Logo} id="icon" alt="User Icon" />
          </div>

          {/* <!-- Login Form --> */}

          <input
            type="text"
            // id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            onChange={handleUserId}
          />
          <input
            type="password"
            //id="mypassword"
            className="fadeIn third"
            name="login"
            placeholder="password"
            onChange={handleUserPassword}
          />

          {/* <Link to="/" state={{ user: true }}> */}
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={handleCheck}
          />
          {/* </Link> */}

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <Link to="/" state={{ user: false }}>
              <p className="underlineHover" href="#">
                Home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
