/**
 *
 * AddUserDialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


export class AddUserDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    email: "",
    password: "",
    telephone_number: "",
    first_name: "",
    last_name: ""
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    //todo validations
    // if(typeof index === 'number'){
    // }
    this.props.doAddUser(this.state.email, this.state.password, this.state.telephone_number, this.state.first_name, this.state.last_name);

    this.setState({open: false});
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  handleChangeTel = (event) => {
    this.setState({telephone_number: event.target.value});
  };

  handleChangeFirstname = (event) => {
    this.setState({first_name: event.target.value});
  };

  handleChangeLastname = (event) => {
    this.setState({last_name: event.target.value});
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
        <FlatButton label="Create User" primary={true} onClick={this.handleOpen}/>
        <Dialog
          title="Create User"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "320px"
          }}
        >
          <TextField
            floatingLabelText="email"
            type={"email"}
            onChange={this.handleChangeEmail}
          />
          <TextField
            floatingLabelText="password"
            type={"password"}
            onChange={this.handleChangePassword}
          />
          <TextField
            floatingLabelText="telephone_number"
            type={"number"}
            onChange={this.handleChangeTel}
          />
          <TextField
            floatingLabelText="first_name"
            onChange={this.handleChangeFirstname}
          />
          <TextField
            floatingLabelText="last_name"
            onChange={this.handleChangeLastname}
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

AddUserDialog.propTypes = {};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(AddUserDialog);
