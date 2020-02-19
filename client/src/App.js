import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
// import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route path="/" exact component={MovieList} />
      <Route path="/Movies/:id" component={Movie} />  
         
      </div>
    </div>
  );
};

export default App;
