import { Link } from 'react-router-dom';
import About from './About';

const Header = () => {
  return (
    <>
      <div className='app-header'>
        <div className='title'>OMDB API</div>
        <div className='searchBar'>
          <input
            type='text'
            name='movieString'
            placeholder='Search movies...'
          />
        </div>
        <div className='about-container'>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
