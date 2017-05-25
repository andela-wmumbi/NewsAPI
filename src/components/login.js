import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="login with google"
        />
      </div>
    );
  }
}
export default Login;
