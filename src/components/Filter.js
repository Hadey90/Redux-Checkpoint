// src/components/Filter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../actions";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>Filter Tasks: </label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
      </select>
    </div>
  );
};

export default Filter;
