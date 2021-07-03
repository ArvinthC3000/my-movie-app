import './App.css';
import Movies from './components/Movies';
import MovieState from './context/movies/MoviesState';

const App = () => {
  return (
    <MovieState>
      <Movies />
    </MovieState>
  );
};

export default App;
