import React, {useState, useEffect} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { StyleSheet,Button, Text,textAlign, View } from 'react-native';
/*import FontAwesome from '@react-native-vector-icons/FontAwesome';*/
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignUp from '../screens/signUp';
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
//import BottomTabScreens from '../screens/BottomTabScreens';





const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
    AsyncStorage.setItem('alreadyLaunched', 'true');
    setIsFirstLaunch(true);
  } else {
    setIsFirstLaunch(false);
  }
});



  },


    []);

    if( isFirstLaunch == null ) {
      return null;
    } else if ( isFirstLaunch == true){
        routeName = 'Onboarding';
    } else {
     /*   routeName ='Login'; */
    }


return (
    <Stack.Navigator initialRouteName={routeName} screenOptions={{headerStyle: { backgroundColor: '#ffffff'},}}>
      <Stack.Screen name= "Splash" component ={StartScreen} options={{header: () => null}}/>
      <Stack.Screen name= "Onboarding" component ={OnboardingScreen} options={{header: () => null}}/>
      <Stack.Screen name= "Home" component ={HomeScreen} options={{header: () => null}} />
      <Stack.Screen name= "Login" component ={LoginScreen} options={{header: () => null}} />
      <Stack.Screen name= "signUp" component ={SignUp} options={({ title: true, headerBackTitleVisible:true, headerBackTitle: "Sign Up",headerBackTitleStyle:{fontSize:18},headerTitleAlign:'left', headerTitleStyle:{fontSize:17,marginLeft:75},headerTintColor: "#2e8bc0", headerStyle: { backgroundColor: '#ffffff', }, headerRight: () => (
            <View style={{right: 15}}>
            <Text style={{fontSize:18,color:"#2e8bc0"}}
              onPress={() => alert('This is a button!')}
             
            >Continue</Text></View>
          ),})} 
    />
     <Stack.Screen name= "Signup" component ={SignupScreen} options={({ title: 'Sign up', headerBackTitleVisible:true, headerBackTitle: "Back", headerTitleStyle:{fontSize:17},headerTitleAlign:'center', headerStyle: { backgroundColor: '#ffffff',
     
     
      },
   /*   
      headerLeft: () =>(
        <View style={{marginLeft: 10}}>
         <FontAwesome.Button
         name="long-arrow-left"
         size={25}
         backgroundColor="#f9fafd"
         color="#333"
         onPress={() => navigation.navigate('Login')}
         />  
        </View>  
      ) */
      })} 
    />
    </Stack.Navigator>
   
      );


      
    };
const style= StyleSheet.create({

})

    export default AuthStack;