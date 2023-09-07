// src/actions/index.js
export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});
export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: id,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
