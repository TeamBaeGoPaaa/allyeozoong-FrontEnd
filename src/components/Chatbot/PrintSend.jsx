import './Chatbot.css'

function PrintSend({send}) {
  return (
    <>
      <li id = "chatbot_sendList">
        <div>
          <div id="chatbot_sendmessage">{send}</div>
        </div>
      </li>
    </>
  );
}

export default PrintSend;
