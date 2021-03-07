import React from "react"
import "../css/public.css"
import jwt_decode from 'jwt-decode'
import Scnavbar from "./scienavbar"


class Public extends React.Component {
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
    <div className="public-section">
     
    </div>
    )
}
}

export default Public


