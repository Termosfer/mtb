import About from "../../component/About";
import Article from "../../component/Article";
import Features from "../../component/Features";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Mission from "../../component/Mission";
import SwaperHero from "../../component/SwaperHero";
import Training from "../../component/Training";

const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <SwaperHero />
        <About />
        <Mission />
        <Features />
        <Training />
        <Article />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
