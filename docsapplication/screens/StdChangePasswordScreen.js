import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { textComponent, textInputComponent, buttonComponent } from '../components/styles';
import { doc, updateDoc } from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';
import { userStoreContext } from '../database/UserContext';

const StdChangePasswordScreen = ({navigation}) => {
    const userStore = React.useContext(userStoreContext);
    const docRef = doc(db, 'students', userStore.docID)
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()

    const completeChangePassword = () => {
        if ((currentPassword === userStore.password) && (newPassword === confirmNewPassword)){
            updateDoc(docRef, {
                stdPassword : newPassword 
            })
            .then(()=>{
                userStore.updatePassword(newPassword);
                navigation.goBack()
            }) 
        }
        
    }
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex: 1, padding: 10, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Text style = {textComponent.headingStyle}>Please fill your new password</Text>
                <TextInput
                    style = {textInputComponent.textInputStyle}
                    placeholder = 'Current Password'
                    onChangeText = {(currentPassword) => {setCurrentPassword(currentPassword)}}
                />
                <TextInput
                    style = {textInputComponent.textInputStyle}
                    placeholder = 'New Password'
                    onChangeText = {(newPassword) => {setNewPassword(newPassword)}}
                />
                <TextInput
                    style = {textInputComponent.textInputStyle}
                    placeholder = 'Confirm New Password'
                    onChangeText = {(confirmNewPassword) => {setConfirmNewPassword(confirmNewPassword)}}
                />
                <TouchableOpacity 
                    style = {buttonComponent.buttonStyle}
                    onPress = {() => completeChangePassword()}
                >
                    <Text style = {textComponent.whiteTextStyle}>Complete</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default StdChangePasswordScreen;

