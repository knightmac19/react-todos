import React, { useState, useEffect } from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";
import TodoTable from "./components/Content/TodoTable";
import ClearAllBtn from "./components/Content/ClearAllBtn";
import NewModal from "./components/Content/NewModal";
// import InputForm from "./components/Content/InputForm";

const App = () => {
  let localStorageArray = JSON.parse(localStorage.getItem("myTodos")) || [];

  const [todos, setTodos] = useState(localStorageArray);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  const addTodoDataHandler = (enteredTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, enteredTodo];
    });

    handleClose();
  };

  const clearAllHandler = () => {
    setTodos([]);
    localStorage.removeItem("myTodos");
  };

  const togglePriority = (id) => {
    const updatedArray = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.priority === "Low") {
          return { ...todo, priority: "Medium" };
        }
        if (todo.priority === "Medium") {
          return { ...todo, priority: "High" };
        }
        if (todo.priority === "High") {
          return { ...todo, priority: "Low" };
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

  const handleClose = () => {
    setShow(false);
  };

  const openModalHandler = () => {
    setShow(true);
  };

  return (
    <div className="content-wrap">
      <Jumbotron />

      <ClearAllBtn clearAllHandler={clearAllHandler} />
      <NewModal
        show={show}
        handleClose={handleClose}
        addTodoDataHandler={addTodoDataHandler}
      />
      {/* <InputForm /> */}
      <TodoTable
        items={todos}

        addTodoDataHandler={addTodoDataHandler}
        
        openModalHandler={openModalHandler}
        clearOneHandler={clearOneHandler}
        updateOneChecked={updateOneChecked}
        togglePriority={togglePriority}
      />

      <Footer />
    </div>
  );
};

export default App;
