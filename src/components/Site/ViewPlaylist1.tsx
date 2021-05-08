import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
  CardColumns } from "reactstrap"

type acceptedProps = {
  sessionToken: string | null;
  meditations: [];
};

export default class acceptedProp extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Quick Meditations</h1>
        <CardDeck>
        {this.props.meditations.map((meditation, index) => {
          // console.log(meditation); 
          // return <p key={index}>{meditation.snippet.title}</p>;
            <Card style={{ minWidth: "250px", maxWidth: "250px" }}key={index}>
            <CardImg variant="top"
          src={meditation.snippet.thumbnails.medium.url}/>
              <CardBody>
                <CardTitle>{meditation.snippet.title}</CardTitle>
                <CardText>
                  {/* Some quick example text to build on the card title and make up
                  the bulk of the card's content. */}
                </CardText>
                {/* <Button variant="primary">{result.snippet.resourceId.videoId}</Button> */}
                <Button variant="primary" href="http://www.youtube.com/watch?v={meditation.snippet.resourceId.videoId}">Go</Button>
                </CardBody>
              </Card>
})}
        </CardDeck>
        </div>
     ) }}
  


