import React, { Component } from 'react';

/**
 * Our error page
 * Displays the error
 */
export default class Login extends Component {

  constructor (props){
    super(props);
  }

  render() {
    // injected via react-router
    const { errorMsg } = this.props.match.params;
    return (
      <div className="error">
        <h2>An Error Occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}
