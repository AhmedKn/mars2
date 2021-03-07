import React from 'react'
import jwt_decode from 'jwt-decode'
import Public from "./Public"
import Scientist from "./Scientist"

export default function Logged(){
    var token = localStorage.getItem('token')
    var decoded = jwt_decode(token)
  if (decoded.acctype === 'public'){
      return (<Public />)
  }
  else {
      return <Scientist />
  }
}