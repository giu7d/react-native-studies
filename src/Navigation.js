import React, { Component } from 'react'; 
import { BottomNavigation, Text } from 'react-native-paper';

// Screens
import MainScreen from './MainScreen';


// Routes
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;


export default class Navigation extends Component {

	state = {
		index: 0,
		routes: [
			{ key: 'main', title: 'Main', icon: 'queue-music' },
			{ key: 'albums', title: 'Albums', icon: 'album' },
			{ key: 'recents', title: 'Recents', icon: 'history' },
		],
	};

	_handleIndexChange = (index) => this.setState({ index });

	_renderScene = BottomNavigation.SceneMap({
		main: MainScreen,
		albums: AlbumsRoute,
		recents: RecentsRoute,
	});

	render() {
		return (
			<BottomNavigation
				navigationState={this.state}
				onIndexChange={this._handleIndexChange}
				renderScene={this._renderScene}
				activeColor="#FFFFFF"
			/>
		);
	}
}
