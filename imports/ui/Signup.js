import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}