import { CardFormat } from "../App";
import {useState} from "react";

interface Props {
  card: CardFormat;
}

const Card = ({ card }: Props) => {
  const [flip, setFlip] = useState(false);
  return (
    <div 
      className={flip ? "card flip" : "card"} 
      onClick={() => { setFlip(!flip)}}>
      <div className="card-inner">
        <div className="front">
          <h3>{card.title}</h3>
          <img className="card-img-top" src={card.image} />
        </div>
        <div className="back">
          <h3>{card.title}</h3>
          <p>Technology Used: {card.technology}</p>
          <p>Summary: {card.summary}</p>
          <p>
            GitHub link:{" "}
            <a href={card.gitHubLink} target="_blank">
              {card.gitHubTitle}
            </a>
          </p>
          <p>
            Web page link:{" "}
            <a href={card.webPageLink} target="_blank">
              {card.webPageTitle}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
