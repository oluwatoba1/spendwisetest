import React from 'react';
import { Image, Button, View } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';
import { useHistory } from 'react-router-native';
import Onboarding from 'react-native-onboarding-swiper';

const pages = [
	{
		backgroundColor: '#fff',
		image: <Image source={require('./assets/favicon.png')} />,
		title: 'Onboarding1',
		subtitle: 'Done with React Native Onboarding Swiper1'
	},
	{
		backgroundColor: '#fff',
		image: <Image source={require('./assets/favicon.png')} />,
		title: 'Onboarding2',
		subtitle: 'Done with React Native Onboarding Swiper2'
	},
	{
		backgroundColor: '#fff',
		image: <Image source={require('./assets/favicon.png')} />,
		title: 'Onboarding3',
		subtitle: 'Done with React Native Onboarding Swiper3'
	}
];

export default function Onboarder() {
	const history = useHistory();

	const onComplete = async () => {
		await AsyncStorage.setItem('hasOnboarded', true);

		history.push('/login');
	};

	return (
		<View>
			<Onboarding
				pages={pages}
				onSkip={onComplete}
				onDone={onComplete}
				bottomBarHighlight={false}
				containerStyles={{ height: '75%' }}
			/>
			<View
				style={{
					height: '25%',
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}>
				<Button onPress={() => history.push('/signup')}>Register</Button>
				<Button onPress={() => history.push('/login')}>Login</Button>
			</View>
		</View>
	);
}
