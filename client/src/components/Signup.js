import axios from "axios";
import React from "react"
import { Link } from 'react-router-dom';
import "../css/signup.css"
import {withRouter} from 'react-router-dom'


class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname:"",lastname:"",email:"",password:"",region:"",acctype:"" 
    }
    this.change=this.change.bind(this)
  }

  change(event){
    this.setState({acctype : event.target.value})
  }

  handleChange=(e)=>{this.setState({
    [e.target.name]:e.target.value
  })}

  Sign = (data) =>{
    axios.post("http://localhost:5000/Mars/Sign-up",data)
    .then(res => {if (res.status === 200){
      this.props.history.push('/user')
      }
})
.catch(err => this.setState({password :'' , email:"nope"}))
  }

  render(){
    return(
      <div className="form">
      <div className="overlay"></div>
      <form className="signup">
        <h1>Signup</h1>
        <div className="form-group">
          <input value={this.state.firstname} onChange={(e) => this.handleChange(e)} name="firstname" type="text" placeholder="Firstname" className="form-control" required autoComplete="off"/>
        </div>
        <div className="form-group">
          <input value={this.state.lastname} onChange={(e) => this.handleChange(e)} name="lastname" type="text" placeholder="Lastname" className="form-control" required autoComplete="off"/>
        </div>
        <div className="form-group">
          <input value={this.state.email} onChange={(e) => this.handleChange(e)} name="email" type="email" placeholder="Email" className="form-control" required autoComplete="off"/>
        </div>
        <div className="form-group">
          <input value={this.state.password} onChange={(e) => this.handleChange(e)} name="password" type="password" placeholder="Password" className="form-control" required autoComplete="off"/>
        </div>
        <div className="form-group">
          <input value={this.state.region} onChange={(e) => this.handleChange(e)} name="region" type="text" placeholder="Region" className="form-control" required autoComplete="off"/>
        </div>
        <div className="form-group">
          <select value={this.state.acctype} onChange={this.change} required>
            <option value="">Choose account type</option>
            <option  value="scientist">Scientist</option>
            <option value="public">Public</option>
          </select>
        </div>
        <div className="form-group">
          <input onClick={() => this.Sign(this.state)} value="Signup" className="btn btn-primary btn-cust-sign-login" />
        </div>
        <span className="to-login">You already have account? <Link to="/login">Login</Link></span>
      </form>
    </div>
    )
  }
}

export default withRouter(Signup);