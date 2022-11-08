import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';
import { getMovieDetails } from '../services/api';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { AddInfoText, StyledLink, GoBackBtn } from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies(movieId);
  }, [movieId]);

  const fetchMovies = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await getMovieDetails(movieId);
      setMovie(data);
    } catch (error) {
      toast.error('Page is not found');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section>
        <GoBackBtn to={location?.state?.from ?? '/'}>
          {' '}
          <FaArrowLeft /> Go back
        </GoBackBtn>
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
        {movie && <MovieInfo movie={movie} />}
      </section>
      <hr />
      <section>
        <AddInfoText>Additional information:</AddInfoText>

        <StyledLink
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from }}
        >
           Cast 
        </StyledLink>
        <StyledLink
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from }}
        >
           Reviews 
        </StyledLink>
      </section>
      <hr />

      <Outlet />
    </main>
  );
};

export default MovieDetails;
