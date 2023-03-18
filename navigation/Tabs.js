import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, View, Text, Image } from "react-native"
import Events from "../screens/Events"
import Home from "../screens/Home"
import Recipe from "../screens/Recipe"
import Shops from "../screens/Shops"
import Tips from "../screens/Tips"

const Tab = createBottomTabNavigator()
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
          borderRadious: 15,
          height: 90,
          ...StyleSheet.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
                // source={require("../assets/home-icon.jpg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={Recipe}
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
                //   source={require("../assets/home-icon.jpg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                RECIPIES
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={Tips}
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
                //   source={require("../assets/home-icon.jpg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                TIPS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shops"
        component={Shops}
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
                //   source={require("../assets/home-icon.jpg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                SHOPS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
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
                //   source={require("../assets/home-icon.jpg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                EVENTS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
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
})
export default Tabs
