import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup1 from '../screens/Signup1';
import Signup2 from '../screens/Signup2';
import Signup3 from '../screens/Signup3';
import Signup4 from '../screens/Signup4';
import Home from '../screens/Home';
import Header from '../shared/Header';

const screens = {
    Login: { screen: Login, navigationOptions: {headerShown: false} },
    Signup1: { screen: Signup1, navigationOptions: {headerShown: false} }, 
    Signup2: { screen: Signup2, navigationOptions: {headerShown: false} }, 
    Signup3: { screen: Signup3, navigationOptions: {headerShown: false} }, 
    Signup4: { screen: Signup4, navigationOptions: {headerShown: false} }, 
    Home: { screen: Home, navigationOptions: { headerTitle: () => <Header />, headerLeft: null, headerStyle: { backgroundColor: 'lightgrey'}, headerTint: 'black' } },
}

const SignNav = createStackNavigator(screens);

export default createAppContainer(SignNav);