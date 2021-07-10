import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ match }) => {
  console.log(match);
  console.log(match?.url);

  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB API</div>
        <SearchBar />
        <ul>
          {match && (
            <li>
              <Link to='/'>Home</Link>
            </li>
          )}
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
