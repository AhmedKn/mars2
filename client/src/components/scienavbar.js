import React from "react"
import { Link } from 'react-router-dom';
import "../css/scienavbar.css"
import jwt_decode from 'jwt-decode'
import { Route } from 'react-router-dom'
import { decode } from "jsonwebtoken";




class Scnavbar extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
        return(
            <nav className="navbar navbar-expand-lg cust-nav-bg">
            <div className="container">
            <Link to="/" className="navbar-brand nav-title-sc">MARSMEET</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
             <Link to={`/forum/${decoded.id}`} className="nav-link link-sc-nav">Forum</Link>
            </li>
            
            <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            section
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={`/co2-section/${decoded.id}`} class="dropdown-item" href="#">Carbon dioxyde</Link></li>
            <li><Link to={`/water-section/${decoded.id}`} class="dropdown-item" href="#">Water</Link></li>
            <li><Link to={`/animals-section/${decoded.id}`} class="dropdown-item" href="#">Animals</Link></li>
            <li><Link to={`/comars-section/${decoded.id}`} class="dropdown-item" href="#">Colonize Mars</Link></li>
          </ul>
        </li>


            <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {decoded.firstname}
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" href="#">Profile</Link></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </li>
                </ul>
              </div>
            </div>
            <Route path={`/co2-section/${decoded.id}`} />
            <Route path={`/water-section/${decoded.id}`} />
            <Route path={`/animals-section/${decoded.id}`} />
            <Route path={`/comars-section/${decoded.id}`} />
            <Route path={`/forum/${decoded.id}`} />
          </nav>
        )
    }
}

export default Scnavbar;