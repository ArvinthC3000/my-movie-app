import { Link } from 'react-router-dom';
import About from './About';

const Header = ({ match }) => {
  console.log(match);
  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB API</div>
        <div className='searchBar'>
          <input
            type='text'
            name='movieString'
            placeholder='Search movies...'
          />
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        {/* <div className='about-container'>
        </div> */}
      </nav>
    </>
  );
};

export default Header;
