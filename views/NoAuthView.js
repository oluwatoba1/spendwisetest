import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Switch, Route } from 'react-router-native';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import OnBoarding from './Onboarding';

export default function NoAuthView() {
	const [onBoard, setOnBoard] = useState(false);

	const checkOnboarded = async () => {
		const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
		if (hasOnboarded) setOnBoard(true);
	};

	useEffect(() => {
		checkOnboarded();
		//eslint-disable-next-line
	}, []);

	return (
		<View>
			{onBoard ? (
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</Switch>
			) : (
				<OnBoarding />
			)}
		</View>
	);
}
