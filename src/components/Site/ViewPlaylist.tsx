import React, { Component } from "react";

type ViewPlaylistProp = {
  sessionToken: string | null;
  meditationPlayLists: [];
};

export default class ViewPlaylist extends Component<ViewPlaylistProp, {}> {
  constructor(props: ViewPlaylistProp) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.props.meditationPlayLists.map((meditation, index) => {
          console.log(meditation);
          return <p key={index}>{meditation.snippet.title}</p>;
        })}
      </div>
    );
  }
}
