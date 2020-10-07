import React from 'react';
import { View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';

import Dashboard from '../screens/Dashboard';

export default function AuthView() {
	return (
		<View>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Redirect to="/" />
			</Switch>
		</View>
	);
}
