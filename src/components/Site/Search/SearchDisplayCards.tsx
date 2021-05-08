import React, { Component } 
from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
  CardColumns
  
} from "reactstrap";

type acceptedProps = {
  sessionToken: string | null;
  results: [];
};

export default class SearchDisplayCards extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardDeck>
          {this.props.results.map((result, index) => (
            <Card style={{ margin: "20px 20px 20px 50px", minWidth: "20%", maxWidth: "20%" }}>
              <CardImg
                variant="top"
                src={result.snippet.thumbnails.medium.url}
              />
              <CardBody>
                <CardTitle>{result.snippet.title}</CardTitle>
                <CardText>
                  {/* Some quick example text to build on the card title and make up
                  the bulk of the card's content. */}
                </CardText>
                {/* <Button variant="primary">{result.snippet.resourceId.videoId}</Button> */}
                <Button variant="primary" href={"http://www.youtube.com/watch?v=" + result.snippet.resourceId.videoId}target="_blank"rel="noreferrer">Go</Button>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
              
      </div>
    );
  }
}
