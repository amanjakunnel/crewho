import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import globalStyles from '../shared/Global';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from '../shared/Card';

export default function Account() {
    const [account, setAccount] = useState(
        {iname: "Name", iskills: "Skills"}
    );
    const [users, setUsers] = useState(
        {name: "Name", skills: "Skills", status: "Up For Status", location: "Location", user: "User"}
    );
    return (
        <View style={globalStyles.app}>
            <View style={globalStyles.information}>
                <Text style={globalStyles.iname}>{account.iname}</Text>
                <Text style={globalStyles.iskills}>{account.iskills}</Text>
            </View>
            <TouchableOpacity>
                <Text style={globalStyles.resume}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={globalStyles.edit}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={globalStyles.nav}>
                <MaterialCommunityIcons style={globalStyles.accounticon} name="image" size={40} color="white" />
                <MaterialCommunityIcons style={globalStyles.accounticon} name="music" size={40} color="white" />
                <MaterialCommunityIcons style={globalStyles.accounticon} name='message-text-outline' size={40} color="white" />
                <MaterialCommunityIcons style={globalStyles.accounticon} name='bookmark' size={40} color='white' />
            </View>
    </View>
    )
}