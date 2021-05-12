import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardDeck,
} from "reactstrap";

type acceptedProp = {
  sessionToken: string | null;
  meditations: any[];
};

export default class acceptedProps extends Component<acceptedProp, {}> {
  constructor(props: acceptedProp) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            marginRight: "auto",
            fontFamily: "Rock Salt",
            fontSize: "larger",
            fontWeight: "bold",
            paddingTop: "2rem",
          }}
        >
          Quick Meditations
        </h1>
        <CardDeck>
          {this.props.meditations.map((meditation, index) => {
            console.log(meditation);
            return (
              <Card
                style={{ margin: "20px 20px 20px 50px", minWidth: "25%" }}
                key={index}
              >
                <CardImg
                  variant="top"
                  src={meditation.snippet.thumbnails.medium.url}
                />
                <CardBody>
                  <CardTitle>{meditation.snippet.title}</CardTitle>

                  <Button
                    variant="primary"
                    href={
                      "http://www.youtube.com/watch?v=" +
                      meditation.snippet.resourceId.videoId
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}
