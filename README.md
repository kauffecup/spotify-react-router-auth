# Spotify Authorization With React + React-Router

This is an example application demonstrating authenticating a user
[against the Spotify Web API][sag], using [React][r] and [React-Router][rr]
and [Redux][rx] and [React-Router-Redux][rrr].

## Similarities to Spotify's [Web Auth Examples][wae]

This example is a variation on the `authorization_code` demo from Spotify's
[Web Auth Examples][wae]. The main difference is the client code; whereas their
example is contained in one `index.html` file, this example shows how to do the
same thing with React and React-Router.

The other difference is the updated server code. Instead of using `request`
directly (and XHR in the browser), this example interfaces with Spotify through
the [Spotify Web API Node Module][swn] (and [Spotify Web Api Client][swj] in the
browser). It also uses fun ES6 goodness. I opened a [pull request][spr] with
them to update their server code to what you see here.

## Client Code Structure

The client code is built with [React][r] and [React-Router][rr] and [Redux][rx]
and [React-Router-Redux][rrr]. phew!

The only real config this requires is in `client/index.js`:

~~~js
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={hashHistory}>
          <Route path="/" component={App}/>
        </ConnectedRouter>
      </Provider>
    );
  }
}
~~~

Here, we initialize redux with our store, initialize react router with its
history object. Everything else is a fairly traditional React app - the
components are in `client/components`, the actions are in `client/actions`,
and the reducer is in `client/reducers`.

## Server Code Structure

Under the `server` directory are two files `app.js` and `routes.js`. `app.js`
handles all the setup, and all the routes are in, well, `routes.js`.

## Application Flow

The basic flow is this: client hits `/login`, gets redirected to Spotify's auth
url, then gets redirected to `/callback`. If all is good and dandy, we send the
client to `/#/user/${access_token}/${refresh_token}` which triggers the User
page to load via React-Router. If all ain't good, we redirect the client to
`/#/error/${error message}` which triggers the Error page to load via
React-Router.

Once the client has the tokens, it requests information from spotify directly
through use of the [Spotify Web API Client][swj]. This happens in
`client/actions`, and the resulting data is interpreted through our reducer.
Once the client has the data, `User.js` defines how it renders.

## Set Up

Make sure you create your application, get your id and secret, and register
your callback url - `localhost:3000/callback` is what I used - by following
[Spotify's Getting Started Guide][sgs].

## Running

The first thing you'll need to do is set your applications client id, client
secret, and callback url. You can do this via the environment variables
`client_id`, `client_secret`, and `redirect_uri`. Or by typing them into the
code in `server/routes.js`. Fun tip: because we're using [Better NPM Run][bnr],
you can set these in your `package.json` - head over there to see an example.

There are three scripts - `start`, `dev`, and `build`.

To run the production bundle:

~~~bash
$ npm run build
$ npm start
~~~

To run in dev mode (with hot reloading, and un-minified source maps):

~~~bash
$ npm run dev
~~~

## Further Reading

The application structure is a simplified version of my
[React + Redux + Webpack Boilerplate][bp] for better ease of understanding.
It can certainly be awesome-ified (and maybe a little more complicated) by
doing some of the fun tricks in there.

  - [Spotify's Getting Started Guide][sgs]
  - [Spotify's Web API Authorization Guide][sag]
  - [Spotify Web API Node][swn]
  - [Spotify Web API JS/Client][swj]
  - [Spotify's Web API Auth Exampls][wae]
  - [My Pull Request enhancing Spotify's examples][spr]
  - [React Router][rr]
  - [React Router Redux][rrr]
  - [React][r]
  - [Redux][rx]
  - [Better NPM Run][bnr]
  - [React + Redux + Webpack Boilerplate][bp]

[sgs]: https://developer.spotify.com/web-api/tutorial/
[sag]: https://developer.spotify.com/web-api/authorization-guide/
[swn]: https://github.com/JMPerez/spotify-web-api-node
[swj]: https://github.com/JMPerez/spotify-web-api-js
[wae]: https://github.com/spotify/web-api-auth-examples
[spr]: https://github.com/spotify/web-api-auth-examples/pull/7
[rr]:  https://github.com/rackt/react-router
[rrr]: https://github.com/rackt/react-router-redux
[r]:   https://facebook.github.io/react/
[rx]:  http://redux.js.org/
[bnr]: https://www.npmjs.com/package/better-npm-run
[bp]:  https://github.com/kauffecup/react-redux-webpack-boilerplate
