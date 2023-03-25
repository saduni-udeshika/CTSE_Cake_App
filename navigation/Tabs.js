import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, View, Text, Image } from "react-native"
import Events from "../screens/Events"
import Home from "../screens/Home"
import Recipe from "../screens/Recipe"
import ShopList from "../screens/ShopList"
import Shop from "../screens/Shop"
import Tips from "../screens/Tips"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image } from "react-native";
import Events from "../screens/Events";
import Home from "../screens/Home";
import Recipe from "../screens/Recipe";
import Shops from "../screens/Shops";
import Tips from "../screens/Tips";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    component: Home,
    source: require("../assets/home-icon.png"),
    label: "HOME",
  },
  {
    name: "Recipe",
    component: Recipe,
    source: require("../assets/recipes-icon.png"),
    label: "RECIPIES",
  },
  {
    name: "Tips",
    component: Tips,
    source: require("../assets/tips-icon.png"),
    label: "TIPS",
  },
  {
    name: "Shops",
    component: Shops,
    source: require("../assets/shop-icon.png"),
    label: "SHOPS",
  },
  {
    name: "Events",
    component: Events,
    source: require("../assets/event-icon.png"),
    label: "EVENTS",
  },
];

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      {tabs.map(({ name, component: Component, source, label }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}
              >
                <Image
                source={source}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#633974",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#633974",
                    fontSize: 12,
                  }}
                >
                  {label}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, //works on ios
  },
});

export default Tabs;
