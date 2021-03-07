import '../css/home.css'
import Navbar from "./Navbar";


function App() {
  return (
    <div className="home">
      <header>
        <div className="overlay"></div>
        <Navbar />
        <div className="content">
          <h1>MARS & BEYOND</h1>
          <p>THE ROAD TO MAKING HUMANITY MULTIPLANETARY</p>
        </div>
        <a href="#intro" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </header>
      <div className="intro" id="intro">
        <div className="content">
          <h1>WHY MARS?</h1>
          <p>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
