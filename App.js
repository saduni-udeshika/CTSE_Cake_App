/*import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import Tabs from "./navigation/Tabs";
import Details from "./screens/Details";

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer style={StyleSheet.container}>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import Tabs from "./navigation/Tabs";
import Details from "./screens/Details";
import TipsList from './screens/TipsList';
import NewTip from './screens/NewTip';
import EventsList from "./screens/EventsList";
import NewEvent from "./screens/NewEvent";

const Stack = createStackNavigator()

export default function App() {

  return (
    
      <NavigationContainer>
     
     <Stack.Navigator       
     screenOptions={{ headerShown: false }}
     >
      <Stack.Screen name="Tabs" component={Tabs} />
       <Stack.Screen name="TipsList" component={TipsList} />
       <Stack.Screen name="NewTip" component={NewTip} />
       <Stack.Screen name="NewEvent" component={NewEvent} />
       <Stack.Screen name="EventsList" component={EventsList} />

     </Stack.Navigator>
   
    </NavigationContainer>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
