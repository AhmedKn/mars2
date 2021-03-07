import React from "react"
import { Link } from 'react-router-dom';
import '../css/login.css';
import axios from "axios"
import {withRouter} from 'react-router-dom'



class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:""
    }
  }

  login = (logdata) =>{
    axios.post('http://localhost:5000/Mars/login' , logdata)
    .then(res => {if (res.status === 200){
     localStorage.setItem('token' , res.data.token)
     this.props.history.push('/user')
    }
})
.catch(err => this.setState({password :'' , email:"nope"}))
   }

   handleChange=(e)=>{this.setState({
    [e.target.name]:e.target.value
  })}

  render(){
    return( <div className="form">
    <div className="overlay"></div>
    <form>
      <h1>Login</h1>
      <div className="form-group">
        <input name="email" value={this.state.email} type="email" onChange={(e) => this.handleChange(e)} placeholder="Email" className="form-control" required autoComplete="off"/>
      </div>
      <div className="form-group">
        <input name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} type="password" placeholder="Password" className="form-control" required autoComplete="off"/>
      </div>
      <div className="form-group">
        <input onClick={() => this.login(this.state) } value="Login" className="btn btn-primary btn-cust-sign-login" />
      </div>
      <span className="to-login">Didn't have an account? <Link to="/signup">Signup</Link></span>
    </form>
  </div>)
  }
}

export default withRouter(Login);