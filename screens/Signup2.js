import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    Username: yup.string().required().test('is_user', 'Username is registered', (val) => {
        return val != 'Username';
    }),
    Phone: yup.string().required()
})

export default function Signup_2({navigation}) {
    const Email = navigation.getParam('Email')
    const Password = navigation.getParam('Password')
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.app}>
                <Text style={globalStyles.header}>Signup</Text>
                <Formik
                    initialValues={{ Username: '', Phone: ''}} 
                    validationSchema={reviewSchema}
                    onSubmit={(values) => { 
                        navigation.navigate('Signup3', { ...values, Email, Password, })
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput style={globalStyles.input} placeholder='Username' placeholderTextColor='white' onChangeText={props.handleChange('Username')} value={props.values.Username} />
                            <Text style={globalStyles.error}>{ props.touched.Username && props.errors.Username }</Text>
                            <TextInput style={globalStyles.input} placeholder='Phone Number' placeholderTextColor='white' onChangeText={props.handleChange('Phone')} value={props.values.Phone} keyboardType='phone-pad'/>
                            <Text style={globalStyles.error}>{ props.touched.Phone && props.errors.Phone }</Text>
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