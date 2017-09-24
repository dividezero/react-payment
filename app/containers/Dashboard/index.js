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
import AppBar from 'material-ui/AppBar';
import {AccountDetails} from "../../components/AccountDetails";
import {PaymentDetails} from "../../components/PaymentDetails";
import {UserDetails} from "../../components/UserDetails/index";
import {MakePaymentDialog} from "../../components/MakePaymentDialog/index";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';

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
};
const activeUser = {
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
};
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
  "initials": "JD",
  "email": "3@test.com",
  "first_name": "James",
  "last_name": "Dean",
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
  "initials": "MB",
  "email": "2@test.com",
  "first_name": "Mary",
  "last_name": "Bennet",
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

const demo_payments = [{
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}, {
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}, {
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}];

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color={"white"}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText={<Link to={"/"}>Sign out</Link>}/>
  </IconMenu>
);


export default class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      loggedUser: loggedUser,
      activeUser: activeUser,
      users: users,
      accounts: demo_accounts,
      activeAccount: demo_accounts[0],
      payments: demo_payments
    }
  }

  setActiveAccount = (account) => {
    this.setState({
      activeAccount: account
    });
    console.log(this.state)
  };

  setActiveUser = (user) => {
    this.setState({
      activeUser: user
    });
    console.log(this.state)
  };

  makePayment = (desc, amt, ccy) => {
    //todo
    console.log(this.state.activeAccount.id, desc, amt, ccy);
  };

  topupAccount = (amount) =>{
    console.log("topup acc", amount);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Payment App"
          iconElementLeft={<div></div>}
          iconElementRight={<Logged />}
        />
        <div style={styles.container}>
          <div style={styles.leftColumn}>
            <UserDetails user={this.state.activeUser} users={this.state.users} accounts={this.state.accounts}
                         activeAccount={this.state.activeAccount}
                         setActiveUser={this.setActiveUser.bind(this)} dispatch={() => {
            }}/>
            <AccountDetails user={loggedUser} accounts={this.state.accounts} activeAccount={this.state.activeAccount}
                            setActiveAccount={this.setActiveAccount.bind(this)} topupAccount={this.topupAccount.bind(this)} dispatch={() => {
            }}/>
          </div>
          <div style={styles.rightColumn}>
            <PaymentDetails payments={this.state.payments} makePayment={this.makePayment.bind(this)} dispatch={() => {
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  "container": {
    display: "flex",
    padding: "10px"
  },
  "leftColumn": {
    padding: "10px",
    flex: "0.2"
  },
  "rightColumn": {
    padding: "10px",
    flex: "0.8"
  }
};
