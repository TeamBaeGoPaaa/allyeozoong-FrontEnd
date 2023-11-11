import './Chatbot.css'

function PrintSend({send}) {
  const {id, text} = send;
  return (
    <>
      <li id = "chatbot_sendList">
        {text}
      </li>
    </>
  );
}

export default PrintSend;
