import React, { Component } from "react";
import APIURL from "../helpers/environment";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid, Paper } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

type acceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserRole: string) => void;
};

type UserState = {
  email: string;
  password: string;
  role: string;
};

export default class Register extends Component<acceptedProps, UserState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "",
    };
  }
  handleChangeRole = (e: any) => {
    this.setState({ role: e.target.value });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
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
  // else {
  //   alert("Please enter Email and Password");
  // }

  // handleEmailChange = (event: any) => {
  //   const email = event.target.value;
  //   this.setState({ email: email });
  // };
  // handlePasswordChange = (event: any) => {
  //   const password = event.target.value;
  //   this.setState({ password: password });
  // };
  paperStyle = { padding: 20, height: "70vh", width: 280 };
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "15%" }}>
          Register Here!
        </h2>
        <form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "45%",
            display: "block",
            // backgroundColor: "#FFFFFF",
          }}
          onSubmit={this.handleSubmit}
        >
          <TextField
            onChange={(e) => this.setState({ email: e.target.value })}
            id="email"
            label="email"
            inputProps={{
              pattern: ".+@.+.com",
            }}
            title="Must be in standard email format. Ex: youremail@email.com"
          />
          <TextField
            onChange={(e) => this.setState({ password: e.target.value })}
            id="password"
            type="password"
            label="password"
            inputProps={{
              pattern: "[a-zA-Z0-9]+",
              minLength: "5",
              maxLength: "15",
            }}
            title="Password must contain one number, one capital letter, and be 5-15 characters in length."
          />
          <br />
          <Select onChange={this.handleChangeRole}>
            {/* id="role"
            label="Role"
            required
            title="Please enter "
            // type="text" */}
            <MenuItem value="Therapist">Therapist/Practitioner</MenuItem>
            <MenuItem value="Client">Client</MenuItem>
          </Select>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
