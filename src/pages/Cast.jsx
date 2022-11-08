import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { getMovieCast } from '../services/api';
import { CastItem } from '../components/CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  const fetchCast = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await getMovieCast(movieId);
      setCasts(data.cast);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
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
      {casts.length !== 0 ? (
        <CastItem casts={casts} />
      ) : (
        <p>No information found</p>
      )}
    </div>
  );
};

export default Cast;
