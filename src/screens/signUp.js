import React,{ useState } from 'react';
import { View, Text,TouchableOpacity,Image, Button, StyleSheet, ImageBackground, Dimensions, ScrollView} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import SignupScreen from './SignupScreen';
import { SIZES } from '../constants';
//material icons
import {MaterialCommunityIcons} from 'react-native-vector-icons'
/*import { ScrollView } from 'react-native-gesture-handler'; */


const SignUp = ({navigation}) => {
    const [text, setText] = useState();
    const [number, setNumber] = useState();
    const [password, setPassword] = useState();

    return(
        
    <View style={ styles.container}>
      <View style={ styles.mainText}>
    <Text style={[styles.signText, {color: '#000',alignSelf:'center'}]}>Enter Your Mobile Number,</Text>
    <Text style={[styles.signText, {color: '#000',alignSelf:'center'}]}>Password & Name</Text>
    <Text style={[styles.signSubText, {color: '#000',}]}>You will need your mobile number and password</Text>
    <Text style={[styles.signSubText, {color: '#000',alignSelf:'center'}]}>everytime you log in to your Slydepay Account</Text>
     </View> 
        
     <View style={styles.formContainer}>   
        <FormInput 
        labelValue= {text} 
        onChangeText={(text) => setText(text)}
        placeholderText="Full Name" 
          autoCapitalize="none"
           autoCorrect={false} 
           />

<FormInput 
        labelValue= {password} 
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType1="eye" 
        secureTextEntry={true} 
           />

<FormInput 
        labelValue= {number} 
        onChangeText={(number) => this.formatPhoneNumber(number)}
        placeholderText="Phone Number"
         iconType="flag" 
         keyboardType="numeric" 
          autoCapitalize="none"
           autoCorrect={false} 
           />
</View>

<View style={ styles.formBtn}>
<FormButton
        buttonTitle="NEXT"
        onPress={() => navigation.navigate("Home")} />
           
  </View>


        </View>

       
    );

};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      /*  backgroundColor: "#e6eaf4", */
        alignItems: 'center',
        justifyContent: 'center',
        padding:  20,
       
        
    },

 /*   txtImg: {
        width: 330,
        backgroundColor: 'cyan',
        borderRadius: 5,
        
    }, */


    signText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ddd',
      fontFamily: 'SF-Pro-Text-Regular.otf',
      bottom: 190,
      
  },
  signSubText:{
      fontSize: 16,
      fontWeight: '200',
      color: '#ddd',
      fontFamily: 'SF-Pro-Text-Regular.otf',
      bottom: 130,
      opacity:0.6,
  },

  mainText: {
    top: 130
},

formContainer: {
  marginTop: 10,
  width: '100%',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  top:40
},

formBtn: {
  marginTop: 60,
  width: '100%',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  top: 150
},

buttonText: {
  fontSize: 17,
  fontWeight: 'bold',
  color: '#ffffff',
  fontFamily: 'SF-Pro-Text-Regular.otf',
},

});
