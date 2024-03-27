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


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        
    <View style={ styles.container}>
     <View
        //style for Top half background----
          style={{
            width: '100%',
            height: 0.15 * SIZES.height,
            padding: 30,
        //    backgroundColor: COLORS.background + '20',
            position: 'relative',
          }}>      
          <Image
            source={require('../assets/images/flat1.jpg')}
            style={{
              position: 'absolute',
              top: 0,
              left: 5,
              height: 200,
              width: 400,
              opacity: 0.15
            }}
          />
        
        </View>
    <View style={ styles.txtImg}>

        <Image source={require('../assets/logo/logo2.png')} style={styles.logo} />
       </View> 
        
       
        <FormInput 
        labelValue= {email} 
        onChangeText={(number) => this.formatPhoneNumber(number)}
        placeholderText="Phone Number"
         iconType="flag" 
         keyboardType="email" 
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

<TouchableOpacity style={styles.forgotButton}onPress={() =>  {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
            <Text style={styles.logText}>Login
            with Email</Text>
           </TouchableOpacity>


<FormButton
        buttonTitle="LOGIN"
        onPress={() => navigation.navigate("Home")} />


<TouchableOpacity style={styles.signupButton}>
            <Text style={styles.navText}>Don't have an account with us?  
            <Text style={[styles.navSign, {color: '#5286AB'}]} onPress={() => navigation.navigate('Signup')}>  Sign up</Text>
            </Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight:160,bottom: 20}}>
           <MaterialCommunityIcons name='fingerprint' size={46} color='#5286AB' />
           </TouchableOpacity>
           <Text style={[styles.printText, {color: '#5286AB',bottom:55,fontSize:16,left:35}]}>Login with FingerPrint</Text>   
            
        </View>

       
    );

};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      /*  backgroundColor: "#e6eaf4", */
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
       
        
    },

 /*   txtImg: {
        width: 330,
        backgroundColor: 'cyan',
        borderRadius: 5,
        
    }, */

    logo:{
        marginTop: -0,
        top: -120,
        height: 200,
        width: 250,
        resizeMode: 'contain',
        
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontFamily: 'SF-Pro-Text-SemiBold.otf',
        fontSize: 28,
        marginTop: -90,
        top: -30,
        color: '#5286AB',
    },

    navButton: {
        marginTop: 35,
    },

    forgotButton:{
        marginVertical: 35,
    },

    signupButton:{
        marginVertical: 35,
    },

    navButtonText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#5286AB',
        fontFamily: 'SF-Pro-Text-Regular.otf',
        bottom: 13,
        left: 120
    },

    navText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#666',
        fontFamily: 'SF-Pro-Text-Regular.otf',
        bottom: 50,
        marginLeft: -90,
    },

    logText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#5286AB',
        fontFamily: 'SF-Pro-Text-Regular.otf',
        marginLeft: -119,
        bottom: 34
    }

});

