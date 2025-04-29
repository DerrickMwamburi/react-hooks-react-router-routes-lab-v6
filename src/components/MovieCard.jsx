import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movies/${title.toLowerCase().replace(/\s+/g, '-')}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;