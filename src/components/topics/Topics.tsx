import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid, Paper } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

type acceptedProps = {
  sessionToken: any | null 
    // Authorizaton: string | null;
};

type acceptedState = {
  playlistId: string;
  title: string;
  note: string;
};

export default class Topics extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      playlistId: "",
      title: "",
      note: "",
    };
    console.log(props);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.props.sessionToken)
    fetch(`${APIURL}/topics/add`, {
      method: "POST",
      headers: new Headers({
        Authorization: this.props.sessionToken, 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        topics: {
          playlistId: this.state.playlistId,
          title: this.state.title,
          note: this.state.note,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  
//   fetchTopics = (e: any) => { 
//     e.preventDefault();
//   // console.log(this.props.sessionToken)
// fetch(`${APIURL}/topics/mine`, {
//   method: "GET",
//   headers: new Headers({
//     Authorization: this.props.sessionToken,
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
// })
// .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

fetchTopics = (e: any) => {
  e.preventDefault();
  console.log(this.props.sessionToken)
  fetch(`${APIURL}/topics/mine`, {
    method: "GET",
    headers: new Headers ({
      Authorization: this.props.sessionToken,
      'Content-Type': 'application/json'
    })
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
}

render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "15%" }}>Add Topic</h2>
        <form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "45%",
            display: "block",
            // backgroundColor: "#FFFFFF",
          }}
          onSubmit={this.handleSubmit}
        >
          <TextField
            onChange={(e) => this.setState({ playlistId: e.target.value })}
            id="playlistId"
            label="Playlist ID"
          />
          <br />
          <TextField
            onChange={(e) => this.setState({ title: e.target.value })}
            id="Title"
            label="Title"
          />
          <br />
          <TextField
            onChange={(e) => this.setState({ note: e.target.value })}
            id="Note"
            label="Note"
            multiline
            rowsMax={2}
          />
          <br />
          <Button variant="contained" type="submit">
            Add
          </Button>
          <Button variant="contained" onClick={()=>this.fetchTopics}>
            Get
          </Button>
        </form>
      </div>
    );
  }
}
