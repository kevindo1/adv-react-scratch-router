import './App.css';
import Home from './views/Home';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Ghibli</h1>
        </header>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
