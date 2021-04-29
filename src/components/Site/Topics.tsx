import React, { Component } from "react";
import { render } from "react-dom";
import APIURL from "../../helpers/environment";

type topicsProps = {
  sessionToken: string | null;
};

type acceptedState = {
  user_id: "";
};

export default class Topics extends Component<topicsProps, {}> {
  constructor(props: topicsProps) {
    super(props);
    this.state = {};
    console.log(props);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}topics/add/`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: new Headers({
        "Content type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <h1>Topics</h1>
      </div>
    );
  }
}
