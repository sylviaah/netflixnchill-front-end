import './App.css';
import PlanToWatch from '../src/pages/PlanToWatch';
import Watching from '../src/pages/Watching';
import AddToList from '../src/pages/AddToList';
import Info from '../src/pages/Info';
import Completed from '../src/pages/Completed';
import TestPage from '../src/pages/TestPage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/planning-to-watch">
          <PlanToWatch></PlanToWatch>
        </Route>
        <Route exact path="/watching">
          <Watching></Watching>
        </Route>
        <Route path="/completed">
          <Completed></Completed>
        </Route>
        <Route path="/add-to-list">
          <AddToList></AddToList>
        </Route>
        <Route path="/test-page">
          <TestPage></TestPage>
        </Route>
        <Route path="/info/:id">
          <Info></Info>
        </Route>
      </Switch>
    </Router>
  )}

export default App;
