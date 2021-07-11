import { connect } from 'react-redux';
import { getMovies } from '../actions/movieActions';

const SearchBar = () => {
  const searchMovies = e => {
    getMovies(e.target.value);
  };

  return (
    <>
      <div className='searchBar'>
        <input
          type='text'
          onChange={searchMovies}
          name='movieString'
          placeholder='Search movies...'
          style={{ color: 'white' }}
        />
      </div>
    </>
  );
};

export default connect(null, { getMovies })(SearchBar);
