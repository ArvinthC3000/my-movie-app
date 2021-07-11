// import Favourite from './Favourite';
import { connect } from 'react-redux';
import Header from './Header';
import Movies from './Movies';

const Home = () => {
  return (
    <div>
      <Header />
      <Movies />
      {/* <Favourite /> */}
    </div>
  );
};

export default connect(null)(Home);
