import React, { useRef } from "react"; 

interface TodoProp {
    addTodo(text: string): void;
}

const NewTodo: React.FC<TodoProp> = (props) => { 
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoListHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const todo = textInputRef.current!.value;
        props.addTodo(todo);
    }

    return (
        <form onSubmit={todoListHandler}> 
            <div> 
                <label htmlFor="todo-text">Todo Work</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
        </form>
    );
};

export default NewTodo;