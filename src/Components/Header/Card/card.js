import "../Card/card.css";

export default function Card({icon , text}) {
  return (
    <div className="cardContainer">
      <div className="card">
        <i class={icon}></i>
        <h3>
          <a href="https://www.google.com">{text}</a>
        </h3>
      </div>
    </div>
  );
}
