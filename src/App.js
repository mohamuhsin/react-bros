import AddBros from "./components/Bros/AddBros";
import BrosList from "./components/Bros/BrosList";

function App() {
  const AddBrosHandler = () => {};
  return (
    <div>
      <AddBros onAddBro={AddBrosHandler} />
      <BrosList bros={[]} />
    </div>
  );
}

export default App;
