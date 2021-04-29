import React, { Component } from "react";
import APIURL from "../helpers/environment";
// import "./styles.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";

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
    fetch("http://localhost:3000/user/login", {
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

  // handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // if (this.state.email !== "" && this.state.password !== "") {
  //   //   this.handleChange = this.handleChange.bind(this);
  //   //   this.handleSubmit = this.handleSubmit.bind(this);
  //   fetch(`${APIURL}/user/login`, {
  //     method: "POST",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         throw new Error("Incorrect credentials or user does not exist");
  //       } else return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.props.updateToken(data.sessionToken);
  //       // this.props.updateRole(data.user.admin)
  //     });
  //   // }
  // };
  //   handleChange = (e) => {
  //     this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  //   };
  // paperStyle = { padding: 20, height: "70vh", width: 280 };
  render() {
    return (
      <div className="App">
        <h2 style={{ textAlign: "center" }}>Login Here!</h2>
        <form
          className="form"
          style={{
            alignContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            // position: "absolute",
            display: "block",
            width: "30%",
            // left: "50%",
            top: "50%",
            // transform: "translate(100%, 150%)",
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
          <Button type="submit" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
