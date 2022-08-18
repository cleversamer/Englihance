import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, CheckBox } from "@rneui/themed";
import CustomSwipeable from "../hoc/CustomSwipeable";
import colors from "../config/colors";

const textOptions = {
  numberOfLines: 2,
};

const Word = ({ pair, onPress, onDelete }) => {
  return (
    <CustomSwipeable onPress={onDelete}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text {...textOptions} style={[styles.text, styles.word]}>
              {pair.word}
            </Text>

            <Text {...textOptions} style={[styles.text, styles.translation]}>
              {pair.translation}
            </Text>
          </View>

          <View style={styles.rightContainer}>
            <CheckBox checked={pair.checked} checkedColor="#fc5c65" />
          </View>
        </View>
      </TouchableOpacity>
    </CustomSwipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.sugar,
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 0.8,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
  },
  text: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "bold",
  },
  word: {
    flex: 1,
  },
  translation: {
    flex: 1,
  },
  date: {
    fontSize: 11,
    color: colors.darkgrey,
  },
});

export default Word;
