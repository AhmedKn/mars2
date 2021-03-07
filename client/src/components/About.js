import Navbar from "./Navbar"
import "../css/About.css"
function About() {
  return (
    <div id="about">
      <Navbar />
      <div className="overlay"></div>
      <div className="about">
        <h1>About</h1>
        <p>This application will help us to discuss about life in mars and how we can make it possible</p>
      </div>
    </div>


  )
}


export default About;