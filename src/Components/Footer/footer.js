import React, { Component } from 'react'
import "../Footer/footer.css";

export default class footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      userNewsEmail : "" ,
    }
  }
  emailNewsHandler(event){
    this.setState({
      userNewsEmail : event.target.value
    })
  }
  render() {
    return (
      <div className="footerMainContent">
        <div className="footerOriginalContainer">
          <div className="footerCompanyName">
            <div className="footerInfos">
              <h3>
                <img src={`${process.env.PUBLIC_URL}/images/hero/logo512.png`} alt="Logo" />
                Kasuka
              </h3>
              <p>
                تهران خیابان آزادی
                <br />
                <strong> تلفن : </strong>
                01234567895
                <br />
                <strong>ایمیل : </strong>
                info@example.com
              </p>
              <div className="footerSocialIcons">
                <a href="https://www.google.com">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.google.com">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.google.com">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.google.com">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.google.com">
                  <i class="fa-brands fa-skype"></i>
                </a>
              </div>
            </div>
            <div className="quickLinks">
              <h4> لینک های مفید</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com"> خانه </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">درباره ی ما </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">خدمات </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">شرایط استفاده از خدمات </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">سیاست حفظ حریم خصوصی </a>
                </li>
              </ul>
            </div>
            <div className="quickLinks">
              <h4>خدمات ما</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">طراحی وب سایت</a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com"> توسعه وب </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">مدیریت تولید </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">بازار یابی</a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                  <a href="https://www.google.com">طراحی گرافیک </a>
                </li>
              </ul>
            </div>
            <div className="newsletter">
              <h4> خبرنامه ما </h4>
              <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
              <form>
                  <input 
                  type="email" 
                  className="joinUsInput"
                  value={this.state.userNewsEmail}
                  onChange={this.emailNewsHandler.bind(this)}/>
                  <input type="submit" value="دنبال کردن" className="submitButton"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
