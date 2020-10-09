import React from 'react';
import { View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/Dashboard';
import Footer from '../layout/Footer';

export default function AuthView() {
	return (
		<View style={{ flex: 1 }}>
			<Footer />
		</View>
	);
}
