import React from "react"; 

interface TodoListType { 
    items: {id: string, name: string}[];
    onDeleteHandler(id: string): void;
}

const TodoList: React.FC<TodoListType> = (props) => {
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.name}</span>
                    <button onClick={props.onDeleteHandler.bind(null, todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
