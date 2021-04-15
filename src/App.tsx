import React, { Component } from 'react'
import './App.css'
import Home from './components/Site/Home'
import Navbar from './components/Site/Navbar'
import Auth from './auth/Auth'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";



type sessionState = {
  sessionToken:string | null; 
  role: string | null;
  email: string | null;

}

export default class App extends Component<{},sessionState>{
  constructor(props: sessionState){
super(props);
this.state = {
  sessionToken: "",
  role: "",
  email: ""

}
}
componentDidUpdate(){
  console.log("updated")
}

updateToken = (newToken: string) => {
  localStorage.setItem('token', newToken);
  this.setState({sessionToken:newToken})
  console.log(newToken);
}

updateRole = (newRole: string) => {
  this.setState({role:newRole})
  console.log(newRole);
}

updateEmail = (newEmail: string) => {
  localStorage.setItem('email', newEmail);
  this.setState({email:newEmail})
  console.log(newEmail);
}

clearToken = () => {
  localStorage.clear();
 this.setState({sessionToken:'',role:''})
}

protectedViews = () => {
  return this.state.sessionToken === localStorage.getItem("sessionToken") ?(
    <Navbar 
    sessionToken={this.state.sessionToken} 
    clickLogout={this.clearToken} />
     ):
       <Route exact path = "/home">

       
   <Auth 
   updateToken={this.updateToken} />

    <Home/></Route>
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Find Your Self!</p>
        
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}}


