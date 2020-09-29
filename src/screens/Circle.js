import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Circle() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Circle Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
});
