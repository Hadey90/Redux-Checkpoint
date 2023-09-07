// src/components/AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim() !== "") {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
