let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "ifsfys-client.herokuapp.com/":
    APIURL = "https://ifsfys.herokuapp.com/";
}

export default APIURL;
