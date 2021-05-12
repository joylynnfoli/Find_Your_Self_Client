import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import APIURL from "../helpers/environment";

type acceptedProps = {
  updateToken: any;
};

type userState = {
  email: string;
  password: string;
};

export default class Login extends Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        console.log(data);
      });
  };

  render() {
    return (
      <div id="Login">
        <h2
          style={{
            textAlign: "center",
            marginTop: "15%",
            fontFamily: "Shadows Into Light",
          }}
        >
          Login Here!
        </h2>
        <form
          className="form"
          style={{
            alignContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "30%",
          }}
          onSubmit={this.handleSubmit}
        >
          <TextField
            label="Email"
            id="email"
            onChange={(e: any) => this.setState({ email: e.target.value })}
            type="text"
          />

          <TextField
            label="Password"
            id="password"
            onChange={(e: any) => this.setState({ password: e.target.value })}
            type="password"
          />
          <Button variant="contained" type="submit" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
