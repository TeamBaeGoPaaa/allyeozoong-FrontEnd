import { createElement } from "react";
import PrintResponse from "./PrintResponse";

function ResponseList({ responses }) {

    //console.log(sends);
    //const { sends } = props;
    console.log(responses);
    responses.map((element) => (
        console.log(element)
    ))

    createElement
    return (
        <>
            <ul className="ResponseList">
                {responses.map((resp) => (
                    <PrintResponse
                        response={resp}
                        key={resp.id}
                    />
                ))}
            </ul>
      </>
    );
  }

  export default ResponseList;