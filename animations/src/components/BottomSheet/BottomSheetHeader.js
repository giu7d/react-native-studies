import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import Shimmer from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

function BottomSheetHeader({ theme }) {
  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, styles.container]}
    >
      {/* <LinearGradient
        colors={[theme.colors.disabled, "#FFFFFF"]}
        start={[0.75, 0.5]}
        style={{
          opacity: 0.4
        }}
      >
        <View
          style={{
            height: 3,
            width: 100,
            borderRadius: theme.roundness
          }}
        />
      </LinearGradient> */}
      <Shimmer
        autoRun={true}
        width={100}
        height={3}
        duration={3000}
        colorShimmer={[theme.colors.disabled, "#FFFFFF", "#F9F9F9"]}
        reverse={true}
        style={{ opacity: 0.4, borderRadius: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    height: 54,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withTheme(BottomSheetHeader);
