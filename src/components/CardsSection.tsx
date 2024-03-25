import Card from "./Card";
import { CardFormat } from "../App";

interface Props {
  cardSet: CardFormat[];
}

const CardsSection = ({ cardSet }: Props) => {
  return (
    <div id="cards-container">
      {cardSet.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default CardsSection;
