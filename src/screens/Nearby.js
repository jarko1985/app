import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Nearby() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Nearby Page</Text>
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
