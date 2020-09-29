import React from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const recentlyPosted = [
  {
    key: "1",
    name: "shop1",
    image:
      "https://images.pexels.com/photos/1710001/pexels-photo-1710001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "2",
    name: "shop2",
    image:
      "https://images.pexels.com/photos/1628023/pexels-photo-1628023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    key: "3",
    name: "shop3",
    image:
      "https://images.pexels.com/photos/2962036/pexels-photo-2962036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "4",
    name: "shop4",
    image:
      "https://images.pexels.com/photos/984864/pexels-photo-984864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "5",
    name: "shop5",
    image:
      "https://images.pexels.com/photos/762553/pexels-photo-762553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "6",
    name: "shop6",
    image:
      "https://images.pexels.com/photos/3266538/pexels-photo-3266538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

class List2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
        <FlatList
          style={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={recentlyPosted}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity onPress={() => console.log("pressed")}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 200,
                      height: 110,
                      borderRadius: 5,
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
  },
});
export default List2;
