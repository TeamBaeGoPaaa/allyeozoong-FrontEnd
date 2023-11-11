import './Chatbot.css'

const PrintSend = ({send}) => {

    const value = send;
    console.log(send);
  return (
    <>
      <li id = "chatbot_sendList">
        <div>
          <div id="chatbot_sendmessage">{value}</div>
        </div>
      </li>
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
