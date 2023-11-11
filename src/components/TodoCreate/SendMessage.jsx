import InsertMessage from "./InsertMessage";
import TodoList from "./ToDoList";
import "../Chatbot/Chatbot.css";
import { useCallback, useState, useRef } from "react";

function SendMessage() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '안녕',
        },
    ]);

    const nextId = useRef(2);
    const onInsert = useCallback ( (text) => {
        const todo = {
            id: nextId.current, 
            text,
        };
        setTodos(todos.concat(todo));
        nextId.current++;
    }, 
    [],)

    return (
        <>
            <div className = "chatbot_container">
                <InsertMessage onInsert={ onInsert } />
                <TodoList todos={ todos } />
            </div>
        </>
    );
}

export default SendMessage;