import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, FAB } from 'react-native-paper';
import { WebView } from 'react-native-webview';

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

              <Card.Content style={{width: `100%`, height:300}}>
                <WebView
                  originWhitelist={['*']}
                  source={{ html: `
                  <script src="https://www.amcharts.com/lib/4/core.js"></script>
                  <script src="https://www.amcharts.com/lib/4/charts.js"></script>
                  <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
                  <style>
                    #chartdiv {
                      width: 100%;
                    }
                  </style>
                  <div id="chartdiv"></div>
                  <script>
                    /**
                     * ---------------------------------------
                     * This demo was created using amCharts 4.
                     * 
                     * For more information visit:
                     * https://www.amcharts.com/
                     * 
                     * Documentation is available at:
                     * https://www.amcharts.com/docs/v4/
                     * ---------------------------------------
                     */

                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    var chart = am4core.create("chartdiv", am4charts.PieChart);
                    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
                    chart.data = [
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
                        value: 165
                      },
                      {
                        country: "Australia",
                        value: 139
                      },
                      {
                        country: "Austria",
                        value: 128
                      }
                    ];
                    chart.radius = am4core.percent(70);
                    chart.innerRadius = am4core.percent(40);
                    chart.startAngle = 180;
                    chart.endAngle = 360;  

                    var series = chart.series.push(new am4charts.PieSeries());
                    series.dataFields.value = "value";
                    series.dataFields.category = "country";

                    series.slices.template.cornerRadius = 10;
                    series.slices.template.innerCornerRadius = 7;
                    series.slices.template.draggable = true;
                    series.slices.template.inert = false;
                    series.alignLabels = false;

                    series.hiddenState.properties.startAngle = 90;
                    series.hiddenState.properties.endAngle = 90;

                  </script>
                  ` }}

                />
              </Card.Content>
              
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
