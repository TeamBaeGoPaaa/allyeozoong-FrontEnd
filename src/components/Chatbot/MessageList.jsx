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

  // 두 배열을 번갈아가며 합치기
  const combinedArray = [];
  for (let i = 0; i < Math.max(sends.length, reply.length); i++) {
    if (i < sends.length) {
      combinedArray.push({ type: "send", data: sends[i] });
    }
    if (i < reply.length) {
      combinedArray.push({ type: "response", data: reply[i] });
    }
  }

  // 합쳐진 배열 렌더링
  const result = combinedArray.map((item, index) => {
    if (item.type === "send") {
      return <PrintSend send={item.data} key={index} />;
    } else if (item.type === "response") {
      return <PrintResponse response={item.data} key={index} />;
    }
    return null;
  });

  return (
    <>
      <ul className="SendList">
        {result}

        {/* {sends.map((element) => (
          <PrintSend send={element} key={element.id} />
        ))}

        {reply.map((element) => (
          <PrintResponse response={element} key={element.id2} />
        ))} */}
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
