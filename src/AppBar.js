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
						color="#333333"
						title="Title"
						titleStyle={{fontWeight:'bold'}}
					/>
					<Appbar.Action 
						color="#666666"
						icon="favorite" 
						onPress={this._onSearch} 
					/>
					<Appbar.Action 
						color="#666666"
						icon="more-vert" 
						onPress={this._onMore} 
						/>
			</Appbar.Header>
		);
	}
}
