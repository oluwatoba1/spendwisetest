import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Link } from 'react-router-native';

import AuthContext from '../AuthContext';
import { states } from '../utils/states';

export default function SignUp() {
	const { setAuth } = useContext(AuthContext);

	const onRegister = () => {
		setAuth(true);
	};

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
				<Text
					style={{
						fontSize: 24,
						paddingLeft: 20,
						paddingTop: 40,
						color: '#fff',
						fontWeight: 'bold'
					}}>
					Sign Up
				</Text>
			</View>

			<View
				style={{
					position: 'absolute',
					backgroundColor: '#FFF',
					width: '90%',
					height: '80%',
					top: 100,
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
				<ScrollView>
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
							placeholder="Username"
						/>
					</View>

					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>Email</Text>
						<TextInput
							style={{
								height: 40,
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, .3)',
								borderRadius: 2,
								padding: 10
							}}
							placeholder="joshuahermes@spendwise.ng"
						/>
					</View>

					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>Phone Number</Text>
						<TextInput
							style={{
								height: 40,
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, .3)',
								borderRadius: 2,
								padding: 10
							}}
							placeholder="08012345678"
						/>
					</View>

					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>State</Text>
						<View
							style={{
								height: 40,
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, .3)',
								borderRadius: 2,
								elevation: 4,
								shadowOffset: {
									width: 5,
									height: 5
								}
							}}>
							<Picker mode="dropdown">
								{states.map(state => (
									<Picker.Item key={state} label={state} value={state} />
								))}
							</Picker>
						</View>
					</View>

					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>Password</Text>
						<TextInput
							style={{
								height: 40,
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, .3)',
								borderRadius: 2,
								padding: 10
							}}
							placeholder="*******"
							placeholderTextColor="rgba(0, 0, 0, .4)"
						/>
					</View>

					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>
							Confirm Password
						</Text>
						<TextInput
							style={{
								height: 40,
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, .3)',
								borderRadius: 2,
								padding: 10
							}}
							placeholder="*******"
							placeholderTextColor="rgba(0, 0, 0, .4)"
						/>
					</View>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingTop: 20,
							paddingBottom: 20
						}}>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 14,
								color: 'rgba(0, 0, 0, .5)'
							}}>
							Forgot username?
						</Text>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 14,
								color: 'rgba(0, 0, 0, .5)'
							}}>
							Forgot password?
						</Text>
					</View>

					<TouchableOpacity
						onPress={onRegister}
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
						<Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Sign Up</Text>
					</TouchableOpacity>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							paddingTop: 20,
							paddingBottom: 20
						}}>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 14,
								color: 'rgba(0, 0, 0, .5)'
							}}>
							Already have an account?
						</Text>
						<Link to="/signup">
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 14,
									color: '#205cc7',
									textDecorationLine: 'underline',
									textDecorationColor: '#205cc7'
								}}>
								{' '}
								Log in
							</Text>
						</Link>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
