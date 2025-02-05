import "../CountIcons/cicon.css";

export default function CountIcon({iconName,countNumber,boldText,normalText}) {
  return (
    <div className="counMainContainer">
      <div className="countIconBox">
        <div className="NumberIcon">
          <i className={iconName}></i>
          <span>{countNumber} </span>
        </div>
        <p>
          <b> {boldText} </b> {normalText}
        </p>
      </div>
    </div>
  );
}
