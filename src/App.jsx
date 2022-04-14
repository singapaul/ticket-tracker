import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";
import React, { useState } from "react";
import Chart from "./components/chart/Chart";
// test comment
function App() {
  // Setting the initial app state for counters
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

  // setting the state for the job role filter

  const [teamShowCard, setTeamShowCard] = useState(
    team.map((member) => {
      return {
        id: member.id,
        name: member.name,
        role: member.role,
        show: true,
      };
    })
  );

  const onToggle = (event) => {
    // need to code in how the state changes
    console.log("world hello");
    console.log(event.target);
    setTeamShowCard(
      teamShowCard.map((obj) =>
        obj.id.toString() === event.target.id ? { ...obj, show: false } : obj
      )
    );
    console.log(teamShowCard);
  };

  // function to increment a value
  const handleIncrement = (event) => {
    setTeamData(
      teamData.map((obj) =>
        obj.id.toString() === event.target.id
          ? { ...obj, counter: obj.counter + 1 }
          : obj
      )
    );
    console.log(teamData);
  };

  // function to decrement a value
  const handleDecrement = (event) => {
    setTeamData(
      teamData.map((obj) => {
        if (obj.counter > 0) {
          return obj.id.toString() === event.target.id
            ? { ...obj, counter: obj.counter - 1 }
            : obj;
        } else {
          return obj.id.toString() === event.target.id
            ? { ...obj, counter: 0 }
            : obj;
        }
      })
    );
  };

  return (
    <div className="App">
      <Nav className="App-grid__Nav" />
      <div className="App-grid">
        <Filter
          onToggle={onToggle}
          teamShowCard={teamShowCard}
          className="App-grid__Filter"
        />
        <Tickets
          className="Tickets"
          teamData={teamData}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <Chart teamData={teamData} />
      <Footer />
    </div>
  );
}

export default App;
