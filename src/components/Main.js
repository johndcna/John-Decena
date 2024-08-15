import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Experience from "./Experience";

const Main = () => {
    return (
        <main className="main">
            <Hero/>
            <About />
            <Experience/>
            <Resume />
            <Portfolio />
            <Contact />
        </main>
    );
  }
  
  export default Main;
  