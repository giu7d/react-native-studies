import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, FAB } from 'react-native-paper';
import AmCharts from './AmCharts';

export default class MainScreen extends Component {
  state = {
    data: [
      {
        country: "Lithuania",
        value: 401
      },
      {
        country: "Czech Republic",
        value: 300
      },
      {
        country: "Ireland",
        value: 200
      },
      {
        country: "Germany",
        value: 65
      },
      {
        country: "Australia",
        value: 100
      },
      {
        country: "Austria",
        value: 100
      }
    ],
  }


  _popData = () => {
    const { data } = this.state;
    data.pop();
    this.setState({ data });
  }

  _pushData = () => {
    const { data } = this.state;
    const place = {
      country: `country #${Math.floor(Math.random() * 10)}`,
      value: Math.floor(Math.random() * 100)
    }

    data.push(place);

    this.setState({ data });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          
          <Card style={{ marginVertical: 24 }} theme={{ colors: { primary: '#333333' }}}>
            <Card.Title 
              title="Card Title" 
              subtitle="Card Subtitle" />

            <Card.Content>
              <AmCharts data={this.state.data} />
            </Card.Content>
            
            <Card.Actions>
              <Button icon="remove" onPress={this._popData}>Pop</Button>
              <Button icon="add" onPress={this._pushData}>Add</Button>
            </Card.Actions>
          </Card>
        </View>
        <FAB
          style={styles.fab}
          small={false}
          icon="add"
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
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
