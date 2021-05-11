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
  commentId: number | null;
  updateCommentId: (newCommentId: number) => void;
};

type acceptedState = {
  note: string;
  commentId: number | null;
  comment: any[]
};

const styles = {
  table: {
    maxWidth: "80%" 
  },
};

export default class UpdateComment extends Component<
  acceptedProps,
  acceptedState
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      note: "",
      commentId: 0,
      comment: []
    };
  }
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = () => {
    if (this.props.sessionToken) {
      console.log(this.props.topicId);
      fetch(`${APIURL}/comment/all/${this.props.topicId}`, {
        method: "GET",
        headers: new Headers({
          Authorization: this.props.sessionToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ comment: data });
          console.log(this.state.note);
        })
        .catch((err) => console.log(err));
    }
  };

  addComment = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/comment/add/${this.props.topicId}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
          accept: "application/json",
        }),
        body: JSON.stringify({
            note: this.state.note,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.fetchComments();
          });
  }

  handleDelete = (id: number | null) => {
    console.log("handleDelete called");
    if (this.props.sessionToken) {
      console.log(
        "Topic: ",
        this.props.topicId,
        "Comment: ",
        this.props.commentId
      );

      fetch(`${APIURL}/comment/delete/${this.state.commentId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
          accept: "application/json",
        }),
              })
        .then((res) => res.json())
        .then((data) => {
          // this.fetchComments();
          //  console.log(`update,${this.state.topicId}`);
          console.log(this.state.commentId)
        });
    }
  };

  commentMapper = () => {
    return this.state.comment.map((data, index) => {
      return (
        <TableRow key={index}>
          <TableCell align="right">{data.note}</TableCell>
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
           
          </TableCell>
        </TableRow>
      );
    });
  };
 render() {
    return (
      <>
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
          <Button 
            style={{
              marginLeft: "15px"}}variant="contained" type="submit">
            Add
          </Button>
          <Button variant="contained" onClick={this.fetchComments}>
            Get
          </Button>
          <Link to="/Topics">
          <Button variant="contained" onClick={this.fetchComments}>
            Return to Topics
          </Button>
          </Link>
        </form>
        </div>
          <div>
            <h3
              style={{
                marginLeft: "40%",
                marginRight: "auto",
              }}
            >
              Comments Table
            </h3>
            <TableContainer
              component={Paper}
              style={{
                marginLeft: "10%",
              }}
            >
              <Table style={styles.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Comment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{this.commentMapper()}</TableBody>
              </Table>
            </TableContainer>
          </div>
      
      </>
    );
  }
}