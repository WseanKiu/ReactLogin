import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Wrapper } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import { InputWithTitle } from '../components/TextInput';
import { SolidColorButton } from '../components/Button';
import { CheckboxWithText } from '../components/Checkbox';

const EMPTY_EMAIL = "Email must be filled";
const EMPTY_PASSWORD = "Password must be filled";
const INVALID_EMAIL = "Invalid email";
const PASSWORD_LENGTH = "Password length must be 6 - 12 characters";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            check: true,
        };
    }

    handleEmailInput = (value) => {
        const { email } = this.state;
        this.setState({ email: value });
        console.log("email", value);
    }

    handlePasswordInput = (value) => {
        const { password } = this.state;
        this.setState({ password: value });
        console.log("password", value);
    }

    handleCheckBox = () => {
        const { check } = this.state;
        this.setState({ check: check ? false : true });
        console.log('check', check);
    }

    handleSignIn = () => {

    }

    render() {
        return (
            <Wrapper>
                <StatusBar translucent={false} barStyle="light-content" />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <InputWithTitle
                        title={"Email"}
                        placeholder={"Input email address"}
                        err={EMPTY_EMAIL}
                        autoCapitalize={'none'}
                        onChangeText={this.handleEmailInput} />
                    <InputWithTitle
                        title={"Password"}
                        placeholder={"Input password"}
                        err={PASSWORD_LENGTH}
                        secureTextEntry={true}
                        maxLength={12}
                        onChangeText={this.handlePasswordInput} />
                    <CheckboxWithText
                        text={"Remember me"}
                        check={this.state.check}
                        onPress={this.handleCheckBox} />
                    <SolidColorButton text={"Sign In"} onPress={this.handleSignIn} />
                </KeyboardAvoidingView>
            </Wrapper>
        )
    }
}

export default LoginForm;