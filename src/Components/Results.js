import React from 'react';
import Book from './Book';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results : undefined
        }
    }

    componentDidMount() {
        console.log('results props', this.props)
    }

    render() {
        return(
            <Book results={this.state.results} />
        )
    }
}