import Favourite from './Favourite';
import Header from './Header';
import Movies from './Movies';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Movies />
      <Favourite />
    </div>
  );
};

export default Home;
