import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  // Function to handle "name" state
  const [name, setName] = useState("Muzi Phage");
  const changeNameHandler = (name) => {
    setName(name);
  };

  // set up the logic to toggle - render on condtion
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);

  // Handle value from the input element and add as input to the setName(set State)
  const changeInputHandler = (event) => setName(event.target.value);
  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );
  // Cleaner way of conditional rendering by using a variable in the Javascript area
  const cardMarkup = showCard && (
    <Card
      avatar="https://avatars.githubusercontent.com/u/387560"
      name={name}
      title="Product Infrastructure Liaison"
      onChangeName={() => changeNameHandler("Liyanda Inner Mpanza")}
      onChangeInput={changeInputHandler}
    >
      {buttonsMarkup}
    </Card>
  );
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle Show/Hide Card</button>
      {cardMarkup}
    </div>
  );
}

export default App;
