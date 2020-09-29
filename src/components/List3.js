import React from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const recentlyPosted = [
  {
    key: "1",
    name: "shop1",
    image:
      "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "2",
    name: "shop2",
    image:
      "https://images.pexels.com/photos/1589237/pexels-photo-1589237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "3",
    name: "shop3",
    image:
      "https://images.pexels.com/photos/47229/pexels-photo-47229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "https://images.pexels.com/photos/91628/pexels-photo-91628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    key: "6",
    name: "shop6",
    image:
      "https://images.pexels.com/photos/809060/pexels-photo-809060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

class List3 extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
          <Text style={{ color: "yellow", fontSize: 18 }}>Show all</Text>
        </View>

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
                      height: 120,
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
  titleContainer: {
    marginLeft: 15,
    marginBottom: 5,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
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
export default List3;
