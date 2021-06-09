import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meet">
          <NewMeetupPage />
        </Route>
        <Route path="/fav-page">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
