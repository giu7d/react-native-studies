import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { withTheme } from "react-native-paper";
import Page from "./Page";
import Menu from "./Menu/Menu";

class Paginator extends Component {
  _pageRef = React.createRef();
  _menuRef = React.createRef();

  VIEW_ABILITY_CONFIG = {
    itemVisiblePercentThreshold: 50
  };

  IOS = Platform.OS === "ios";

  state = {
    dataIndex: 0
  };

  _itemLayout = (data, index) => ({
    length: this.props.pageWidth,
    offset: this.props.pageWidth * index,
    index
  });

  _onScrollEnd = event => {
    const { dataIndex } = this.state;
    const { data } = this.props;

    const speed = event.nativeEvent.velocity.x;
    let index = dataIndex;

    if (this._IOS) {
      if (speed > 1 && index < data.length - 1) {
        index += 1;
      }
      if (speed < -1 && index > 0) {
        index -= 1;
      }
    } else {
      if (speed < -1 && index < data.length - 1) {
        index += 1;
      }
      if (speed > 1 && index > 0) {
        index -= 1;
      }
    }

    const scrollToIndexOptions = {
      index: index,
      animated: true,
      viewPosition: 0.5
    };

    this._pageRef.current.scrollToIndex(scrollToIndexOptions);
    this._menuRef.current.scrollToIndex(scrollToIndexOptions);
    this.setState({ dataIndex: index });
  };

  _navigateToIndex = index => {
    const scrollToIndexOptions = {
      index: index,
      animated: true,
      viewPosition: 0.5
    };

    this._pageRef.current.scrollToIndex(scrollToIndexOptions);
    this._menuRef.current.scrollToIndex(scrollToIndexOptions);
    this.setState({ dataIndex: index });
  };

  render() {
    const { dataIndex } = this.state;
    const { data, theme } = this.props;

    return (
      <View
        style={[{ backgroundColor: theme.colors.background }, styles.container]}
      >
        {/* Menu */}
        <Menu
          reference={this._menuRef}
          data={data}
          dataIndex={dataIndex}
          onPress={this._navigateToIndex}
        />
        {/* Pages */}
        <Page
          reference={this._pageRef}
          data={data}
          getItemLayout={this._itemLayout}
          viewabilityConfig={this.VIEW_ABILITY_CONFIG}
          onScrollEndDrag={this._onScrollEnd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14
  }
});

export default withTheme(Paginator);
