import React from 'react';

class SearchBar extends React.Component {
    render () {
        const {
            onSubmit,
            handleSearchParams,
            handleChangePrint,
            handleChangeType,
            searchParams,
            printFilterValue,
            typeFilterValue
        } = this.props;

        return (
            <form onSubmit={(e) => onSubmit(e)}>
                <input type='text' value={searchParams} onChange={handleSearchParams}/>
                <input type="submit" value="Submit" />
                <p>Print Type</p>
                <select value={printFilterValue} onChange={handleChangePrint}>
                    <option value='all'>all</option>
                    <option value='books'>books</option>
                    <option value='magazines'>magazines</option>
                </select>
                <p>Book Type</p>
                <select value={typeFilterValue} onChange={handleChangeType}>
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