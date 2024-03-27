import React,{ useState } from 'react';
import { View,StatusBar, Text,TouchableOpacity,TouchableHighlight,
    Platform,Image,SafeAreaView, Button,Dimensions,ScrollView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import { SIZES } from '../constants';
//material icons
import {SimpleLineIcons} from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import CarousalLandscape from '../Components/CarousalLandscape';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import  LinearGradient  from 'react-native-linear-gradient';
import { COLORS } from '../constants/theme';


/*import { ScrollView } from 'react-native-gesture-handler'; */

const { width, height} = Dimensions.get('window')

export default function HomeScreen  ({navigation}) {
    const data = [
        {
          image: require('../assets/images/cCard2.png'),
        },
        {
          image: require('../assets/images/cCard2.png'),
        },
        
      ];

    return (
        <SafeAreaView contentContainerStyle={styles.container} style={{backgroundColor: '#2b6ad0',}}>
    <ScrollView >
   <View
        //style for Top half background----
          style={{
            width: '100%',
            height: 20,
            padding: 10,
        //    backgroundColor: COLORS.background + '20',
            position: 'relative',
          }}></View>   
        <View style={styles.header}>
       <SimpleLineIcons name='bell' size={26} color="#ffffff" />
        <Image source={require('../assets/logo/topIcon.png')} style={[styles.topIcon, {width:70,
        height: 70, marginLeft:310,
        bottom: 55}]} />
        </View>
        <View style={styles.footer}>
        
                <View style={styles.profileInfo} row aCenter>
                <View style={styles.image}>
                <Image
            alt=""
             source={require('../assets/images/profileImg.jpg')} style={styles.profileImg}></Image> 
                </View>
                <View style={styles.nameSection}>
                <Text username style={[styles.profileName, { fontWeight: '400',fontSize: 19}]}>Emmanuel Dodoo</Text>
                <Text body style={[styles.profileName, {color: '#5286AB'}]}>Manage Account</Text>
                </View>
                
                </View>
              
         
        <Text style={[styles.textWallet, {fontWeight: '500',fontSize: 16}]}>Wallet</Text>   
       
  <View style={styles.carouselContainer}>
      
        <CarousalLandscape
          data={data}
          autoPlay={false}
          pagination={true}
        />
      </View>
       
         <View style={styles.rapper}>
         <Text style={[styles.textQAction, {fontWeight: '500',fontSize: 16,marginBottom: 30,}]}>Quick Actions</Text>
    
         <View style={styles.roundshape}>
         <View style={styles.icon}>
         <Icon.Button style={styles.item} name="phone" size={29} color="#2e8bc0" borderRadius= {50}  backgroundColor="#b1d4e0" onPress={() => alert('Terms Clicked!')}/>
         <Text style={[styles.Action, {fontWeight: '400',fontSize: 16,top:20,width:55,height:55,textAlign:'center'}]}>Buy Airtime</Text>
         </View>
         
         <View style={styles.icon}>
         <Icon.Button style={[styles.item,{alignSelf:"center",justifyContent:"center"}]} name="money" size={29} color="#116530" borderRadius= {50}  backgroundColor="#94c973" onPress={() => alert('Terms Clicked!')}/>
         <Text style={[styles.Action, {fontWeight: '350',fontSize: 15,top:20,width:55,height:55,textAlign:'center'}]}>Send Money</Text>
         </View>
         
         <View style={styles.icon}>
         <Icon.Button style={styles.item} name="wifi" size={29} color="#d43790" borderRadius= {50}  backgroundColor="#f2c5e0" onPress={() => alert('Terms Clicked!')}/>
         <Text style={[styles.Action, {fontWeight: '350',fontSize: 15,top:20,width:55,height:55,textAlign:'center'}]}>Buy Data</Text>
         </View>
         
         <View style={styles.icon}>
         <Icon.Button style={styles.item} name="list-alt" size={29} color="#970c10" borderRadius= {50}  backgroundColor="#f7bec0" onPress={() => alert('Terms Clicked!')}/>
         <Text style={[styles.Action, {fontWeight: '350',fontSize: 15,top:20,width:55,height:55,textAlign:'center'}]}>Pay Bills</Text>
         </View>
         
          </View>
          
         <Text style={[styles.textRT, {fontWeight: '500',fontSize: 16,marginBottom: 50,marginTop: 30,top:70}]}>Recent Transactions</Text>
         
          </View>
         </View>
        </ScrollView>
        </SafeAreaView>
        
    

    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      //  backgroundColor: 'white',
    },
//start carousel
/*    text: {
        textAlign: 'center', 
        color: 'black',
        marginBottom: 10
      },
*/
    carouselContainer: {
      marginBottom: 20,
      marginTop: 20,
     
    },
//end of Carousel

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        top:40
    },


    footer: {
        flex: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 25,
       
    },
    profileInfo:{
        marginTop: 3,
        paddingHorizontal: 29,
        
    },

    image:{
        width:70,
        height: 70,
        borderRadius:60,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#dcdcdc',
        position: 'absolute',

    },
    profileImg:{
        width:70,
        height: 70,
        borderRadius:60,
    },

    nameSection:{
        marginLeft: 50,
        marginTop: 10,
    },

    textWallet:{
        marginTop: 40,
        left:15
    },

    
    
 /*   slide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 20,
        height: height / 3, 
        
    },
   
    image1: {
        width: width + 80,
        height: height / 2,
        resizeMode:'stretch',
        bottom: 300,
        borderRadius:10,
       borderWidth: 2,

    },

    swiperContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    bottom: 5,
    },
*/
//for icons beneath quick actions

    item: {
       alignSelf: 'center' ,
       height: 55, //any of height
       width: 55, //any of width
       justifyContent:"center",
         // it will be height/2
       paddingRight:0,
       margin:0
      },
  

      rapper:{    
       
       margin:15,
       justifyContent:"center",
       
      },

      roundshape:  {
       justifyContent: 'space-between',
        width: '100%', //any of width
        height:60,  // it will be height/2
        flexDirection:'row',
       alignItem:'center',
      
      }
   

});
   
 