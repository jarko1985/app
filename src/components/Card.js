import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function Card() {
  return (
    <TouchableOpacity onPress={() => console.log("Pressed")}>
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/225238/pexels-photo-225238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
        style={styles.backGroundStyle}
      >
        <Text style={styles.textStyle}>Ads Place</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backGroundStyle: {
    height: 100,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
