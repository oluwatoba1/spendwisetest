import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screens/Login';
import SignUp from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import OnBoarder from './Onboarding';

export default function NoAuthView() {
	const [onBoard, setOnBoard] = useState(false);

	const checkOnboarded = async () => {
		// await AsyncStorage.removeItem('hasOnboarded');
		const item = await AsyncStorage.getItem('hasOnboarded');
		console.log(JSON.parse(item));
		if (item) {
			const { hasOnboarded } = JSON.parse(item);
			if (hasOnboarded) setOnBoard(true);
		}
	};

	useEffect(() => {
		checkOnboarded();
		//eslint-disable-next-line
	}, [onBoard]);

	return (
		<View style={{ flex: 1 }}>
			{onBoard ? (
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/forgot-password" component={ForgotPassword} />
					<Redirect to="/login" />
				</Switch>
			) : (
				<OnBoarder setOnBoard={setOnBoard} />
			)}
		</View>
	);
}
