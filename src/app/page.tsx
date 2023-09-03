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
    saveLocalTodos();
  }, [todos, status]);

  //Run once when the app starts

  useEffect(() => {
    getLocalTodos();
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

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify([todos]));
  };

  const getLocalTodos = () => {
    const todosItem = localStorage.getItem("todos");

    if (todosItem === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      try {
        const todoLocal = JSON.parse(todosItem); // We've ensured todosItem is not null by this point
        setTodos(todoLocal);
      } catch (error) {
        console.error("Error parsing todos from local storage:", error);
        // You may want to handle this error more gracefully, depending on your app's needs.
      }
    }
  };

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
