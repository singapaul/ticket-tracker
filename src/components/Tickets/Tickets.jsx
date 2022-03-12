import React from "react";
import "./Tickets.scss";


const Tickets = ({teamData, handleIncrement, handleDecrement}) => {
  const cardsArray = teamData.map((member) => {
    console.log(member.name)
    console.log(member.id)
    console.log(member.counter);

    
  

    return (
      <div key={member.id} className="here">
        <p>{member.name}</p>
        <p>{member.role}</p>
        <p>{member.id}</p>
        <button id={member.id} onClick={handleDecrement}>-</button>
        <p>{member.counter}</p>
        <button id={member.id} onClick={handleIncrement}>+</button>
        
        </div>
    );
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
