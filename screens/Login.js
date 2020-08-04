import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const reviewSchema = yup.object({
    Username: yup.string().required().test('is_user', 'Username is not registered', (val) => {
        return val == 'Username';
    }),
    Password: yup.string().required().test('is_pass', 'Password is incorrect', (val) => {
        return val == 'Password';
    }),
})

export default function Login({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.app}>
                <Text style={globalStyles.header}>Login</Text>
                <Formik 
                    initialValues={{ Username: '', Password: ''}} 
                    //validationSchema={reviewSchema}
                    onSubmit={(values) => {
                            axios
                                .post('127.0.0.1:5000/users/login', {
                                    email: values.Username,
                                    password: values.Password,
                                })
                                .then(res => {
                                    if(res == 1) {
                                        navigation.navigate('Home');
                                    }
                            })
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
        </TouchableWithoutFeedback>
    )
}