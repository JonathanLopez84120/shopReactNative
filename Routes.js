import React, { useContext } from 'react';
import SplashScreen from './src/screens/auth/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from './App';
import Home from './src/screens/app/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import { Text, View } from 'react-native';
import { colors } from './src/utils/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import ProductDetail from './src/screens/app/ProductDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    
<Tab.Navigator screenOptions={{
      headerShown: false,
      showLabel: false,
      tabBarShowLabel: false,
      //  headerShown: false,
      tabBarStyle: {
        height: 60,
        borderTopColor: colors.lightGrey
      }
    }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon color={focused ? colors.iconFocused : color.icon } name='home' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Home</Text>
          </View>
        )
      }}/>
      <Tab.Screen name='Favorites' component={Favorites} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon color={focused ? colors.iconFocused : color.icon } name='bookmark' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Favorites</Text>
          </View>
        )
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon color={focused ? colors.iconFocused : color.icon } name='person' size={25}/>
            <Text style={{ color: focused ? colors.iconFocused : color.icon, fontSize: 12 }}>Profile</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  );
}

export default function Routes() {

  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* replace true by user for authentification */}
        {user ?
          <>
            <Stack.Screen
              name='MyTabs'
              component={MyTabs}
              options={{ headerShown: false }}

            />
            <Stack.Screen
              name='ProductDetail'
              component={ProductDetail}
              options={{ headerShown: false }}

            />
          </>
          :
          <>
            <Stack.Screen
              name='SplashScreen'
              component={SplashScreen}
              options={{ title: 'Welcome', headerShown: false }}
            />
            <Stack.Screen
              name='SignIn'
              component={SignIn}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
          </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
