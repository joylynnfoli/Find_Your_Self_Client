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
  CardColumns} from "reactstrap"

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
          console.log(meditation); 
          // return <p key={index}>{meditation.snippet.title}</p>;
        
          <Card style={{ minWidth: "250px", maxWidth: "250px" }}key={index}>
            <CardImg
             variant="top"
                src={result.snippet.thumbnails.medium.url}
              />
              <CardBody>
                <CardTitle>{result.snippet.title}</CardTitle>
                </CardBody>
              </Card>
        ))}
        </CardDeck>
        </div>
    );
  }
}

