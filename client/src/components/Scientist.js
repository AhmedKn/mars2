import React from "react"
import "../css/public.css"
import jwt_decode from 'jwt-decode'
import Scnavbar from "./scienavbar"
import "../css/scientist.css"


class Scientist extends React.Component {
constructor(props){
    super(props)
    this.state = {
        user:"",
        message:""
    }
}

render(){
    var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
    return(
    <div className="scientist-section">
     <Scnavbar />
    </div>
    )
}
}

export default Scientist