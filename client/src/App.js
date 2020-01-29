import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);

  
  };
  const [movies, setMovies] =useState();
  const updateMovies = movie =>{
    setMovies([...movies, movie]);
  }
  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path ="/update-movie/:id" render ={props=>( <UpdateMovie {...props} movies={movies} setMovies={setMovies}/>)}/>
    </>
  );
};

export default App;
