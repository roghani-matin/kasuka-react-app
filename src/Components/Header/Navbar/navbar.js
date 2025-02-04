import "../Navbar/navbar.css";
function Navbar() {
  return (
    <nav>
      <a href="https://www.google.com" target="blank" id="LogoLink">
        Kasuka
        <img src="./images/hero/logo512.png" alt="Logo" />
      </a>
      <ul className="navBarList">
        <li><a href="https://www.google.com">خانه</a></li>
        <li><a href="https://www.google.com">درباره ما</a></li>
        <li><a href="https://www.google.com">خدمات</a></li>
        <li><a href="https://www.google.com"> نمونه کارها</a></li>
        <li><a href="https://www.google.com">تیم</a></li>
        <li><a href="https://www.google.com">لیست کشویی</a></li>
        <li><a href="https://www.google.com">تماس با ما</a></li>
      </ul>
      <button> شروع </button>
    </nav>
  );
}
export default Navbar;
