import Navbar from "./components/layout/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";
import FindGame from "./components/game/FindGame";
import Leaderboard from "./components/leaderboard/Leaderboard";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path = '/' component={Dashboard}></Route>
              <Route path = '/signup' component={SignUp}></Route>
              <Route path = '/signin' component={SignIn}></Route>
              <Route path = '/findgame' component={FindGame}></Route>
              <Route path = '/leaderboard' component={Leaderboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
