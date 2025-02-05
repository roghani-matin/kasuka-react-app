import "../FeaturesItem/fitem.css";

export default function FeaturesItem({iconName,title,text}) {
  return (
    <div className="mainFeatureItem">
      <i className={iconName}></i>
      <div className="featureItemText">
        <h2> {title} </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
