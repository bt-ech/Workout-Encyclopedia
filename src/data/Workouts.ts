export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  muscle: string;
}

export interface Workout {
  id: string;
  title: string;
  exercises: Exercise[];
}

export const workouts: Workout[] = [
  {
    id: "arms",
    title: "Arms Workout 💪",
    exercises: [
      { id: "bicep-curls", name: "Bicep Curls", sets: 4, reps: "10–12", muscle: "biceps" },
      { id: "hammer-curls", name: "Hammer Curls", sets: 3, reps: "10–12", muscle: "biceps" },
      { id: "concentration-curls", name: "Concentration Curls", sets: 3, reps: "12", muscle: "biceps" },
      { id: "preacher-curls", name: "Preacher Curls", sets: 3, reps: "10", muscle: "biceps" },
      { id: "cable-curls", name: "Cable Curls", sets: 3, reps: "12–15", muscle: "biceps" },

      { id: "tricep-dips", name: "Tricep Dips", sets: 4, reps: "12–15", muscle: "triceps" },
      { id: "skull-crushers", name: "Skull Crushers", sets: 3, reps: "10–12", muscle: "triceps" },
      { id: "overhead-tricep-extension", name: "Overhead Tricep Extension", sets: 3, reps: "12", muscle: "triceps" },
      { id: "tricep-pushdowns", name: "Tricep Pushdowns", sets: 3, reps: "12–15", muscle: "triceps" },
      { id: "close-grip-bench-press", name: "Close Grip Bench Press", sets: 4, reps: "8–10", muscle: "triceps" },
    ],
  },

  {
    id: "back",
    title: "Back Workout 🦾",
    exercises: [
      { id: "pull-ups", name: "Pull Ups", sets: 4, reps: "Max", muscle: "lats" },
      { id: "deadlift", name: "Deadlift", sets: 4, reps: "5–6", muscle: "lower_back" },
      { id: "lat-pulldown", name: "Lat Pulldown", sets: 3, reps: "10–12", muscle: "lats" },
      { id: "barbell-rows", name: "Barbell Rows", sets: 4, reps: "8–10", muscle: "middle_back" },
      { id: "seated-cable-rows", name: "Seated Cable Rows", sets: 3, reps: "10–12", muscle: "middle_back" },
      { id: "t-bar-rows", name: "T-Bar Rows", sets: 3, reps: "8–10", muscle: "middle_back" },
      { id: "single-arm-dumbbell-row", name: "Single Arm Dumbbell Row", sets: 3, reps: "10 each", muscle: "lats" },
      { id: "face-pulls", name: "Face Pulls", sets: 3, reps: "15", muscle: "upper_back" },
      { id: "hyperextensions", name: "Hyperextensions", sets: 3, reps: "15", muscle: "lower_back" },
      { id: "inverted-rows", name: "Inverted Rows", sets: 3, reps: "Max", muscle: "lats" },
    ],
  },

  {
    id: "chest",
    title: "Chest Workout 🏋️‍♂️",
    exercises: [
      { id: "push-ups", name: "Push Ups", sets: 4, reps: "15–20", muscle: "chest" },
      { id: "bench-press", name: "Bench Press", sets: 4, reps: "6–8", muscle: "chest" },
      { id: "incline-bench-press", name: "Incline Bench Press", sets: 3, reps: "8–10", muscle: "chest" },
      { id: "decline-bench-press", name: "Decline Bench Press", sets: 3, reps: "8–10", muscle: "chest" },
      { id: "dumbbell-chest-press", name: "Dumbbell Chest Press", sets: 3, reps: "10–12", muscle: "chest" },
      { id: "chest-flys", name: "Chest Flys", sets: 3, reps: "12–15", muscle: "chest" },
      { id: "cable-flys", name: "Cable Flys", sets: 3, reps: "12–15", muscle: "chest" },
      { id: "dips", name: "Dips", sets: 3, reps: "Max", muscle: "chest" },
      { id: "incline-dumbbell-flys", name: "Incline Dumbbell Flys", sets: 3, reps: "12", muscle: "chest" },
      { id: "machine-chest-press", name: "Machine Chest Press", sets: 3, reps: "10–12", muscle: "chest" },
    ],
  },

  {
    id: "core",
    title: "Core Workout 🎯",
    exercises: [
      { id: "plank", name: "Plank", sets: 3, reps: "60 sec", muscle: "abdominals" },
      { id: "crunches", name: "Crunches", sets: 3, reps: "20", muscle: "abdominals" },
      { id: "leg-raises", name: "Leg Raises", sets: 3, reps: "15", muscle: "abdominals" },
      { id: "russian-twists", name: "Russian Twists", sets: 3, reps: "20", muscle: "obliques" },
      { id: "bicycle-crunches", name: "Bicycle Crunches", sets: 3, reps: "20", muscle: "abdominals" },
      { id: "hanging-knee-raises", name: "Hanging Knee Raises", sets: 3, reps: "12–15", muscle: "abdominals" },
      { id: "mountain-climbers", name: "Mountain Climbers", sets: 3, reps: "30 sec", muscle: "abdominals" },
      { id: "flutter-kicks", name: "Flutter Kicks", sets: 3, reps: "30 sec", muscle: "abdominals" },
      { id: "toe-touches", name: "Toe Touches", sets: 3, reps: "15", muscle: "abdominals" },
      { id: "ab-wheel-rollouts", name: "Ab Wheel Rollouts", sets: 3, reps: "10–12", muscle: "abdominals" },
    ],
  },
  {
  id: "shoulder",
  title: "Shoulder Workout 🏹",
  exercises: [
    { id: "overhead-press", name: "Overhead Press", sets: 4, reps: "6–8", muscle: "shoulders" },
    { id: "dumbbell-shoulder-press", name: "Dumbbell Shoulder Press", sets: 3, reps: "8–10", muscle: "shoulders" },
    { id: "lateral-raises", name: "Lateral Raises", sets: 3, reps: "12–15", muscle: "shoulders" },
    { id: "front-raises", name: "Front Raises", sets: 3, reps: "12", muscle: "shoulders" },
    { id: "rear-delt-flys", name: "Rear Delt Flys", sets: 3, reps: "12–15", muscle: "shoulders" },
    { id: "arnold-press", name: "Arnold Press", sets: 3, reps: "8–10", muscle: "shoulders" },
    { id: "upright-rows", name: "Upright Rows", sets: 3, reps: "10–12", muscle: "shoulders" },
    { id: "face-pulls", name: "Face Pulls", sets: 3, reps: "15", muscle: "shoulders" },
    { id: "shrugs", name: "Shrugs", sets: 4, reps: "12–15", muscle: "traps" },
    { id: "cable-lateral-raises", name: "Cable Lateral Raises", sets: 3, reps: "12–15", muscle: "shoulders" },
  ],
},
{
  id: "legs",
  title: "Leg Workout 🦵",
  exercises: [
    { id: "squats", name: "Squats", sets: 4, reps: "6–8", muscle: "quadriceps" },
    { id: "leg-press", name: "Leg Press", sets: 3, reps: "10–12", muscle: "quadriceps" },
    { id: "lunges", name: "Lunges", sets: 3, reps: "12 each", muscle: "quadriceps" },
    { id: "romanian-deadlift", name: "Romanian Deadlift", sets: 3, reps: "8–10", muscle: "hamstrings" },
    { id: "leg-extensions", name: "Leg Extensions", sets: 3, reps: "12–15", muscle: "quadriceps" },
    { id: "leg-curls", name: "Leg Curls", sets: 3, reps: "12–15", muscle: "hamstrings" },
    { id: "calf-raises", name: "Calf Raises", sets: 4, reps: "15–20", muscle: "calves" },
    { id: "bulgarian-split-squats", name: "Bulgarian Split Squats", sets: 3, reps: "10 each", muscle: "quadriceps" },
    { id: "step-ups", name: "Step Ups", sets: 3, reps: "12 each", muscle: "quadriceps" },
    { id: "goblet-squats", name: "Goblet Squats", sets: 3, reps: "12", muscle: "quadriceps" },
  ],
},
{
  id: "calisthenics",
  title: "Calisthenics 🤸‍♂️",
  exercises: [
    { id: "push-ups", name: "Push Ups", sets: 4, reps: "20", muscle: "chest" },
    { id: "pull-ups", name: "Pull Ups", sets: 4, reps: "Max", muscle: "lats" },
    { id: "dips", name: "Dips", sets: 3, reps: "15", muscle: "triceps" },
    { id: "bodyweight-squats", name: "Bodyweight Squats", sets: 4, reps: "25", muscle: "quadriceps" },
    { id: "plank", name: "Plank", sets: 3, reps: "60 sec", muscle: "abdominals" },
    { id: "pike-push-ups", name: "Pike Push Ups", sets: 3, reps: "12", muscle: "shoulders" },
    { id: "chin-ups", name: "Chin Ups", sets: 3, reps: "Max", muscle: "biceps" },
    { id: "jump-squats", name: "Jump Squats", sets: 3, reps: "20", muscle: "quadriceps" },
    { id: "mountain-climbers", name: "Mountain Climbers", sets: 3, reps: "40 sec", muscle: "abdominals" },
    { id: "burpees", name: "Burpees", sets: 3, reps: "15", muscle: "full_body" },
  ],
},
];

