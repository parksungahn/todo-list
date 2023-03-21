import {useRef, useState} from "react";

const TodoForm = ({addNewTodoItem}) => {

    const [content, setContent] = useState('');
    const inputRef = useRef();   //--부모창의 input 컨트롤에 접근하기위해

    const handleOnClickCreateButton = () => {

        if(content.trim()==='')return;

        addNewTodoItem(content.trim());

        setContent('');         //값초기화

        inputRef.current.focus();   // 커서이동

    };
    const handleOnKeyDown = (e) => {
        if (e?.key === "Enter")
        {
            if(content.trim()==='')return;

            addNewTodoItem(content.trim());

            setContent('');         //값초기화

            inputRef.current.focus();   // 커서이동
        }
    };
    return (
        <div>
            <input ref={inputRef} value={content} onKeyDown={handleOnKeyDown} onChange={e => setContent(e?.target?.value)}/>
            <button onClick={handleOnClickCreateButton}>Create</button>
        </div>
    );
};

export default TodoForm
