"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const Home = () => {
  // States Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use effect function
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Run once when the app starts

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

  return (
    <section className="min-w-max min-h-screen  bg-gradient-to-r from-purple-500 to-pink-500">
      <header className="flex items-center justify-center text-4xl py-10 font-bold ">
        <h1>Saad Khan&apos; Todo List</h1>
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
};

export default Home;
