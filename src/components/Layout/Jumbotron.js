import React, { useState } from "react";
import { Container } from "reactstrap";


const Jumbotron = () => {

  const [dateTime, setDateTime] = useState(new Date());

  const updateTimestamp = () => {
    setInterval(() => {
        setDateTime(new Date());
    },1000)
  };

  return (
    <div className="mt-4 p-5 text-white rounded">
      <Container>
        <h1 className=" pb-5">Todos Manager</h1>
        <div className="text-center">
          <h4 className="datestamp">{dateTime.toString().substring(0, 15)}</h4>
          <h5 className="timestamp">
            {dateTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </h5>
          {updateTimestamp()}
          <hr />
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
