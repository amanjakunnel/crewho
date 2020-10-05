import React from 'react';
import { View } from 'react-native';
import globalStyles from './Global';

export default function Card(props) {
    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.content}>
                { props.children }
            </View>
    </View>
    )
}