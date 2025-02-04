import "../Features/features.css";
import FeaturesItem from "./FeaturesItem/fitem";

export default function Features() {
  const featureInformation = [
    { id: 1, title: "تبلیغ سختی است" , text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",iconName: "fa-regular fa-clone"},
    {id: 2,title: "کدام یک از اینهاست",text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",iconName: "fa-solid fa-receipt"},
    {id: 3,title: "کدام یک از اینهاست",text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",iconName: "fa-solid fa-cube"},
    {id: 4,title: "یا کور شده است",text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",iconName: "fa-solid fa-shield"},
  ];
  return (
    <div className="featuresMainContent">
      <div className="featureImage">
        <img src="./images/body/features.jpg" alt="feature-image" />
      </div>
      <div className="featureText">
        <FeaturesItem {...featureInformation[0]} />
        <FeaturesItem {...featureInformation[1]} />
        <FeaturesItem {...featureInformation[2]} />
        <FeaturesItem {...featureInformation[3]} />
      </div>
    </div>
  );
}
