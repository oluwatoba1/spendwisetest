import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dashboard() {
	return (
		<ScrollView contentContainerStyle={{ padding: 10 }}>
			<TouchableOpacity style={{ alignItems: 'flex-end', paddingRight: 20 }}>
				<Ionicons name="ios-notifications-outline" style={{ fontSize: 26, color: '#205cc7' }} />
			</TouchableOpacity>

			<Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20, paddingBottom: 20 }}>
				Hello, Joshua
			</Text>

			<View
				style={{
					backgroundColor: '#205cc7',
					height: 200,
					borderRadius: 5,
					paddingVertical: 20,
					paddingHorizontal: 10,
					elevation: 5,
					shadowOffset: {
						width: 2,
						height: 5
					},
					shadowColor: '#205cc7'
				}}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingBottom: 20
					}}>
					<Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Spent</Text>
					<Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>June</Text>
				</View>

				<Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', paddingVertical: 10 }}>
					NGN 40,000
				</Text>

				<LinearGradient
					colors={['#fead50', '#bec0ce']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={{
						height: 5,
						borderRadius: 3,
						marginVertical: 10
					}}
					locations={[0.47, 0.5]}
				/>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>N7,000 today</Text>
					<Text
						style={{
							color: '#fff',
							fontSize: 16,
							fontWeight: 'bold',
							width: 100,
							textAlign: 'right'
						}}>
						N85,000 Budget
					</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginVertical: 30
				}}>
				<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Expenses</Text>
				<Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>See all</Text>
			</View>

			<View
				style={{
					backgroundColor: '#fff',
					height: 300,
					width: '100%',
					elevation: 5,
					shadowOffset: { width: 2, height: 5 },
					shadowColor: '#aaa',
					paddingVertical: 20,
					paddingHorizontal: 10,
					justifyContent: 'center'
				}}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}>
					<Text style={{ textAlign: 'center', color: '#aaa' }}>Friday, 10, June, 2020</Text>
					<View
						style={{
							backgroundColor: '#e7414b',
							borderRadius: 2,
							paddingHorizontal: 10,
							paddingVertical: 2
						}}>
						<Text style={{ textAlign: 'center', color: '#fff' }}>-N7,000</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingVertical: 10
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 0.5
						}}>
						<View
							style={{
								backgroundColor: '#4fc74b',
								padding: 10,
								width: 55,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 4,
								marginRight: 20
							}}>
							<Ionicons
								name="ios-restaurant"
								style={{
									color: '#fff',
									fontSize: 25
								}}
							/>
						</View>
						<View>
							<Text style={{ fontWeight: 'bold' }}>Food</Text>
							<Text style={{ color: '#aaa' }}>Mega Chicken</Text>
						</View>
					</View>
					<View>
						<Text style={{ color: '#e7414b', textAlign: 'right' }}>-N1850</Text>
						<Text style={{ color: '#aaa', fontSize: 12, textAlign: 'right' }}>09 Jun</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingVertical: 10
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 0.5
						}}>
						<View
							style={{
								backgroundColor: '#e7414b',
								padding: 10,
								width: 55,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 4,
								marginRight: 20
							}}>
							<Ionicons
								name="ios-restaurant"
								style={{
									color: '#fff',
									fontSize: 25
								}}
							/>
						</View>
						<View>
							<Text style={{ fontWeight: 'bold' }}>Transport</Text>
							<Text style={{ color: '#aaa' }}>Fuel</Text>
						</View>
					</View>
					<View>
						<Text style={{ color: '#e7414b', textAlign: 'right' }}>-N1000</Text>
						<Text style={{ color: '#aaa', fontSize: 12, textAlign: 'right' }}>09 Jun</Text>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingVertical: 10
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 0.5
						}}>
						<View
							style={{
								backgroundColor: '#227af3',
								padding: 10,
								width: 55,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 4,
								marginRight: 20
							}}>
							<Ionicons
								name="md-phone-portrait"
								style={{
									color: '#fff',
									fontSize: 25
								}}
							/>
						</View>
						<View>
							<Text style={{ fontWeight: 'bold' }}>Airtime</Text>
							<Text style={{ color: '#aaa' }}>Airtel</Text>
						</View>
					</View>
					<View>
						<Text style={{ color: '#e7414b', textAlign: 'right' }}>-N1000</Text>
						<Text style={{ color: '#aaa', fontSize: 12, textAlign: 'right' }}>09 Jun</Text>
					</View>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginVertical: 30
				}}>
				<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Goals</Text>
				<Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>See all</Text>
			</View>

			<ScrollView
				horizontal={true}
				contentContainerStyle={{
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}>
				<View
					style={{
						position: 'relative',
						height: 180,
						width: 140,
						backgroundColor: '#0157a2',
						borderRadius: 5,
						marginBottom: 10,
						marginRight: 10,
						elevation: 5,
						shadowOffset: {
							width: 0,
							height: 5
						},
						shadowColor: '#aaa'
					}}>
					<View
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							height: '70%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<FontAwesome
							name="graduation-cap"
							style={{ color: '#fff', fontSize: 40, marginTop: 20 }}
						/>
					</View>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							height: '30%',
							width: '100%',
							paddingHorizontal: 10,
							alignItems: 'flex-start'
						}}>
						<Text style={{ color: '#fff', paddingBottom: 10, fontSize: 12 }}>Master's Program</Text>
						<LinearGradient
							colors={['#fff', '#bec0ce']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={{
								height: 5,
								borderRadius: 3,
								width: '100%'
							}}
							locations={[0.3, 0.32]}
						/>
					</View>
				</View>
				<View
					style={{
						position: 'relative',
						height: 180,
						width: 140,
						backgroundColor: '#fead50',
						borderRadius: 5,
						marginBottom: 10,
						marginRight: 10,
						elevation: 5,
						shadowOffset: {
							width: 0,
							height: 5
						},
						shadowColor: '#aaa'
					}}>
					<View
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							height: '70%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<FontAwesome5 name="car" style={{ color: '#fff', fontSize: 40, marginTop: 20 }} />
					</View>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							height: '30%',
							width: '100%',
							paddingHorizontal: 10,
							alignItems: 'flex-start'
						}}>
						<Text style={{ color: '#fff', paddingBottom: 10, fontSize: 12 }}>New Car</Text>
						<LinearGradient
							colors={['#fff', '#bec0ce']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={{
								height: 5,
								borderRadius: 3,
								width: '100%'
							}}
							locations={[0.2, 0.22]}
						/>
					</View>
				</View>
				<View
					style={{
						position: 'relative',
						height: 180,
						width: 140,
						backgroundColor: '#1e7af2',
						borderRadius: 5,
						marginBottom: 10,
						marginRight: 10,
						elevation: 5,
						shadowOffset: {
							width: 0,
							height: 10
						},
						shadowColor: '#aaa'
					}}>
					<View
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							height: '70%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<SimpleLineIcons
							name="diamond"
							style={{ color: '#fff', fontSize: 40, marginTop: 20 }}
						/>
					</View>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							height: '30%',
							width: '100%',
							paddingHorizontal: 10,
							alignItems: 'flex-start'
						}}>
						<Text style={{ color: '#fff', paddingBottom: 10, fontSize: 12 }}>Gucci Bag</Text>
						<LinearGradient
							colors={['#fff', '#bec0ce']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={{
								height: 5,
								borderRadius: 3,
								width: '100%'
							}}
							locations={[0.2, 0.22]}
						/>
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
}
