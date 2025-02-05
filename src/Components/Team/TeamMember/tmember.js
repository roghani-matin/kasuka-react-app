import "../TeamMember/tmember.css";

export default function TeamMember({imageName,memberName,role = "kasuka-member",}) {
  return (
    <div className="teamMemberCard">
      <div className="teamMamberContent">
        <div className="imageContainer">
          <img
            src={`${process.env.PUBLIC_URL}/images/body/${imageName}`}
            alt="teamMamber"
          />
          <div className="teamSocial">
            <a href="https://www.google.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.google.com">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.google.com">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.google.com">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="imageContainerInfos">
          <h4> {memberName} </h4>
          <span> {role} </span>
        </div>
      </div>
    </div>
  );
}
