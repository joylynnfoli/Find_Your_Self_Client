import React, { Component } from 'react'
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import APIURL from "../../../helpers/environment";

type acceptedProps = {
    sessionToken: any | null
    topicId: number | null
    // updateTopicId: (newTopicId: number) => void;
}

type acceptedState = {
  playlistId: string;
  title: string;
  note: string;
  topicId: number | null;
};

export default class UpdateComment extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      playlistId: "",
      title: "",
      note: "",
      topicId: 0,
    };
  }

  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = () => {
    if (this.props.sessionToken) {
      console.log(this.props.topicId);
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
          // this.setState({ playlistId: data});
          // this.setState({ title: data });
          // this.setState({ note: data });
          // console.log(this.state.title)
          this.setState({ playlistId: data.id });
          this.setState({ title: data.title });
          this.setState({ note: data.note });
          console.log(this.state.note);
        })
        .catch((err) => console.log(err));
    }
  };

  handleUpdateComment = (e: any) => {
    console.log("handleUpdateComment called");
    if (this.props.sessionToken) {
      console.log(this.props.topicId);
      fetch(`${APIURL}/comment/update/${this.props.topicId}`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
          accept: "application/json",
        }),
        body: JSON.stringify({
          topics: {
            // playlistId: this.state.playlistId,
            // title: this.state.title,
            note: this.state.note,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          //  this.fetchAllTopics();
          //  console.log(`update,${this.state.topicId}`);
          // console.log(data)
        });
    }
  };

  render() {
    return (
      <div>
          
          {console.log(this.props.topicId)}
            <h1 style={{ textAlign: "center" }}>Update Comment</h1>
            <div>
        
        <form
          style={{
            marginLeft: "auto",
            marginRight: "none",
            width: "45%",
            display: "block",
            // backgroundColor: "#FFFFFF",
          }}
          onSubmit={this.handleUpdateComment}
        >
          <TextField
            onChange={(e) => this.setState({ note: e.target.value })}
            id="note"
            label="Comment on Playlist"
          />
          <br />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </form>
        </div>
      </div>
    );
  }
}