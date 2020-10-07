import React, { useState } from 'react';
import { Switch } from 'react-router-native';

import AuthView from './AuthView';
import NoAuthView from './NoAuthView';
import AuthContext from '../AuthContext';

export default function AppView() {
	const [auth, setAuth] = useState(false);
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<Switch>{auth ? <AuthView />: <NoAuthView />}</Switch>
		</AuthContext.Provider>
	);
}
