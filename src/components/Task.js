// src/components/Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask, setFilter } from "../actions";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editTask({ ...task, description: editedDescription }));
    setIsEditing(false);
  };

  return (
    <div className={`task-card ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>
            <i className="fas fa-save"></i> {/* Save icon */}
          </button>
        </div>
      ) : (
        <div>
          <span className="description">{task.description}</span>
          <div>
            <button onClick={handleToggleTask}>
              <i
                className={`fas ${
                  task.isDone ? "fa-check-circle" : "fa-circle"
                }`}
              ></i>{" "}
              {/* Toggle icon */}
            </button>
            <button onClick={handleDeleteTask}>
              <i className="fas fa-trash-alt"></i> {/* Delete icon */}
            </button>
            <button onClick={handleEditClick}>
              <i className="fas fa-edit"></i> {/* Edit icon */}
            </button>
          </div>
          <div>
            <label>Filter:</label>
            <select
              value={task.filter}
              onChange={(e) => dispatch(setFilter(e.target.value))}
            >
              <option value="all">All</option>
              <option value="done">Done</option>
              <option value="not-done">Not Done</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
