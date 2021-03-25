import './App.css';
import Home from './components/Home';
import Operations from './components/Operations';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Operations} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;