import React, { Component } from "react";
import { Jumbotron, Button, Carousel } from 'reactstrap';
import Login from "./Login";
import Register from "./Register";
// import backgroundImage from "./Assets/"
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components'
import ImageCenterFocusStrong from "material-ui/svg-icons/image/center-focus-strong";
// import "../auth/"

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
         <Jumbotron>
           <div className="bg-gray-900 min-hscreen flex items-center justify center"></div>
          

           <h1>Find Your Self</h1>
         {/* <div className="Banner" 
         style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1511448598600-c01f02a2ee95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`, 
          width: 100%
          backgroundSize: 100%
           }}>
            </div>  */}
            </Jumbotron>
        <div id="container">
          {this.state.showLogin ? (
            <div>
              <Register
                updateToken={this.props.updateToken}
                updateRole={this.props.updateRole}
              />
            </div>
          ) : (
            <div>
              <Login updateToken={this.props.updateToken} />
            </div>
          )}
          <br />
          <Button style={{
            position: "relative",
            left: "50%",
            top: "75%",
            // transform: "translate(-50%, -75%)",
            marginBottom: "20px",
            padding: "20px, 50px, 20px"
          }}
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
            position: "relative",
            // left: "10%",
            // marginRight: "20px",
            top: "75%",
            // alignItems: "center",
            // transform: "translate(-50%, -75%)",
            marginBottom: "20px",
            // padding: "20px, 20px, 20px",
            maxWidth: "600px",
            marginLeft: "30%",
          }}
        >
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
