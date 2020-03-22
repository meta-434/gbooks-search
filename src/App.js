import React from 'react';
import Header from './Components/Header';
import './App.css';
import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results";

const API_KEY = `AIzaSyCQDAAoCqWAZ5peUp3GLtxZDcXsm9qPe14`

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          results: {},
          printFilterValue: 'all',
          typeFilterValue: 'nofilter',
          searchParams: undefined,
      }
  }

    handleChangePrint = (e) => {
        this.setState({printFilterValue: e.target.value});
    };

    handleChangeType = (e) => {
        this.setState({typeFilterValue: e.target.value});
    };

    handleSearchParams = (e) => {
        this.setState({searchParams: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.getBooks(this.state.searchParams, this.state.printFilterValue, this.state.typeFilterValue);
    };

    getBooks = (searchTerm, printType, bookType) => {
      console.log(searchTerm, printType, bookType);
      const bt = (bookType === 'nofilter') ? ('') : (`&filter=${bookType}`);

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10${bt}&printType=${printType}&key=${API_KEY}`)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Something went wrong...');
              }
              return response;
          })
          .then(response => response.json())
          .then(data => {
              this.setState({
                  results: data,
                  error: null,
              })
          });
  };

    render () {
        return(
            <div>
                <Header/>
                <SearchBar
                    handleChangePrint={(e) => this.handleChangePrint(e)}
                    handleChangeType={(e) => this.handleChangeType(e)}
                    handleSearchParams={(e) => this.handleSearchParams(e)}
                    onSubmit={(e) => this.onSubmit(e)}
                    printFilterValue={this.state.printFilterValue}
                    typeFilterValue={this.state.typeFilterValue}
                    searchParams={this.state.searchParams}
                />
                <Results results={this.state.results} />
            </div>
        );
  }
}

export default App;