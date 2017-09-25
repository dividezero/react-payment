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
import AppBar from 'material-ui/AppBar';
import {AccountDetails} from "../AccountDetails/index";
import {PaymentDetails} from "../PaymentDetails/index";
import {UserDetails} from "../UserDetails/index";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  authenticateUser, getAccount, getAccountPayments, getAllUsers, getUser, getUserAccounts, postCreateUser,
  postTopupAccount
} from '../../api';
import {LoginPage} from "../LoginPage/index";
import {loggedUser, activeUser, users, demo_payments, demo_accounts} from "../../tests/sampleData";


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color={"white"}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" onClick={props.doRefresh}/>
    <MenuItem primaryText="Sign out" onClick={props.doLogOut}/>
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
    // this.doRefresh();
  }

  //todo should figure out what to refresh instead of the whole thing
  doRefresh = () => {
    this.populateUsers();
    this.setState({
      activeUser: getUser(this.state.activeUser.id),
      activeAccount: getAccount(this.state.activeUser.id, this.state.activeAccount.id),
    });
  };

  populateUsers = (resetActive = true) => {
    this.resetUsers();
    getAllUsers((resUsers) => {
      if(resUsers){
        this.setState({
          users: resUsers,
          activeUser: resUsers[0]
        });
        if (resetActive) {
          this.setState({
            activeUser: resUsers[0]
          });
        }
        this.populateAccounts(resetActive);
      }
    })
  };

  populateAccounts = (resetActive = true) => {
    this.resetAccounts();
    getUserAccounts(this.state.activeUser.id, (accs) => {
      if (accs) {
        this.setState({
          accounts: accs,
        });
        if (resetActive) {
          this.setState({
            accounts: accs,
            activeAccount: accs[0]
          });
        }
      }
      this.populatePayments();
    });
  };

  resetUsers = () =>{
    this.setState({
      users: [],
    });
    this.resetAccounts();
  };

  resetAccounts = () =>{
    this.setState({
      accounts: [],
    });
    this.resetPayments();
  };

  resetPayments = () =>{
    this.setState({
      payments: []
    });
  };

  populatePayments = () => {
    getAccountPayments(this.state.activeAccount.id, (resPayments) => {
      this.setState({
        payments: resPayments
      });
    });
  };

  doLogin = (email, pass) => {
    this.setState({
      loggedUser: authenticateUser(email, pass)
    });
  };

  setActiveAccount = (account) => {
    this.setState({
      activeAccount: account
    });
    this.populatePayments(true);
  };

  setActiveUser = (user) => {
    this.setState({
      activeUser: user
    });
    this.populateAccounts(true);
  };

  doAddUser = (email, password, telephone_number, first_name, last_name) => {
    postCreateUser(email, password, telephone_number, first_name, last_name, (data) => {
      this.populateUsers(false);
    })
  };

  makePayment = (desc, amt, ccy) => {
    //todo make payment and refresh
    console.log(this.state.activeAccount.id, desc, amt, ccy);
  };

  topupAccount = (amount) => {
    postTopupAccount(this.state.activeAccount, amount, (data) => {
      console.log("acc topup:", data);
    })
  };

  doLogOut = () => {
    this.setState({
      loggedUser: null,
      activeUser: null,
      users: null,
      accounts: null,
      activeAccount: null,
      payments: null
    });
  };

  render() {
    return (
      <div>
        {
          this.state.loggedUser ?
            <div>
              <AppBar
                title="Payment App"
                iconElementLeft={<div></div>}
                iconElementRight={<Logged
                  loggedUser={this.state.loggedUser}
                  doRefresh={this.doRefresh.bind(this)}
                  doLogOut={this.doLogOut.bind(this)}/>}
              />
              <div style={styles.container}>
                <div style={styles.leftColumn}>
                  <div style={{
                    paddingBottom: '10px'
                  }}>
                    <UserDetails user={this.state.activeUser} users={this.state.users} accounts={this.state.accounts}
                                 activeAccount={this.state.activeAccount}
                                 setActiveUser={this.setActiveUser.bind(this)}
                                 doAddUser={this.doAddUser.bind(this)} dispatch={() => {
                    }}/>
                  </div>
                  <AccountDetails user={loggedUser} accounts={this.state.accounts}
                                  activeAccount={this.state.activeAccount}
                                  setActiveAccount={this.setActiveAccount.bind(this)}
                                  topupAccount={this.topupAccount.bind(this)} dispatch={() => {
                  }}/>
                </div>
                <div style={styles.rightColumn}>
                  <PaymentDetails payments={this.state.payments} makePayment={this.makePayment.bind(this)}
                                  dispatch={() => {
                                  }}/>
                </div>
              </div>
            </div> : <LoginPage doLogin={this.doLogin.bind(this)}/>}
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
