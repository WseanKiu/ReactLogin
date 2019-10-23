import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';

import { Wrapper } from '../components/Wrapper';
import { Logo } from '../components/Logo';
import { InputWithTitle } from '../components/TextInput';
import { SolidColorButton } from '../components/Button';

class LoginForm extends Component {
    render () {
        return (
            <Wrapper>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Logo/>
                <InputWithTitle title={"Email"} placeholder={"Input email address"} />
                <InputWithTitle title={"Password"} placeholder={"Input password"} err={"not correct format for email address"} />
                <SolidColorButton text={"Sign In"} />
            </Wrapper>
        )
    }
}

export default LoginForm;