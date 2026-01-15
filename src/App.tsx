import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import { workouts } from "./data/Workouts";

function App() {
  // Render a card for each workout section

  return (
    <div className="App">
      <h1>Workout Encyclopedia</h1>

      {workouts.map((workout) => (
        <Link key={workout.id} to={`workout/${workout.id}`} style={{ textDecoration: 'none' }} className="workout-link">
          <Card id={workout.id} title={workout.title} />
        </Link>
      ))}
    </div>
  );
}

export default App;
