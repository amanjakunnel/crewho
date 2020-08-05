import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';

var pass = '';

const reviewSchema = yup.object({
    Email: yup.string().required(),
    Password: yup.string().required().test('is_pass', '', (val) => {
        return pass = val;
    }),
    Confirm: yup.string().required().test('is_confirm', "Please put in the same password", (val) => {
        return pass == val;
    })
})

export default function Signup_1({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.app}>
                <Text style={globalStyles.header}>Signup</Text>
                <Formik
                    initialValues={{ Email: '', Password: '', Confirm: ''}} 
                    validationSchema={reviewSchema}
                    onSubmit={(values) => {
                        navigation.navigate('Signup2', values);
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput style={globalStyles.input} placeholder='Email' placeholderTextColor='white' onChangeText={props.handleChange('Email')} value={props.values.Email} keyboardType='email-address'/>
                            <Text style={globalStyles.error}>{ props.touched.Email && props.errors.Email }</Text>
                            <TextInput style={globalStyles.input} placeholder='Password' placeholderTextColor='white' onChangeText={props.handleChange('Password')} value={props.values.Password} />
                            <Text style={globalStyles.error}>{ props.touched.Password && props.errors.Password }</Text>
                            <TextInput style={globalStyles.input} placeholder='Confirm Password' placeholderTextColor='white' onChangeText={props.handleChange('Confirm')} value={props.values.Confirm} />
                            <Text style={globalStyles.error}>{ props.touched.Confirm && props.errors.Confirm }</Text>
                            <TouchableOpacity style={globalStyles.button} onPress={props.handleSubmit}>
                                <Text style={globalStyles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </View> 
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}