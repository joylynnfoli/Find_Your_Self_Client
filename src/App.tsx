import React, { Component } from 'react'
import { render } from 'react-dom';
import './App.css'
type sessionState = {
  sessionToken:string | null; 

}

export default class App extends Component<{},sessionState>{
  constructor(props: sessionState){
super(props);
this.state = {
  sessionToken: ""
}
}


render(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Hello Vite + React!</p>
        <p>button was here
          {/* <button onClick={() => setCount((count) => count + 1)}> */}
            {/* count is: {count} */}
          {/* </button> */}
        </p>
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


