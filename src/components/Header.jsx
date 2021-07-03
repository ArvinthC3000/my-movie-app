import { Link } from 'react-router-dom';
import About from './About';

const Header = ({ match }) => {
  console.log(match);
  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB API</div>
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
