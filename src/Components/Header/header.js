import "../Header/header.css";
import Navbar from "./Navbar/navbar";
import Slogan from "./Slogan/slogan";
import Card from "./Card/card";

export default function Header() {
  const cardsInformation = [
    {id : 1 , icon :"fa-solid fa-shop" , text:"متن نمایشی"},
    {id : 2 , icon :"fa-solid fa-chart-line" , text:"نمودار کیفی"},
    {id : 3 , icon :"fa-regular fa-calendar-days" , text:"نمونه کارها"},
    {id : 4 , icon :"fa-solid fa-paint-roller" , text:"عملکرد های پایانی"},
    {id : 5 , icon :"fa-solid fa-database" , text:"اطلاعات ذخیره شده"},
  ]
  return (
    <div className="generalHeader">
      <Navbar />
      <div className="originalHeroCoantainer">
        <Slogan />
        <div className="mainHeaderCardContainer">
          <Card {...cardsInformation[0]} />
          <Card {...cardsInformation[1]} />
          <Card {...cardsInformation[2]} />
          <Card {...cardsInformation[3]} />
          <Card {...cardsInformation[4]}/>
        </div>
      </div>
    </div>
  );
}
