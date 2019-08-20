import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native-paper';

export default class AmCharts extends Component {

  _webview = null;

  componentDidMount() {
    this._webview.injectJavaScript(`
      var chart = am4core.createFromConfig({
        "series": [{
          "type": "PieSeries",
          "dataFields": {
            "value": "value",
            "category": "country"
          }
        }],
        "data": ${JSON.stringify(this.props.data)},
      }, "chartdiv", am4charts.PieChart);
    `);
  }

  componentDidUpdate() {
    this._webview.injectJavaScript(`
      chart.data =  ${JSON.stringify(this.props.data)}
    `);    
  }

  render() {
    const imports = `
      <script>
        document.getElementById("log").innerHTML = "Imports #" + Math.floor(Math.random() * 100000);      
      </script>
      <script src="https://www.amcharts.com/lib/4/core.js"></script>
      <script src="https://www.amcharts.com/lib/4/charts.js"></script>
      <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    `;
    const tags = `
      <style>
        #chartdiv {
          width: 100%;
        }
      </style>
      <div>
        <p id="log">HELLO</p>
        <div id="chartdiv"></div>
      </div>
    `;
    const html = tags + imports;

    return (
      <View style={{ width: `100%`, height: 300 }}>
        <WebView
          ref={ref => (this._webview = ref)}
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
