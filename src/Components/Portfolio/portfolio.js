import "../Portfolio/portfolio.css"
import PortfolioItems from "./PortfolioItems/pitem"

export default function Portfolio() {
  return (
    <div className="portfolioMainContainer">
      <div className="portfolioText">
        <h2>نمونه کارها</h2>
        <p>نمونه کارها ما را بررسی کنید</p>
      </div>
      <div className="portfolioListItem">
        <div className="mainList">
          <ul>
            <li className="active"> همه </li>
            <li>برنامه</li>
            <li> محصول</li>
            <li> اینترنت</li>
          </ul>
        </div>
      </div>
      <div className="portfolioProductItem">
        <PortfolioItems/>
        <PortfolioItems/>
        <PortfolioItems/>
        <PortfolioItems/>
        <PortfolioItems/>
        <PortfolioItems/>
      </div>
    </div>
  )
}
