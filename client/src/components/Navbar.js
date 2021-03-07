import { Link } from 'react-router-dom';
import "../css/navbar.css"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand custom-title-nav">MARSMEET</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler"></span>
          <span className="navbar-toggler"></span>
          <span className="navbar-toggler"></span>
        </button>
        <div className="collapse navbar-collapse d-flex"  id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Forum</Link>
            </li>
          </ul>
          <div className="d-flex">
          <Link to="/login" className="btn btn-outline-success me-2 custom-btn-nav">Login</Link>
          <Link to="/signup" className="btn btn-outline-success custom-btn-nav">Sign-up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;