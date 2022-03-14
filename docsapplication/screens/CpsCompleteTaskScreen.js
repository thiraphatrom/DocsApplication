import { SafeAreaView, Text, View, Image, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { applicationContainer, textComponent, buttonComponent } from '../components/styles';
import React,{useState, useEffect} from "react";
import {useFocusEffect} from '@react-navigation/native';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';
import { db } from '../database/firebaseDb';
import { userStoreContext } from '../database/UserContext';

const PendingButton = (props) => {
  const [text,setText] = useState();
  const [buttonStyle, setButtonStyle] = useState();
  
  useEffect(() => {
    setText(props.status)
    if(text == 'Pending...'){
      setText('Pending...')
      setButtonStyle(buttonComponent.pendingButtonStyle)
    }
    else if (text == 'Processing...'){
      setText('Processing...')
      setButtonStyle(buttonComponent.processingButtonStyle)
    }
    else if (text == 'Complete'){
      setText('Complete')
      setButtonStyle(buttonComponent.completeButtonStyle)
    }
  },[text])
  
  return (
    <View 
      style = {buttonStyle}
    >
      <Text style = {buttonComponent.buttonTextStyle}>{text}</Text>
    </View>
  )
}


function YourOrdersLoop(props){
  const results = [];
  for (let i = 0; i < 1; i++)
  {
    results.push(
      <>
      {props.ordersDataLoop.map((docs, index) => (
        <>
        {docs.status === 'Complete' &&
          <View style = {applicationContainer.documentsCardContainer}> 
            <View style = {applicationContainer.documentsContainer}>
              <Image style = {applicationContainer.cardImageContainer} source={require('../images/docs_application_logo.png')}/>
              <View style = {applicationContainer.cardContentContainer}>
                <Text style = {textComponent.headingStyle}>{docs.subID}</Text>
                <Text style = {textComponent.descriptionStyle}>{docs.subName}</Text>
              </View>
            </View>                     
            <View style = {applicationContainer.orderDetailContainer}>
              <Text style = {textComponent.descriptionStyle}>From : {docs.stdName}</Text>
              <Text style = {textComponent.descriptionStyle}>Lesson : {docs.lesson}</Text>
              <Text style = {textComponent.descriptionStyle}>Quantity : {docs.quantity}</Text>
              <Text style = {textComponent.descriptionStyle}>Date : {docs.time}</Text>
              <Text style = {textComponent.descriptionStyle}>Time : {docs.date}</Text>
              <PendingButton status = {docs.status}/>
            </View>
          </View>
        }
        </>
      ))}
      </>
    );
  }
  return results
}

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const CpsCompleteTaskScreen = ({route, navigation}) => {
  const userStore = React.useContext(userStoreContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const {studentID} = userStore.data;
  
  useFocusEffect(
    React.useCallback(() => {
      _onRefresh2();
      _onRefresh();
  
      return () =>{
        
      }
    },[])
  );

  if(loading === true){
    return (
      <View style = {applicationContainer.container}>
        <ActivityIndicator color = 'blue' size = 'large'/>
      </View>
    )
  }
  
  const _onRefresh = ()=> {
    setLoading(true);
    const colRef = collection(db, 'orders');
    const q = query(colRef, orderBy('sTimeStamp', 'desc'))
    getDocs(q)
      .then((snapshot) => {
        let documents = []
        snapshot.docs.forEach((doc) =>{
          documents.push({...doc.data(), id: doc.id})
        })
        setData(documents)
      })
    wait(2000).then(() => setLoading(false));
  }
  
  const _onRefresh2 = ()=> {
    const colRef = collection(db, 'orders');
    const q = query(colRef, where('status', '==', 'Complete'))
    getDocs(q)
      .then((snapshot) => {
        let documents = []
        snapshot.docs.forEach((doc) =>{
          documents.push({...doc.data(), id: doc.id})
        })
        setData2(documents)
      })
  }
  return (
    <SafeAreaView style = {{flex:1}}>
      {data2.length > 0 &&
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={_onRefresh}
          />
        }
      >
        <View 
          style = {applicationContainer.container}
          
        >
          <YourOrdersLoop ordersDataLoop={data} studentID={userStore.data} />
        </View>
      </ScrollView>
      }
      {data2.length == 0 &&
        <View style = {applicationContainer.container}>
          <Text style = {textComponent.blackTextStyle}>No Complete Task</Text>
        </View>
      }
    </SafeAreaView>
  );
};

export default CpsCompleteTaskScreen;
