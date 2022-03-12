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
        <p className="teamMember__name-header">name</p>
        <p className="teamMember__name">{member.name}</p>
        <p className="teamMember__role-header">role</p>
        <p className="teamMember__role">{member.role}</p>
        <p className="teamMember__count-header">tickets</p>
        <div className="teamMember__counterBox">
          <button
            id={member.id}
            onClick={handleDecrement}
            className="teamMember__counterBox-button"
          >
            -
          </button>
          <div className="teamMember__counterBox-count">
            <p>{member.counter}</p>
          </div>
          <button
            id={member.id}
            onClick={handleIncrement}
            className="teamMember__counterBox-button"
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return <div className="teamContainer">{cardsArray}</div>;
};
export default Tickets;
