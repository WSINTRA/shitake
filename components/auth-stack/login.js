import React, { useState } from 'react';
import {View, Text, Input, Button } from 'react-native';
import { WelcomeStyle } from '../../styles/global';

const Login = ({navigation}) => {
    return (
        <View>
            <Text> Login Form For existing users</Text>
            <Button title="Register new user?" onPress={()=>navigation.navigate('Signup')}/>
        </View>
    )
}

export default Login;