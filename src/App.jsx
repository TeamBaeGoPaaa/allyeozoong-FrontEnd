import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header/header.jsx";
import MainPage from "./pages/MainPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ChatPage" element={<ChatPage />} />
          {/* <Route path="/ChatBeforePage" /> */}
          {/* <Route path="/HealthDataPage" /> */}
        </Routes>
      </Router>

      {/* <ChatPage /> */}
    </>
  );
}

export default App;
