import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import MovieState from './context/movies/MoviesState';

const App = () => {
  return (
    <MovieState>
      <Header />
      <Movies />
    </MovieState>
  );
};

export default App;
