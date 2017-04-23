import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Field, reduxForm, asyncValidate } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {pinkA700} from 'material-ui/styles/colors'
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import {auth} from '../actions/auth'
import {validate} from './validations/login'

const renderTextField = ({ fullWidth, inputStyle, type, name, input, label, floatingLabelStyle, floatingLabelFocusStyle, meta: { touched, error } }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               name={name}
               fullWidth={fullWidth}
               type={type}
               inputStyle={inputStyle}
               floatingLabelStyle={floatingLabelStyle}
               floatingLabelFocusStyle={floatingLabelFocusStyle}
        {...input}
    />
)

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pinkA700,
    },
});


class Login extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(val) {
        this.props.auth(val);
    }

    render() {
        const { handleSubmit} = this.props;
        const ButtonStyle = { marginTop: 20 }
        const inputStyle = { color: '#fff'}
        return (
            <div className="wrap">
            <div className="login">
                <h1>Login</h1>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <form onSubmit={ handleSubmit(this.onSubmit) } >
                        <Field type="text"
                               name="email"
                               inputStyle={inputStyle}
                               fullWidth={true}
                               component={ renderTextField }
                               floatingLabelStyle={{color: '#e46767'}}
                               floatingLabelFocusStyle={{color: '#e46767'}}
                               label="Email:"/>
                        <Field
                            fullWidth={true}
                            type="password"
                            name="password"
                            inputStyle={inputStyle}
                            floatingLabelStyle={{color: '#e46767'}}
                            floatingLabelFocusStyle={{color: '#e46767'}}
                            component={ renderTextField }
                            label="Password:"/>
                        <span className="loginFailError">{this.props.authState.error}</span>
                        <RaisedButton fullWidth={true} type="submit" style={ButtonStyle} label="LOGIN" primary={true} />
                    </form>
                </MuiThemeProvider>
            </div>
            </div>
        );
    }
}

Login = reduxForm({
    form: 'Login',
    validate
})(Login);

function mapStateToProps(state) {
    return {
        authState: state.auth
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        auth
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Login);