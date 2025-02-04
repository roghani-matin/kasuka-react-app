import "../ServicesItems/sitem.css";

export default function ServicesItem({iconClass,linkText,cardDetail}) {
  return (
    <div className="servicesMainContent">
      <div className="servicesOriginalContent">
        <div className="servicesIcon">
          <i class={iconClass}></i>
        </div>
        <h4>
          <a href="https://www.google.com" className="servicesLink">
            {linkText}
          </a>
        </h4>
        <p>{cardDetail}</p>
      </div>
    </div>
  );
}
