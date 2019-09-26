import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Platform,
  Animated
} from "react-native";
import {
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Paragraph
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 24,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FDD883",
    background: "#FEF7EC"
  }
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* AppBar */}
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Eazy App" />
          <Appbar.Action icon="search" onPress={() => {}} />
          <Appbar.Action icon="more-vert" onPress={() => {}} />
        </Appbar.Header>
        {/* Content */}
        <Content />
      </View>
    </PaperProvider>
  );
}

class Content extends Component {
  // Animation
  _scrollValue = new Animated.Value(0);

  state = {
    data: ["Project", "About", "Reviews", "Community", "Files"],
    dataIndex: 0
  };

  _flatlistRef = React.createRef();

  _viewabilityConfig = {
    itemVisiblePercentThreshold: 45
  };

  _IOS = Platform.OS === "ios";

  _onViewableItemsChanged = info => {
    const { index = 0 } = info.viewableItems[0];

    this.setState({ dataIndex: index });
  };

  _itemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index
  });

  _onScrollEndDrag = event => {
    const { dataIndex, data } = this.state;
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
      if (speed < -1 && dataIndex < data.length - 1) {
        index += 1;
      }
      if (speed > 1 && dataIndex > 0) {
        index -= 1;
      }
    }

    this._flatlistRef.current.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5
    });
    this.setState({ dataIndex: index });
  };

  _navOnClick = index => {
    this._flatlistRef.current.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5
    });
    this.setState({ dataIndex: index });
  };

  render() {
    const { data, dataIndex } = this.state;

    return (
      <View style={styles.flatListContainer}>
        {/* Menu */}
        <FlatList
          style={styles.flatListMenu}
          data={data}
          extraData={dataIndex}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            // <Animated.View
            //   style={[
            //     {
            //       backgroundColor: this._scrollValue.interpolate({
            //         inputRange: [0, screenWidth * index + dataIndex],
            //         outputRange: ["#CCC", DefaultTheme.colors.primary],
            //         extrapolate: "clamp"
            //       }),
            //       marginLeft: 11
            //     },
            //     styles.indicator
            //   ]}
            // />
            <ListButton
              style={styles.flatListItem}
              isSelected={index === dataIndex}
              title={item}
              onPress={() => this._navOnClick(index)}
            />
          )}
        />
        {/* Content */}
        <FlatList
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { x: this._scrollValue } }
            }
          ])}
          ref={this._flatlistRef}
          style={styles.flatListContent}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={this._itemLayout}
          onViewableItemsChanged={this._onViewableItemsChanged}
          viewabilityConfig={this._viewabilityConfig}
          onScrollEndDrag={this._onScrollEndDrag}
          decelerationRate="fast"
          bounces={true}
          snapToInterval={screenWidth}
          renderItem={({ item, index }) => (
            <ScrollView style={styles.contentContainer}>
              <Paragraph>{item}</Paragraph>
            </ScrollView>
          )}
        />
      </View>
    );
  }
}

function ListButton({ title, onPress, isSelected }) {
  return (
    <View>
      {isSelected ? (
        <Button mode={"contained"} onPress={onPress}>
          {title}
        </Button>
      ) : (
        <Button color="#333" onPress={onPress}>
          {title}
        </Button>
      )}
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  flatListContainer: {
    // paddingHorizontal: 14,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: theme.colors.background
  },
  contentContainer: {
    width: screenWidth
  },
  flatListContent: {
    backgroundColor: theme.colors.background,
    height: "100%"
  },
  flatListMenu: {
    marginVertical: 24,
    marginHorizontal: 14,
    height: 56
  },
  flatListItem: {
    marginHorizontal: 14
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 2
  }
});

export default App;
