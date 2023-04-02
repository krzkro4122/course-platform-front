import "./Card.css";

interface ICardInfo {
  cardTitle: string,
  link: string,
  key: number
}

function Card({ cardTitle, link } : ICardInfo) {
  return (
    <div className="card">
      <div className="cardContainer">
        <a href={link} className="cardText">
          {cardTitle} 
        </a>
      </div>
    </div>
  );
}

export default Card;
