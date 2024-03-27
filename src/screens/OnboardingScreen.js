import React, { useState,Component } from "react";
import { View, Text, Image, StatusBar, StyleSheet, Dimensions,textAlign, Alert,TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import AppIntroSlider from "react-native-app-intro-slider";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { COLORS, SIZES } from '../constants/theme';
import { Navigation } from "@react-navigation/native";



const { width, height} = Dimensions.get('window')


const  OnboardingScreen  = ({navigation}) => { 
   
        return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper autoplay={true} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        bounces={false}
        dot={<View style={{backgroundColor:'#e6eaf4', width: 80, height: 4,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom: 750}} /> }
        activeDot={<View style={{backgroundColor: '#5f8b9c', width: 80, height: 4, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom: 750}} />} >

            <View style={styles.slide}>           
                <Image source={require('../assets/images/Transfer.png')} style={styles.image} />
                <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
            <Text style={styles.title}>Send Money Instantly</Text>
            <Text style={styles.subtitle}>Send money to any mobile money or bank account Instantly with Slydepay.Link your Stanbic account, mobile money wallet. VISA/Mastercard to send money directly</Text>
            </View>
           </View> 
            </View> 

            <View style={styles.slide}>
                <Image source={require('../assets/images/payment.png')} style={styles.image} />
                <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
            <Text style={styles.title}>Pay Anyone</Text>
            <Text style={styles.subtitle}>Pay employees or anyone who has rendered a service to you with Slydepay.Pay directly to their mobile money or bank account.</Text>
            </View>
           </View> 
            </View> 


            <View style={styles.slide}>
                <Image source={require('../assets/images/onboardScreen2.png')} style={styles.image} />
                <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
            <Text style={styles.title}>Buy Airtime and Data</Text>
            <Text style={styles.subtitle}>Get airtime and data on Slydepay anytime,any day,anywhere.Enjoy occasional discounts on airtime and data purchases.</Text>
            </View>
           </View>
            </View>

            <View style={styles.slide}>
                <Image source={require('../assets/images/bills.png')} style={styles.image} />
                <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
            <Text style={styles.title}>Pay all your bills</Text>
            <Text style={styles.subtitle}>Settle pending bills with Slydepay.Access a list of over 300 bills on the online portal or in the app. Info: You dont need a Slydepay account to use the web portal.</Text>
            </View>
           </View>
            </View>
                
         </Swiper>

      
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
         <View style={styles.signupContainer}>
           <Text style={styles.signup}>SIGN UP</Text> 
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate("Login")} >
         <View style={styles.loginContainer}>
           <Text style={styles.login}>LOG IN</Text> 
         </View>
         </TouchableOpacity>
        </View>
        </View> 
    
    );
 }


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: 'white'
    },

    slide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
        
    },
   
    image: {
        width: '60%',
        height: height,
        resizeMode:'contain',
        top: -150
    },

    textContainer: {
        position: 'absolute',
        marginTop:20,
        bottom: 300,
        marginLeft:20,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        font: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },

    subTitleContainer: {
        width: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    subtitle: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        color: '#000',
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        textAlign: 'center'
    },

    buttonContainer: {
        position: 'absolute',
        display:'flex',
        flexDirection: 'row',
        bottom: 70,
        width: 370,
        height: 60,
        padding: 15,
        gap: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    signupContainer: {
        width: 180,
        height: 57,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:  'center',
        borderColor: '#5f8b9c',
        borderWidth: 1.5,
    },

    signup: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#5f8b9c'
    },

    loginContainer: {
        width: 180,
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#5f8b9c',
        borderWidth: 1.5,
        backgroundColor: '#5f8b9c',
    },

    login: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffffff',
        
    },

    swiperContainer: {
    width: '100%',
    height: '100%',
    },
   

});

export default OnboardingScreen;