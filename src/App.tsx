import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Site/Home";
import Navbar from "./components/Site/Navbar";
import Auth from "./auth/Auth";

type sessionState = {
  sessionToken: string | null;
  role: string | null;
  email: string | null;
};

export default class App extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      role: "",
      email: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  updateRole = (newRole: string) => {
    this.setState({ role: newRole });
    console.log(newRole);
  };

  updateEmail = (newEmail: string) => {
    localStorage.setItem("email", newEmail);
    this.setState({ email: newEmail });
    console.log(newEmail);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "", role: "" });
  };

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <>
        <Router>
          <Navbar
            sessionToken={this.state.sessionToken}
            clickLogout={this.clearToken}
          />
        </Router>
      </>
    ) : (
      <Auth updateToken={this.updateToken} updateRole={this.updateRole} />
    );
  };

  render() {
    return <div>{this.protectedViews()}</div>;
  }
}
