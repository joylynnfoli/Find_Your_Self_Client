import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, Toolbar, MenuItem } from "@material-ui/core";
import Home from "./Home";
// import Favorites from "./Favorites";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import MenuList from "@material-ui/core/MenuList";
import Topics from "../topics/Topics";

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

        {/* <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="large" variant="contained" color="secondary">
            <Link style={{ color: "#0b2966" }} to="/">
              Home
            </Link>
          </Button>
          <Button size="large" variant="contained" color="secondary">
            <Link style={{ color: "#0b9877" }} to="/Favorites">
              Favorites
            </Link>
          </Button>
          <Button size="large" variant="contained" color="secondary">
            <Link style={{ color: "#0b9873" }} to="/Search">
              Search
            </Link>
          </Button>
        </Toolbar> */}
        <MenuList>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/Favorites">
            Favorites
          </MenuItem>
          <MenuItem component={Link} to="/Topics">
            Topics
          </MenuItem>
          <MenuItem component={Link} to="/Search">
            Search
          </MenuItem>
        </MenuList>
        <Switch>
          <Route exact path="/">
            <Home sessionToken={this.props.sessionToken} />
          </Route>
          <Route exact path="/Favorites">
            {/* <Favorites sessionToken={this.props.sessionToken} /> */}
          </Route>
          <Route exact path="/Search">
            <Search sessionToken={this.props.sessionToken} />
          </Route>
          <Route exact path="/Topics">
            <Topics sessionToken={this.props.sessionToken} />
          </Route>
        </Switch>
      </div>
    );
  }
}
