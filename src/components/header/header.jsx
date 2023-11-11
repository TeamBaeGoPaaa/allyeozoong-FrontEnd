import "./header.css";
import logo from "../../img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../../pages/Login.jsx";

function Header(props) {
  const [user, setUser] = useState(false);
  const loginState = props.loginState;
  const location = useLocation();
  // console.log(props);
  useEffect(() => {
    if (location.state) {
      // console.log("여긴해ㅔ더");
      setUser(location.state.user);
    }
  }, []);

  const notLogin = () => {
    alert("로그인을 해주세요!");
  };

  return (
    <>
      <div id="header">
        <Link to="/" state={{ user: user }}>
          <img id="logo" src={logo} alt="allyeozoong logo" />
        </Link>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "header_menu_selected" : "header_menu";
          }}
          to="/"
          state={{ user: user }}
        >
          건강소식
        </NavLink>

        {loginState ? (
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header_menu_selected" : "header_menu";
            }}
            to="/ChatPage"
            state={{ user: true }}
          >
            고민상담
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header_menu" : "header_menu_selected";
            }}
            onClick={notLogin}
          >
            고민상담
          </NavLink>
        )}

        <NavLink className="header_menu">나의 건강데이터</NavLink>

        <div id="login">
          {/* {console.log(props)} */}
          {loginState ? (
            <button className="loginbutton">트루</button>
          ) : (
            <>
              <Link>
                <button className="loginbutton">회원가입</button>
              </Link>
              <Link to="/login">
                <button className="loginbutton">로그인</button>
              </Link>
            </>
          )}
        </div>
      </div>{" "}
      {/*header*/}
    </>
  );
}

export default Header;

// {loginState ? (
//   <Link to="/login">
//   <button className="loginbutton">로그인완료</button>
//   ) : (
//       <button className="loginbutton">회원가입</button>
//      <Link to="/login">
//      <button className="loginbutton">로그인</button>
//      </Link>
//     )}
