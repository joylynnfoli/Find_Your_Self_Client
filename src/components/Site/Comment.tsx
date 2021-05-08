import React, { Component } from 'react'
import APIURL from "../../helpers/environment";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

type acceptedProps = {
    sessionToken: any | null
    topicId: number | null;
}

type acceptedState = {
    note: string;
    commentId: number;
    data: []
}

export default class Comments extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      note: "",
      commentId: 0,
      data: [],
    };
    console.log(props);
  }

  componentDidMount() {
    // e.preventDefault();
    this.fetchNotes();
  }

  addComment = (e: any) => {
    e.preventDefault();
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/comment/add/${this.props.topicId}`, {
      method: "POST",
      headers: new Headers({
        Authorization: this.props.sessionToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        //   user_id: this.state.user_id,
        note: this.state.note,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.fetchNotes(e);
        console.log(data.note);
      });
  };

  fetchNotes = () => {
    // e.preventDefault();
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/comment/all/${this.props.topicId}`, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.sessionToken,
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  };
  handleDelete = (id: number) => {
    if (this.props.sessionToken) {
      console.log(this.state.commentId);
      fetch(`${APIURL}/topics/delete/${this.state.commentId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(this.state.commentId);
        });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h2 style={{ textAlign: "center" }}>Add Comment</h2>
          <form
            style={{
              marginLeft: "auto",
              marginRight: "none",
              width: "45%",
              display: "block",
              // backgroundColor: "#FFFFFF",
            }}
            onSubmit={this.addComment}
          >
            <TextField
              onChange={(e) => this.setState({ note: e.target.value })}
              id="note"
              label="comment"
            />
            <br />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </form>
        </div>

        <div>
          <p
              key={(index, data)}
            style={{
              marginLeft: "25%",
              // marginRight: "auto",
              width: "500px",
              display: "block",
              // backgroundColor: "#FFFFFF",
            }}
          >
            {data.id} {data.note}
            <Button
              variant="contained"
              onClick={(e) => {
                this.setState({ commentId: data.id });
                this.handleDelete(this.state.commentId);
              }}
            >
              Delete
            </Button>
            <Link to="/UpdateComment">
              <Button
                variant="contained"
                onClick={(e) => {
                  this.setState({ commentId: data.id });
                  // this.props.updateCommentId(data.id);
                }}
              >
                Update
              </Button>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
