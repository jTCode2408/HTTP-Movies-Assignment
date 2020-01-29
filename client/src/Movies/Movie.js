import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UpdateMovie from './UpdateMovie';


export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };


    
  handleUpdate =e =>{
    const updateMovie =this.props.updateMovie;
    // updateMovie(this.state.movie);
    e.preventDefault();
    this.props.history.push(`/update-movie/${e.id}`)
  }
    // updateMovie = (event) => {
    //  const {id}= this.props.match.params.id
    //   event.preventDefault();
    //   this.props.history.push(`/update-movie/${id}`);
    //   const editMovie =this.props.editMovie;
    // editMovie(this.state.movie);
    // };
  
  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Route path ="/update-movie/:id" render ={props=>( <UpdateMovie {...props} movie={this.state.movie}/>)}/>
      <div className = "edit-button"> <button onClick ={this.handleUpdate}>Edit</button></div>

      </div>
    );
  }
}
