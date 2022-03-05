import React from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";
import TodoTable from "./components/Content/TodoTable";
import ClearAllBtn from "./components/Content/ClearAllBtn";

import { Container, Row, Col, Button } from "reactstrap";

const App = () => {
  const DUMMY_DATA = [
    { id: Math.random().toString(), text: "organize office", completed: false },
    { id: Math.random().toString(), text: "pickup milk", completed: false },
    { id: Math.random().toString(), text: "go to gym", completed: false },
    { id: Math.random().toString(), text: "cook dinner", completed: false },
  ];
  // console.log(DUMMY_DATA);
  // todos
  // write jsx in app for table
  // write jsx in app for table header
  // write jsx in app for each item
  // split previous 3 into their own components
  // map over the dummy data to create some elements

  return (
    <div className="content-wrap">
      <Jumbotron />
      
      <ClearAllBtn />
      
      <TodoTable />
      

      <Footer />
    </div>
  );
};

export default App;
