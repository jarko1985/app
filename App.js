import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import SearchScreen from "./src/screens/SearchScreen";
import Nearby from "./src/screens/Nearby";
import Circle from "./src/screens/Circle";
import Search from "./src/screens/Search";
import { TouchableOpacity } from "react-native-gesture-handler";

const TabStack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabStack.Navigator
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "grey",
          activeBackgroundColor: "#grey",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            let iconSize;
            let iconColor;
            if (route.name === "Home") {
              iconName = "home";
              iconSize = 30;
              iconColor = "grey";
            } else if (route.name === "Nearby") {
              iconName = "enviromento";
              iconSize = 30;
              iconColor = "grey";
            } else if (route.name === "Circle") {
              iconName = "checkcircleo";
              iconSize = 30;
              iconColor = "grey";
            } else if (route.name === "Search") {
              iconName = "search1";
              iconSize = 30;
              iconColor = "grey";
            }

            return (
              <TouchableOpacity onPress={() => console.log("pressed")}>
                <AntDesign name={iconName} size={iconSize} color={iconColor} />
              </TouchableOpacity>
            );
          },
        })}
      >
        <TabStack.Screen name="Home" component={SearchScreen} />
        <TabStack.Screen name="Nearby" component={Nearby} />
        <TabStack.Screen
          name="Circle"
          component={Circle}
          options={{ tabBarBadge: 3 }}
        />
        <TabStack.Screen name="Search" component={Search} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
