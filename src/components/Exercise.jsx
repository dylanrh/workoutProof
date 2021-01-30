import React, { useState } from "react";

function Exercise() {
  // workout name
  let [workout, setWorkout] = useState("");
  // workout img
  let [picture, setPicture] = useState("");
  // number of reps for the exercise set
  let [reps, setReps] = useState(0);
  // workout description
  let [description, setDescription] = useState("");
  // next - functianality - page reload with new content
  return (
    <div>
      <h1 className="workout-name">{workout}</h1>
      {/* <img className="picture" alt={workout}>
        {picture}
      </img> */}
      <p className="description">{description}</p>
      <h3 className="number-of-reps">{reps}</h3>
      <button
        className="next"
        onClick={() => setWorkout((workout = "Burpees")) + setReps((reps = 25))}
      >
        NEXT
      </button>
    </div>
  );
}

export default Exercise;
