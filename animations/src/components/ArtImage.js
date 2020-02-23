import React, { createRef } from "react";
import { Image, Dimensions, Animated, View } from "react-native";
import { Card, Text, withTheme } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const IMAGE_WIDTH = SCREEN_WIDTH * 0.8;

function ArtImage({ theme }) {
  const swipeableRef = createRef();

  const renderRightActions = (progress, dragX) => {
    const translateX = dragX.interpolate({
      inputRange: [-SCREEN_WIDTH, 0],
      outputRange: [0, SCREEN_WIDTH]
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX }],
          width: "100%",
          alignItems: "center"
        }}
      >
        <LinearGradient
          colors={[theme.colors.subText, theme.colors.text]}
          start={[0.5, 0.1]}
          style={{ borderRadius: theme.roundness }}
        >
          <Card
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH,
              elevation: 0,
              backgroundColor: "inherit"
            }}
          >
            <Card.Title
              theme={{ colors: { text: theme.colors.background } }}
              title="Details"
              subtitle="The Fool - By Fargo Hashoff"
            />
          </Card>
        </LinearGradient>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={1}
      overshootFriction={8}
      renderRightActions={renderRightActions}
      containerStyle={{
        margin: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <Card
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          elevation: 0
        }}
      >
        <Card.Cover
          source={{
            uri:
              "https://cdn.inprnt.com/thumbs/71/f1/71f1512201b66a7a7e19990d884ca3ad.jpg?response-cache-control=max-age=2628000"
          }}
          style={{
            width: "100%",
            height: IMAGE_WIDTH,
            resizeMode: "stretch"
          }}
        />
      </Card>
    </Swipeable>
  );
}

export default withTheme(ArtImage);
