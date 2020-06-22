import React, { useState } from 'react';
import {View, Text, Input } from 'react-native';
import { WelcomeStyle } from '../../styles/global';

const Login = () => {
    return (
        <View style={WelcomeStyle.container} >
            <Text> Login Form For existing users</Text>
        </View>
    )
}

export default Login;