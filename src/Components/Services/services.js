import "../Services/services.css";
import { Component } from "react";
import ServicesItem from "./ServicesItems/sitem";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesInformation: [
        { id: 1 ,linkText: "لورم اپیسوم",cardDetail:"برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد",iconClass: "fa-brands fa-dribbble",},
        { id: 2 ,linkText: "اما همانطور که مشاهده می کنید",cardDetail:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",iconClass: "fa-regular fa-file",},
        { id: 3 ,linkText: "دردهای بزرگ",cardDetail:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",iconClass: "fa-solid fa-gauge-simple-high",},
        { id: 4 ,linkText: "هیچکس دیگر",cardDetail:"اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم",iconClass: "fa-solid fa-earth-americas",},
        { id: 5 ,linkText: "دیوا دان",cardDetail:"روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد",iconClass: "fa-solid fa-tv",},
        { id: 6 ,linkText: "لولا را پاک کنید",cardDetail:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",iconClass: "fa-solid fa-archway",},
      ],
    };
  }
  render() {
    return (
      <div className="servicesMainContainer">
        <div className="sercivesTitle">
          <h2> خدمات</h2>
          <p>خدمات ما را بررسی کنید</p>
        </div>
        <div className="servicesItems">
          {this.state.servicesInformation.map( servisecCard => (
            <ServicesItem key={servisecCard.id} {...servisecCard} />

          ))}
        </div>
      </div>
    );
  }
}
