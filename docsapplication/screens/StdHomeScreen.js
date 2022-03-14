import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { applicationContainer, textComponent } from '../components/styles';
import { collection, getDocs} from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';
import { userStoreContext } from '../database/UserContext';
    
const StdHomeScreen = ({route, navigation}) => {
    const userStore = React.useContext(userStoreContext);
    const {studentID} = route.params;
    const [data, setData] = useState([])

    useEffect (() => {
        const colRef = collection(db, 'documents');
        getDocs(colRef)
            .then((snapshot) => {
                let documents = []
                snapshot.docs.forEach((doc) =>{
                    documents.push({...doc.data(), id: doc.id})
                })
                setData(documents)
            })
    },[])

    return (
        <SafeAreaView style = {{flex:1}}>
            <ScrollView>
                <View style = {applicationContainer.container}>
                    <View>
                        {data.map((docs, index) => (
                            <TouchableOpacity 
                                style = {applicationContainer.homeCardContainer}
                                onPress = {() => navigation.navigate('StdDocsDetailScreen', {docsID : docs.subID, docsName : docs.subName, docsDesc : docs.subDesc, studentID : studentID})}
                            >
                                <Image style = {applicationContainer.cardImageContainer} source={require('../images/docs_application_logo.png')}/>
                                <View style = {applicationContainer.cardContentContainer}>
                                    <Text style = {textComponent.headingStyle}>{docs.subID}</Text>
                                    <Text style = {textComponent.descriptionStyle}>{docs.subName}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default StdHomeScreen
