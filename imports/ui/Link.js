import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {
    render() {
        return (
            <div>
                <h2>Links</h2>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        )
    }

    logout() {
        browserHistory.push('/');
    }
}

