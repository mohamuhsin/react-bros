import React from "react";
import Card from "../UI/Card";

const BrosList = (props) => {
  return (
    <Card>
      <ul>
        {props.bros.map((bro) => (
          <li>
            (My bros name is {bro.name} and he is) ({bro.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default BrosList;
