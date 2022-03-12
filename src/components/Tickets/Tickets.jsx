import React from "react";
import "./Tickets.scss";

const Tickets = ({ teamData, handleIncrement, handleDecrement }) => {
  const cardsArray = teamData.map((member) => {
    console.log(member.name);
    console.log(member.id);
    console.log(member.counter);

    const colorIncrement = () => {
      if (member.counter >= 0 && member.counter <= 5) {
        return "teamMember green";
      } else if (member.counter >= 6 && member.counter <= 15) {
        return "teamMember yellow";
      } else if (member.counter >= 16) {
        return "teamMember red";
      } else {
        return "teamMember red";
      }
    };

    return (
      <div key={member.id} className={colorIncrement()}>
        <p>{member.name}</p>
        <p>{member.role}</p>
        <p>{member.id}</p>
        <button id={member.id} onClick={handleDecrement}>
          -
        </button>
        <p>{member.counter}</p>
        <button id={member.id} onClick={handleIncrement}>
          +
        </button>
      </div>
    );
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
