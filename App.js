import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import Tabs from "./navigation/Tabs";
import TipsList from './screens/TipsList';
import NewTip from './screens/NewTip';
import UpdateRecipe from "./screens/UpdateRecipe";
import EventsList from "./screens/EventsList";
import NewEvent from "./screens/NewEvent";
import Tip from "./screens/Tip";

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
       <Stack.Screen name="updateRecipe" component={UpdateRecipe} />
       <Stack.Screen name="NewEvent" component={NewEvent} />
       <Stack.Screen name="EventsList" component={EventsList} />
       <Stack.Screen name="Tip" component={Tip} />
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
