import React, {Component} from 'react';
import Header from './Components/Header';
import './App.css';
import SearchBar from "./Components/SearchBar";
import axios from 'axios';

const API_KEY = `AIzaSyCQDAAoCqWAZ5peUp3GLtxZDcXsm9qPe14`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        results: {},
    }


  }

  updateResults = (res) => {
      this.setState({results: res})
        console.log('CHECK RESULTS', this.state.results);
      if (this.state.results !== {}) {
          const {results} = this.state.results.data.items;
          const mappedResults = results.map(book => {
              return (
                  <div>
                      <h2>
                          {book.volumeInfo.title}
                      </h2>
                      <p>
                          {book.volumeInfo.authors}
                          `${book.saleInfo.listPrice.amount}${book.saleInfo.listPrice.currencyCode}`
                      </p>
                      <p>
                          {book.searchInfo.textSnippet}
                      </p>
                  </div>
              );
          });
          this.setState({mappedResults: mappedResults});
      } else {
          const mappedResults = 'Loading...';
          this.setState({mappedResults: mappedResults});
      }
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
                  .catch(err => {
                      this.setState({
                          error: err.message
                      })
                  })
          })
  };

    render () {
    return (
        <div>
          <Header />
          <SearchBar getBooks={(searchTerm, printType, bookType)=> this.getBooks(searchTerm, printType, bookType)} />
          <Results results={this.state.results} />
        </div>

    );
  }
}

export default App;
