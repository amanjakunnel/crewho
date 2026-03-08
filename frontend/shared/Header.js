import React from 'react';
import { View } from 'react-native';
import globalStyles from './Global';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header({navigation}) {
    return (
        <View style={globalStyles.head}>
            <MaterialIcons style={globalStyles.account} name='account-circle' size={27.5} onPress={() => navigation.navigate("Account")} />
            <MaterialCommunityIcons style={globalStyles.message} name='message-text-outline' size={27.5} onPress={() => navigation.navigate("Message")} />
        </View>
    )
}