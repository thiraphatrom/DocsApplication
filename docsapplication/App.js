import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/LoginScreen';
import StdHomeScreen from './screens/StdHomeScreen';
import StdDocumentsDetailScreen from './screens/StdDocumentsDetailScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import StdProfileScreen from './screens/StdProfileScreen';
import StdChangePasswordScreen from './screens/StdChangePasswordScreen';
import CpsOrdersScreen from './screens/CpsOrdersScreen';
import CpsCompleteTaskScreen from './screens/CpsCompleteTaskScreen';
import CpsProfileScreen from './screens/CpsProfileScreen';
import UserStoreProvider from './database/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab(){
  return(
    <Tab.Navigator
      screenOptions = {({route}) => ({
        tabBarIcon:({focused, color}) => {
          let iconName;
          // === คือเช็คประเภทข้อมูลด้วย
          if(route.name === 'StdHomeScreen'){
            iconName = focused?'home':'home-outline';
          }
          else if (route.name === 'YourOrdersScreen'){
            iconName = focused?'notifications':'notifications-outline';
          }
          else if (route.name === 'StdProfileScreen'){
            iconName = focused?'person-circle':'person-circle-outline';
          }
          return <Ionicons name = {iconName} color = {color} size = {25}/>
        }
      })}
      tabBarOptions = {{
        showLabel : false,
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        style : {backgroundColor : '#10218B'}
      }}
    >
      <Tab.Screen
        name = 'StdHomeScreen'
        component = {SubDocsDetailScreenStack}
      />
      <Tab.Screen
        name = 'YourOrdersScreen'
        component = {SubYourOrdersScreenStack}
      />
      <Tab.Screen
        name = 'StdProfileScreen'
        component = {SubStdProfileScreenStack}
      />
    </Tab.Navigator>
  )
}

function SubDocsDetailScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'StdHomeScreen'
        component = {StdHomeScreen}
        options = {{ title : 'Home', headerLeft : () => null}}
      />
      <Stack.Screen
        name = 'StdDocsDetailScreen'
        component = {StdDocumentsDetailScreen}
        options = {{ title : ''}}
      />
    </Stack.Navigator>
  )
}

function SubYourOrdersScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'YourOrdersScreen'
        component = {YourOrdersScreen}
        options = {{ title : 'Your Orders', headerLeft : () => null}}
      />
    </Stack.Navigator>
  )
}

function SubStdProfileScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'StdProfileScreen'
        component = {StdProfileScreen}
        options = {{ title : 'Profile', headerLeft : () => null}}
      />
      <Stack.Screen
        name = 'StdChangePasswordScreen'
        component = {StdChangePasswordScreen}
        options = {{ title : 'Change Password'}}
      />
    </Stack.Navigator>
  )
}

function CpsHomeTab(){
  return(
    <Tab.Navigator
      screenOptions = {({route}) => ({
        tabBarIcon:({focused, color}) => {
          let iconName;
          // === คือเช็คประเภทข้อมูลด้วย
          if(route.name === 'CpsOrdersScreen'){
            iconName = focused?'home':'home-outline';
          }
          else if (route.name === 'CpsCompleteTaskScreen'){
            iconName = focused?'checkbox':'checkbox-outline';
          }
          else if (route.name === 'CpsProfileScreen'){
            iconName = focused?'person-circle':'person-circle-outline';
          }
          return <Ionicons name = {iconName} color = {color} size = {25}/>
        }
      })}
      tabBarOptions = {{
        showLabel : false,
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        style : {backgroundColor : '#10218B'}
      }}
    >
      <Tab.Screen
        name = 'CpsOrdersScreen'
        component = {SubCpsOrdersScreenStack}
      />
      <Tab.Screen
        name = 'CpsCompleteTaskScreen'
        component = {SubCpsCompleteTaskScreenStack}
      />
      <Tab.Screen
        name = 'CpsProfileScreen'
        component = {SubCpsProfileScreenStack}
      />
    </Tab.Navigator>
  )
}

function SubCpsOrdersScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'CpsOrdersScreen'
        component = {CpsOrdersScreen}
        options = {{ title : 'Orders', headerLeft : () => null}}
      />
    </Stack.Navigator>
  )
}

function SubCpsCompleteTaskScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'CpsCompleteTaskScreen'
        component = {CpsCompleteTaskScreen}
        options = {{ title : 'Complete Tasks', headerLeft : () => null}}
      />
    </Stack.Navigator>
  )
}

function SubCpsProfileScreenStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'CpsProfileScreen'
        component = {CpsProfileScreen}
        options = {{ title : 'Profile', headerLeft : () => null}}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = 'LoginScreen'
          screenOptions = {{headerShown : false}}
        >
          <Stack.Screen
            name = 'LoginScreen'
            component = {LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name = 'StdHomeScreen'
            component = {HomeTab}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name = 'CpsHomeScreen'
            component = {CpsHomeTab}
            options={{ title: 'Home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserStoreProvider>
  );
}

export default App