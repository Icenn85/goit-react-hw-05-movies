import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { StyledLink } from './Home.styled';
import { getTrendingMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await getTrendingMovies();
      setMovies(data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {isLoading && (
        <div>
          <Circles
            color="#f07416"
            arialLabel="loading-indicator"
            height={80}
            width={80}
          />
        </div>
      )}
      <h1>Today's trending</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
