import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      return (<GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      );
    };
  }
}
