import React, { Component } from "react";
import { Jumbotron, Button, Carousel } from "reactstrap";
import Login from "./Login";
import Register from "./Register";

type acceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserRole: string) => void;
};

type userState = {
  showLogin: boolean;
};

export default class Auth extends Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }
  loginToggle = (event: any) => {
    event.preventDefault();
    if (this.state.showLogin === false) {
      return this.setState({
        showLogin: true,
      });
    }
    if (this.state.showLogin === true) {
      return this.setState({
        showLogin: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div id="banner">
          <h1 id="Title1">Find Your Self</h1>
        </div>
        <div id="container">
          {this.state.showLogin ? (
            <div>
              <Register
                updateToken={this.props.updateToken}
                updateRole={this.props.updateRole}
              />
            </div>
          ) : (
            <div>
              <Login updateToken={this.props.updateToken} />
            </div>
          )}
          <br />
          <Button
            style={{
              position: "relative",
              left: "50%",
              top: "75%",
              marginBottom: "20px",
              padding: "20px, 50px, 20px",
            }}
            variant="contained"
            onClick={(e) => {
              this.loginToggle(e);
            }}
          >
            {this.state.showLogin ? "Login" : "Sign up"}
          </Button>
        </div>
        <p
          style={{
            fontFamily: "Architects Daughter",
            fontSize: "24px",
            position: "relative",
            top: "75%",
            marginBottom: "20px",
            maxWidth: "700px",
            marginLeft: "25%",
          }}
        >
          Find Your Self has curated collections of Internal Family Systems
          videos to be utilized for Pracitioners/Therapists wanting additional
          training or any layperson interested in self therapy or continued work
          between sessions with their IFS Practioner. Get unique insights from
          Richard Schwartz, creator of the IFS model, on how best to handle
          Protectors (managers/firefighters) and exiles, see session
          demonstrations and learn the IFS modality in greater depth. You will
          also find a unique collection of videos from the Internal Family
          Systems Institute along with other leaders in the field of IFS. All
          Parts Welcome!
        </p>
      </div>
    );
  }
}
