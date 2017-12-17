import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from "./User";
import Login from "./Login";
import Error from "./Error";

/**
 * Main app component
 * Has a header and then render's the page content
 */
export default class SpotifyLogin extends Component {

  constructor (props){
    super(props);
  }

  render() {
    return (
      <div className="spotify-login">
        <h1>Example Spotify + React + React-Router Login Flow</h1>
        <div className="page-content">
          <p>This is an example of the Authorization Code flow using routes.</p>
          <Switch>
            <Route exact path="/user/:accessToken/:refreshToken" component={User} />
            <Route exact path="/error/:errorMsg" component={Error} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
