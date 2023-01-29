import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from '../screens/Community';
import Localisation from '../screens/Localisation';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import { ROUTES } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#0E6C94",
                // tabBarInactiveTintColor: "#0E6C94",
                tabBarActiveBackgroundColor: "#fff",
                // tabBarInactiveBackgroundColor: "#0E6C94",
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === ROUTES.HOME_TAB) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === ROUTES.LOCALISATION) {
                        iconName = focused ? 'location' : 'location-outline';
                    } else if (route.name === ROUTES.COMMUNITY) {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === ROUTES.SETTINGS) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })
            
        }>
            <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
            <Tab.Screen name={ROUTES.COMMUNITY} component={Community} />
            <Tab.Screen name={ROUTES.LOCALISATION} component={Localisation} />
            <Tab.Screen name={ROUTES.SETTINGS} component={Setting} />
        </Tab.Navigator >
    );
}
export default BottomNav