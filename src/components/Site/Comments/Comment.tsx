import React, { Component } from 'react'
import APIURL from "../../../helpers/environment";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

type acceptedProps = {
  sessionToken: any | null;
  topicId: number | null;
  updateCommentId: (newCommentId: number) => void;
};

type acceptedState = {
    note: string;
    commentId: number;
    comment: []
}

export default class Comments extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      note: "",
      commentId: 0,
      dataArray: [],
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
        this.fetchNotes();
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
        this.setState({ dataArray: data });
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

  commentMapper = () => {
    return this.state.comment.map((data, index) => {
      return (
        <TableRow key={index}>
          <TableCell align="right">{data.comment}</TableCell>
       <TableCell align="right">
            <Button
              size="small"
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
                size="small"
                variant="contained"
                onClick={(e) => {
                  this.setState({ commentId: data.id });
                  this.props.updateCommentId(data.id);
                }}
              >
                Update
              </Button>
            </Link>
            <Link to="/Comment">
              <Button
                size="small"
                variant="contained"
                onClick={(e) => {
                  this.setState({ topicId: data.id });
                  this.props.updateTopicId(data.id);
                }}
              >
                Comment
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Comment</h1>
        <form
          style={{
            marginLeft: "auto",
            marginRight: "none",
            width: "85%",
            display: "block",
          }}
          onSubmit={this.addComment}
        >
          <TextField
            onChange={(e) => this.setState({ note: e.target.value })}
            id="note"
            label="Comment on Playlist"
          />
          <br />

          <br />
          <Button variant="contained" type="submit">
            Add
          </Button>
          <Button variant="contained" onClick={this.fetchNotes}>
            Get
          </Button>
        </form>
        <>
          {/* <p
              key={(index, dataArray)}
            style={{
              marginLeft: "25%",
              marginRight: "auto",
              width: "500px",
              display: "block",
            }}
          >
            {dataArray.id} {dataArray.note}
            <Button
              variant="contained"
              onClick={(e) => {
                this.setState({ commentId: dataArray.id });
                this.handleDelete(this.state.commentId);
              }}
            >
              Delete
            </Button>
            <Link to="/UpdateComment">
              <Button
                variant="contained"
                onClick={(e) => {
                  this.setState({ commentId: dataArray.id });
                  this.props.updateCommentId(data.id);
                }}
              >
                Update
              </Button>
            </Link>
          </p> */}
        </>
      </div>
    );
  }
}
