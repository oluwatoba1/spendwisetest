import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
	const history = useHistory();

	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View
				style={{
					flex: 0.3,
					width: '100%',
					backgroundColor: '#205cc7',
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20
				}}>
				<TouchableOpacity onPress={() => history.push('/login')}>
					<AntDesign
						name="left"
						style={{ color: '#fff', fontSize: 20, paddingLeft: 20, paddingTop: 20 }}
					/>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 24,
						paddingLeft: 20,
						paddingTop: 10,
						color: '#fff',
						fontWeight: 'bold'
					}}>
					Forgot password
				</Text>
				<Text
					style={{
						fontSize: 14,
						paddingLeft: 20,
						paddingTop: 5,
						color: 'rgba(255, 255, 255, .6)',
						fontWeight: 'bold'
					}}>
					Enter your username to reset your password
				</Text>
			</View>
			<View
				style={{
					position: 'absolute',
					backgroundColor: '#FFF',
					width: '90%',
					top: 120,
					borderRadius: 2,
					paddingTop: 50,
					paddingBottom: 50,
					paddingLeft: 10,
					paddingRight: 10,
					elevation: 3,
					shadowOffset: {
						width: 2,
						height: 5
					},
					shadowOpacity: 0.4,
					shadowColor: 'rgba(0, 0, 0, .3)'
				}}>
				<View style={{ paddingTop: 10, paddingBottom: 10 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>Username</Text>
					<TextInput
						style={{
							height: 40,
							borderWidth: 1,
							borderColor: 'rgba(0, 0, 0, .3)',
							borderRadius: 2,
							padding: 10
						}}
					/>
				</View>

				<TouchableOpacity
					style={{
						height: 45,
						borderRadius: 5,
						backgroundColor: '#205cc7',
						justifyContent: 'center',
						padding: 10,
						elevation: 3,
						shadowOffset: {
							width: 2,
							height: 5
						},
						shadowColor: 'rgba(0, 0, 0, .6)'
					}}>
					<Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Reset Password</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
