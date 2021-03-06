import React, { Component } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import APIURL from "../../helpers/environment";
import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";

type acceptedProps = {
  sessionToken: any | null;
  topicId: number | null;
  updateTopicId: (newTopicId: number) => void;
};
type acceptedState = {
  playlistId: string;
  title: string;
  note: string;
};
export default class UpdateTopic extends Component<
  acceptedProps,
  acceptedState
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      playlistId: "",
      title: "",
      note: "",
    };
  }
  componentDidMount() {
    this.fetchTopic();
  }
  fetchTopic = () => {
    if (this.props.sessionToken) {
      console.log("Fetching Topic: ", this.props.topicId);
      fetch(`${APIURL}/topics/one/${this.props.topicId}`, {
        method: "GET",
        headers: new Headers({
          Authorization: this.props.sessionToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ playlistId: data.id });
          this.setState({ title: data.title });
          this.setState({ note: data.note });
          console.log(this.state.note);
        })
        .catch((err) => console.log(err));
    }
  };
  handleUpdate = (e: any) => {
    console.log("handleUpdate called");
    e.preventDefault();
    if (this.props.sessionToken) {
      console.log(this.props.topicId);
      fetch(`${APIURL}/topics/update/${this.props.topicId}`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
          accept: "application/json",
        }),
        body: JSON.stringify({
          topics: {
            note: this.state.note,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          <Topics
            sessionToken={this.props.sessionToken}
            updateTopicId={this.props.updateTopicId}
            topicId={this.props.topicId}
          />;
        });
    }
  };
  render() {
    return (
      <div>
        {console.log("TopicId: ", this.props.topicId)}
        <h1 style={{ marginLeft: "55%" }}>Update Topic</h1>
        <div>
          <form
            style={{
              marginLeft: "auto",
              marginRight: "none",
              width: "45%",
              display: "block",
            }}
            onSubmit={this.handleUpdate}
          >
            <TextField
              value={this.state.playlistId}
              variant="filled"
              id="playlistId"
              label="Playlist ID"
            />
            <br />
            <TextField
              value={this.state.title}
              variant="filled"
              id="Title"
              label="Title"
            />
            <br />
            <TextField
              value={this.state.note}
              onChange={(e) => this.setState({ note: e.target.value })}
              id="Note"
              label="Note on Topic"
              multiline
              rowsMax={2}
            />
            <br />
            <ButtonGroup
              style={{
                marginLeft: "0%",
              }}
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button
                variant="contained"
                type="submit"
                onClick={(e) =>
                  alert(
                    "Topic Note updated\nPress Topics to go back to the Topics list."
                  )
                }
              >
                Save Update
              </Button>
              <Link to="/Topics">
                <Button variant="contained" type="submit">
                  Topics
                </Button>
              </Link>
            </ButtonGroup>
          </form>
        </div>
      </div>
    );
  }
}
