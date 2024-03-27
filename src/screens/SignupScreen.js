import React,{ useState } from 'react';
import { View, Text,TouchableOpacity,Image, Button, StyleSheet, ImageBackground, Dimensions, ScrollView} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import signUp from '../screens/signUp';
import SocialButton from '../Components/SocialButton';
import { SIZES } from '../constants';
//material icons
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
/*import { ScrollView } from 'react-native-gesture-handler'; */



const SignupScreen = ({navigation}) => {
 

    return(
    <View style={ styles.container}>
    <TouchableOpacity>
    <Text style={[styles.signText, {color: '#000',fontWeight: 'bold'}]}>Sign up In few steps</Text>
     </TouchableOpacity>   
<FormButton
        buttonTitle="SIGN UP WITH MOBILE NUMBER"
        onPress={() => navigation.navigate("signUp")} />


<TouchableOpacity style={styles.signupButton}>
            <Text style={styles.navText}>Already have an account?  
            <Text style={[styles.navText, {color: '#5286AB',fontWeight: 'bold'}]} onPress={() => navigation.navigate('Login')}> Login Here</Text>
            </Text>
           </TouchableOpacity>
           
         
    <Text style={styles.textPrivate}>By creating an account,you have accept our</Text>
    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
    <Text style={[styles.textPrivate, {color: '#5286AB', fontWeight: 'bold'}]}>Terms of Use
    <Text style={styles.textPrivate}> and read our </Text>
    <Text style={[styles.textPrivate, {color: '#5286AB',fontWeight: 'bold'}]}> Privacy Policy</Text></Text>
    </TouchableOpacity>

        </View>

       
    );

};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: "#ffffff", 
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
        top: -140,
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginLeft: 30
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
        top: 100,
        
    },

    signText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'SF-Pro-Text-Regular.otf',
        bottom: 190,
        
    },

    textPrivate: {
        fontSize: 15,
        fontWeight: '400',
        color: '#666',
        fontFamily: 'SF-Pro-Text-Regular.otf',
        top: 140,
        
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
