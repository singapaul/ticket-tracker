import React from "react";
import "./Tickets.scss";
import { useState } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({teamArray}) => {
  const cardsArray = teamArray.map((teamMember) => {
    return (
      <Ticket/>
    );
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
