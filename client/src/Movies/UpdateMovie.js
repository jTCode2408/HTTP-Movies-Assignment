//form to update movie via put req
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Movie from './Movie';


const initalMovie = {
    movie:'',
    id: '',
    title: '',
    director: '',
    metascore: '', //number
    stars: [''] //array of strings(names)
}
const UpdateMovie = props =>{
const [update, setUpdate]=useState(initalMovie);
const {id} = useParams();

// useEffect(()=>{
// // const movieToUpdate = props.movies.find(movie => `${movie.id}` ===id);
// if (movieToUpdate){
//     setUpdate(movieToUpdate);
// }
// },[props.movies, id]); 

const changeHandler = e =>{
    let value = e.target.value;
    if(e.target.name ==='metascore'){
        value =parseInt(value,10)
    }

    setUpdate({
        ...update,
        [e.target.name]: value
    });
}


const handleSubmit = e =>{
    e.preventDefault();

    axios
    .put(`http://localhost:5000/api/movies/${id}`, update)
    .then(res =>{
        console.log('UPDATE RES',res)
        // props.setUpdate(res.data);
        props.history.push('/');
    })
    .catch(err=>{
        console.log('update',err)
    })
}


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
                onChange={changeHandler}
                placeholder="title"
                value={update.title}
                />
                 <input
                type="text"
                name="director"
                onChange={changeHandler}
                placeholder="director"
                value={update.director}
                />
                 <input
                type="text"
                name="metascore"
                onChange={changeHandler}
                placeholder="metascore"
                value={update.metascore}
                />
                 <input
                type="text"
                name="stars"
                onChange={changeHandler}
                placeholder="stars"
                value={update.stars}
                />

            <button>Edit</button>


            </form>
        </div>
    )

}

export default UpdateMovie;