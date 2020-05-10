import React, { useState } from 'react';
import './App.css';

import { Todo } from "./Components/Todo.model";
import TodoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const TodoListener = (text: string) => {
    setTodo(previousTodo =>[...previousTodo, {id: Math.random().toString(), name: text }]);
  };

  const TodoDelete = (id: string) => {
    setTodo(previousTodo => {
      return previousTodo.filter(todo => todo.id !== id);
    })
  }

  return (
    <div className="App">
      <NewTodo addTodo={TodoListener}/>
      <TodoList items={todo} onDeleteHandler={TodoDelete}/>
    </div>
  );
}

export default App;
