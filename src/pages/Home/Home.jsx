import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Wrapper, Header } from './Home.styled';
import { getTrendingMovies } from '../../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const apiHome = await getTrendingMovies();
      setMovies(apiHome.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
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
      <Header>Trending today</Header>
      {movies && <MoviesList movies={movies} />}
    </Wrapper>
  );
};

export default Home;
