import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Recipe from "../screens/Recipe"

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipe" component={Recipe} />
        </Tab.Navigator>
    )
}

export default Tabs