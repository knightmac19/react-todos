import React, { useState, useEffect } from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";
import TodoTable from "./components/Content/TodoTable";
import ClearAllBtn from "./components/Content/ClearAllBtn";

const App = () => {
  let localStorageArray = JSON.parse(localStorage.getItem("myTodos")) || [];

  const [todos, setTodos] = useState(localStorageArray);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  const addTodoDataHandler = (enteredTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, enteredTodo];
    });
  };

  const clearAllHandler = () => {
    setTodos([]);
    localStorage.removeItem("myTodos");
  };

  const togglePriority = (id) => {
    const updatedArray = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.priority === "Lo") {
          return { ...todo, priority: "Med" };
        }
        if (todo.priority === "Med") {
          return { ...todo, priority: "Hi" };
        }
        if (todo.priority === "Hi") {
          return { ...todo, priority: "Lo" };
        }
      }

      return todo;
    });

    setTodos(updatedArray);

    localStorage.setItem("myTodos", JSON.stringify(updatedArray));
  };

  const updateOneChecked = (id) => {
    const updatedArray = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.completed === false) {
          return { ...todo, completed: true };
        }
        if (todo.completed === true) {
          return { ...todo, completed: false };
        }
      }

      return todo;
    });

    setTodos(updatedArray);

    localStorage.setItem("myTodos", JSON.stringify(updatedArray));
  };

  const clearOneHandler = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("myTodos", JSON.stringify(filteredTodos));
  };

  return (
    <div className="content-wrap">
      <Jumbotron />

      <ClearAllBtn clearAllHandler={clearAllHandler} />

      <TodoTable
        items={todos}
        addTodoDataHandler={addTodoDataHandler}
        clearOneHandler={clearOneHandler}
        updateOneChecked={updateOneChecked}
        togglePriority={togglePriority}
      />

      <Footer />
    </div>
  );
};

export default App;
