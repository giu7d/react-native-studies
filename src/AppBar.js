import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';

export default class AppBar extends Component {

	_onSearch = () => {
		console.log('onSearch')
	}

	_onMore = () => {
		console.log('onMore')
	}
	
	render() { 
		return (
			<Appbar.Header>
					<Appbar.Content
						title="Title"
					/>
					<Appbar.Action 
						icon="favorite" 
						onPress={this._onSearch} 
					/>
					<Appbar.Action 
						icon="more-vert" 
						onPress={this._onMore} 
						/>
			</Appbar.Header>
		);
	}
}
