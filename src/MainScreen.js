import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';

import AppBar from './AppBar';

export default class MainScreen extends Component {

  _ok = () => console.log('Ok');

  render() {
    return (
      <View style={styles.container}>
        <View>
          <AppBar />
          <View>
            <Card style={{ marginVertical: 24 }}>
              <Card.Title 
                title="Card Title" 
                subtitle="Card Subtitle" />

              <Card.Content>
                {/* Insira a Web View AQUI!! */}
                <Title>Hello</Title>
              </Card.Content>

              <Card.Cover 
                source={{ uri: 'https://picsum.photos/700' }} 
              />
              
              <Card.Actions>
                <Button icon="filter-list" onPress={this._ok}>Filtro</Button>
                <Button icon="done" onPress={this._ok}>Ok</Button>
              </Card.Actions>
            </Card>
          </View>
          
        </View>
        <FAB
          style={styles.fab}
          small={false}
          icon="add"
          onPress={() => console.log('Pressed')}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    minHeight:`100%`
  }
})
