import "../ContactForm/cform.css";

export default function ContactForm() {
  return (
    <form>
      <div className="nameEmail">
        <div className="nameInput">
          <input type="text" placeholder="نام" />
        </div>
        <div className="emailInput">
          <input type="text" placeholder="ایمیل" />
        </div>
      </div>
      <div className="formTitle">
        <input type="text" placeholder="عنوان" />
      </div>
      <div className="formMessage">
        <textarea rows={5} placeholder="پیام"></textarea>
      </div>
      <div className="formSubmitButton">
        <button>
          ارسال پیام
        </button>
      </div>
    </form>
  );
}
