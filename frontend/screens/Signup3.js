import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    Name: yup.string().required(),
    Skills: yup.string().required(),
    Gender: yup.string().required()
})

export default function Signup_3({navigation}) {
    const Email = navigation.getParam('Email')
    const Password = navigation.getParam('Password')
    const Username = navigation.getParam('Username')
    const Phone = navigation.getParam('Phone')
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={globalStyles.background} source={require('../assets/gradient.gif')}>
                <View style={globalStyles.app}>
                    <Text style={globalStyles.header}>Signup</Text>
                    <Formik
                        initialValues={{ Name: '', Skills: '', Gender: ''}} 
                        validationSchema={reviewSchema}
                        onSubmit={(values) => {
                            navigation.navigate('Signup4', { ...values, Email, Password, Username, Phone});
                        }}
                    >
                        {(props) => (
                            <View>
                                <TextInput style={globalStyles.input} placeholder='Full Name' placeholderTextColor='white' onChangeText={props.handleChange('Name')} value={props.values.Name} />
                                <Text style={globalStyles.error}>{ props.touched.Name && props.errors.Name }</Text>
                                <TextInput style={globalStyles.input} placeholder='Skills' placeholderTextColor='white' onChangeText={props.handleChange('Skills')} value={props.values.Skills} />
                                <Text style={globalStyles.error}>{ props.touched.Skills && props.errors.Skills }</Text>
                                <View style={globalStyles.tap}>
                                    <Text style={globalStyles.tapper}>More than 1? Click </Text>
                                    <TouchableOpacity>
                                        <Text style={globalStyles.tappable}>Here</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInput style={globalStyles.input} placeholder='Gender' placeholderTextColor='white' onChangeText={props.handleChange('Gender')} value={props.values.Gender} />
                                <Text style={globalStyles.error}>{ props.touched.Gender && props.errors.Gender }</Text>
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