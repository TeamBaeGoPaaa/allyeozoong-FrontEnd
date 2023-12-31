import "./header.css";
import logo from "../../img/logo.svg";
import Profile from "../../img/profile.svg";
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
    alert("로그인 후 이용가능합니다.");
  };

  return (
    <>
      <div id="header">
        <Link to="/" state={{ user: user }}>
          <img id="header_logo" src={logo} alt="allyeozoong logo" />
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

        {loginState ? (
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header_menu_selected" : "header_menu";
            }}
            to="/DataPage"
            state={{ user: true }}
          >
            나의 건강데이터
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) => {
              return isActive ? "header_menu" : "header_menu_selected";
            }}
            onClick={notLogin}
          >
            나의 건강데이터
          </NavLink>
        )}


        {/* <NavLink className="header_menu">나의 건강데이터</NavLink> */}

        <div id="login">
          {/* {console.log(props)} */}
          {loginState ? (
            <>
              <img id="logo" src={Profile} alt="profile logo" />
              <p className="profile"><strong>김공주</strong> 님</p>
            </>
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
