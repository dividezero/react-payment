/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {authenticateUser} from '../../api';


export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    email: "",
    password: "",
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.props.makePayment(this.state.val_desc, this.state.val_amt, this.state.val_ccy);

    this.setState({open: false});
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  login = () => {
    console.log("attempt login", this.state.email, this.state.password);
    this.props.doLogin(this.state.email, this.state.password);

  };

  render() {
    return (
      <div>
        <div style={styles.container}>
          <div style={styles.card}>
            <Card>
              <CardTitle title="Payment Dashboard" subtitle="Please enter your username and password"/>
              <CardText>
                <TextField
                  floatingLabelText="Email"
                  onChange={this.handleChangeEmail}
                /><br/>
                <TextField
                  floatingLabelText="Password"
                  type={'password'}
                  onChange={this.handleChangePassword}
                />
              </CardText>
              <CardActions>
                <FlatButton label="Login" primary={true} onClick={this.login}/>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    "display": "flex",
    padding: "20px",
    width: "350px"
  }
};

LoginPage.propTypes = {};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LoginPage);
