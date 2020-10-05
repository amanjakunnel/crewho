import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const reviewSchema = yup.object({
    Username: yup.string().required(),
    Password: yup.string().required(),
})

export default function Login({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={globalStyles.background} source={require('../assets/gradient.gif')}>
                <View style={globalStyles.app}>
                    <Text style={globalStyles.header}>Login</Text>
                    <Formik 
                        initialValues={{ Username: '', Password: ''}} 
                        validationSchema={reviewSchema}
                        onSubmit={(values) => {
                                axios
                                    .post('http://192.168.1.122:5000/users/login', {
                                        email: values.Username,
                                        password: values.Password,
                                    })
                                    .then(res => {
                                        console.log(values);
                                        console.log(res.status);
                                        if(res.status == 200) {
                                            navigation.navigate('Home');
                                        } else {
                                            console.log('pass or username not correct');
                                        }
                                })
                                .catch((err) => console.log('error incoming' + err));
                        }}
                    >
                        {(props) => (
                            <View>
                                <TextInput style={globalStyles.input} placeholder='Username' placeholderTextColor='white' onChangeText={props.handleChange('Username')} value={props.values.Username} />
                                <Text style={globalStyles.error}>{ props.touched.Username && props.errors.Username }</Text>
                                <TextInput style={globalStyles.input} placeholder='Password' placeholderTextColor='white' onChangeText={props.handleChange('Password')} value={props.values.Password} />
                                <Text style={globalStyles.error}>{ props.touched.Password && props.errors.Password }</Text>
                                <TouchableOpacity style={globalStyles.button} onPress={props.handleSubmit}>
                                    <Text style={globalStyles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                    <View style={globalStyles.tap}>
                        <Text style={globalStyles.tapper}>New user? Click </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup1')}>
                            <Text style={globalStyles.tappable}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
        
    )
}