import React from 'react';
import { Accounts } from 'meteor/accounts-base';

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
        Accounts.logout();
    }
}

