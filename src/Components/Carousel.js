import React, { useState,Component } from "react";
import { View, Text, Image, StatusBar, StyleSheet, Dimensions,textAlign, Alert,TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from '../constants/theme';
import { Navigation } from "@react-navigation/native";



const { width, height} = Dimensions.get('window')


const  Carousel  = ({navigation}) => { 
   
        return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper autoplay={true} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        bounces={false}
        dot={<View style={{backgroundColor:'#e6eaf4', width: 10, height: 10,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,  bottom: 550}} /> }
        activeDot={<View style={{backgroundColor: '#5f8b9c', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, bottom: 550}} />} >

            <View style={styles.slide}>           
                <Image source={require('../assets/images/Transfer.png')} style={styles.image} />
            </View> 

            <View style={styles.slide}>
                <Image source={require('../assets/images/payment.png')} style={styles.image} />
            </View>
                
         </Swiper>

      

        </View> 
    
    );
 }


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: 'black'
    },

    slide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       borderRadius:20,
       borderWidth: 1,
       width: width - 50,
        height: height / 3.5, 
    },
   
    image: {
        width: width - 50,
        height: height / 3.5,
        resizeMode:'cover',
        bottom: 300,
        borderRadius:10,
       borderWidth: 2,
    },

    swiperContainer: {
    width: '60%',
    height: '40%',
    
    },
   

});

export default Carousel;