import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
        {/* this is the first div nth-of-type (1) */}
      <div> 
        <p>{Year}</p>
      </div>
    {/* second  nth-of-type (2)*/}
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>
    {/* nth-of-type (3) */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;