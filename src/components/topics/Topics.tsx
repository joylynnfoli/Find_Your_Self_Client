import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import APIURL from "../../helpers/environment";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, ButtonGroup } from "@material-ui/core";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
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
  updateTopicId: (newTopicId: number) => void;
  // Authorizaton: string | null;
};

type acceptedState = {
  playlistId: string;
  title: string;
  note: string;
  topicId: number;
  topics: any[];
};

const styles = {
  table: {
    maxWidth: "80%"
  },
};

export default class Topics extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      playlistId: "",
      title: "",
      note: "",
      topicId: 0,
      topics: [],
    };
    console.log(props);
  }


  componentDidMount(){
    this.fetchAllTopics()
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/topics/add`, {
      method: "POST",
      headers: new Headers({
        Authorization: this.props.sessionToken,
        "Content-Type": "application/json",
        Accept: "application/json",
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
        this.fetchTopics(e);
        console.log(data);
      });
  };

 

  fetchTopics = (e: any) => {
    e.preventDefault();
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/topics/mine`, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.sessionToken,
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ topics: data });
      });
  };

  fetchAllTopics = () => {
    console.log("fetchAllTopics");
    // e.preventDefault();
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/topics/all`, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.sessionToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ topics: data });
      });
  };
  handleDelete = (id: number) => {
    if (this.props.sessionToken) {
      console.log(this.state.topicId);
      fetch(`${APIURL}/topics/delete/${this.state.topicId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(this.state.topicId);
        });
    }
  };

  topicMapper = () => {
    return this.state.topics.map((data, index) => {
      return (
        <TableRow key={index}>
         
          <TableCell align="right">{data.playlistId}</TableCell>

          <TableCell align="right">{data.title}</TableCell>
          <TableCell align="right">{data.note}</TableCell>
         
          <TableCell align="right">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button 
            
                // marginLeft: "50px"}}

              size="small"
              variant="contained"
              onClick={(e) => {
                this.setState({ topicId: data.id });
                this.handleDelete(this.state.topicId);
              }}
            >
              Delete
            </Button>
            <Link to="/UpdateTopic">
              <Button 
              // style={{
                // marginLeft: "50px"}}
                size="small"
                variant="contained"
                onClick={(e) => {
                  this.setState({ topicId: data.id });
                  this.props.updateTopicId(data.id);
                }}
              >
                Update
              </Button >
            </Link>
            <Link to="/Comment">
              <Button 
              // style={{
                // marginLeft: "50px"}}
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
              </ButtonGroup>
           
          </TableCell>
          
        </TableRow>
      );
    });
  };

  
  render() {
    return (
      <>
        <div>
          <h2 style={{ textAlign: "center" }}>Add Topic</h2>
          <form
            style={{
              marginLeft: "auto",
              marginRight: "none",
              width: "85%",
              display: "block",
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
             <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button  

          variant="contained" type="submit">
              Add
            </Button>
            <Button 
 variant="contained" onClick={this.fetchAllTopics}>
              Get All Topics
            </Button>
            </ButtonGroup>
          </form>
        </div>
        <div>
          <h3
            style={
              {
                marginLeft: "40%",
                marginRight: "auto",
              }
            }
          >
            Topics Table
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
                  <TableCell align="right">Playlist</TableCell>
                  <TableCell align="right">Title</TableCell>
               
                  <TableCell align="right">Comment</TableCell>
               
                </TableRow>
              </TableHead>
              <TableBody>{this.topicMapper()}</TableBody>
            
            </Table>
          </TableContainer>

          
        </div>
      </>
    );
  }

}
