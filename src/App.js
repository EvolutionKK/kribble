import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Play from './Components/Play';


function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path = '/' exact component={Home}></Route>
        <Route path = '/play' exact component={Play}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
