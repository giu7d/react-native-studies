import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import GraphCard from './GraphCard';

export default class MainScreen extends Component {
  state = {
    drilldownCount: 0,
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

    const country = `country #${Math.floor(Math.random() * 10)}`;
    const value = Math.floor(Math.random() * 100);
    
    const place = { country, value }

    data.push(place);
    this.setState({ data });
  }

  _update = () => {
    const { drilldownCount } = this.state;

    this.setState({
      drilldownCount: drilldownCount+1
    });
    
    this.forceUpdate();
  }

  render() {

    const { data, drilldownCount } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <GraphCard 
            data={data} 
            drilldownCount={drilldownCount} 
            push={this._pushData} 
            pop={this._popData} 
          />
        </View>
        <FAB
          style={styles.fab}
          small={false}
          icon="autorenew"
          onPress={this._update}
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
