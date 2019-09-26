import React from "react";
import { StyleSheet, FlatList } from "react-native";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function Menu({ reference, data, dataIndex, onPress }) {
  return (
    <FlatList
      ref={reference}
      // Data & Indexing
      data={data}
      extraData={dataIndex}
      keyExtractor={(item, index) => index.toString()}
      // Apperance & Orientation
      style={styles.menu}
      showsHorizontalScrollIndicator={false}
      horizontal
      // Render
      renderItem={({ item, index }) => (
        <MenuItem
          style={styles.menuItem}
          title={item}
          isSelected={index === dataIndex}
          onPress={() => onPress(index)}
        />
      )}
    />
  );
}

Menu.propTypes = {
  reference: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  dataIndex: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  menu: {
    marginVertical: 24,
    marginHorizontal: 14,
    height: 56
  },
  menuItem: {
    marginHorizontal: 14
  }
});

export default Menu;
