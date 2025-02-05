import "./App.css";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import Clients from "./Components/Clients/clients";
import Features from "./Components/Features/features";
import Services from "./Components/Services/services";
import CallToAction from "./Components/CTA/cta";
import Portfolio from "./Components/Portfolio/portfolio";
import Count from "./Components/Count/count";
import Testimonials from "./Components/Testimonials/testimonials";
import Team from "./Components/Team/team";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientImages: [
        { id: 1, imageName: "client-1.png" },
        { id: 2, imageName: "client-2.png" },
        { id: 3, imageName: "client-3.png" },
        { id: 4, imageName: "client-4.png" },
        { id: 5, imageName: "client-5.png" },
        { id: 6, imageName: "client-6.png" },
      ],
    };
  }

  render() {
    return (
      <BrowserRouter basename="/kasuka-react-app">
        <div className="App">
          <header>
            <Header />
          </header>
          <section className="aboutMainContainer">
            <About />
          </section>
          <section className="clientsContainer">
            <Clients {...this.state.clientImages[0]} />
            <Clients {...this.state.clientImages[1]} />
            <Clients {...this.state.clientImages[2]} />
            <Clients {...this.state.clientImages[3]} />
            <Clients {...this.state.clientImages[4]} />
            <Clients {...this.state.clientImages[5]} />
          </section>

          <section className="featuresContainer">
            <Features />
          </section>
          <section className="servicesContainer">
            <Services />
          </section>
          <section className="ctaContainer">
            <CallToAction />
          </section>
          <section className="portfolioContainer">
            <Portfolio />
          </section>
          <section className="countContainer">
            <Count />
          </section>
          <section className="testimonialsContainer">
            <Testimonials />
          </section>
          <section className="teamMemberContainer">
            <Team />
          </section>
          <section className="contactFormContainer">
            <Contact />
          </section>
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
