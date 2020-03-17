import React from 'react';
import Book from './Book';

export default function Results(unformatted) {
    const formattedResults = unformatted.map((book, i) => {
        <Book {...book} key={i} />
    });
    return formattedResults;
}