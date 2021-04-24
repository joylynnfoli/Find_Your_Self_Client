import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";
import Home from "./Home";

type acceptedProps = {
  sessionToken: string | null;
  clickLogout: () => void;
  // username: string | null | undefined;
};

export default class Navbar extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>User Navbar!</h3>
        <h3>
          Welcome User
          {/* {this.props.user} */}
        </h3>

        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="large" disabled variant="contained" color="secondary">
            <Link style={{ color: "#0b2966" }} to="/">
              Home
            </Link>
          </Button>
          <Button size="large" disabled variant="contained" color="secondary">
            <Link style={{ color: "#0b4566" }} to="/Favorites">
              Favorites
            </Link>
          </Button>
        </Toolbar>
        <Route exact path="/">
          <Home sessionToken={this.props.sessionToken} />
        </Route>
      </div>
    );
  }
}
