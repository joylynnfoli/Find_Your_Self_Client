import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles(theme) => ({
//   root:{
//     flexGrow: 1
//   }
// });

type acceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserRole: string) => void;
};

type userState = {
  showLogin: boolean;
};

export default class Auth extends Component<acceptedProps, userState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }
  loginToggle = (event: any) => {
    event.preventDefault();
    if (this.state.showLogin === false) {
      return this.setState({
        showLogin: true,
      });
    }
    if (this.state.showLogin === true) {
      return this.setState({
        showLogin: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <div>
            <Grid item xs={12}></Grid>
            {this.state.showLogin ? (
              <div>
                <Grid item xs={12}>
                  <Register
                    updateToken={this.props.updateToken}
                    updateRole={this.props.updateRole}
                  />
                </Grid>
              </div>
            ) : (
              <div>
                <Login updateToken={this.props.updateToken} />
              </div>
            )}
            <br />
            <Button
              variant="contained"
              onClick={(e) => {
                this.loginToggle(e);
              }}
            >
              {this.state.showLogin ? "Login" : "Sign up"}
            </Button>
          </div>
          <p
            style={{
              position: "absolute",
              left: "50%",
              top: "75%",
              transform: "translate(-50%, -75%)",
            }}
          >
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
      </div>
    );
  }
}
