import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";
import React, { useState } from "react";

function App() {
  // Setting the initial app state
  const [teamData, setTeamData] = useState(
    team.map((member) => {
      return {
        id: member.id,
        name: member.name,
        role: member.role,
        counter: 0,
      };
    })
  );

  // function to increment a value
  const handleIncrement = (event) => {
    console.log(event.target);
    setTeamData(
      teamData.map((obj) =>
        obj.id == event.target.id ? { ...obj, counter: obj.counter + 1 } : obj
      )
    );
    console.log(teamData);
  };

  // function to decrement a value
  const handleDecrement = (event) => {
    setTeamData(
      teamData.map((obj) => {
        if (obj.counter > 0) {
          return obj.id == event.target.id
            ? { ...obj, counter: obj.counter - 1 }
            : obj;
        } else {
          return obj.id == event.target.id ? { ...obj, counter: 0 } : obj;
        }
      })
    );
  };

  // // copy and paste are please don't implement anything below this

  // const warning = () => {
  //   if (counter <25) {
  //     return teamMember.role
  //   } else if (counter >= 24 && counter <=40) {
  //     return "Get cracking!";
  //   } else if (counter > 39) {
  //     return "Please submit P45";
  //   } else {
  //     return
  //   }
  // };

  // copy and paste are please don't implement anything above this

  // copy and paste are please don't implement anything above this

  console.log(teamData);

  return (
    <div className="App">
      <Nav className="App-grid__Nav" />
      <div className="App-grid">
        <Filter className="App-grid__Filter" />
        <Tickets
          className="Tickets"
          ident={teamData.id}
          teamData={teamData}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
