/**
 *
 * PaymentDetails
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
import PaymentList from "../PaymentList/index";
import {MakePaymentDialog} from "../MakePaymentDialog/index";


export class PaymentDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <CardTitle title="Account Payments" subtitle="Manage account payments here"/>

          <CardActions>
            <MakePaymentDialog makePayment={this.props.makePayment}/>
          </CardActions>
          <CardText>
            {/*<UserList users={this.props.users}/>*/}
            <PaymentList payments={this.props.payments} />

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

PaymentDetails.propTypes = {
  payments: PropTypes.array.isRequired,
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
)(PaymentDetails);
