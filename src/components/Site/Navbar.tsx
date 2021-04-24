import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";

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
      <div className="flex justify-between bg-red-500">
        <div id="navContainer bg-red-500"></div>
        <div className="flex flex-col flex-row flex grow-0 bg-red-500">
          <h3 className="text-red-600 bg-red-500">User Navbar!</h3>
          <h3 className="bg-red-500">
            Welcome User
            {/* {this.props.user} */}
          </h3>

          <Router>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button style={{ margin: "1rem 3rem", color: "primary" }}>
                <Link style={{ color: "#0b2966" }} to="/Home">
                  Hello
                </Link>
              </Button>
              <Button style={{ margin: "1rem 3rem" }}>
                <Link style={{ color: "#0b2966" }} to="/Favorites">
                  Favorites
                </Link>
              </Button>
            </Toolbar>
          </Router>
        </div>
      </div>
    );
  }
}
