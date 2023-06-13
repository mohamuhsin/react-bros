import React from "react";

const AddBros = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add Bro</button>
    </form>
  );
};
export default AddBros;
