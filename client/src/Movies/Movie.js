import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Route, useRouteMatch, Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieList from './MovieList';


const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    const id = props.items.find(Movie => Movie.id === Number(useParams.itemID));
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    const {path, url} = useRouteMatch ();
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    <Link to={`/movielist ${id.id}`}>Movie List</Link>
    <Route path={`/movie-card/:itemID/moviecard`}>
      <MovieCard Movie={movie}/>
    </Route>
    <Route path={`/movie-list/:itemID/movielist`}>
      <MovieList Movie={movie}/>
    </Route>
    </div>
   
   
    
  );
}

export default Movie;
