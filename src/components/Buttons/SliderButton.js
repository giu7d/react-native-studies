import React, { createRef } from "react";
import { Animated, View } from "react-native";
import { Button, withTheme, IconButton } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Shimmer from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

function SliderButton({ theme }) {
  const swipeableRef = createRef();

  const renderLeftActions = (progress, dragX) => {
    const translateX = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [100, 0]
    });

    const opacity = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1]
    });

    const scale = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX }],
          opacity
        }}
      >
        <LinearGradient
          colors={["#66E9D2", "#4BC6E4"]}
          start={[0.75, 0.5]}
          style={{
            borderRadius: theme.roundness,
            elevation: 0,
            width: 200,
            height: 74,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          <Animated.View style={{ scaleX: scale, scaleY: scale }}>
            <IconButton
              style={{
                width: 200,
                height: 74
              }}
              icon="done"
              color={theme.colors.background}
              onPress={() => swipeableRef.current.close()}
            />
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      overshootFriction={8}
      renderLeftActions={renderLeftActions}
      // renderRightActions={renderRightActions}
      containerStyle={{ borderRadius: theme.roundness }}
    >
      <LinearGradient
        colors={[theme.colors.accent, "#F29BB4"]}
        start={[0.75, 0.5]}
        style={{ borderRadius: theme.roundness }}
      >
        <Button
          style={{
            elevation: 0,
            justifyContent: "center"
          }}
          contentStyle={{
            width: 200,
            height: 74
          }}
          icon="shopping-cart"
          mode="text"
          color={theme.colors.background}
          onPress={() => swipeableRef.current.openLeft()}
        >
          Add to cart
        </Button>
      </LinearGradient>
    </Swipeable>
  );
}

export default withTheme(SliderButton);
