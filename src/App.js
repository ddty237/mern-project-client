import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/write">
          <Write/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
      
      <Register />
    </Router>
  );
}

export default App;
