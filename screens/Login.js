import React, { useContext } from 'react';
import { View } from 'react-native';
import AuthContext from '../AuthContext';

export default function Login() {
	const { setAuth } = useContext(AuthContext);

	const onLogin = () => {
		setAuth(true);
	};

	return (
		<View>
			<View></View>
		</View>
	);
}
