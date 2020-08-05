import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

const reviewSchema = yup.object({
    locality: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required()
})

export default function Signup_4({navigation}) {
    const Email = navigation.getParam('Email')
    const Password = navigation.getParam('Password')
    const Username = navigation.getParam('Username')
    const Phone = navigation.getParam('Phone')
    const Name = navigation.getParam('Name')
    const Skills = navigation.getParam('Skills')
    const Gender = navigation.getParam('Gender')
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={globalStyles.background} source={require('../assets/gradient.gif')}>
                <View style={globalStyles.app}>
                    <Text style={globalStyles.header}>Signup</Text>
                    <Formik
                        initialValues={{ locality: '', city: '', state: '', country: ''}} 
                        validationSchema={reviewSchema}
                        onSubmit={(values) => {
                            axios
                                    .post('192.168.1.122:5000/users/signup', { ...values, email, password, username, phone_no, name, skills, gender })
                                    .then(res => {
                                            console.log(values);
                                            console.log(res.status);
                                            if (res.status == 200) {
                                                navigation.navigate('Home');
                                            } else {
                                                console.log('something is not correct');
                                            }
                                })
                                .catch((err) => console.log('error incoming' + err));
                        }}
                    >
                        {(props) => (
                            <View>
                                <TextInput style={globalStyles.input} placeholder='locality' placeholderTextColor='white' onChangeText={props.handleChange('locality')} value={props.values.locality} />
                                <Text style={globalStyles.error}>{ props.touched.locality && props.errors.locality }</Text>
                                <TextInput style={globalStyles.input} placeholder='city' placeholderTextColor='white' onChangeText={props.handleChange('city')} value={props.values.city} />
                                <Text style={globalStyles.error}>{ props.touched.city && props.errors.city }</Text>
                                <TextInput style={globalStyles.input} placeholder='state' placeholderTextColor='white' onChangeText={props.handleChange('state')} value={props.values.state} />
                                <Text style={globalStyles.error}>{ props.touched.state && props.errors.state }</Text>
                                <TextInput style={globalStyles.input} placeholder='country' placeholderTextColor='white' onChangeText={props.handleChange('country')} value={props.values.country} />
                                <Text style={globalStyles.error}>{ props.touched.country && props.errors.country }</Text>
                                <TouchableOpacity style={globalStyles.button}>
                                    <Text style={globalStyles.buttonText} onPress={props.handleSubmit}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}