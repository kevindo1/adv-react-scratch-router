import './App.css';
import Home from './views/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Movie from './views/Movie/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:movieId">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
