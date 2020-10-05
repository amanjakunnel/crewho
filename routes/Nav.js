import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import globalStyles from '../shared/Global';
import Login from '../screens/Login';
import Signup1 from '../screens/Signup1';
import Signup2 from '../screens/Signup2';
import Signup3 from '../screens/Signup3';
import Signup4 from '../screens/Signup4';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Message from '../screens/Message';

const screens = {
    Home: { screen: Home, navigationOptions: {headerShown: false}}, 
    Login: { screen: Login, navigationOptions: {headerShown: false} },
    Signup1: { screen: Signup1, navigationOptions: {headerShown: false} }, 
    Signup2: { screen: Signup2, navigationOptions: {headerShown: false} }, 
    Signup3: { screen: Signup3, navigationOptions: {headerShown: false} }, 
    Signup4: { screen: Signup4, navigationOptions: {headerShown: false} }, 
    Message: { screen: Message, navigationOptions: { headerStyle: { backgroundColor: '#f7931e' }, headerTint: 'black' }},
    Account: { screen: Account, navigationOptions: { headerLeft: () => true, headerStyle: { backgroundColor: '#f7931e', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }, headerTitle: () => <Image style={globalStyles.accountpic} source={require("../assets/profile.png")}/>, headerTint: 'black', headerLayoutPreset: 'center' } },
}

const Nav = createStackNavigator(screens);

export default createAppContainer(Nav);