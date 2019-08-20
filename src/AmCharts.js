import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native-paper';

export default class AmCharts extends Component {

  render() {

    const style = `
      <style>
        #chartdiv {
          width: 100%;
        }
      </style>
    `;

    const imports = `
      <script>
        document.getElementById("log").innerHTML = "Imports #" + Math.floor(Math.random() * 100000);      
      </script>
      <script src="https://www.amcharts.com/lib/4/core.js"></script>
      <script src="https://www.amcharts.com/lib/4/charts.js"></script>
      <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    `;
    
    const script = `
      <script>
        // Create chart instance in one go
        var chart = am4core.createFromConfig({
          // Create pie series
          "series": [{
            "type": "PieSeries",
            "dataFields": {
              "value": "value",
              "category": "country"
            }
          }],

          // Add data
          "data": ${JSON.stringify(this.props.data)},


        }, "chartdiv", am4charts.PieChart);
      </script>
    `;
    
    const tags = `
      <div>
        <p id="log">HELLO</p>
        <div id="chartdiv"></div>
      </div>
    `;

    const html = style + tags + imports + script;

    return (
      <View style={{ width: `100%`, height: 300 }}>
        <WebView
          originWhitelist={['*']}
          source={{ html }}
          javaScriptEnabled={true}
          useWebKit={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator animating={true} />}
        />
      </View>

    );
  }
}
