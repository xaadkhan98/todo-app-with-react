import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Todo = ({ text, todo, todos, setTodos }: any) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el: any) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo flex  w-2/5 justify-between items-center bg-fuchsia-300 mt-4 h-12 pl-3 text-2xl">
      <li
        className={`todo-item flex-1 ${
          todo.completed ? "line-through opacity-50" : ""
        }`}
      >
        {text}
      </li>
      <button
        onClick={completeHandler}
        className="complete-btn px-3 bg-green-500 h-full"
      >
        <FaCheck />
      </button>
      <button
        onClick={deleteHandler}
        className="trash-btn px-3 bg-rose-600 h-full"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
