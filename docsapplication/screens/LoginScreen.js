import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { applicationContainer, imageComponent, textComponent, textInputComponent, buttonComponent } from '../components/styles';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';
import { userStoreContext } from '../database/UserContext';

const loginScreen = ({navigation}) => {
    const userStore = React.useContext(userStoreContext);

    const [inputID, setInputID] = useState()
    const [inputPassword, setInputPassword] = useState()
    const [data, setData] = useState([])

    const checkLogin = () => {
        data.map((student, index) => {
            if (student.stdID == inputID && student.stdPassword == inputPassword) {
                userStore.updateData(student.stdID)
                userStore.updateName(student.stdName)
                userStore.updateEmail(student.stdEmail)
                userStore.updateDocID(student.id)
                userStore.updatePassword(student.stdPassword)
                if (student.stdRole == 'student') {
                    navigation.navigate('StdHomeScreen', {
                        screen: 'StdHomeScreen',
                        params: {
                            screen: 'StdHomeScreen',
                            params: {
                                studentID : student.stdID
                            },
                        },
                    });
                }
                else if (student.stdRole == 'copyshop') {
                    navigation.navigate('CpsHomeScreen')
                }
            }
        })
    }

    useEffect (() => {
        const colRef = collection(db, 'students')
        const q = query(colRef)
        getDocs(q)
            .then((snapshot) => {
                let lesson = []
                snapshot.docs.forEach((doc) =>{
                    lesson.push({...doc.data(), id: doc.id})
                })
                setData(lesson)
            })
    },[])

    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {applicationContainer.container}>
                <Image style={imageComponent.logoStyle} source = {require('../images/docs_application_logo.png')}/>
                <Text style = {textComponent.applicationHeadingStyle} >Docs</Text>

                <Text style = {textComponent.descriptionStyle}>Order your documents</Text>
               
                <TextInput
                    style = {textInputComponent.textInputStyle}
                    placeholder = 'Student or Copyshop ID'
                    keyboardType = 'numeric'
                    onChangeText = {(inputID) => {setInputID(inputID)}}
                />
                <TextInput
                    style = {textInputComponent.textInputStyle}
                    placeholder = 'Password'
                    secureTextEntry = {true}
                    onChangeText = {(inputPassword) => {setInputPassword(inputPassword)}}
                />
                <TouchableOpacity 
                    style = {buttonComponent.buttonStyle}
                    onPress = {() => checkLogin()}
                >
                    <Text style = {buttonComponent.buttonTextStyle}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default loginScreen


