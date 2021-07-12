import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ match }) => {
  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB API</div>
        <SearchBar />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
