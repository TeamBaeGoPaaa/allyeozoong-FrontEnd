import { createElement } from "react";
import PrintSend from "./PrintSend";

function MessageList({ sends }) {
  //console.log(sends);
  //const { sends } = props;
  //   console.log(sends);
  sends.map((element) => console.log(element));

  //   createElement;

  return (
    <>
      <ul className="SendList">
        {sends.map((element) => (
          <PrintSend send={element} key={element.id} />
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
