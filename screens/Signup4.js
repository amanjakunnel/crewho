import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

const reviewSchema = yup.object({
    Locality: yup.string().required(),
    City: yup.string().required(),
    State: yup.string().required(),
    Country: yup.string().required()
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
            <View style={globalStyles.app}>
                <Text style={globalStyles.header}>Signup</Text>
                <Formik
                    initialValues={{ Locality: '', City: '', State: '', Country: ''}} 
                    validationSchema={reviewSchema}
                    onSubmit={(values) => {
                        console.log({ ...values, Email, Password, Username, Phone, Name, Skills, Gender });
                        axios
                                .post('127.0.0.1:5000/users/login', { ...values, Email, Password, Username, Phone, Name, Skills, Gender })
                                .then(res => {
                                        navigation.navigate('Home');
                            })
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput style={globalStyles.input} placeholder='Locality' placeholderTextColor='white' onChangeText={props.handleChange('Locality')} value={props.values.Locality} />
                            <Text style={globalStyles.error}>{ props.touched.Locality && props.errors.Locality }</Text>
                            <TextInput style={globalStyles.input} placeholder='City' placeholderTextColor='white' onChangeText={props.handleChange('City')} value={props.values.City} />
                            <Text style={globalStyles.error}>{ props.touched.City && props.errors.City }</Text>
                            <TextInput style={globalStyles.input} placeholder='State' placeholderTextColor='white' onChangeText={props.handleChange('State')} value={props.values.State} />
                            <Text style={globalStyles.error}>{ props.touched.State && props.errors.State }</Text>
                            <TextInput style={globalStyles.input} placeholder='Country' placeholderTextColor='white' onChangeText={props.handleChange('Country')} value={props.values.Country} />
                            <Text style={globalStyles.error}>{ props.touched.Country && props.errors.Country }</Text>
                            <TouchableOpacity style={globalStyles.button}>
                                <Text style={globalStyles.buttonText} onPress={props.handleSubmit}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}