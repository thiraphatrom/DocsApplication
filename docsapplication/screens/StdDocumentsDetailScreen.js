import { Text, View, Modal, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import { applicationContainer, textComponent, textInputComponent, buttonComponent, modalComponent } from '../components/styles';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalPicker } from '../components/ModalPicker';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';
import { userStoreContext } from '../database/UserContext';

const StdDocumentsDetailScreen = ({route, navigation}) => {
    const userStore = React.useContext(userStoreContext);
    const {docsID} = route.params;
    const {docsName} = route.params;
    const {docsDesc} = route.params;
    const {studentID} = route.params;
    const [chooseData, setchooseData] = useState('Select Item...');
    const [isModalVisible, setisModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }

    const quantityAdjustment = () => {
        if (quantity <= 1) {
            setQuantity(1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }
    
    const addData = () => {
        const colRef = collection(db, 'orders');

        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()
        var hours = new Date().getHours()
        var min = new Date().getMinutes()
        if (min < 10){
            min = '0' + min
        }

        addDoc(colRef, {
            stdName : userStore.name,
            subID : docsID,
            subName : docsName,
            stdID : studentID,
            lesson : chooseData,
            quantity : quantity,
            status : 'Pending...',
            date : date + '/' + month + '/' + year,
            time : hours + ':' + min,
            sTimeStamp : serverTimestamp()
        })
        
        navigation.navigate('YourOrdersScreen');
    }

    return (
    <SafeAreaView>
        <ScrollView>
            <View style = {applicationContainer.container}>
                <View style = {applicationContainer.documentsCardContainer}> 
                    <View style = {applicationContainer.documentsContainer}>
                        <Image style = {applicationContainer.cardImageContainer} source={require('../images/docs_application_logo.png')}/>
                        <View style = {applicationContainer.cardContentContainer}>
                            <Text style = {textComponent.headingStyle}>{docsID}</Text>
                            <Text style = {textComponent.descriptionStyle}>{docsName}</Text>
                        </View>
                    </View>                     
                    <View style = {applicationContainer.orderDetailContainer}>
                        <Text style = {textComponent.headingStyle}>Description : </Text>
                        <Text style = {textComponent.descriptionStyle}>{docsDesc}</Text>
                        <View>
                            <Text style = {{color: '#000000', fontSize: 18, fontWeight: 'bold', marginVertical: 15}}>Lesson : </Text>
                            <TouchableOpacity
                                style = {modalComponent.modalStyle}
                                onPress = {() => changeModalVisibility(true)}
                            >
                                <Text style = {textComponent.blackTextStyle}>{chooseData}</Text>
                            </TouchableOpacity>
                            <Modal
                                transparent = {true}
                                animationType = 'fade'
                                visible = {isModalVisible}
                                onRequestClose = {() => changeModalVisibility(false)}
                            >
                                <ModalPicker
                                    changeModalVisibility = {changeModalVisibility}
                                    setData = {setData}
                                    condition = {docsID}
                                />
                            </Modal>
                            <Text style = {{color: '#000000', fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>Quantity :</Text>
                            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5}}>
                                <TouchableOpacity 
                                    style = {buttonComponent.counterButtonStyle}
                                    onPress = {()=>{quantityAdjustment()}}
                                >
                                    <Text style = {buttonComponent.buttonTextStyle}>-</Text>
                                </TouchableOpacity>
                                <View style = {textInputComponent.quantityInputStyle}>
                                    <TextInput
                                        style = {textInputComponent.quantityTextInputStyle}
                                        keyboardType = 'numeric'
                                        value = {quantity.toString()}
                                    />
                                </View>
                                <TouchableOpacity 
                                    style = {buttonComponent.counterButtonStyle}
                                    onPress = {()=>{setQuantity(quantity + 1)}}
                                >
                                    <Text style = {buttonComponent.buttonTextStyle}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                style = {buttonComponent.buttonStyle}
                                onPress={() => addData()}
                            >
                                <Text style = {buttonComponent.buttonTextStyle}>Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default StdDocumentsDetailScreen;
