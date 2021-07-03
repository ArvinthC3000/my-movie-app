import Favourite from './Favourite';
import Movies from './Movies';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Movies />
      <Favourite />
    </div>
  );
};

export default Home;
