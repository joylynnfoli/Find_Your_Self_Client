import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SearchDisplayCards from "./SearchDisplayCards";

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

type acceptedCategories = {
  categories: string | null;
  results: [];
};

export default class Search extends Component<searchProps, acceptedCategories> {
  constructor(props: searchProps) {
    super(props);
    this.state = {
      categories: "",
      results: [],
    };
    console.log(props);
  }

  componentDidMount() {
    // this.fetchPlaylist();
  }
  fetchPlaylist = () => {
    console.log("fetch ran");
    fetch(`${this.state.categories}`)
      .then((res) => res.json())
      .then((json) => {
        json.results;
        this.setState({ results: json.items });
        console.log(json);
      });
  };

  handleChangeCategories = (event: any) => {
    this.setState({ categories: event.target.value });
    console.log(this.state.categories);
    this.fetchPlaylist();
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
        <Select onChange={this.handleChangeCategories}>
          <MenuItem value="">None</MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekLPw4xDkC2eL5VxCD1yWZxb&maxResults=50`}
          >
            Trauma
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekL3-UvsPAzE77TcxppiofCX&maxResults=50`}
          >
            Parenting
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekL3ccAWfloG7LbZDQlzJumV&maxResults=50`}
          >
            Complete Sessions
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLOf1Ju04a3JTwbdK2VbmRyie7AI9tpm78&maxResults=50`}
          >
            IFS Training for Therapists
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekJFIo5c3JTfwCuKSiEUFroM&maxResults=50`}
          >
            Richard Schwartz Podcasts
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekIMz2mAmvg2oH_jkujPRcby&maxResults=50`}
          >
            IFS for Couples
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekLnZdmvRKfWAmEuIHez5si5&maxResults=50`}
          >
            Ketamine Assisted Therapy
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekLu37mC2R66e0Sv_1qBgFsY&maxResults=50
`}
          >
            Working with Shame
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekL7G02E_t78idz7UBhOQD89&maxResults=50`}
          >
            Intro to IFS
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekId4TrieIUNeeLgqxpHYmNO&maxResults=50`}
          >
            Jay Earley
          </MenuItem>
          <MenuItem
            value={`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq1DNOq8c_YP9sqDKEYt_iJUD5XFdLLzI&part=snippet&playlistId=PLvcW4S4nxekK0BxXf-TagMIXukf0NYBKA&maxResults=50`}
          >
            Addiction
          </MenuItem>
        </Select>
        <Button
          style={{
            minWidth: "20%",
          }}
          variant="contained"
          // color="red"
          onClick={() => {
            this.fetchPlaylist();
          }}
        >
          Show Results
        </Button>
        <SearchDisplayCards
          sessionToken={this.props.sessionToken}
          results={this.state.results}
        />
      </div>
    );
  }
}
