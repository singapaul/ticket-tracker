import React from "react";
import "./Tickets.scss";

const Tickets = ({ teamArray }) => {
  // make a team object
  const cardsArray = teamArray.map((teamMember) => {
    return (
      <div className="teamMember" key={teamMember.id}>
        <p className="teamMember__name-header">name</p>
        <p className="teamMember__name">{teamMember.name}</p>
        <p className="teamMember__role-header">role</p>
        <p className="teamMember__role">{teamMember.role}</p>
        <p className="teamMember__count-header">tickets</p>
        <div className="teamMember__counterBox">
          <button className="teamMember__counterBox-button">-</button>
          <div className="teamMember__counterBox-count">
            <p>67</p>
          </div>
          <button className="teamMember__counterBox-button">+</button>
        </div>
      </div>
    );
  });
  return <div className="teamContainer">{cardsArray}</div>;
};

export default Tickets;
