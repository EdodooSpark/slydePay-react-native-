import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth} from '../utils/Dimensions';


const FormInput = ({labelValue, placeholderText, iconType,iconType1, ...rest}) => {
    return(
       <View style={styles.inputContainer} { ...rest}>
       <View style={styles.iconStyle}>
       <AntDesign name={iconType} size={25} color="#666" />
       </View>
       <View style={styles.iconEye}>
       <AntDesign name={iconType1} size={25} color="#666" />
       </View>
        <TextInput values={labelValue}
        style={styles.input} 
        placeholder={placeholderText} 
        numberOfLines={1} 
        placeholderTextColor='#666' 
        {...rest} />
        
       </View>

    );

};


const styles = StyleSheet.create({
    inputContainer: {
        marginTop:5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight /15,
        borderColor: '#666',
        borderRadius: 7,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        top: 5
    },

    iconStyle:{
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        borderRightColor: '#ccc',
        alignItems: 'center',
        borderRightWidth: 1,
        width: 70,

    },

    iconEye:{
        left: 230,
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        borderRightColor: '#ccc',
        alignItems: 'center',
        width: 70,
    },

    input:{
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'SF-Pro-Text-Regular.otf',
        color: '#333',
        justifyContent: 'center',
        alignItems:'center',
      
    },
    
    inputField: {
        padding: 10,
        marginTop: 5,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    }
});

export default FormInput;