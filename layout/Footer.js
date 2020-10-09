import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

import Dashboard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

export default function Footer() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Dashboard"
				tabBarOptions={{
					activeTintColor: '#205cc7',
					inactiveTintColor: '#aaa',
					// labelStyle: 'below-icon',
					adaptive: true,
					labelStyle: { fontWeight: 'bold', fontSize: 12, paddingBottom: 5 }
				}}>
				<Tab.Screen
					name="Dashboard"
					component={Dashboard}
					options={{
						tabBarLabel: 'Dashboard',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="view-dashboard" color={color} size={20} />
						)
					}}
				/>

				<Tab.Screen
					name="Expenses"
					component={Dashboard}
					options={{
						tabBarLabel: 'Expenses',
						tabBarIcon: ({ color, size }) => <FontAwesome5 name="wallet" color={color} size={20} />
					}}
				/>

				<Tab.Screen
					name="Goals"
					component={Dashboard}
					options={{
						tabBarLabel: 'Goals',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="bullseye-arrow" color={color} size={20} />
						)
					}}
				/>

				<Tab.Screen
					name="More"
					component={Dashboard}
					options={{
						tabBarLabel: 'More',
						tabBarIcon: ({ color, size }) => (
							<Entypo name="dots-three-horizontal" color={color} size={20} />
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
