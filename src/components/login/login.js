import React from "react";
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div class="ui raised very padded text container segment login-main">
                <div className="login-content">
                    <h2 className="center-text login-header">Login</h2>
                    <form class="ui form">
                        <div class="field">
                            <label className="user-name">User Name</label>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Enter user name"/>
                                <i class="user icon"></i>
                            </div>
                        </div>
                        <div class="field">
                            <label className="password">Password</label>
                            <div class="ui left icon input">
                                <input type="text" placeholder="Enter password"/>
                                <i class="keyboard icon"></i>
                            </div>
                        </div>
                        <div class="ui animated primary button right floated" tabIndex="0">
                            <div class="visible content">Login</div>
                            <div class="hidden content">
                                <i class="sign-in icon"></i>
                            </div>
                        </div>
                    </form>                    
                </div>
            </div>
        );
    }
}

export default Login;