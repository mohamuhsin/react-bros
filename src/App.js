import React, { useState } from "react";
import AddBros from "./components/Bros/AddBros";
import BrosList from "./components/Bros/BrosList";

function App() {
  const [brosList, setBrosList] = useState();

  const AddBrosHandler = (brosName, brosAge) => {
    setBrosList((prevBro) => {
      return [...prevBro, { name: brosName, age: brosAge }];
    });
  };
  return (
    <div>
      <AddBros onAddBro={AddBrosHandler} />
      <BrosList bros={brosList} />
    </div>
  );
}

export default App;
