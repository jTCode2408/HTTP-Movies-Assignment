//form to update movie via put req
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const initalMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '', //number
    stars: [''] //array of strings(names)
}
const UpdateMovie = props =>{
const [update, setUpdate]=useState(initalMovie);
const {id} = useParams();

setUpdate({
    ...Movie,
    [e.target.name] :value
});

const handleSubmit = e =>{
    e.preventDefault();

    axios
    .put(`http://localhost:5000/api/movies/${id}`, update)
    .then(res =>{
        console.log('UPDATE RES',res)
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
                <input
                type="text"
                name="id"
                onChange={changeHandler}
                placeholder="id"
                value={update.id}
                />




            </form>
        </div>
    )

}

export default UpdateMovie;