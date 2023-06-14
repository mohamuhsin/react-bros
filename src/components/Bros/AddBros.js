import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddBros = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add Bro</Button>
      </form>
    </Card>
  );
};
export default AddBros;
