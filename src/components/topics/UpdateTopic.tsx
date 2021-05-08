import React, { Component } from 'react'
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import APIURL from "../../helpers/environment";

type acceptedProps = {
    sessionToken: any | null
    topicId: number 
}

type acceptedState = {
  playlistId: string;
  title: string;
  note: string;
  topicId: number;
};

export default class UpdateTopic extends
Component<acceptedProps, acceptedState> {
    constructor(props: acceptedProps){
    super(props);
    this.state={
        playlistId: "",
        title: "",
        note: "",
        topicId: 0,  
    }
}

componentDidMount(){
this.fetchTopic()
}
fetchTopic=()=>{
    if (this.props.sessionToken){
        fetch(`${APIURL}/topics/${this.props.topicId}`,{
            method: "GET",
            headers: new Headers ({
                Authorization: this.props.sessionToken, 
                'Content-Type': 'application/json',
                'Accept': 'application/json'  
            }),
            
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({playlistId: data.topic.id});
            this.setState({title: data.topic.title});
            this.setState({note: data.topic.note});
        })
        .catch((err)=>console.log(err));
    }
};

handleUpdate = (e: any) => {
    console.log("handleUpdate called")
    if (this.props.sessionToken){
   fetch(`${APIURL}/topics/update/${this.props.topicId}`, {
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
   .then((res)=> res.json())
   .then((data) => {
    //  this.fetchAllTopics();
    //  console.log(`update,${this.state.topicId}`);
     // console.log(data)
   })
  }
  };
  
render() {
    return(
        <div>
            <h1>Update Topic</h1>
            <div>
        <h2 style={{ textAlign: "center" }}>Add Topic</h2>
        <form
          style={{
            marginLeft: "auto",
            marginRight: "none",
            width: "45%",
            display: "block",
            // backgroundColor: "#FFFFFF",
          }}
          onSubmit={this.handleUpdate}
        >
          <TextField
          value={this.state.playlistId}
            // onChange={(e) => this.setState({ playlistId: e.target.value })}
            id="playlistId"
            label="Playlist ID"
          />
          <br />
          <TextField
          value={this.state.title}
        // {(=> this.setState({ title: e.target.value })}
            id="Title"
            label="Title"
          />
          <br />
          <TextField
            value={this.state.note}
            onChange={(e) => this.setState({ note: e.target.value })}
            id="Note"
            label="Note"
            multiline
            rowsMax={2}
          />
          <br />
          <Button variant="contained" type="submit">
            Edit
          </Button>
          
        </form>
        </div>
        </div>
    )

}
}
