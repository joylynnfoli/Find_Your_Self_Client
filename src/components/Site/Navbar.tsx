import React, { Component } from "react";

type acceptedProps = {
  sessionToken: string | null;
  clickLogout: () => void;
};

export default class Navbar extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <div>
        <p>Hello from NavBar!!!</p>
      </div>
    );
  }
}
