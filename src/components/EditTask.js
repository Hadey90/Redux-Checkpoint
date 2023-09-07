import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../actions";
import { editTask } from "../actions"; // Import the editTask action

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // Local state to track edit mod
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleSaveClick = () => {
    // Dispatch an action to save the edited task to the Redux store
    dispatch(editTask({ ...task, description: editedDescription }));
    setIsEditing(false); // Disable edit mode
  };

  const EditTask = ({ task }) => {
    const [description, setDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEditTask = () => {
      if (description.trim() !== "") {
        dispatch(editTask({ ...task, description }));
      }
    };
    return (
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleEditTask}>Save</button>
      </div>
    );
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          >
            {task.description}
          </span>
          <button onClick={handleToggleTask}>Toggle</button>
          <button onClick={handleDeleteTask}>Delete</button>
          <button onClick={handleEditClick}>Edit</button> {/* Edit button */}
        </div>
      )}
    </div>
  );
};

export default Task;
