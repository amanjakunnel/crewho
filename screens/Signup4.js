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
	Country: yup.string().required(),
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
								navigation.navigate('Home');
							});
					}}
				>
					{(props) => (
						<View>
							<TextInput
								style={globalStyles.input}
								placeholder='Locality'
								placeholderTextColor='white'
								onChangeText={props.handleChange('Locality')}
								value={props.values.locality}
							/>
							<Text style={globalStyles.error}>
								{props.touched.locality && props.errors.locality}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='City'
								placeholderTextColor='white'
								onChangeText={props.handleChange('City')}
								value={props.values.City}
							/>
							<Text style={globalStyles.error}>
								{props.touched.City && props.errors.City}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='State'
								placeholderTextColor='white'
								onChangeText={props.handleChange('State')}
								value={props.values.State}
							/>
							<Text style={globalStyles.error}>
								{props.touched.State && props.errors.State}
							</Text>
							<TextInput
								style={globalStyles.input}
								placeholder='Country'
								placeholderTextColor='white'
								onChangeText={props.handleChange('Country')}
								value={props.values.Country}
							/>
							<Text style={globalStyles.error}>
								{props.touched.Country && props.errors.Country}
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
