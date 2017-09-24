/**
 *
 * MakePaymentDialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


export class MakePaymentDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    val_amt: "",
    val_desc: "",
    val_ccy: ""
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
    this.props.makePayment(this.state.val_desc, this.state.val_amt, this.state.val_ccy);

    this.setState({open: false});
  };

  handleChangeDesc = (event) => {
    this.setState({val_desc: event.target.value});
  };
  handleChangeAmt = (event) => {
    this.setState({val_amt: event.target.value});
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
        <FlatButton label="Make Payment" onClick={this.handleOpen} primary={true}/>
        <Dialog
          title="Make Payment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "320px"
          }}
        >
          <TextField
            hintText="Description"
            floatingLabelText="Description"
            onChange={this.handleChangeDesc}
          /><br/>
          <TextField
            hintText="Amount"
            floatingLabelText="Amount"
            type={"number"}
            onChange={this.handleChangeAmt}
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

MakePaymentDialog.propTypes = {};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(MakePaymentDialog);
