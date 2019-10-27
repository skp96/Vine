import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  const clearErrors = () => {
    return (errors['session'] = []);
  };

  return {
    errors: errors.session,
    formType: 'signup',
    clearErrors: clearErrors()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
