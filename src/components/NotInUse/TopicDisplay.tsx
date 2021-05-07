import React, { Component } from "react";


type acceptedProps = {
    sessionToken: string | null;
    fetchTopics: []
};

export default class acceptedProp extends
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