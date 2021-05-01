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
            <Card style={{ width: "1rem" }}>
              <CardImg
                variant="top"
                src={result.snippet.thumbnails.medium.url}
              />
              <CardBody>
                <CardTitle>{result.snippet.title}</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button variant="primary">Go somewhere</Button>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </div>
    );
  }
}
