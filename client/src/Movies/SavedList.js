import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

// const routeToHome = () => {
//   setTimeout (() => {
//     history.pushState("/");
//   })
// }
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie"><Link to ="/">Saved-Movies{movie.title}</Link></span>
    ))}
    <Link to ='/'>
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
