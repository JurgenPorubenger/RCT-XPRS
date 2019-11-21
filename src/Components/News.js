
import React from 'react';

export default class News extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }
    render() {
            return <h1>Hello, {this.props.data}</h1>;
    }
}

