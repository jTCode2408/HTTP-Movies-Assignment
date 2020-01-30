//form to update movie via put req
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';



const initialItem = {
    id: '',
title:'',
director: '',
metascore: '',
stars: []
  };
  
  const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialItem);
    const { id } = useParams();
  
    // useEffect(() => {
    //   const itemToUpdate = movie.find(thing => `${thing.id}` === id);
  
    //   if (itemToUpdate) {
    //     setMovie(itemToUpdate);
    //   }
    // }, [props.movie, id]);
  
    const handleChange = ev => {
      ev.persist();
      let value = ev.target.value;
      if (ev.target.name === 'price') {
        value = parseInt(value, 10);
      }
  
      setMovie({
        ...movie,
        [ev.target.name]: value
      });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      // make a PUT request to edit the item
      axios
        .put(`http://localhost:5000/api/movies/${id}`, movie)
        .then(res => {
          // res.data is the FULL array with the updated item
          // That's not always the case. Sometimes you need to build your
          // own updated array
          props.setMovie(res.data);
          props.history.push(`/`);
        })
        .catch(err => console.log(err));
    };

    return(
        <div>
            <h1>
                Update Movie Info
            </h1>

            <form onSubmit ={handleSubmit}>
                {/* <input
                type="text"
                name="movie"
                onChange={changeHandler}
                placeholder="movie"
                value={update.movie}
                /> */}
 <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
                value={movie.title}
                />
                 <input
                type="text"
                name="director"
                onChange={handleChange}
                placeholder="director"
                value={movie.director}
                />
                 <input
                type="text"
                name="metascore"
                onChange={handleChange}
                placeholder="metascore"
                value={movie.metascore}
                />
                 <input
                type="text"
                name="stars"
                onChange={handleChange}
                placeholder="stars"
                value={movie.stars}
                />

            <button>Edit</button>


            </form>
        </div>
    )

}

export default UpdateMovie;