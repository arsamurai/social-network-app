import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import LoginPage from "./Components/Login/Login";
import { compose } from "redux";
import { initializeApp } from "./Redux/App-reducer";
import Preloader from "./Components/Common/Preloader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);
const NewsContainer = React.lazy(() =>
  import("./Components/News/NewsContainer")
);
const Music = React.lazy(() => import("./Components/Music/Music"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));

class App extends React.Component {
  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    alert("Some errors occured, suka!");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  componentWillMount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandleErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <div className="app__inner">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app__content">
            <Switch>
              <Redirect exact from="/" to="/profile" />
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/news" render={withSuspense(NewsContainer)} />
              <Route path="/music" render={withSuspense(Music)} />
              <Route path="/users" render={withSuspense(UsersContainer)} />
              <Route path="/settings" render={withSuspense(Settings)} />
              <Route path="/login" render={() => <LoginPage />} />
              <Route path="*" render={() => <div>404 Not Found</div>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let SamuraiJSApp = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJSApp;
