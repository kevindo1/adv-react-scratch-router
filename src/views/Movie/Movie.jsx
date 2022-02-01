import React from 'react';
import { useState, useEffect } from 'react';
import { getMovie } from '../../services/fetch';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie(movieId);
      setMovieDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [movieId]);

  if (loading) {
    <h2>Loading</h2>;
  }

  const { title, image, director, description } = movieDetails;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="movie image" />
      <p>Director: {director}</p>
      <p>{description}</p>
    </div>
  );
}
