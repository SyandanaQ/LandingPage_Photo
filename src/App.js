import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Porto from "./Components/Porto";
import Team from"./Components/Team";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Porto />
      <Team/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
