import React, { useContext } from 'react';
import { View } from 'react-native';
import AuthContext from '../AuthContext';

export default function SignUp() {
	const { setAuth } = useContext(AuthContext);

	const onRegister = () => {
		setAuth(true);
	};

	return (
		<View>
			<View></View>
		</View>
	);
}
