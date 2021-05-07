import React, { Component } from 'react'
import APIURL from "../../helpers/environment";

type acceptedProps = {
    sessionToken: any | null
}

export default class Comments extends 
Component<acceptedProps, {}> {
constructor(props: acceptedProps) {
    super(props);
}
render (){
    return(
        <div>
            <h1>Comments</h1>
        </div>
    )
}
}


