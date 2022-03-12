import React from "react";
import "./Tickets.scss";


const Tickets = ({teamData, handleIncrement, handleDecrement}) => {
  const cardsArray = teamData.map((member) => {
    return (
      <div key={member.id} className="here">
        <p>{member.name}</p>
        <p>{member.role}</p>
        <p>{member.id}</p>
        <button id={member.id} onClick={handleDecrement}>SUBTRACT</button>
        <p>{member.counter}</p>
        <button id={member.id} onClick={handleIncrement}>ADD</button>
        
        </div>
    );
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
