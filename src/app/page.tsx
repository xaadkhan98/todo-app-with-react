"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function Home() {
  // State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<any>([]);

  //Use effect function
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);

  //Run once when the app starts

  useEffect(() => {
    // getLocalTodos();
  }, []);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo: any) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo: any) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage[`getItem("todos")`]);
  //     setTodos(todoLocal);
  //   }
  // };

  return (
    <section className="min-w-max min-h-screen  bg-gradient-to-r from-purple-500 to-pink-500">
      <header className="flex items-center justify-center text-4xl py-10 font-bold ">
        Saad Khan's Todo List
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </section>
  );
}
