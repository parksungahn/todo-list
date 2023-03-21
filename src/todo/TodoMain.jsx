import {useState} from "react";
import {styled} from "@stitches/react";
import TodoForm from "./TodoForm";
import {v4 as uuid} from "uuid";

//--stitches 스타일 정의
const TodoMainWrapper = styled('div', {
    padding: 50,
});

const TodoMain = () => {

    // const [todos, setTodos] = useState([
    //     {id: 'test1', content: 'todo item1', isDone: false, createdAt: new Date()},
    //     {id: 'test2', content: 'todo item2', isDone: false, createdAt: new Date()},
    //     {id: 'test3', content: 'todo item3', isDone: false, createdAt: new Date()},
    //     {id: 'test4', content: 'todo item4', isDone: false, createdAt: new Date()},
    // ]);


    const [todos, setTodos] = useState([]);

    // const addNewTodoItem = (content) => {
    //     return setTodos(
    //         (prevState) => {
    //             return [{id: uuid(), content: content, isDone: false, createdAt: new Date()} , ...prevState];
    //         }
    //     );
    // };

    const addNewTodoItem = (content) => {
         setTodos(
            (prevState) => [
                 {id: 'test1', content: 'todo item1', isDone: false, createdAt: new Date()} , ...prevState,]
            )};

    return (
        <TodoMainWrapper>

            <TodoForm addNewTodoItem = {addNewTodoItem} />

            <div>
                <span>Todo List</span>
            </div>

            {
                todos.map(
                    it => (
                        <div key={it.id}>
                            <input type={"checkbox"}/>
                            <span>{it.content}</span>
                            <button>Delete</button>
                        </div>
                    )
                )
            }
        </TodoMainWrapper>
    );
};

export default TodoMain;
