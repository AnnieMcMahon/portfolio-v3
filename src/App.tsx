import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import CardsSection from "./components/CardsSection";
import CertificatesSection from "./components/CertificatesSection";
import Footer from "./components/Footer";
import cards from "./assets/cards";

export interface CardFormat {
  id: number;
  title: string;
  image: string;
  technology: string;
  summary: string;
  gitHubLink: string;
  gitHubTitle: string;
  webPageLink: string;
  webPageTitle: string;
}

function App() {
  let cardSet: CardFormat[] = cards;

  return (
      <div className="container-fluid">
        <NavBar />
        <Header />
        <AboutMe />
        <ProjectsSection />
        <CardsSection cardSet={cardSet} />
        <CertificatesSection />
        <Footer />
      </div>
  );
}

export default App;
