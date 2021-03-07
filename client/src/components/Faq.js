import Navbar from "./Navbar"
import "../css/Faq.css"
function Faq() {
  return (
    <div id="faq">
      <Navbar />
      <div className="overlay"></div>
      <div className="faq">
        <h1>Frequently Asked Question</h1>
        <div className="items">
          <div className="item">
            <h3>Question <i className="fas fa-chevron-down"></i></h3>
            <p>Response: lorem isProxy data actions Question hotUpdate try catch for loop.
          </p>
          </div>
          <div className="item">
            <h3>Question <i className="fas fa-chevron-down"></i></h3>
            <p>Response: lorem isProxy data actions Question hotUpdate try catch for loop.</p>
          </div>
          <div className="item">
            <h3>Question <i className="fas fa-chevron-down"></i></h3>
            <p>Response: lorem isProxy data actions Question hotUpdate try catch for loop.
         </p>
          </div>
          <div className="item">
            <h3>Question <i className="fas fa-chevron-down"></i></h3>
            <p>Response: lorem isProxy data actions Question hotUpdate try catch for loop.
         </p>
          </div>
        </div>
      </div>
    </div>


  )
}


export default Faq;