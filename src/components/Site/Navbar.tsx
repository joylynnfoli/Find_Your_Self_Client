import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, Toolbar, MenuItem } from "@material-ui/core";
import Home from "./Home";
import Search from "./Search/Search";
import Grid from "@material-ui/core/Grid";
import MenuList from "@material-ui/core/MenuList";
import Topics from "../Topics/Topics";
import UpdateTopic from "../Topics/UpdateTopic"
import Comment from "./Comments/Comment"
import UpdateComment from "./Comments/UpdateComment"

type acceptedProps = {
  sessionToken: string | null;
  clickLogout: () => void;
  topicId: number | null;
  updateTopicId: (newTopicId: number) => void;
  updateCommentId: (newCommentId: number) => void;
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
        {/* <h3>User Navbar!</h3> */}
        <h3
          style={{
            marginTop: "2%",
            marginLeft: "35%",
            // marginRight: "auto",
            width: "500px",
            display: "block",
            // backgroundColor: "#FFFFFF",
          }}
        >
          All Parts Welcome!
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
          <>
            <Link style={{ color: "#0b9873" }} to="/Search">
              Search
            </Link>
          </>
        </Toolbar> */}
        <MenuList>
          <MenuItem component={Link} to="/Home">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/Favorites">
            Favorites
          </MenuItem>
          <MenuItem component={Link} to="/Topics">
            Topics
          </MenuItem>
          {/* <MenuItem component={Link} to="/UpdateTopic">
            Update Topic
          </MenuItem> */}
          <MenuItem component={Link} to="/Search">
            Search
          </MenuItem>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={this.props.clickLogout}
          >
            <Link style={{ color: "#000000" }} to="/home">
              Logout
            </Link>
          </Button>
        </MenuList>
        <Switch>
          <Route exact path="/Home">
            <Home sessionToken={this.props.sessionToken} />
          </Route>
          <Route exact path="/Favorites">
            {/* <Favorites sessionToken={this.props.sessionToken} /> */}
          </Route>
          <Route exact path="/Search">
            <Search sessionToken={this.props.sessionToken} />
          </Route>
          <Route exact path="/Topics">
            <Topics
              sessionToken={this.props.sessionToken}
              updateTopicId={this.props.updateTopicId}
              topicId={this.props.topicId}
            />
          </Route>
          <Route exact path="/UpdateTopic">
            <UpdateTopic
              sessionToken={this.props.sessionToken}
              updateTopicId={this.props.updateTopicId}
              topicId={this.props.topicId}
            />
          </Route>
          <Route exact path="/Comment">
            <Comment
              sessionToken={this.props.sessionToken}
              topicId={this.props.topicId}
              updateCommentId={this.props.updateCommentId}
            />
          </Route>
          <Route exact path="/UpdateComment">
            <UpdateComment
              sessionToken={this.props.sessionToken}
              topicId={this.props.topicId}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
