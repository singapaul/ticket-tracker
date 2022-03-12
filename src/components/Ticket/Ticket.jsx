import React from "react";
import { useState } from "react";

const Ticket = ({ teamMember }) => {
  // for Demo purpose in real use use the value below commented out
  const [counter, setCounter] = useState(Math.floor(Math.random() * 20));
  // const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    if (counter < 1) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const colorIncrement = () => {
    if (counter >= 0 && counter <= 5) {
      return "teamMember green";
    } else if (counter >= 6 && counter <= 15) {
      return "teamMember yellow";
    } else if (counter >= 16) {
      return "teamMember red";
    } else {
      return "teamMember red";
    }
  };



  const warning = () => {
    if (counter <25) {
      return teamMember.role
    } else if (counter >= 24 && counter <=40) {
      return "Get cracking!";
    } else if (counter > 39) {
      return "Please submit P45";
    } else {
      return 
    }
  };

  return (
    // <h1>Placeholder</h1>
    <div
      className={colorIncrement()}
      // className={counter > 5 ? "teamMember green" : "teamMember"}
      key={teamMember.id}
    >
      <p className="teamMember__name-header">name</p>
      <p className="teamMember__name">{teamMember.name}</p>
      <p className="teamMember__role-header">role</p>
      <p className="teamMember__role">{warning()}</p>
      <p className="teamMember__count-header">tickets</p>
      <div className="teamMember__counterBox">
        <button
          onClick={handleDecrement}
          className="teamMember__counterBox-button"
        >
          -
        </button>
        <div className="teamMember__counterBox-count">
          <p>{counter}</p>
        </div>
        <button
          onClick={handleIncrement}
          className="teamMember__counterBox-button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Ticket;
