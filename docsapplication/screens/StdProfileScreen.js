import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { applicationContainer, textComponent, buttonComponent } from '../components/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { userStoreContext } from '../database/UserContext';

const StdProfileScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {applicationContainer.container}>
        <View style = {applicationContainer.profileContainer}>
          <View style = {{flex: 0.5}}>
            <Text style = {textComponent.applicationHeadingStyle}>{userStore.name}</Text>
            <Text style = {textComponent.descriptionStyle}>{userStore.email}</Text>
            <Text style = {textComponent.descriptionStyle}>{userStore.data}</Text>
          </View>
          <View style = {{flex: 0.5}}>
            <TouchableOpacity 
              style = {buttonComponent.profileButtonStyle}
              onPress = {() => navigation.navigate('StdChangePasswordScreen')}
            >
              <Text style = {textComponent.blackTextStyle}>Change Password</Text>
              <Ionicons name = 'lock-open' color = {'#000000'} size = {25}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style = {buttonComponent.profileButtonStyle}
              onPress = {() => navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]})}
            >
              <Text style = {textComponent.blackTextStyle}>Logout</Text>
              <Ionicons name = 'log-out' color = {'#000000'} size = {25}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {applicationContainer.creditContainer}>
          <Text>Application Version 1.0.0</Text>
          <Text>© 2022 Copyright - Docs</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StdProfileScreen;
