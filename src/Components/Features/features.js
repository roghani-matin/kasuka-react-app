import "../Features/features.css";
import { Component } from "react";
import FeaturesItem from "./FeaturesItem/fitem";

export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureInformation: [
        {
          id: 1,
          title: "تبلیغ سختی است",
          text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
          iconName: "fa-regular fa-clone",
        },
        {
          id: 2,
          title: "کدام یک از اینهاست",
          text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
          iconName: "fa-solid fa-receipt",
        },
        {
          id: 3,
          title: "کدام یک از اینهاست",
          text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
          iconName: "fa-solid fa-cube",
        },
        {
          id: 4,
          title: "یا کور شده است",
          text: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
          iconName: "fa-solid fa-shield",
        },
      ],
    };
  }
  render() {
    return (
      <div className="featuresMainContent">
        <div className="featureImage">
          <img
            src={`${process.env.PUBLIC_URL}/images/body/features.jpg`}
            alt="feature-image"
          />
        </div>
        <div className="featureText">
          {this.state.featureInformation.map((featureInfos) => (
            <FeaturesItem key={featureInfos.id} {...featureInfos} />
          ))}
        </div>
      </div>
    );
  }
}
