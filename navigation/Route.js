import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Spot from '../screens/Spot/Spot';
import Events from '../screens/Events/Events';
import Meet from '../screens/Meet/Meet';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const SpotStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Spot" component={Spot} />
  </Stack.Navigator>
);

const EventsStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Events" component={Events} />
  </Stack.Navigator>
);

const MeetStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Meet" component={Meet} />
  </Stack.Navigator>
);

const Route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'blue',
          tabBarActiveBackgroundColor: 'lightgreen',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = 'user';
              return (
                <AntDesign
                  name={iconName}
                  color={color}
                  size={focused ? size + 5 : size}
                />
              );
            } else if (route.name === 'Spot') {
              iconName = 'stadium';
              return (
                <MaterialIcons
                  name={iconName}
                  color={color}
                  size={focused ? size + 5 : size}
                />
              );
            } else if (route.name === 'Home') {
              iconName = 'home';
              return (
                <Ionicons
                  name={iconName}
                  color={color}
                  size={focused ? size + 5 : size}
                />
              );
            } else if (route.name === 'Events') {
              iconName = 'event';
              return (
                <SimpleLineIcons
                  name={iconName}
                  color={color}
                  size={focused ? size + 5 : size}
                />
              );
            } else if (route.name === 'Meet') {
              iconName = 'handshake-o';
              return (
                <FontAwesome
                  name={iconName}
                  color={color}
                  size={focused ? size + 5 : size}
                />
              );
            }
          },
        })}>
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{tabBarLabel: 'Profile'}}
        />
        <Tab.Screen
          name="Spot"
          component={SpotStack}
          options={{tabBarLabel: 'Spot'}}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{tabBarLabel: 'Home', headerShown: false}}
        />
        <Tab.Screen
          name="Events"
          component={EventsStack}
          options={{tabBarLabel: 'Events'}}
        />
        <Tab.Screen
          name="Meet"
          component={MeetStack}
          options={{tabBarLabel: 'Meet'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Route;
