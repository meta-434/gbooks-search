import React from 'react';

class SearchBar extends React.Component {
    state = {
        printFilterValue: 'all',
        typeFilterValue: 'nofilter',
        searchParams: undefined,
    };

    handleChangePrint = (e) => {
        console.log('e.target.value', e.target.value);
        this.setState({printFilterValue: e.target.value});
    };

    handleChangeType = (e) => {
        this.setState({typeFilterValue: e.target.value});
    };

    handleSearchParams = (e) => {
        this.setState({searchParams: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getBooks(this.state.searchParams, this.state.printFilterValue, this.state.typeFilterValue);
    };


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.searchParams} onChange={this.handleSearchParams}/>
                <input type="submit" value="Submit" />
                <p>Print Type</p>
                <select value={this.state.printFilterValue} onChange={this.handleChangePrint}>
                    <option value='all'>all</option>
                    <option value='books'>books</option>
                    <option value='magazines'>magazines</option>
                </select>
                <p>Book Type</p>
                <select value={this.state.typeFilterValue} onChange={this.handleChangeType}>
                    <option value='nofilter'>no filter</option>
                    <option value='partial'>partial</option>
                    <option value='full'>full</option>
                    <option value='free-ebooks'>free ebooks</option>
                    <option value='paid-ebooks'>paid ebooks</option>
                    <option value='ebooks'>ebooks</option>
                </select>
            </form>

        );
    }
}

export default SearchBar;