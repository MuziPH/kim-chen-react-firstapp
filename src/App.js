import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  // Create a Card Object - Initial state
  const [cards, setCards] = useState([
    {
      id:"246",
      name: "Damaris Schuster",
      title: "International Operations",
      avatar: "https://mighty.tools/mockmind-api/content/human/4.jpg",
    },
    {
      id:"157",
      name: "Bartholome Dietrich",
      title: "Future Security Developer",
      avatar: "https://mighty.tools/mockmind-api/content/human/79.jpg"
    },
    {
      id:"369",
      name: "Pattie Miller",
      title: "Foward Metrics Analyst",
      avatar: "https://mighty.tools/mockmind-api/content/human/129.jpg"
    }
  ]);
  // set up the logic to toggle - render on condtion
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);

  // Delete Card function
  const deleteHandler = (cardIndex) => {
    // Object refrences points to same object hence use spread not cards_copy = cards
    const cards_copy = [...cards]; // spread ensures a deep copy
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  }

  // Cleaner way of conditional rendering by using a variable in the Javascript area
  const cardsMarkup = showCard && 
    cards.map((card, cardIndex) =>
      <Card
      key={card.id}
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        onDelete={() => deleteHandler(cardIndex)}
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
