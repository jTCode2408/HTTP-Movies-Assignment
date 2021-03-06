import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      <div key={stars} className="movie-star">
          {stars}
        </div>

      {stars.map(star => (
        <div  className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
