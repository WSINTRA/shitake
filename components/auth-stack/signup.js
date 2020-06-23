import React, { useState } from 'react';
import {View, Text, Input } from 'react-native';
import { WelcomeStyle } from '../../styles/global';

const Signup = () => {
    return (
        <View style={WelcomeStyle.container}>
            <Text> Signup Form For new users</Text>
        </View>
    )
}

export default Signup;