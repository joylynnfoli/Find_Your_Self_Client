import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    padding: "30px",
  },
  media: {
    height: 325,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  font: {
    color: "white",
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  header: {
    textAlign: "center",
    justify: "center",
    alignContent: "center",
    width: "100%",
  },
};

type searchProps = {
  sessionToken: string | null;
};

export default class Search extends Component<searchProps, {}> {
  constructor(props: searchProps) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
    this.fetchPlaylist();
  }
  fetchPlaylist = () => {
    console.log("fetch ran");
    fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLvcW4S4nxekJdH_D-BWj69KtifYy4vcSo&key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI`
    )
      .then((res) => res.json())
      .then((json) => {
        json.results;
        console.log(json);
      });
  };

  // addPlaylist = (id, default) => {
  //   console.log({ id, default });
  //   fetch(`${APIURL}/favorites/add`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       favorites: {},
  //     }),
  //   }).then((res) => console.log(res.json()));
  // };

  render() {
    return (
      <div>
        <TextField
          variant="outlined"
          color="secondary"
          value="Search"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
        />
        {/* <Card
          style={{
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <CardActionArea>
            <CardMedia title="Contemplative Reptile" />
            <CardContent>
              <Typography>Welcome to the KB</Typography>
              <Typography></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card> */}
      </div>
    );
  }
}
