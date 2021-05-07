import React, { Component } from "react"; import {
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
    fetchTopics: []
}

export default class TopicsDisplay extends
Component<acceptedProps,{}> {
    constructor(props: acceptedProps) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Topic Card</h1>
            </div>
        )

    }
}