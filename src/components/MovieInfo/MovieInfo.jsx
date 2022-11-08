import propTypes from 'prop-types';
import {
  CardInfoWrapper,
  CardInfo,
  CardItem,
  CardGenresList,
  CardGenresItem,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  return (
    <CardInfoWrapper>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <CardInfo>
        <h2>{movie.title}</h2>
        <CardItem>User Score: {Math.round(movie.vote_average * 10)} %</CardItem>
        <CardItem>Overview:</CardItem>
        <CardItem>{movie.overview}</CardItem>
        <CardItem>Genres:</CardItem>
        <CardGenresList>
          {movie.genres &&
            movie.genres.map(({ id, name }) => (
              <CardGenresItem key={id}>{name}</CardGenresItem>
            ))}
        </CardGenresList>
      </CardInfo>
    </CardInfoWrapper>
  );
};

MovieInfo.propTypes = {
  movie: propTypes.object.isRequired,
};
