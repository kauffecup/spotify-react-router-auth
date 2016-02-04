import React, { Component } from 'react';

/**
 * Our error page
 * Displays the error
 */
export default class Login extends Component {
  render() {
    // injected via react-router
    const { errorMsg } = this.props.params;
    return (
      <div className="error">
        <h2>An Error Occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}
