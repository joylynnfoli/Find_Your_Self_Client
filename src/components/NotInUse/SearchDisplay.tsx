import React, { Component } from "react";

type acceptedProps = {
  sessionToken: string | null;
  results: [];
};

export default class SearchDisplay extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}
