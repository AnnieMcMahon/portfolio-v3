import Card from "./Card";
import { CardFormat } from "../App";
import { useState } from "react";

interface Props {
  cardSet: CardFormat[];
}

const CardsSection = ({ cardSet }: Props) => {
  const [selectCard, setSelectCard] = useState(-1);
  return (
    <div id="cards-container">
      {cardSet.map((card) => (
        <Card
          card={card}
          handleClick={() => {
            setSelectCard(card.id);
          }}
          flip={selectCard === card.id ? "card flip" : "card"}
        />
      ))}
    </div>
  );
};

export default CardsSection;
