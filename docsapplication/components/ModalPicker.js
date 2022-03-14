import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import { modalComponent } from '../components/styles'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {
    const [data, setData] = useState([])
    const cond = props.condition

    useEffect (() => {
        const colRef = collection(db, 'lesson')
        const q = query(colRef, where('subID', '==', cond))
        getDocs(q)
            .then((snapshot) => {
                let lesson = []
                snapshot.docs.forEach((doc) =>{
                    lesson.push({...doc.data(), id: doc.id})
                })
                setData(lesson)
            })
    },[])

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = data.map((item, index) => {
        return (
            <TouchableOpacity
                style = {modalComponent.modalOptionStyle}
                key = {index}
                onPress = {() => onPressItem(item.lesName)}
            >
                <Text style = {modalComponent.modalTextStyle}>
                    {item.lesName}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            style = {modalComponent.modalContainer}
            onPress = {() => props.changeModalVisibility(false)}
        >
            <View style = {[modalComponent.modalCardStyle, {width: WIDTH - 20, height: HEIGHT/2}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export {ModalPicker}