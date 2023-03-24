import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import Tabs from "./navigation/Tabs";

export default function App() {

  return (
    <NavigationContainer style={StyleSheet.container}>
      <Tabs />
    </NavigationContainer>
  )
}
