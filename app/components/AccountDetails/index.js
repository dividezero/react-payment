/**
 *
 * UserDetails
 *
 */

import React from 'react';
import StyleSheet from 'react/';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {compose} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar'
import UserList from "../UserList/index";
import AccountList from "../AccountList/index";
import {TopupAccountDialog} from "../TopupAccountDialog/index";


export class AccountDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleExpansion() {
    console.log(this.state)
    this.setState({
      expanded: !this.state.expanded
    })
  }

  setAccountAndClose(account) {
    this.props.setActiveAccount(account);
    this.toggleExpansion();
  }

  render() {
    return (
      <div>

        <Card
          // expanded={this.state.expanded} onExpandChange={this.toggleExpansion}
        >
          {/*<CardTitle title="Active User" subtitle="Manage current user"/>*/}
          <CardHeader
            title={this.props.activeAccount.name}
            subtitle={this.props.activeAccount.card_number}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
            <div>Balance: {this.props.activeAccount.balance}</div>
          </CardText>
          <CardActions>
            <TopupAccountDialog topupAccount={this.props.topupAccount}/>
          </CardActions>
          <CardText expandable={true}>
            {/*<UserList users={this.props.users}/>*/}
            <AccountList accounts={this.props.accounts} setActiveAccount={this.setAccountAndClose.bind(this)}/>

          </CardText>
        </Card>
      </div>
    );
  }
}

const style = {
  nameDiv: {
    "display": "flex",
    "align-items": "center"
  },
  fullName: {
    padding: "10px"
  }
};

AccountDetails.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(AccountDetails);
