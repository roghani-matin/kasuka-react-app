import "../Count/count.css";
import CountIcon from "./CountIcons/cicon";

export default function Count() {
  const countInformation = [
    {
      id: 1,
      normalText: "خوشحالیم که از معمار چیزی دریافت کنیم.",
      boldText: "مشتریان خوشحال ",
      countNumber: "65",
      iconName: "fa-regular fa-face-smile",
    },
    {
      id: 2,
      normalText:"برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد",
      boldText: "پروژه ها",
      countNumber: "85",
      iconName: "fa-solid fa-newspaper",
    },
    {
      id: 3,
      normalText: "یا اجازه دهید به دنبال نوعی مزیت باشد",
      boldText: "سال ها تجربه",
      countNumber: "35",
      iconName: "fa-regular fa-clock",
    },
    {
      id: 4,
      normalText:
        "درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند",
      boldText: "جوایز ",
      countNumber: "20",
      iconName: "fa-solid fa-award",
    },
  ];
  return (
    <div className="countMainContainer">
      <div className="countMainContent">
        <div className="countClientImage"></div>
        <div className="countClientNumbers">
          <div className="originalCountContent">
            <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
            <p>
              خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما
              من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود.
              درد مقصر است
            </p>
            <div className="countMainIcon">
              <CountIcon {...countInformation[0]} />
              <CountIcon {...countInformation[1]} />
              <CountIcon {...countInformation[2]} />
              <CountIcon {...countInformation[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
