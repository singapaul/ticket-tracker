import React from "react";
import { useState } from "react";

const Ticket = ({
  teamMember,
  counter,
  setCounter,
  handleDecrement,
  handleIncrement,
  colorIncrement,
  teamCopy,
}) => {
  const warning = () => {
    if (counter < 25) {
      return teamMember.role;
    } else if (counter >= 24 && counter <= 40) {
      return "Get cracking!";
    } else if (counter > 39) {
      return "Please submit P45";
    } else {
      return;
    }
  };

  // get value of team copy
  console.log("we logging");
  console.log(teamCopy.id);

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
