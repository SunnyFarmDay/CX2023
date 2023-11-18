import React, { useContext, useEffect, useState } from 'react';
import { View, Image, TextInput, StyleSheet, Button, Text, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from '../store/Data';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { StringsContext } from '../store/Strings';

const ForgetPwScreen = () => {

  const Data = useContext(DataContext)
  const Str = useContext(StringsContext)
  const [userName, setUserName] = useState("")

  async function forgetPwFunction() {
    if(userName !== "" && userName!= null){
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
      const data = "username="+userName;
      const response = await fetch(Data.getApiHost+'/app/forgetpw.php',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data})
          .catch(function(error) {
            Toast.show({
              type: 'error',
              text1: 'Message',
              text2: error.message,
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
      const responseText = await response.text();
      if(responseText == "The new password has been sent to your email.") {
        switch(Data.lang){
          case "en":
            Toast.show({
              type: 'success',
              text1: 'Message',
              text2: "The new password has been sent to your email.",
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
            break;
          case "hk":
            Toast.show({
              type: 'success',
              text1: '信息',
              text2: "新密碼已經發至你的電子郵件！",
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
            break;
        }
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
    } else {
      switch(Data.lang){
        case "en":
          Alert.alert('Error', 'The username cannot be null!', [
            {text: 'OK', onPress: () => setUserName("")},
          ]);
          break;
        case "hk":
          Alert.alert('錯誤', '用戶名稱不能為空白!', [
            {text: '知道！', onPress: () => setUserName("")},
          ]);
          break;
      }
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
          autoCorrect={false}
          placeholder={Str.login_usernameMsg}
          onChangeText={userName => setUserName(userName)}
          value={userName}
          style={{padding: 10}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={forgetPwFunction} style={{width: Data.screenWidth-100, backgroundColor: 'red', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 10}}>
              <Text style={{fontSize: 28, color: 'white'}}>{Str.login_resetPW}</Text>
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

export default ForgetPwScreen;