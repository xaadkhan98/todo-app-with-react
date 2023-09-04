"use client";

import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }: any) => {
  //Here I can write Javascript code and Function

  const inputTextHandler = (e: any) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };
  return (
    <form className=" flex justify-center items-center text-2xl w-auto border-none">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input p-1 border-none outline-none"
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button text-5xl mx-1 "
        type="submit"
      >
        <FaPlusSquare />
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo border-none outline-none w-auto cursor-pointer text-xl"
          onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
