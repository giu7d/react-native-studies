import React from "react";
import { View } from "react-native";
import { Appbar, Chip, withTheme, Avatar } from "react-native-paper";
import { config } from "react-spring";
import { Spring, animated } from "react-spring/renderprops";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedView = animated(View);

function AppBar({ isHidden, theme }) {
  return (
    <Spring native to={{ top: isHidden ? -100 : 0, marginTop: 24 }}>
      {props => (
        <AnimatedView style={props}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="" />
            <LinearGradient
              colors={[theme.colors.accent, "#F29BB4"]}
              start={[0.75, 0.5]}
              style={{ borderRadius: theme.roundness }}
            >
              <Chip
                avatar={
                  <Avatar.Icon
                    size={24}
                    icon="shopping-cart"
                    color={theme.colors.background}
                    style={{ backgroundColor: "rgba(0,0,0,0)" }}
                  />
                }
                theme={{
                  colors: {
                    text: theme.colors.background
                  }
                }}
                textStyle={{
                  fontWeight: "bold"
                }}
                style={{
                  elevation: 0,
                  backgroundColor: "rgba(0,0,0,0)"
                }}
                onPress={() => {}}
              >
                0
              </Chip>
            </LinearGradient>
            <Appbar.Action icon="more-vert" onPress={() => {}} />
          </Appbar.Header>
        </AnimatedView>
      )}
    </Spring>
  );
}

AppBar.propTypes = {
  isHidden: PropTypes.bool.isRequired
};

export default withTheme(AppBar);
