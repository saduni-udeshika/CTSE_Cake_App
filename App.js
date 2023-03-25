import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import Tabs from "./navigation/Tabs";
import Details from "./screens/Details";
import TipsList from './screens/TipsList';
import NewTip from './screens/NewTip';
import Shop from "./screens/Shop";
import ShopList from "./screens/ShopList";
import NewShop from "./screens/NewShop";


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
       <Stack.Screen name="Shop" component={Shop} />
       <Stack.Screen name="ShopList" component={ShopList}/>
       <Stack.Screen name="NewShop" component={NewShop}/>

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
