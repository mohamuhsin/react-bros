import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddBros.module.css";

const AddBros = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addBroHandler = (event) => {
    if (enteredName.trim().length === 0 || enteredAge.trim.length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    event.preventDefault();
    setEnteredAge("");
    setEnteredName("");
    props.onAddBros(enteredName, enteredAge);
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addBroHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageHandler}
        />
        <Button type="submit">Add Bro</Button>
      </form>
    </Card>
  );
};
export default AddBros;
