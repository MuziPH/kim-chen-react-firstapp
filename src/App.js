import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  // Create a Card Object
  const [cards, setCards] = useState([
    {
      name: "Damaris Schuster",
      title: "International Operations",
      avatar: "https://mighty.tools/mockmind-api/content/human/4.jpg",
    },
    {
      name: "Bartholome Dietrich",
      title: "Future Security Developer",
      avatar: "https://mighty.tools/mockmind-api/content/human/79.jpg"
    },
    {
      name: "Pattie Miller",
      title: "Foward Metrics Analyst",
      avatar: "https://mighty.tools/mockmind-api/content/human/129.jpg"
    }
  ]);
  // set up the logic to toggle - render on condtion
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);

  // Cleaner way of conditional rendering by using a variable in the Javascript area
  const cardsMarkup = showCard && 
    cards.map(card =>
      <Card
        avatar={card.avatar}
        name={card.name}
        title={card.title}
      />
  );
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle Show/Hide Card</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
