import { history } from "./history";
import { Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  
  return (
    <Router history={history}>
      <Route path="/" exact component={Login} />
      <Route path="/profile" exact component={Profile}/>
    </Router>
  );
}

export default App;
