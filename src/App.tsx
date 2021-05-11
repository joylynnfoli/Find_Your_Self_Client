import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Home from "./components/Site/Home";
import Navbar from "./components/Site/Navbar";
import Auth from "./auth/Auth";

type sessionState = {
  sessionToken: string | null;
  role: string | null;
  email: string | null;
  topicId: number | null;
  commentId: number | null 
};

export default class App extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      role: "",
      email: "",
      topicId: 0,
      commentId: 0
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  updateTopicId = (newTopicId: number) => {
    this.setState({ topicId: newTopicId });
    console.log("topicId from App: ", newTopicId);
  };

  updateCommentId = (newCommentId: number) => {
    this.setState({ commentId: newCommentId });
    console.log("commentId from App: ", newCommentId);
  };

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
            topicId={this.state.topicId}
            commentId={this.state.commentId}
            updateTopicId={this.updateTopicId}
            updateCommentId={this.updateCommentId}
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
