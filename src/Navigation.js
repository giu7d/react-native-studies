import React, { Component } from 'react'; 
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

// Screens
import MainScreen from './MainScreen';
const AlbumsScreen = () => <View><Text>Albums</Text></View>;
const RecentsScreen = () => <View><Text>Recents</Text></View>;


export default class Navigation extends Component {

	state = {
		index: 0,
		routes: [
			{ key: 'main', title: 'Charts', icon: 'pie-chart' },
			{ key: 'albums', title: 'Data', icon: 'mood' },
			{ key: 'recents', title: 'Filters', icon: 'history' },
		],
	};

	_handleIndexChange = (index) => this.setState({ index });

	_renderScene = BottomNavigation.SceneMap({
		main: MainScreen,
		albums: AlbumsScreen,
		recents: RecentsScreen,
	});

	render() {
		return (
			<BottomNavigation
				navigationState={this.state}
				onIndexChange={this._handleIndexChange}
				renderScene={this._renderScene}
				activeColor="#F73942"
				shifting={true}
				barStyle={{
					elevation: 0,
					shadowOpacity: 0,
					borderTopWidth: 0
				}}
			/>
		);
	}
}
