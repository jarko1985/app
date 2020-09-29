import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

const recentlyPosted = [
  {
    key: "1",
    name: "shop1",
    image:
      "https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "2",
    name: "shop2",
    image:
      "https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "3",
    name: "shop3",
    image:
      "https://images.pexels.com/photos/2679323/pexels-photo-2679323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "4",
    name: "shop4",
    image:
      "https://images.pexels.com/photos/2155552/pexels-photo-2155552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "5",
    name: "shop5",
    image:
      "https://images.pexels.com/photos/1921604/pexels-photo-1921604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "6",
    name: "shop6",
    image:
      "https://images.pexels.com/photos/3413186/pexels-photo-3413186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default function List(props) {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
          style={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={recentlyPosted}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  elevation: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                }}
              >
                <TouchableOpacity onPress={() => console.log("pressed")}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 10,
                      marginHorizontal: 5,
                      borderColor: "grey",
                      borderWidth: 1,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.nameStyle}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    textAlign: "center",
    marginBottom: 5,
    color: "#fff",
  },
  listContainer: {
    marginLeft: 10,
  },
  nameStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Nunito_400Regular",
  },
});
