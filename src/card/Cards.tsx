import React, {useEffect, useState} from "react";
import useStyles from "./styles";


interface Card {
  id: string;
  number: number;
}

const instructions = "Click 'Add Card' to generate a new card with a randomly generated number. Click 'Sort Cards' to arrange the cards in ascending order. Each card has an 'X' button to delete it.";

const App = () => {
  const [cards, setCards] = useState<Card[]>(() => {
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleAddCard = () => {
    const newCard: Card = {
      id: Math.random().toString(36).substr(2, 9),
      number: generateRandomNumber(),
    };
    setCards([...cards, newCard]);
  };

  const handleSortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a.number - b.number);
    setCards(sortedCards);
  };

  const handleDeleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.leftPanel}>
          <div className={classes.header}>
            <button onClick={handleAddCard} className={classes.buttons}>Add Card</button>
            <button onClick={handleSortCards}  className={classes.buttons}>Sort Cards</button>
          </div>
          <div className={classes.cardContainer}>
            {cards.map((card) => (
                <div key={card.id} className={classes.card}>
                  <span>{card.number}</span>
                  <button
                      className={classes.deleteButton}
                      onClick={() => handleDeleteCard(card.id)}
                  >
                    X
                  </button>
                </div>
            ))}
          </div>
          <div className={classes.footer}>Footer</div>
        </div>
        <div className={classes.rightPanel}>
          <h2>Instructions:</h2>
          <p>{instructions}</p>
        </div>
      </div>
  );
};

export default App;
