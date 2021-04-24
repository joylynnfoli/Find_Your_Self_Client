import React, { Component } from "react";
import { render } from "react-dom";

type homeProps = {
  sessionToken: string | null;
};

export default class Home extends Component<homeProps, {}> {
  constructor(props: homeProps) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
    this.fetchPlaylist();
  }
  fetchPlaylist = () => {
    console.log("fetch ran");
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLvcW4S4nxekJdH_D-BWj69KtifYy4vcSo&key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI`
    )
      .then((res) => res.json())
      .then((json) => {
        json.results;
        console.log(json);
      });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
