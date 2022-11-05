import { history } from "./history";
import { Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewsFeed from "./pages/NewsFeed";

const App = () => {
  
  return (
    <Router history={history}>
      <Route path="/" exact component={Login} />
      <Route path="/profile" exact component={Profile}/>
      <Route path="/news" exact component={NewsFeed} />
    </Router>
  );
}

export default App;
