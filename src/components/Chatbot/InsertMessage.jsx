import './Chatbot.css'
import React, { useState,  useCallback } from "react";   //useEffect
import { FaPaperPlane } from 'react-icons/fa';

function InsertMessage({onInsert}) {   //콜백함수를 props로 받아오기!
  const [ value , setValue ] = useState('');
// const handleUserInput = (e) => {
  //   setUserInput(e.target.value);
  // };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const onChange = useCallback( e => {
  //   setValue(e.target.value);
  // }, [])

 

  const onSubmit = useCallback(e => {
    if (value.trim() === ""){   //아무것도 입력 안 하면 리턴
      return;
    }

    onInsert(value);            //Container에서 넘겨준 onInsert함수에 입력받은 value를 넣어줌.
                                //onInsert는 콜백함수이기 때문에 여기서 value값이 바뀌면 자동으로 
                                //Container에서 onInsert가 호출되면서 거기 새로운 객체가 추가됨!!
    setValue('');               //입력창 초기화
    e.preventDefault();        //자동새로고침방지
    
  }, [onInsert, value]);

  //console.log(typeof(value));


  // //입력창에서 입력값 받기
  // const handleUserInput = (e) => {
  //   setUserInput(e.target.value);
  // };

  // //전송
  // const handleSubmit = () => {
  //   if (userInput.trim() === ""){
  //     return; //아무것도 입력 안 하고 전송 누르면 리턴
  //   }
  //   setUserInput("");  //전송 후 입력창 초기화
  // };

  return (
    <>  
        <form id="chatbot_inputArea" onSubmit = {onSubmit}>
            <textarea onChange={onChange}
                value={value} 
                placeholder = "알려종에게 물어보세요!">
            </textarea>
            <button type="submit" onClick={onSubmit}> <FaPaperPlane /> </button>
        </form>
    </>
  );
}

export default InsertMessage;
