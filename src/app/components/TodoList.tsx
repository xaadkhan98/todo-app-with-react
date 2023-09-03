import React from "react";
import Todo from "./todo";
import { todo } from "node:test";

const TodoList = ({ todos, setTodos, filteredTodos }: any) => {
  return (
    <div className="todo-container ">
      <ul className="todo-list flex flex-col justify-center items-center">
        {filteredTodos.map((todo: any) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
