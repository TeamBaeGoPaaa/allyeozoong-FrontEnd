import "./Chatbot.css";

function PrintSend({ send }) {
  const { id, text } = send;
  return (
    <>
      <li id="chatbot_sendList">{text}</li>
      {/* {send.map((item) => (
        <li id="chatbot_sendList">
          <div>
            <div id="chatbot_sendmessage">{item.value}</div>
          </div>
        </li>
      ))} */}
    </>
  );
}

export default PrintSend;
