import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import MovieModal from './components/modals/MovieModal';
import MovieState from './context/movies/MoviesState';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <MovieState>
      <MovieModal />
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </MovieState>
  );
};

export default App;
