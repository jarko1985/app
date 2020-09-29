import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search Here"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 50,
    marginTop: 33,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  inputStyle: {
    flexGrow: 1,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
