import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ActionButton from "react-native-action-button";
import Card from "../components/Card";
import List from "../components/List";
import List2 from "../components/List2";
import List3 from "../components/List3";
import SearchBar from "../components/SearchBar";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { LogBox } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

export default function SearchScreen() {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ScrollView>
          <List title="Recently Posted" />
          <List2 title="Featured Places" />
          <List3 title="Nearby Places" />
          <Card />
        </ScrollView>
        <ActionButton
          position="center"
          verticalOrientation="up"
          degrees={135}
          offsetY={0}
          buttonColor="rgba(232, 126, 4, 1)"
          renderIcon={() => (
            <FontAwesome5 name="smile-wink" size={50} color="#FFF" />
          )}
        >
          <ActionButton.Item
            textStyle={{ color: "#FFF", fontWeight: "bold" }}
            textContainerStyle={{
              backgroundColor: "#E87E04",
              borderColor: "#FFF",
              borderWidth: 1,
            }}
            buttonColor="#E87E04"
            title="Food"
            onPress={() => console.log("notes tapped!")}
          >
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={30}
              color="#FFF"
            />
          </ActionButton.Item>
          <ActionButton.Item
            textStyle={{ color: "#FFF", fontWeight: "bold" }}
            textContainerStyle={{
              backgroundColor: "#E87E04",
              borderColor: "#FFF",
              borderWidth: 1,
            }}
            buttonColor="#E87E04"
            title="Saloon"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="home" size={30} color="#FFF" />
          </ActionButton.Item>
          <ActionButton.Item
            textStyle={{ color: "#FFF", fontWeight: "bold" }}
            textContainerStyle={{
              backgroundColor: "#E87E04",
              borderColor: "#FFF",
              borderWidth: 1,
            }}
            buttonColor="#E87E04"
            title="Shop"
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="shopping" size={30} color="#FFF" />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nunito_400Regular",
    flex: 1,
    backgroundColor: "#202020",
  },
});
