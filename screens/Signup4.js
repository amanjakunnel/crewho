import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import globalStyles from '../shared/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const reviewSchema = yup.object({
	locality: yup.string().required(),
	city: yup.string().required(),
	state: yup.string().required(),
	country: yup.string().required(),
});

export default function Signup_4({ navigation }) {
	const email = navigation.getParam('Email');
	const password = navigation.getParam('Password');
	const username = navigation.getParam('Username');
	const phone_no = navigation.getParam('Phone');
	const name = navigation.getParam('Name');
	const skills = navigation.getParam('Skills');
	const gender = navigation.getParam('Gender');
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={globalStyles.app}>
				<Text style={globalStyles.header}>Signup</Text>
				<Formik
					initialValues={{ locality: '', city: '', state: '', country: '' }}
					validationSchema={reviewSchema}
					onSubmit={(values) => {
						axios
							.post('http://192.168.1.122:5000/users/signup', {
								...values,
								email,
								password,
								username,
								phone_no,
								name,
								skills,
								gender,
							})
							.then((res) => {
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
							<TextInput
								style={globalStyles.input}
								placeholder='locality'
								placeholderTextColor='white'
								onChangeText={props.handleChange('locality')}
								value={props.values.locality}
							/>
							<Text style={globalStyles.error}>
								{props.touched.locality && props.errors.locality}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='city'
								placeholderTextColor='white'
								onChangeText={props.handleChange('city')}
								value={props.values.city}
							/>
							<Text style={globalStyles.error}>
								{props.touched.city && props.errors.city}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='state'
								placeholderTextColor='white'
								onChangeText={props.handleChange('state')}
								value={props.values.state}
							/>
							<Text style={globalStyles.error}>
								{props.touched.state && props.errors.state}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='country'
								placeholderTextColor='white'
								onChangeText={props.handleChange('country')}
								value={props.values.country}
							/>
							<Text style={globalStyles.error}>
								{props.touched.country && props.errors.country}
							</Text>
							<TouchableOpacity style={globalStyles.button}>
								<Text
									style={globalStyles.buttonText}
									onPress={props.handleSubmit}
								>
									Continue
								</Text>
							</TouchableOpacity>
						</View>
					)}
				</Formik>
			</View>
		</TouchableWithoutFeedback>
	);
}
