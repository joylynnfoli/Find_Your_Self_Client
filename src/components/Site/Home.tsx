import React, { Component } from "react";
import { render } from "react-dom";

type homeProps = {};

export default class Home extends Component<{}, homeProps> {
  constructor(props: homeProps) {
    super(props);
    this.state = {};
    console.log(props);
  }

  fetchPlaylist = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3Key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI`
    )
      .then((res) => res.json())
      .then((json) => {
        json.results;
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
