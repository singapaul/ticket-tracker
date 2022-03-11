import React from "react";
import { useState } from "react";

const Ticket = ({}) => {


//   const warning = () => {
//     if (counter < 25) {
//       return teamMember.role;
//     } else if (counter >= 24 && counter <= 40) {
//       return "Get cracking!";
//     } else if (counter > 39) {
//       return "Please submit P45";
//     } else {
//       return;
//     }
//   };


  return (
    // <h1>Placeholder</h1>
    <div
      className={"hello"}
    // In here we need to pass the class of the card we are assigingin/the ID 
      // key={teamMember.id}
    >
      <p className="teamMember__name-header"></p>
      <p className="teamMember__name"></p>
      <p className="teamMember__role-header"></p>
      <p className="teamMember__role"></p>
      <p className="teamMember__count-header"></p>
      <div className="teamMember__counterBox">
        <button
          onClick={console.log("hello")}
          className= "teamMember__counterBox-button" 
        >-</button>
        <div className="teamMember__counterBox-count">
          <p></p>
        </div>
        <button
          onClick={console.log("hello")}
          className="teamMember__counterBox-button"
        >+</button>
      </div>
    </div>
  );
};

export default Ticket;
