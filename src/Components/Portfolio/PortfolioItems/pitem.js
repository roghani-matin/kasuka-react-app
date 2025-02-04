import "../PortfolioItems/pitem.css";

export default function PortfolioItems() {
  return (
    <div className="portfolioMainItem">
      <div className="portfolioOriginalContent">
        <img 
        src="./images/body/portfolio.jpg"
         alt="PortfolioImage"
         className="productImage" />
        <div className="portfolioInfos">
          <h4> محصول 3</h4>
          <span> محصول </span>
          <div className="portfolioInfosIcon">
            <a href="https://www.google.com">
              <i class="fa-solid fa-plus"></i>
            </a>
            <a href="https://www.google.com">
              <i class="fa-solid fa-link"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
