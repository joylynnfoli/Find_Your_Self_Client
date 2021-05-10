import React, { Component } from "react";

type acceptedProp = {
  sessionToken: string | null;
  meditations: [];
};

export default class acceptedProps extends Component<acceptedProp, {}> {
  constructor(props: acceptedProp) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Quick Meditations</h1>
        {this.props.meditations.map((meditation, index) => {
          console.log(meditation);
          return <p key={index}>{meditation.snippet.title}</p>;
        })}
      </div>
    );
  }
}
