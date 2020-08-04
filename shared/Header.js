import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from './Global';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={globalStyles.head}>
            <Image style={globalStyles.logo}source={require('../assets/logo.png')} />
            <MaterialCommunityIcons style={globalStyles.message} name='message-text-outline' size={25}/>
        </View>
    )
}