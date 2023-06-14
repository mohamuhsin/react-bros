import React from "react";
import Card from "../UI/Card";
import classes from "./BrosList.module.css";

const BrosList = (props) => {
  return (
    <Card className={classes.bros}>
      <ul>
        {props.brathe.map((bro) => (
          <li>
            (My bros name is {bro.name} and he is) ({bro.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default BrosList;
