import "../Clients/clients.css";

export default function Clients({imageName}) {
  return (
    <div className="clientLogoImage">
      <img
        src={`${process.env.PUBLIC_URL}/images/body/otherCompanys/${imageName}`}
        className="clientLogoImgaes"
        alt="client-logo"
      />
    </div>
  );
}
