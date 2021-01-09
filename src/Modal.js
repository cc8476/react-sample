import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const portalContainer = document.getElementById('another-root');


export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                {ReactDOM.createPortal(this.props.children,portalContainer)}
            </div>
        )
    }
}
