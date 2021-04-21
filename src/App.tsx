import React, { Component } from "react";
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
  componentDidUpdate() {
    console.log("updated");
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
      <Navbar
        sessionToken={this.state.sessionToken}
        clickLogout={this.clearToken}
      />
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

  render() {
    return <div>{this.protectedViews()}</div>;
  }
}
