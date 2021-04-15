import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomeFeed from './pages/feed/HomeFeed.jsx';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomeFeed} />
        </Switch>
    </div>
  );
}

export default App;
