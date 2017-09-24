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



export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    username: "",
    password: "",
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    console.log(this.state.val_desc, this.state.val_amt, this.state.val_ccy);
    this.props.makePayment(this.state.val_desc, this.state.val_amt, this.state.val_ccy);

    this.setState({open: false});
  };

  handleChangeUsername = (event) => {
    this.setState({username: event.target.value});
  };
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  login = () =>{
    console.log("attempt login", this.state.username, this.state.password)

    
  };

  render() {
    return (
      <div>
        <div style={styles.container}>
          <div style={styles.card}>
            <Card>
              <CardTitle title="Payment Dashboard" subtitle="Please enter your username and password" />
              <CardText>
                <TextField
                  floatingLabelText="Username"
                  onChange={this.handleChangeUsername}
                /><br/>
                <TextField
                  floatingLabelText="Password"
                  type={'password'}
                  onChange={this.handleChangePassword}
                />
              </CardText>
              <CardActions>
                <FlatButton label="Login" onClick={this.login}/>
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
  card:{
    "display": "flex",
    padding:"20px",
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
