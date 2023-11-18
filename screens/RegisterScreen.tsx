import React, { useContext, useEffect, useState } from 'react';
import { View, Image, TextInput, StyleSheet, Button, Text, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from '../store/Data';
import { ArrowLeftIcon, BackwardIcon } from 'react-native-heroicons/outline';
import { StringsContext } from '../store/Strings';

const RegisterScreen = () => {

  const Data = useContext(DataContext)
  const Str = useContext(StringsContext)
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [email, setEmail] = useState("")

  async function regFunction() {
    switch(Data.lang){
      case "en":
        Toast.show({
          type: 'info',
          text1: 'Message',
          text2: "Please wait......",
          autoHide: false,
          position: 'top'
        });
        break;
      case "hk":
        Toast.show({
          type: 'info',
          text1: '信息',
          text2: "請稍候......",
          autoHide: false,
          position: 'top'
        });
        break;
    }
    const data = "username="+userName+"&password="+passWord+"&email="+email
    const response = await fetch(Data.getApiHost+'/app/register.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data})
        .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
    const responseText = await response.text();
    if(responseText == "Registration Successful") {
        Data.setLoginUserName(userName);
        Data.setLoginPassWord(passWord);
        Data.setScreen(0)
    } else {
        Toast.show({
          type: 'error',
          text1: 'Message',
          text2: responseText,
          autoHide: true,
          visibilityTime: 1500,
          position: 'top'
        });
    }
}

  return (
    <SafeAreaView style={{flexDirection:'column', flex:1, backgroundColor: 'lightgrey'}}>
        <Toast />
        <TouchableOpacity onPress={() => Data.setScreen(0)} style={{margin: 20}}>
          <ArrowLeftIcon size={40} color={'black'}/>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          source={require('../assets/icon.png')}
          style={{
            height: Dimensions.get('window').height/2.5,
          }} />
    </TouchableWithoutFeedback>

      <View style={{justifyContent: 'center', margin: 10}}>

        <TextInput
          editable
          maxLength={40}
          autoCapitalize='none'
          placeholder={Str.login_usernameMsg}
          onChangeText={userName => setUserName(userName)}
          value={userName}
          autoCorrect={false}
          style={{padding: 10}}
          />
          <TextInput
          editable
          maxLength={40}
          autoCapitalize='none'
          placeholder={Str.login_passwordMsg}
          onChangeText={passWord => setPassWord(passWord)}
          secureTextEntry={false}
          autoCorrect={false}
          value={passWord}
          style={{padding: 10}}
          />
          <TextInput
          editable
          maxLength={40}
          autoCapitalize='none'
          placeholder={Str.login_emailMsg}
          onChangeText={email => setEmail(email)}
          value={email}
          autoCorrect={false}
          style={{padding: 10}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={regFunction} style={{width: Data.screenWidth-100, backgroundColor: 'red', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 10}}>
              <Text style={{fontSize: 28, color: 'white'}}>{Str.login_register}</Text>
            </TouchableOpacity>
          </View>
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default RegisterScreen;