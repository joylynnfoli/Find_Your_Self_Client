import React, { Component } from 'react'

type acceptedProps={
    updateToken: (newToken:string)=> void;
}

export class Auth extends Component<acceptedProps,
{}>{
    constructor (props: acceptedProps){
        super(props);
        this.state = {}
        console.log(props)
    }
    render() {
        return (
            <div>
                <p>Hello from Auth!!</p>
            </div>
        )
    }
}
