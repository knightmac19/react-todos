import React, { useState, useEffect } from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";
import TodoTable from "./components/Content/TodoTable";
import ClearAllBtn from "./components/Content/ClearAllBtn";
import NewModal from "./components/Content/NewModal";

// import { Button } from "react-bootstrap";

// const DUMMY_DATA = [
//   {
//     id: Math.random().toString(),
//     text: "organize office",
//     completed: false,
//     priority: "green",
//   },
//   {
//     id: Math.random().toString(),
//     text: "pickup milk",
//     completed: false,
//     priority: "yellow",
//   },
//   {
//     id: Math.random().toString(),
//     text: "go to gym",
//     completed: false,
//     priority: "red",
//   },
//   {
//     id: Math.random().toString(),
//     text: "cook dinner",
//     completed: true,
//     priority: "yellow",
//   },
// ];

const App = () => {
  let localStorageArray = JSON.parse(localStorage.getItem("myTodos")) || [];

  // const [todos, setTodos] = useState(DUMMY_DATA);
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

  const clearOneHandler = (id) => {
    // console.log('supercalifragilisticexpialidoscis')
    // console.log(id)
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

      <TodoTable
        items={todos}
        openModalHandler={openModalHandler}
        clearOneHandler={clearOneHandler}
      />

      <Footer />
    </div>
  );
};

export default App;
