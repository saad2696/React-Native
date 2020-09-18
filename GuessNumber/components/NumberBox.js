import React from 'react';
import  { View, Text , StyleSheet} from 'react-native';
import Colors from '../constants/Colors'
const NumberBox = props =>{
return(
<View style={styles.containerStyle}>
    <Text style = {styles.number}>
        {props.children}
    </Text>
</View>
);
}
const styles = StyleSheet.create({
    containerStyle : {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius:10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: 'center' 
    },
    number:{
        color : Colors.secondary,
        fontSize: 22
    }
})

export default NumberBox;