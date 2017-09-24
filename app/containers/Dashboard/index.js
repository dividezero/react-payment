/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {UserDetails} from "../../components/UserDetails";

const loggedUser = {
  "id": "user_OCHy0G45SLmKcRZc",
  "created_at": 1452249298,
  "initials": "JS",
  "email": "2@test.com",
  "first_name": "Josh",
  "last_name": "Sheilder",
  "admin": true,
  "account": {
    "id": "acc_WcuWD6gDzNsop4lE",
    "created_at": "2016-01-08 10:34:58 +0000",
    "livemode": true,
    "name": "1",
    "balance": "150000.0",
    "card_number": "1111222233334444",
    "status": "active"
  }
}
const users = [{
  "id": "user_OCHy0G45SLmKcRZc",
  "created_at": 1452249298,
  "initials": "JS",
  "email": "2@test.com",
  "first_name": "Josh",
  "last_name": "Sheilder",
  "admin": true,
  "account": {
    "id": "acc_WcuWD6gDzNsop4lE",
    "created_at": "2016-01-08 10:34:58 +0000",
    "livemode": true,
    "name": "1",
    "balance": "150000.0",
    "card_number": "1111222233334444",
    "status": "active"
  }
}, {
  "id": "user_OCHy0G45SLmKcRZc",
  "created_at": 1452249298,
  "initials": "JS",
  "email": "2@test.com",
  "first_name": "Josh",
  "last_name": "Sheilder",
  "admin": true,
  "account": {
    "id": "acc_WcuWD6gDzNsop4lE",
    "created_at": "2016-01-08 10:34:58 +0000",
    "livemode": true,
    "name": "1",
    "balance": "150000.0",
    "card_number": "1111222233334444",
    "status": "active"
  }
}, {
  "id": "user_OCHy0G45SLmKcRZc",
  "created_at": 1452249298,
  "initials": "JS",
  "email": "2@test.com",
  "first_name": "Josh",
  "last_name": "Sheilder",
  "admin": true,
  "account": {
    "id": "acc_WcuWD6gDzNsop4lE",
    "created_at": "2016-01-08 10:34:58 +0000",
    "livemode": true,
    "name": "1",
    "balance": "150000.0",
    "card_number": "1111222233334444",
    "status": "active"
  }
}];

const demo_accounts = [
  {
    "id": "acc_tmnmdPRWjyDSk8LI",
    "created_at": 1452160703,
    "livemode": true,
    "name": "test_account",
    "balance": "110.0",
    "card_number": "1234123412341234",
    "status": "active"
  },
  {
    "id": "acc_tmnmdPRWjyDSk8LI",
    "created_at": 1452160703,
    "livemode": true,
    "name": "test_account_2",
    "balance": "402.0",
    "card_number": "1234123412341234",
    "status": "active"
  }
];

export default class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      accounts: demo_accounts,
      activeAccount: demo_accounts[0]
    }
  }

  setActiveAccount = (account)=>{
    this.setState({
      activeAccount:account
    })
    console.log(this.state)
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <UserDetails user={loggedUser} accounts={this.state.accounts} activeAccount={this.state.activeAccount}
                       setActiveAccount={this.setActiveAccount.bind(this)} dispatch={() => {
          }}/>
        </div>
      </div>
    );
  }
}

const styles = {
  "container": {
    display: "flex",
    padding: "20px"
  }
};
