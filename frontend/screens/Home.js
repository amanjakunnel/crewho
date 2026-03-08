import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import globalStyles from '../shared/Global';
import Card from '../shared/Card';
import Header from '../shared/Header';

export default function Home({navigation}) {
    const [posts, setPosts] = useState([
        {name: "Name", skills: "Skills", status: "Up For Status", location: "Location", user: "User"}
    ]);
    return (
        <View style={globalStyles.home}>
            <Header navigation={navigation}/>
            <View style={globalStyles.headspace}></View>
                <FlatList
                    keyExtractor = {(item) => item.user}
                    data={posts}
                    renderItem={({item}) => (
                        <Card>
                            <Image style={globalStyles.profile} source={require("../assets/profile.png")}/>
                            <View style={globalStyles.info}>
                                <Text style={globalStyles.name}>{item.name}</Text>
                                <Text style={globalStyles.skills}>{item.skills}</Text>
                                <Text style={globalStyles.status}>{item.status}</Text>
                                <Text style={globalStyles.location}>{item.location}</Text>
                            </View>
                        </Card>
                    )}  
                />
        </View>
    )
}