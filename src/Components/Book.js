import React from 'react';

export default class Book extends React.Component {

    mapComponents = () => {
        console.log('book props', this.props);
    };

    render() {
        return (
        <div>
            {console.log('book props', this.props)}
            <h1>{this.mapComponents}</h1>
        </div>
        );
    }
}