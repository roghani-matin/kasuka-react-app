import "../Contact/contact.css";
import ContactForm from "./ContactForm/cform";

export default function Contact() {
  return (
    <div className="contactMainContent">
      <div className="contactText">
        <h2>تماس با ما</h2>
        <p>با ما تماس بگیرید</p>
      </div>
      <div className="contactOriginalForm">
        <div className="contactFormInfos">
          <div className="mainInfos">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>مکان:</h4>
                <p>تهران خیابان آزادی</p>
              </div>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>ایمیل:</h4>
                <p> info@example.com </p>
              </div>
            </div>
            <div className="phoneNumber">
              <i className="fa-solid fa-mobile-button"></i>
              <div>
                <h4>شماره تماس:</h4>
                <p>0123467889</p>
              </div>
            </div>
          </div>
        </div>
        <div className="formContent">
            <ContactForm/>
        </div>
      </div>
    </div>
  );
}
