
import React from "react";
import "./Tickets.scss";
// small change
const Tickets = ({ teamData, handleIncrement, handleDecrement }) => {
  const cardsArray = teamData.map((member) => {
    // function to change the color of the card based on the state value
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

    // function to change the text of the card based on the state value

    const roleFunction = () => {
      if (member.counter < 25) {
        return "role";
      } else if (member.counter >= 24 && member.counter <= 40) {
        return "Get cracking!";
      } else if (member.counter > 39) {
        return "Please submit P45";
      } else {
        return;
      }
    };

    return (
      <div key={member.id} className={colorIncrement()}>
        <p className="teamMember__name-header">name</p>
        <p className="teamMember__name">{member.name}</p>
        <p className="teamMember__role-header">{roleFunction()}</p>
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

