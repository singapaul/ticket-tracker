import React from "react";
import "./Tickets.scss";
import { useState } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ teamArray, teamMember, counter, setCounter, handleDecrement, handleIncrement, colorIncrement, warning }) => {
  const cardsArray = teamArray.map((teamMember) => {
   return <Ticket teamMember={teamMember} counter={counter} setCounter={setCounter} handleDecrement={handleDecrement} handleIncrement={handleIncrement} colorIncrement={colorIncrement} warning={warning} />;
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
