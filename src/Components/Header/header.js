import "../Header/header.css";
import { Component } from "react";
import Navbar from "./Navbar/navbar";
import Slogan from "./Slogan/slogan";
import Card from "./Card/card";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInformation: [
        { id: 1, icon: "fa-solid fa-shop", text: "متن نمایشی" },
        { id: 2, icon: "fa-solid fa-chart-line", text: "نمودار کیفی" },
        { id: 3, icon: "fa-regular fa-calendar-days", text: "نمونه کارها" },
        { id: 4, icon: "fa-solid fa-paint-roller", text: "عملکرد های پایانی" },
        { id: 5, icon: "fa-solid fa-database", text: "اطلاعات ذخیره شده" },
      ],
    };
  }

  render() {
    return (
      <div className="generalHeader">
        <Navbar />
        <div className="originalHeroCoantainer">
          <Slogan />
          <div className="mainHeaderCardContainer">
            {this.state.cardsInformation.map( (cardInfos) => (
              <Card key={cardInfos.id} {...cardInfos} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
