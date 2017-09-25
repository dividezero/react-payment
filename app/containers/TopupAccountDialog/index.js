/**
 *
 * TopupAccountDialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


export class TopupAccountDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    amount: ""
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    // if(typeof index === 'number'){
    // }
    this.props.topupAccount(this.state.amount);

    this.setState({open: false});
  };

  handleChangeAmount = (event) => {
    this.setState({amount: event.target.value});
  };

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton label="Topup Account" primary={true} onClick={this.handleOpen}/>
        <Dialog
          title="Topup Account"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "320px"
          }}
        >
          <TextField
            floatingLabelText="Amount"
            type={"number"}
            onChange={this.handleChangeAmount}
          />
        </Dialog>
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

TopupAccountDialog.propTypes = {};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(TopupAccountDialog);
