import React from 'react';
import { View, Text,TouchableOpacity, Button, StyleSheet} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
    return(
       <TouchableOpacity style={styles.buttonContainer} { ...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
       </TouchableOpacity>

    );

};

const styles = StyleSheet.create({  
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight /13,
        backgroundColor: '#5286AB',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        bottom: 40
    },

    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'SF-Pro-Text-Regular.otf',
    },


});

export default FormButton;