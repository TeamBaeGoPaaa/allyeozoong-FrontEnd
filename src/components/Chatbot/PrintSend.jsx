import './Chatbot.css'

function PrintSend({send}) {
  const {id, text} = send;
  return (
    <>
      <li id = "chatbot_sendList">
        <div>
          <div id="chatbot_sendmessage">{text}</div>
        </div>
      </li>
    </>
  );
}

export default PrintSend;
