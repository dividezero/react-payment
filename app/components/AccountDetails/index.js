/**
 *
 * UserDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {compose} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AccountList from "../AccountList/index";
import {TopupAccountDialog} from "../../containers/TopupAccountDialog/index";


export class AccountDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleExpansion() {
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
        {this.props.activeAccount?
          <Card
            expanded={this.state.expanded} onExpandChange={this.toggleExpansion.bind(this)}
          >

            <CardHeader
              title={this.props.activeAccount.name}
              subtitle={this.props.activeAccount.card_number}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <AccountList accounts={this.props.accounts} setActiveAccount={this.setAccountAndClose.bind(this)}/>

            </CardText>
            <CardText>
              <div>Balance: {this.props.activeAccount.balance}</div>
            </CardText>
            <CardActions>
              <TopupAccountDialog topupAccount={this.props.topupAccount}/>
            </CardActions>

          </Card>
        :
          <Card
            expanded={this.state.expanded} onExpandChange={this.toggleExpansion.bind(this)}
          >
            <CardHeader
              title="No Account Found"
              subtitle="There desnt seem to be an account attached to this user"
            />
          </Card>}

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
