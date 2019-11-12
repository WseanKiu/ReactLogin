import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';

import { Wrapper, styles } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import { InputWithTitle, InputWithDropdown } from '../components/TextInput';
import { SolidColorButton } from '../components/Button';
import { CheckboxWithText } from '../components/Checkbox';
import { validateEmail } from '../helpers/textValidations';

import { rememberUserCredentials } from '../redux/accounts/actions/account';

// THIS IS FOR ERROR PROMPTING
const EMPTY_EMAIL_MESSAGE = "Email must be filled";
const EMPTY_PASSWORD_MESSAGE = "Password must be filled";
const INVALID_EMAIL_MESSAGE = "Invalid email";
const PASSWORD_LENGTH_INVALID_MESSAGE = "Password length must be 6 - 12 characters";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA7ehvplXXn_Fw8t1iMXwQPVsaTsG3GIDc",
    authDomain: "reactlogin-4a59a.firebaseapp.com",
    databaseURL: "https://reactlogin-4a59a.firebaseio.com",
    projectId: "reactlogin-4a59a",
    storageBucket: "reactlogin-4a59a.appspot.com",
    messagingSenderId: "250996716051",
    appId: "1:250996716051:web:f6c261c882c4083d4645e6",
    measurementId: "G-5JBCS4CR6T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class LoginForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        email: PropTypes.string,
        password: PropTypes.string,
    };

    // initializing state variables
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailErrorMessage: "",
            password: "",
            passwordErrorMessage: "",
            check: true,
            emailError: false,
            passwordError: false,
            disableButton: false,
            items: [],
            spinner: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        const items = [{
            name: nextProps.email,
            password: nextProps.password,
        }];

        this.setState({ items: items });
    }

    handleEmailInput = (value) => {
        this.setState({ email: value });
        this.checkEmailField(value);
    }

    handleSelection = (email, password) => {
        this.setState({ email: email, password: password });
        this.checkEmailField(email);
        this.checkPasswordField(password);
    }

    handlePasswordInput = (value) => {
        this.setState({ password: value });
        this.checkPasswordField(value);
    }

    handleCheckBox = () => {
        const { check } = this.state;
        this.setState({ check: check ? false : true });
    }

    handleSignIn = () => {
        const { email, password } = this.state;
        this.setState(prevState => ({ spinner: !prevState.spinner }))

        if (!this.checkEmailField(email) && !this.checkPasswordField(password)) {
            try {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(error => {
                        switch (error.code) {
                            case 'auth/email-already-in-use':
                                this.firebaseCheckPassword()
                                break
                            default:
                                alert(error)
                                console.log(error)
                        }
                    })
            } catch (error) {
                console.log('outcast error' + error)
            }
        } else {
            this.setState({ spinner: false })
        }
    }

    firebaseCheckPassword = () => {
        const { email, password, check } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ spinner: false })
                alert('Login success!');
                check ? this.props.dispatch(rememberUserCredentials(email, password)) : null;
            })
            .catch(error => {
                this.setState({ spinner: false })
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('Password Incorrect')
                        console.log(error)
                        break
                    default:
                        alert(error)
                        console.log(error)
                }
            })

        this.setState({ password: '' })
    }

    checkEmailField = (value) => {
        let error = false;
        if (value.length === 0 || !value.trim()) {
            this.setState({
                emailErrorMessage: EMPTY_EMAIL_MESSAGE,
                emailError: true,
                disableButton: true,
            });
            error = true;
        } else if (!validateEmail(value)) {
            this.setState({ emailErrorMessage: INVALID_EMAIL_MESSAGE, emailError: true, disableButton: true });
            error = true;
        } else {
            this.setState({ emailError: false, emailErrorMessage: "", disableButton: false })
        }
        return error;
    }

    checkPasswordField = (value) => {
        let error = false;

        if (value.length === 0) {
            this.setState({ passwordErrorMessage: EMPTY_PASSWORD_MESSAGE, passwordError: true, disableButton: true });
            error = true;
        } else if (value.length < 6 || value.length > 12) {
            this.setState({ passwordErrorMessage: PASSWORD_LENGTH_INVALID_MESSAGE, passwordError: true, disableButton: true });
            error = true;
        } else {
            this.setState({ passwordError: false, passwordErrorMessage: "", disableButton: false });
        }
        return error;
    }

    render() {
        return (
            <Wrapper>
                <StatusBar translucent={false} barStyle="light-content" />
                <KeyboardAvoidingView behavior="padding">
                    <Spinner
                        visible={this.state.spinner}
                    />
                    <Logo />
                    <InputWithDropdown
                        title={"Email"}
                        items={this.state.items}
                        placeholder={"Input email address"}
                        err={this.state.emailErrorMessage}
                        onChangeText={this.handleEmailInput}
                        selectedItem={this.handleSelection} />
                    <InputWithTitle
                        title={"Password"}
                        placeholder={"Input password"}
                        err={this.state.passwordErrorMessage}
                        secureTextEntry={true}
                        maxLength={12}
                        onChangeText={this.handlePasswordInput}
                        value={this.state.password} />
                    <CheckboxWithText
                        text={"Remember me"}
                        check={this.state.check}
                        onPress={this.handleCheckBox} />
                    <SolidColorButton text={"Sign In"} onPress={this.handleSignIn} disabled={this.state.disableButton} />
                </KeyboardAvoidingView>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const email = state.account.email;
    const password = state.account.password;

    return {
        email,
        password,
    };
}

export default connect(mapStateToProps)(LoginForm);