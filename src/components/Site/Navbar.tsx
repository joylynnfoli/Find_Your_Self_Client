import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, MenuItem } from "@material-ui/core";
import Home from "./Home";
import Search from "./Search/Search";
import MenuList from "@material-ui/core/MenuList";
import Topics from "../Topics/Topics";
import UpdateTopic from "../Topics/UpdateTopic";
import Comment from "./Comments/Comment";
import UpdateComment from "./Comments/UpdateComment";

type acceptedProps = {
  sessionToken: string | null;
  clickLogout: () => void;
  topicId: number | null;
  commentId: number | null;
  updateTopicId: (newTopicId: number) => void;
  updateCommentId: (newCommentId: number) => void;
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
        <div id="banner2">
          <h3
            id="title2"
            style={{
              fontFamily: "Rock Salt",
              fontSize: "4rem",
              marginTop: "2%",
              marginLeft: "35%",
              width: "500px",
              display: "block",
              paddingBottom: "10px",
            }}
          >
            All Parts Welcome!
          </h3>
        </div>

        <MenuList>
          <MenuItem component={Link} to="/Home">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/Topics">
            Topics
          </MenuItem>
          <MenuItem component={Link} to="/Search">
            Search
          </MenuItem>
          <Button
            size="large"
            variant="contained"
            color="primary"
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
              commentId={this.props.commentId}
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
