import "../Testimonials/testimonials.css"

export default function Testimonials() {
  return (
    <div className="testimonialsMainContainer">
      <div className="testimonialsItems">
        <div className="testimonialsOriginalContent">
            <img 
            src="./images/body/testimonialsMember.jpg"
            alt="testimonialsMember"/>
            <h3>ساول گودمن</h3>
            <h4> مدیران عامل : پایه گذار</h4>
            <p>
            <i class="fa-solid fa-quote-right"></i>
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد. 
            <i class="fa-solid fa-quote-left"></i>                 
            </p>
        </div>
      </div>
    </div>
  )
}
