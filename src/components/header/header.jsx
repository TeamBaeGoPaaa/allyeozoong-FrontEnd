import "./header.css";
import logo from "../../img/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="header">
        <Link to="/">
          <img id="logo" src={logo} alt="allyeozoong logo" />
        </Link>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "header_menu_selected" : "header_menu";
          }}
          to="/"
        >
          건강소식
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "header_menu_selected" : "header_menu";
          }}
          to="/ChatPage"
        >
          고민상담
        </NavLink>

        <NavLink className="header_menu">나의 건강데이터</NavLink>

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
