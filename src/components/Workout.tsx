import React from "react";
import { Link, useParams } from "react-router-dom";
import { workouts } from "../data/Workouts";
import "./Workout.css";

const Workout: React.FC = () => {
  const params = useParams<{ Workoutid: string }>();
  const id = params.Workoutid;

  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return <h2>Workout not found ❌</h2>;
  }

  return (
    <div className="workout-page">
      <header className="workout-header">
        <h1>{workout.title}</h1>

        <Link to="/" className="back-link">
          ← Back to workouts
        </Link>
      </header>

      <section className="exercise-section">
        <h2>Exercises</h2>

        <ul className="exercise-list">
          {workout.exercises.map((exercise) => (
            <li key={exercise.id} className="exercise-card">
              <Link to={`/exercise/${exercise.id}`} className="exercise-link">
                <span className="exercise-name">{exercise.name}</span>
                <span className="exercise-meta">
                  {exercise.sets} sets × {exercise.reps} reps
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Workout;
