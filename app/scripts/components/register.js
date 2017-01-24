import React from 'react';
import store from '../store';

export default React.createClass({
  render(){
    return(
      <form id='register-form' onSubmit={this.handleSubmit}>
        <input ref='username' type='text' placeholder='User Name'/>
        <input ref='email' type='email' placeholder='Email'/>
        <input ref='password' type='password' placeholder='Password'/>
        <input ref='confirm' type='password' placeholder='Confirm Password'/>
        <input type='submit' value='Submit'/>
      </form>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirm = this.refs.confirm.value;
    if(password===confirm){
      store.session.register(username, email, password);
    } else {
      // alert(password did not match confirmation);
    }
  }
});
