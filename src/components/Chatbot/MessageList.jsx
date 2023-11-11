import PrintSend from "./PrintSend";

function MessageList({ sends }) {

    console.log(sends);
    //const { sends } = props;

    return (
        <>
            <ul className="SendList">
                <PrintSend send={sends}  />
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