import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { workouts } from "../data/Workouts";
import './Exercise.css';

interface ApiNinjasExercise {
  name: string;
  muscle: string;
  equipments: string[];
  difficulty: string;
  instructions: string;
}

const Exercise = () => {
  const { id } = useParams<{ id: string }>();

  const [exercise, setExercise] = useState<ApiNinjasExercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const localExercise = workouts
      .flatMap((w) => w.exercises)
      .find((ex) => ex.id === id);

    if (!localExercise) {
      setError("Exercise not found");
      setLoading(false);
      return;
    }

    console.log(localExercise);

    fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=${localExercise.muscle}`,
      {
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_NINJAS_KEY as string,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data: ApiNinjasExercise[]) => {
        if (!data.length) throw new Error("No exercises returned");

        const localName = localExercise.name.toLowerCase();

        const match =
          data.find((item) => item.name.toLowerCase().includes(localName)) ||
          data.find((item) => localName.includes(item.name.toLowerCase()));

        setExercise(match ?? data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load exercise details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading exercise...</p>;
  if (error) return <p>{error}</p>;
  if (!exercise) return <p>No exercise found</p>;

  return (
    <div className="exercise-page">
    <header className="exercise-header">
      <h1 className="exercise-title">{exercise.name}</h1>

      <Link to="/" className="back-link">
        ← Back to workouts
      </Link>
    </header>

    <div className="exercise-card">
      <div className="exercise-meta">
        <p><strong>Muscle:</strong> {exercise.muscle}</p>
        <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
      </div>

      <div className="exercise-equipment">
        <h3>Equipment</h3>
        <ul>
          {exercise.equipments.length > 0 ? (
            exercise.equipments.map((item) => (
              <li key={item}>{item}</li>
            ))
          ) : (
            <li>None</li>
          )}
        </ul>
      </div>

      <div className="exercise-instructions">
        <h3>Instructions</h3>
        <p>{exercise.instructions}</p>
      </div>
    </div>
  </div>
  );
};

export default Exercise;
