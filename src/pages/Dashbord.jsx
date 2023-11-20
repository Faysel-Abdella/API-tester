import { useState, useEffect } from "react";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user/exercises", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("This is the data", data.exercises);
        setExercises(data.exercises);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {exercises.map(
          (exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          )
          // console.log(exercise)
        )}
      </div>
    </>
  );
};

export default Dashboard;
