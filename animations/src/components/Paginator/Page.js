import React from "react";
import { Dimensions, FlatList, StyleSheet, ScrollView } from "react-native";
import { withTheme } from "react-native-paper";
import PropTypes from "prop-types";

function Page({
  reference,
  data,
  getItemLayout,
  viewabilityConfig,
  onScrollEndDrag,
  theme
}) {
  return (
    <FlatList
      ref={reference}
      // Data & Indexing
      data={data}
      keyExtractor={(item, index) => index.toString()}
      // Apperance & Orientation
      horizontal
      style={[{ backgroundColor: theme.colors.background }, styles.page]}
      showsHorizontalScrollIndicator={false}
      // Trasition & Interation
      getItemLayout={getItemLayout}
      viewabilityConfig={viewabilityConfig}
      onScrollEndDrag={onScrollEndDrag}
      decelerationRate="fast"
      bounces={false}
      pagingEnabled={false}
      // Render
      renderItem={({ item, index }) => (
        <ScrollView style={styles.pageContent}>{item}</ScrollView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%"
  },
  pageContent: {
    width: Dimensions.get("window").width
  }
});

Page.propTypes = {
  reference: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  viewabilityConfig: PropTypes.object.isRequired,
  getItemLayout: PropTypes.func.isRequired,
  onScrollEndDrag: PropTypes.func.isRequired,
  theme: PropTypes.object
};

export default withTheme(Page);
