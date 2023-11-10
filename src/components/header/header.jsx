import "./header.css";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const handleMainPage = () => {
    navigate("/");
  };

  const handleChatPage = () => {
    navigate("/ChatPage");
  };

  const { selected, menu1, menu2 } = props;

  return (
    <>
      <div id="header">
        <img
          onClick={handleMainPage}
          id="logo"
          src={logo}
          alt="allyeozoong logo"
        />

        <button onClick={handleMainPage} id="selected" className="header_menu">
          {selected}
        </button>
        <button onClick={handleChatPage} className="header_menu">
          {menu1}
        </button>
        <button className="header_menu">{menu2}</button>

        <div id="login">
          <button className="loginbutton">회원가입</button>
          <button className="loginbutton">로그인</button>
        </div>
      </div>{" "}
      {/*header*/}
    </>
  );
}

export default Header;
