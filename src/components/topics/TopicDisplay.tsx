import React, { Component } from "react";
import acceptedProp from "../NotInUse/ViewPlaylist";

type acceptedProps = {
    sessionToken: string | null;
    fetchTopics: []
};

export default class TopicsDisplay extends
Component<acceptedProp, {}> {
    constructor(props: acceptedProps) {
        super(props);
        this.state = {};
    }
render() {
    return(
    <div>
        <h1>

        </h1>
    </div>)
}
    
}