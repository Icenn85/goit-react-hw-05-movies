import { SearchBox } from '../components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { getSearchMovies } from '../services/api';
import { MoviesList } from '../components/MoviesList/MoviesList';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        setIsLoading(true);
        try {
          const { data } = await getSearchMovies(query);
          setMovies(data.results);
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      };
      fetchMovies();
    }
  }, [query]);

  const onHandleSubmit = (query) => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <div>
      
      <SearchBox onSubmit={onHandleSubmit} />
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
      {movies.length > 0 && <MoviesList movies={movies} />}
      {movies.length === 0 && query !== '' && (
        <p>
          Sorry, there is no films for your results! Try to find something else!
        </p>
      )}
    </div>
  );
};

export default Movies;
