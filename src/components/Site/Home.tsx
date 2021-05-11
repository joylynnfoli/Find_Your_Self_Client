import React, { Component } from "react";
import ViewPlaylist from "./ViewPlaylist"

type homeProps = {
  sessionToken: string | null;
};

type acceptedState = {
  meditations: [];
};

export default class Home extends Component<homeProps, acceptedState> {
  constructor(props: homeProps) {
    super(props);
    this.state = {
      meditations: [],
    };
    console.log(props);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekLtBGAt7j_dIvxzzu8CBxn4&maxResults=50`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ meditations: data.items });
        console.log(this.state.meditations);
      });
  };

  render() {
    return (
      <div>
        
        <ViewPlaylist
          sessionToken={this.props.sessionToken}
          meditations={this.state.meditations}
        />
      </div>
    );
  }
}
