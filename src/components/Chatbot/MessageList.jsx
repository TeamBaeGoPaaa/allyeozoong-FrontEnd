import { createElement } from "react";
import PrintSend from "./PrintSend.jsx";
import PrintResponse from "./PrintResponse.jsx";

function MessageList({ sends, reply }) {
  //console.log(sends);
  //const { sends } = props;
  //   console.log(sends);
  //   sends.map((element) => console.log(element));

  //   createElement;
  console.log(sends, reply);

  return (
    <>
      <ul className="SendList">
        {sends.map((element) => (
          <PrintSend send={element} key={element.id} />
        ))}
        {reply.map((element) => (
          <PrintResponse response={element} key={element.id2} />
        ))}
      </ul>

      {/* <ul className="ResponseList">
                {responses.map((resp) => (
                    <PrintResponse
                        todo={todo}
                        key={todo.id}
                    />
                ))}
            </ul> */}
    </>
  );
}

export default MessageList;
