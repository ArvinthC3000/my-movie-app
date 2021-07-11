import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import MovieModal from './components/modals/MovieModal';
import MovieState from './context/movies/MoviesState';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      {/* <MovieModal /> */}
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
