import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useHistory } from 'react-router-native';
import Onboarding from 'react-native-onboarding-swiper';

const pages = [
	{
		backgroundColor: '#fff',
		image: (
			<Image
				style={{ height: 250, resizeMode: 'contain' }}
				source={require('../assets/onboarding1.png')}
			/>
		),
		title: (
			<Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '700', paddingBottom: 10 }}>
				Track and Analyse
			</Text>
		),
		subtitle: (
			<Text style={{ textAlign: 'center', width: '65%', fontSize: 16, color: 'rgba(0, 0, 0, .3)' }}>
				Lorem ipsum dolor sit amet, consectur, sadispacing elitir, set diam nonumy eirmud
			</Text>
		)
	},
	{
		backgroundColor: '#fff',
		image: (
			<Image
				style={{ height: 250, resizeMode: 'contain' }}
				source={require('../assets/onboarding2.png')}
			/>
		),
		title: (
			<Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '700', paddingBottom: 10 }}>
				Set Budgets and Goals
			</Text>
		),
		subtitle: (
			<Text style={{ textAlign: 'center', width: '65%', fontSize: 16, color: 'rgba(0, 0, 0, .3)' }}>
				Set goals and save money toward your goal
			</Text>
		)
	},
	{
		backgroundColor: '#fff',
		image: (
			<Image
				style={{ height: 250, resizeMode: 'contain' }}
				source={require('../assets/onboarding3.png')}
			/>
		),
		title: (
			<Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '700', paddingBottom: 10 }}>
				Get Notified
			</Text>
		),
		subtitle: (
			<Text style={{ textAlign: 'center', width: '65%', fontSize: 16, color: 'rgba(0, 0, 0, .3)' }}>
				Set goals and save money toward your goal
			</Text>
		)
	},
	{
		backgroundColor: '#fff',
		image: (
			<Image
				style={{ height: 250, resizeMode: 'contain' }}
				source={require('../assets/onboarding4.png')}
			/>
		),
		title: (
			<Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '700', paddingBottom: 10 }}>
				Achieve!
			</Text>
		),
		subtitle: (
			<Text style={{ textAlign: 'center', width: '65%', fontSize: 16, color: 'rgba(0, 0, 0, .3)' }}>
				Take control and achieve your financial and other life goals
			</Text>
		)
	}
];

const Cylinder = ({ isLight, selected }) => {
	let backgroundColor;
	if (isLight) {
		backgroundColor = selected ? 'rgba(254,173,80, .8)' : 'rgba(0,0,0, .3)';
	} else {
		backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
	}
	return (
		<View
			style={{
				width: 20,
				height: 6,
				borderRadius: 3,
				marginHorizontal: 3,
				backgroundColor
			}}
		/>
	);
};

const backgroundColor = isLight => (isLight ? 'rgba(254,173,80, .8)' : 'rgb(0,0,0)');
const color = isLight => backgroundColor(!isLight);

const Done = (isLight, history, setOnBoard) => (
	<TouchableOpacity
		onPress={() => {
			setOnBoard(true);
			history.push('/login');
		}}
		style={{
			backgroundColor: backgroundColor(isLight),
			height: 40,
			width: 40,
			borderRadius: 20,
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: 10
		}}>
		<Text style={{ textAlign: 'center', color: color(isLight) }}>GO!</Text>
	</TouchableOpacity>
);

export default function Onboarder({ setOnBoard }) {
	const history = useHistory();

	const onComplete = async () => {
		await AsyncStorage.setItem('hasOnboarded', JSON.stringify({ hasOnboarded: true }));
		setOnBoard(true);
		// history.push('/login');
	};

	return (
		<View style={{ flex: 1 }}>
			<Onboarding
				pages={pages}
				onSkip={onComplete}
				onDone={onComplete}
				skipLabel=""
				nextLabel=""
				bottomBarHighlight={false}
				DotComponent={Cylinder}
				DoneButtonComponent={({ isLight }) => Done(isLight, history, setOnBoard)}
			/>
			<View
				style={{
					flex: 0.1,
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-around'
				}}>
				<TouchableOpacity
					style={{
						flex: 0.3,
						padding: 10,
						borderWidth: 2,
						borderRadius: 2,
						borderColor: '#205cc7',
						backgroundColor: '#e6eafc'
					}}
					onPress={() => {
						setOnBoard(true);
						history.push('/signup');
					}}>
					<Text style={{ textAlign: 'center', color: '#205cc7' }}>REGISTER</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						padding: 10,
						backgroundColor: '#205cc7',
						flex: 0.3,
						borderRadius: 2,
						borderColor: '#205cc7',
						borderWidth: 2
					}}
					onPress={() => {
						setOnBoard(true);
						history.push('/login');
					}}>
					<Text style={{ textAlign: 'center', color: '#fff' }}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
