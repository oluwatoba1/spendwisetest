import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { BackButton, NativeRouter } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import AppView from './views/AppView';

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat: require('./assets/fonts/Montserrat.ttf'),
		'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
		'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
		'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<NativeRouter>
			<BackButton>
				<AppView />
			</BackButton>
		</NativeRouter>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
