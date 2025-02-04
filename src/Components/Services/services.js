import "../Services/services.css";
import ServicesItem from "./ServicesItems/sitem";

export default function Services() {
  const servicesInformation = [
    {
      linkText: "لورم اپیسوم",
      cardDetail:
        "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد",
      iconClass: "fa-brands fa-dribbble",
    },
    {
      linkText: "اما همانطور که مشاهده می کنید",
      cardDetail:
        "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
      iconClass: "fa-regular fa-file",
    },
    {
      linkText: "دردهای بزرگ",
      cardDetail:
        "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
      iconClass: "fa-solid fa-gauge-simple-high",
    },
    {
      linkText: "هیچکس دیگر",
      cardDetail:
        "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم",
      iconClass: "fa-solid fa-earth-americas",
    },
    {
      linkText: "دیوا دان",
      cardDetail:
        "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد",
      iconClass: "fa-solid fa-tv",
    },
    {
      linkText: "لولا را پاک کنید",
      cardDetail:
        "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
      iconClass: "fa-solid fa-archway",
    },
  ];
  return (
    <div className="servicesMainContainer">
      <div className="sercivesTitle">
        <h2> خدمات</h2>
        <p>خدمات ما را بررسی کنید</p>
      </div>
      <div className="servicesItems">
        <ServicesItem {...servicesInformation[0]}/>
        <ServicesItem {...servicesInformation[1]}/>
        <ServicesItem {...servicesInformation[2]}/>
        <ServicesItem {...servicesInformation[3]}/>
        <ServicesItem {...servicesInformation[4]}/>
        <ServicesItem {...servicesInformation[5]}/>
      </div>
    </div>
  );
}
