import React from 'react';

import store from '../store';

export default React.createClass({
  render(){
    return(
      <form id='login-form' onSubmit={this.handleSubmit}>
        <input ref='email' type='text' placeholder='Email'/>
        <input ref='password' type='password' placeholder='Password'/>
        <input type='submit' value='Login'/>
      </form>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    store.session.login(email, password);
  }
});
